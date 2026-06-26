import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { getGroup, categoriesByGroup } from "@/data/categories";
import { questionsByCategory } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/group/$slug")({
  head: ({ params }) => {
    const g = getGroup(params.slug);
    const title = g ? `${g.name} MCQs — QuizMaster` : "Group — QuizMaster";
    const desc = g
      ? `Browse ${g.name} categories and start practicing MCQs.`
      : "Browse MCQ categories.";

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
    const g = getGroup(params.slug);
    if (!g) throw notFound();
    return { group: g };
  },

  notFoundComponent: () => (
    <PageShell>
      <h1 className="text-2xl font-bold">Group not found</h1>
      <Link to="/" className="text-primary hover:underline">
        Back to home
      </Link>
    </PageShell>
  ),

  errorComponent: ({ reset }) => (
    <PageShell>
      <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
      <Button onClick={reset}>Try again</Button>
    </PageShell>
  ),

  component: GroupPage,
});

function GroupPage() {
  const { group } = Route.useLoaderData();
  const cats = categoriesByGroup(group.slug);

  const [networkingCount, setNetworkingCount] = useState(0);

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => {
        setNetworkingCount(data.length);
      })
      .catch(() => setNetworkingCount(0));
  }, []);

  return (
    <PageShell>
      <div className="mb-6">
        <div className="text-xs text-muted-foreground uppercase tracking-wide">
          Group
        </div>

        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span aria-hidden>{group.icon}</span> {group.name}
        </h1>

        <p className="text-muted-foreground mt-1">
          {group.description}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cats.map((c) => {
          const count =
            c.slug === "networking"
              ? networkingCount
              : questionsByCategory(c.slug).length;

          return (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
            >
              <Card className="h-full transition hover:border-primary hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl" aria-hidden>
                      {c.icon}
                    </span>
                    {c.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-sm text-muted-foreground">
                  <p>{c.description}</p>

                  <p className="mt-2 text-xs font-medium text-primary">
                    {count} question{count === 1 ? "" : "s"} available
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </PageShell>
  );
}