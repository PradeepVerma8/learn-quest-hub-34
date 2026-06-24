import { Link } from "@tanstack/react-router";
import { groups, categoriesByGroup } from "@/data/categories";

export function CategorySidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 rounded-lg border bg-card">
        <div className="border-b px-4 py-3 font-semibold text-sm text-foreground">
          Groups
        </div>
        <nav className="flex flex-col p-2">
          {groups.map((g) => {
            const cats = categoriesByGroup(g.slug);
            return (
              <div key={g.slug} className="mb-2">
                <Link
                  to="/group/$slug"
                  params={{ slug: g.slug }}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground"
                  activeProps={{ className: "bg-accent text-accent-foreground" }}
                >
                  <span aria-hidden>{g.icon}</span>
                  <span>{g.name}</span>
                </Link>
                <div className="ml-3 mt-1 border-l pl-2 flex flex-col">
                  {cats.map((c) => (
                    <Link
                      key={c.slug}
                      to="/category/$slug"
                      params={{ slug: c.slug }}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      activeProps={{ className: "bg-accent text-accent-foreground font-medium" }}
                    >
                      <span aria-hidden>{c.icon}</span>
                      <span>{c.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}