import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { groups, categoriesByGroup } from "@/data/categories";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "All Groups — QuizMaster" },
      { name: "description", content: "Browse MCQ practice groups. Pick a group to see its categories." },
      { property: "og:title", content: "All Groups — QuizMaster" },
      { property: "og:description", content: "Browse MCQ practice groups on QuizMaster." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <PageShell>
      <h1 className="text-2xl font-bold mb-6">All Groups</h1>
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
    </PageShell>
  );
}