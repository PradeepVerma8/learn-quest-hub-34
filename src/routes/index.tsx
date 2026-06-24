import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { groups, categoriesByGroup } from "@/data/categories";
import { allQuestions } from "@/data/questions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QuizMaster — Practice MCQs for Linux, AWS, DevOps & more" },
      { name: "description", content: "Free online MCQ practice tests for Linux, AWS, Networking, Docker, Kubernetes and IT interview preparation." },
      { property: "og:title", content: "QuizMaster — Practice MCQs for IT" },
      { property: "og:description", content: "Free online MCQ practice tests for Linux, AWS, DevOps and more." },
    ],
  }),
  component: Index,
});

function Index() {
  const latest = [...allQuestions].slice(-8).reverse();
  return (
    <PageShell>
      <section className="rounded-xl border bg-gradient-to-br from-primary/10 via-card to-card p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Practice MCQs. Master IT skills.
        </h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Free practice tests across Linux, AWS, Networking, DevOps, Docker, Kubernetes and more.
          Track answers, read explanations, and prepare for interviews.
        </p>
        <div className="mt-5 flex gap-3">
          <Button asChild size="lg">
            <Link to="/group/$slug" params={{ slug: "it" }}>Explore IT</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/categories">Browse all groups</Link>
          </Button>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-xl font-semibold">Browse by Group</h2>
          <Link to="/categories" className="text-sm text-primary hover:underline">View all</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => {
            const count = categoriesByGroup(g.slug).length;
            return (
              <Link key={g.slug} to="/group/$slug" params={{ slug: g.slug }}>
                <Card className="h-full transition hover:border-primary hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <span className="text-2xl" aria-hidden>{g.icon}</span>
                      {g.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>{g.description}</p>
                    <p className="mt-2 text-xs font-medium text-primary">
                      {count} categor{count === 1 ? "y" : "ies"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Latest Questions</h2>
        <div className="rounded-lg border bg-card divide-y">
          {latest.map((q, i) => (
            <Link
              key={q.id}
              to="/category/$slug"
              params={{ slug: q.category }}
              search={{ start: q.id }}
              className="flex items-start gap-3 p-4 hover:bg-accent/40"
            >
              <span className="text-xs font-mono text-muted-foreground mt-0.5">Q{i + 1}.</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground line-clamp-2">{q.question}</div>
                <div className="text-xs text-muted-foreground mt-1 capitalize">{q.category}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
