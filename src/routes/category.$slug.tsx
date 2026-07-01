import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { z } from "zod";
import { PageShell } from "@/components/PageShell";
import { getCategory, categories } from "@/data/categories";
import { useEffect, useMemo, useState } from "react";
import { questionsByCategory, type Question,} from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, ChevronLeft, ChevronRight, Timer } from "lucide-react";

const searchSchema = z.object({ start: z.string().optional() });

export const Route = createFileRoute("/category/$slug")({
  validateSearch: searchSchema,
  head: ({ params }) => {
    const cat = getCategory(params.slug);
    const title = cat ? `${cat.name} MCQs — QuizMaster` : "Category — QuizMaster";
    const desc = cat ? `Practice ${cat.name} MCQs with detailed explanations.` : "Practice MCQs on QuizMaster.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) throw notFound();
    return { category: cat };
  },
  notFoundComponent: () => (
    <PageShell>
      <h1 className="text-2xl font-bold">Category not found</h1>
      <Link to="/" className="text-primary hover:underline">Back to home</Link>
    </PageShell>
  ),
  errorComponent: ({ reset }) => (
    <PageShell>
      <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
      <Button onClick={reset}>Try again</Button>
    </PageShell>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const { start } = Route.useSearch();
  // const questions = useMemo(() => questionsByCategory(category.slug), [category.slug]);
  const [dynamicQuestions, setDynamicQuestions] = useState<Question[]>([]);

useEffect(() => {
  if (
    category.slug !== "networking" &&
    category.slug !== "windows-server"
  ) {
    return;
  }

  fetch("/questions.json")
    .then((res) => res.json())
    .then((data) => {
      const filtered = data.filter(
        (q: any) =>
          q.category?.toLowerCase().replace(/\s+/g, "-") ===
          category.slug
      );

      const formatted: Question[] = filtered.map((q: any, index: number) => ({
        id: `${category.slug}-${index}`,
        category: category.slug,
        question: q.question,
        options: q.options,
        correctIndex: q.options.indexOf(q.answer) as 0 | 1 | 2 | 3,
        explanation: q.explanation || `Correct answer: ${q.answer}`,
      }));

      setDynamicQuestions(formatted);
    })
    .catch(console.error);
}, [category.slug]);

const questions = useMemo(() => {
  if (
    category.slug === "networking" ||
    category.slug === "windows-server"
  ) {
    return dynamicQuestions;
  }

  return questionsByCategory(category.slug);
}, [category.slug, dynamicQuestions]);  
  const startIndex = useMemo(() => {
    if (!start) return 0;
    const i = questions.findIndex((q) => q.id === start);
    return i >= 0 ? i : 0;
  }, [start, questions]);

  const [index, setIndex] = useState(startIndex);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const q = questions[index];

  if (!q) {
    return (
      <PageShell>
        <h1 className="text-2xl font-bold">No questions yet</h1>
        <p className="text-muted-foreground mt-2">Questions for {category.name} are coming soon.</p>
      </PageShell>
    );
  }

  const go = (next: number) => {
    setIndex(next);
    setSelected(null);
    setSubmitted(false);
  };

  return (
    <PageShell>
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide">{category.icon} {category.name}</div>
          <h1 className="text-2xl font-bold">{category.name} Practice</h1>
        </div>
        <Link
          to="/quiz/$slug"
          params={{ slug: category.slug }}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Timer className="h-4 w-4" /> Start Timed Quiz
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="text-xs font-medium text-muted-foreground">
            Question {index + 1} of {questions.length}
          </div>
          <CardTitle className="text-lg mt-1">{q.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              const isCorrect = i === q.correctIndex;
              const isPicked = i === selected;
              const showState = submitted && (isPicked || isCorrect);
              return (
                <button
                  key={i}
                  disabled={submitted}
                  onClick={() => setSelected(i)}
                  className={
                    "w-full text-left rounded-md border px-4 py-3 text-sm transition flex items-start gap-3 " +
                    (showState
                      ? isCorrect
                        ? "border-success bg-success/10"
                        : "border-destructive bg-destructive/10"
                      : isPicked
                      ? "border-primary bg-primary/5"
                      : "border-border hover:bg-accent/40")
                  }
                >
                  <span className="font-mono font-semibold text-muted-foreground">{String.fromCharCode(65 + i)}.</span>
                  <span className="flex-1">{opt}</span>
                  {showState && isCorrect && <CheckCircle2 className="h-4 w-4 text-success" />}
                  {showState && !isCorrect && isPicked && <XCircle className="h-4 w-4 text-destructive" />}
                </button>
              );
            })}
          </div>

          {!submitted ? (
            <Button
              className="mt-4"
              disabled={selected === null}
              onClick={() => setSubmitted(true)}
            >
              Submit Answer
            </Button>
          ) : (
            <div className="mt-4 rounded-md border bg-muted/40 p-4">
              <div className="font-semibold mb-1">
                {selected === q.correctIndex ? (
                  <span className="text-success">Correct!</span>
                ) : (
                  <span className="text-destructive">Incorrect.</span>
                )}{" "}
                <span className="text-foreground font-normal">
                  Answer: <strong>{String.fromCharCode(65 + q.correctIndex)}</strong>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{q.explanation}</p>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            <Button variant="outline" disabled={index === 0} onClick={() => go(index - 1)}>
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
            <Button disabled={index === questions.length - 1} onClick={() => go(index + 1)}>
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <section className="mt-8">
        <h2 className="text-sm font-semibold text-muted-foreground mb-3">More categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.filter((c) => c.slug !== category.slug).map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="rounded-full border px-3 py-1 text-xs hover:border-primary hover:text-primary"
            >
              {c.icon} {c.name}
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}