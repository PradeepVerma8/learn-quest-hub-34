import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { categories } from "@/data/categories";
import { questionsByCategory } from "@/data/questions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "All Categories — QuizMaster" },
      { name: "description", content: "Browse all MCQ practice categories: Linux, AWS, Networking, DevOps, Docker, Kubernetes and more." },
      { property: "og:title", content: "All Categories — QuizMaster" },
      { property: "og:description", content: "Browse all MCQ practice categories on QuizMaster." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <PageShell>
      <h1 className="text-2xl font-bold mb-6">All Categories</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => {
          const count = questionsByCategory(c.slug).length;
          return (
            <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }}>
              <Card className="h-full transition hover:border-primary hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl" aria-hidden>{c.icon}</span>
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