import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/data/blog";
import { Clock } from "lucide-react";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col rounded-xl border bg-card overflow-hidden transition hover:border-primary hover:shadow-md"
    >
      <div
        className="relative h-44 flex items-center justify-center text-5xl"
        style={{ background: post.cover.gradient }}
      >
        <span aria-hidden>{post.cover.emoji}</span>
        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground">
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-semibold leading-snug text-foreground group-hover:text-primary line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{post.description}</p>
        <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground pt-2">
          <span>{new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readingMinutes} min read</span>
        </div>
      </div>
    </Link>
  );
}