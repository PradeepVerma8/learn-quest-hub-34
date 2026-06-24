import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { PageShell } from "@/components/PageShell";
import { allQuestions } from "@/data/questions";
import { getCategory } from "@/data/categories";

export const Route = createFileRoute("/search")({
  validateSearch: z.object({ q: z.string().optional() }),
  head: ({ search }) => ({
    meta: [
      { title: search.q ? `Search: ${search.q} — QuizMaster` : "Search — QuizMaster" },
      { name: "description", content: "Search MCQ questions across all categories." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const query = (q ?? "").toLowerCase().trim();
  const results = query
    ? allQuestions.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.options.some((o) => o.toLowerCase().includes(query)),
      )
    : [];

  return (
    <PageShell>
      <h1 className="text-2xl font-bold mb-2">Search</h1>
      <p className="text-sm text-muted-foreground mb-6">
        {query ? <>Showing results for <strong className="text-foreground">"{q}"</strong> — {results.length} found</> : "Type a query in the search bar above."}
      </p>
      <div className="space-y-2">
        {results.map((r) => {
          const cat = getCategory(r.category);
          return (
            <Link
              key={r.id}
              to="/category/$slug"
              params={{ slug: r.category }}
              search={{ start: r.id }}
              className="block rounded-md border bg-card p-4 hover:border-primary"
            >
              <div className="text-xs text-muted-foreground mb-1">{cat?.icon} {cat?.name}</div>
              <div className="text-sm font-medium">{r.question}</div>
            </Link>
          );
        })}
      </div>
    </PageShell>
  );
}