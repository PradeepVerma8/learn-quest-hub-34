import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts, BLOG_CATEGORIES } from "@/data/blog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — AI, Cloud & IT Careers | QuizMaster" },
      { name: "description", content: "Read the latest articles on Artificial Intelligence, AI tools, cloud computing, machine learning and IT careers. Updated regularly." },
      { property: "og:title", content: "QuizMaster Blog — AI & IT Articles" },
      { property: "og:description", content: "Long-form articles on AI, cloud, and IT careers, updated regularly." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts
      .filter((p) => category === "All" || p.category === category)
      .filter((p) =>
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
      )
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [query, category]);

  return (
    <PageShell>
      <section className="rounded-xl border bg-gradient-to-br from-primary/10 via-card to-card p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">The QuizMaster Blog</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          In-depth articles on Artificial Intelligence, cloud, and IT careers. New posts added regularly.
        </p>
      </section>

      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles by title, tag or keyword…"
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", ...BLOG_CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={
                "rounded-full border px-3 py-1.5 text-xs font-medium transition " +
                (category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary")
              }
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border bg-card p-10 text-center text-muted-foreground">
          No articles match your search. Try a different keyword or category.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </PageShell>
  );
}