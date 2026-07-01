import type { BlogBlock } from "@/data/blog";
import { slugifyHeading } from "@/data/blog";

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-blog space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugifyHeading(b.text)}
                className="scroll-mt-24 text-2xl md:text-3xl font-bold tracking-tight text-foreground mt-10 mb-2"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={slugifyHeading(b.text)}
                className="scroll-mt-24 text-xl md:text-2xl font-semibold text-foreground mt-6 mb-1"
              >
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[17px] leading-8 text-foreground/90">
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc pl-6 space-y-2 text-[17px] leading-8 text-foreground/90 marker:text-primary">
                {b.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal pl-6 space-y-2 text-[17px] leading-8 text-foreground/90 marker:text-primary marker:font-semibold">
                {b.items.map((it, j) => <li key={j}>{it}</li>)}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-primary bg-primary/5 rounded-r-md px-5 py-4 italic text-foreground/90"
              >
                <p className="text-lg">“{b.text}”</p>
                {b.cite && (
                  <footer className="mt-2 text-sm not-italic text-muted-foreground">— {b.cite}</footer>
                )}
              </blockquote>
            );
          case "code":
            return (
              <pre
                key={i}
                className="rounded-lg border bg-muted/60 p-4 overflow-x-auto text-sm font-mono leading-6"
              >
                <code>{b.code}</code>
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}