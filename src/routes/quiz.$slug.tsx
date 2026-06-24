import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { getCategory } from "@/data/categories";
import { questionsByCategory, shuffle, type Question } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Timer } from "lucide-react";

export const Route = createFileRoute("/quiz/$slug")({
  head: ({ params }) => {
    const cat = getCategory(params.slug);
    const title = cat ? `${cat.name} Timed Quiz — QuizMaster` : "Quiz — QuizMaster";
    return {
      meta: [
        { title },
        { name: "description", content: cat ? `Take a timed ${cat.name} MCQ quiz.` : "Take a timed quiz." },
        { property: "og:title", content: title },
      ],
    };
  },
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) throw notFound();
    return { category: cat };
  },
  notFoundComponent: () => (
    <PageShell><h1 className="text-2xl font-bold">Category not found</h1></PageShell>
  ),
  errorComponent: ({ reset }) => (
    <PageShell>
      <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
      <Button onClick={reset}>Try again</Button>
    </PageShell>
  ),
  component: QuizPage,
});

type Phase = "config" | "running" | "done";

function QuizPage() {
  const { category } = Route.useLoaderData();
  const pool = useMemo(() => questionsByCategory(category.slug), [category.slug]);

  const [phase, setPhase] = useState<Phase>("config");
  const [count, setCount] = useState(10);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Array<number | null>>([]);
  const [current, setCurrent] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timerRef = useRef<number | null>(null);

  const start = (n: number) => {
    const picked = shuffle(pool).slice(0, Math.min(n, pool.length));
    setQuestions(picked);
    setAnswers(new Array(picked.length).fill(null));
    setCurrent(0);
    setSecondsLeft(picked.length * 60);
    setPhase("running");
  };

  useEffect(() => {
    if (phase !== "running") return;
    timerRef.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          window.clearInterval(timerRef.current!);
          setPhase("done");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [phase]);

  if (phase === "config") {
    const max = pool.length;
    return (
      <PageShell>
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-primary" /> {category.name} — Timed Quiz
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Choose how many questions you want. You'll get 1 minute per question.
              Available: {max}.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[10, 25, 50].map((n) => (
                <button
                  key={n}
                  onClick={() => setCount(n)}
                  className={
                    "rounded-md border px-4 py-2 text-sm transition " +
                    (count === n ? "border-primary bg-primary/10 text-primary font-medium" : "hover:border-primary")
                  }
                >
                  {Math.min(n, max)} questions
                </button>
              ))}
            </div>
            <Button size="lg" onClick={() => start(count)} disabled={max === 0}>
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      </PageShell>
    );
  }

  if (phase === "running") {
    const q = questions[current];
    const picked = answers[current];
    const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const ss = String(secondsLeft % 60).padStart(2, "0");
    const setAnswer = (i: number) => {
      const next = [...answers];
      next[current] = i;
      setAnswers(next);
    };
    return (
      <PageShell>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="text-sm text-muted-foreground">
            Question <strong className="text-foreground">{current + 1}</strong> of {questions.length}
          </div>
          <div className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1.5 font-mono text-sm font-semibold text-primary">
            <Timer className="h-4 w-4" /> {mm}:{ss}
          </div>
        </div>
        <Card>
          <CardHeader><CardTitle className="text-lg">{q.question}</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-2">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setAnswer(i)}
                  className={
                    "w-full text-left rounded-md border px-4 py-3 text-sm transition flex items-start gap-3 " +
                    (picked === i ? "border-primary bg-primary/5" : "border-border hover:bg-accent/40")
                  }
                >
                  <span className="font-mono font-semibold text-muted-foreground">{String.fromCharCode(65 + i)}.</span>
                  <span>{opt}</span>
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-between gap-2">
              <Button variant="outline" disabled={current === 0} onClick={() => setCurrent(current - 1)}>Previous</Button>
              {current < questions.length - 1 ? (
                <Button onClick={() => setCurrent(current + 1)}>Next</Button>
              ) : (
                <Button onClick={() => setPhase("done")}>Finish Quiz</Button>
              )}
            </div>
          </CardContent>
        </Card>
        <div className="mt-4 flex flex-wrap gap-1">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={
                "h-8 w-8 rounded text-xs font-medium border " +
                (i === current
                  ? "border-primary bg-primary text-primary-foreground"
                  : answers[i] != null
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground")
              }
            >
              {i + 1}
            </button>
          ))}
        </div>
      </PageShell>
    );
  }

  // done
  const correct = questions.reduce((acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0), 0);
  const wrong = questions.length - correct;
  const pct = Math.round((correct / questions.length) * 100);

  return (
    <PageShell>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Quiz Complete — {category.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="Score" value={`${correct}/${questions.length}`} />
            <Stat label="Percentage" value={`${pct}%`} highlight />
            <Stat label="Correct" value={String(correct)} tone="success" />
            <Stat label="Wrong" value={String(wrong)} tone="destructive" />
          </div>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Button onClick={() => setPhase("config")}>Try again</Button>
            <Button variant="outline" asChild>
              <Link to="/category/$slug" params={{ slug: category.slug }}>Back to practice</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-lg font-semibold mb-3">Review Answers</h2>
      <div className="space-y-3">
        {questions.map((q, i) => {
          const picked = answers[i];
          const isCorrect = picked === q.correctIndex;
          return (
            <Card key={q.id}>
              <CardContent className="pt-5">
                <div className="flex items-start gap-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                  )}
                  <div className="font-medium">{i + 1}. {q.question}</div>
                </div>
                <div className="text-sm text-muted-foreground ml-7">
                  Your answer:{" "}
                  <strong className={isCorrect ? "text-success" : "text-destructive"}>
                    {picked != null ? `${String.fromCharCode(65 + picked)}. ${q.options[picked]}` : "Not answered"}
                  </strong>
                </div>
                {!isCorrect && (
                  <div className="text-sm text-muted-foreground ml-7">
                    Correct: <strong className="text-success">{String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}</strong>
                  </div>
                )}
                <p className="text-sm text-muted-foreground ml-7 mt-2">{q.explanation}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </PageShell>
  );
}

function Stat({ label, value, tone, highlight }: { label: string; value: string; tone?: "success" | "destructive"; highlight?: boolean }) {
  const color =
    tone === "success" ? "text-success" : tone === "destructive" ? "text-destructive" : highlight ? "text-primary" : "text-foreground";
  return (
    <div className="rounded-md border bg-card p-4 text-center">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className={`text-2xl font-bold mt-1 ${color}`}>{value}</div>
    </div>
  );
}