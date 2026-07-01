import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { BlogContent } from "@/components/BlogContent";
import { BlogCard } from "@/components/BlogCard";
import { getBlogPost, getRelatedPosts, slugifyHeading, blogPosts, type BlogPost } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Calendar, Tag, Share2 } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) {
      return { meta: [{ title: "Article not found — QuizMaster Blog" }] };
    }
    return {
      meta: [
        { title: `${post.title} — QuizMaster Blog` },
        { name: "description", content: post.description },
        { name: "author", content: post.author },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
        { property: "article:author", content: post.author },
        { property: "article:section", content: post.category },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Person", name: post.author },
            articleSection: post.category,
            keywords: post.tags.join(", "),
          }),
        },
      ],
    };
  },
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  notFoundComponent: () => (
    <PageShell>
      <h1 className="text-2xl font-bold mb-3">Article not found</h1>
      <Button asChild variant="outline">
        <Link to="/blog">Back to Blog</Link>
      </Button>
    </PageShell>
  ),
  errorComponent: ({ reset }) => (
    <PageShell>
      <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
      <Button onClick={reset}>Try again</Button>
    </PageShell>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const related = getRelatedPosts(post, 3);
  const headings = post.content.filter((b): b is { type: "h2"; text: string } => b.type === "h2");
  const url = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = [
    { name: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(post.title + " " + url)}` },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { name: "X / Twitter", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}` },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/blog"><ArrowLeft className="h-4 w-4 mr-1" /> All articles</Link>
        </Button>
      </div>

      <article className="max-w-3xl mx-auto">
        <div
          className="relative h-56 sm:h-72 rounded-2xl overflow-hidden flex items-center justify-center text-7xl mb-8"
          style={{ background: post.cover.gradient }}
        >
          <span aria-hidden>{post.cover.emoji}</span>
          <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-6">{post.description}</p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground border-y py-4 mb-8">
          <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readingMinutes} min read</span>
        </div>

        {post.toc && headings.length > 1 && (
          <nav aria-label="Table of contents" className="rounded-lg border bg-muted/40 p-5 mb-10">
            <div className="text-xs font-semibold uppercase text-muted-foreground mb-2">Table of contents</div>
            <ol className="list-decimal pl-5 space-y-1 text-sm marker:text-primary">
              {headings.map((h, i) => (
                <li key={i}>
                  <a className="hover:text-primary hover:underline" href={`#${slugifyHeading(h.text)}`}>{h.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <BlogContent blocks={post.content} />

        {post.conclusion && (
          <div className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Conclusion</h2>
            <p className="text-[17px] leading-8 text-foreground/90">{post.conclusion}</p>
          </div>
        )}

        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faqs.map((f, i) => (
                <details key={i} className="group rounded-lg border bg-card p-5 open:shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground list-none flex items-start justify-between gap-3">
                    <span>{f.q}</span>
                    <span className="text-primary transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-foreground/85 leading-7">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 flex flex-wrap items-center gap-2">
          <Tag className="h-4 w-4 text-muted-foreground" />
          {post.tags.map((t) => (
            <span key={t} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
              #{t}
            </span>
          ))}
        </div>

        <div className="mt-8 rounded-xl border bg-muted/40 p-5">
          <div className="flex items-center gap-2 text-sm font-semibold mb-3">
            <Share2 className="h-4 w-4 text-primary" /> Share this article
          </div>
          <div className="flex flex-wrap gap-2">
            {shareLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border px-3 py-1.5 text-sm hover:border-primary hover:text-primary transition"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-5">Related articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}

      {/* Keep a hidden hint so tree-shaking retains blogPosts import for potential prev/next expansion */}
      <span className="sr-only">{blogPosts.length} total articles</span>
    </PageShell>
  );
}