import { Link } from "@tanstack/react-router";
import { groups, categoriesByGroup } from "@/data/categories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CategorySidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 rounded-lg border bg-card">
        <div className="border-b px-4 py-3 font-semibold text-sm text-foreground">
          Groups
        </div>
        <nav className="p-2">
          <Accordion type="multiple" className="w-full">
            {groups.map((g) => {
              const cats = categoriesByGroup(g.slug);
              return (
                <AccordionItem key={g.slug} value={g.slug} className="border-b-0">
                  <AccordionTrigger className="px-3 py-2 rounded-md text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground hover:no-underline">
                    <span className="flex items-center gap-2">
                      <span aria-hidden>{g.icon}</span>
                      <span>{g.name}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-1">
                    <div className="ml-3 mt-1 border-l pl-2 flex flex-col">
                      <Link
                        to="/group/$slug"
                        params={{ slug: g.slug }}
                        className="rounded-md px-2 py-1.5 text-xs font-medium text-primary hover:bg-accent"
                        activeProps={{ className: "bg-accent" }}
                      >
                        View all {g.name}
                      </Link>
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
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </nav>
      </div>
    </aside>
  );
}