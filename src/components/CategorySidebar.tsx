import { Link } from "@tanstack/react-router";
import { categories } from "@/data/categories";

export function CategorySidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 rounded-lg border bg-card">
        <div className="border-b px-4 py-3 font-semibold text-sm text-foreground">
          All Categories
        </div>
        <nav className="flex flex-col p-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground font-medium" }}
            >
              <span aria-hidden>{c.icon}</span>
              <span>{c.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}