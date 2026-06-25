import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { groups as defaultGroups, categoriesByGroup, type Group } from "@/data/categories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCenter,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

const STORAGE_KEY = "sidebar-group-order";

function SortableGroup({ g }: { g: Group }) {
  const cats = categoriesByGroup(g.slug);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: g.slug });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
    zIndex: isDragging ? 10 : "auto",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <AccordionItem value={g.slug} className="border-b-0">
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label={`Reorder ${g.name}`}
            className="touch-none cursor-grab active:cursor-grabbing rounded p-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            {...attributes}
            {...listeners}
          >
            <GripVertical className="h-4 w-4" />
          </button>
          <AccordionTrigger className="flex-1 px-2 py-2 rounded-md text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground hover:no-underline">
            <span className="flex items-center gap-2">
              <span aria-hidden>{g.icon}</span>
              <span>{g.name}</span>
            </span>
          </AccordionTrigger>
        </div>
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
    </div>
  );
}

export function CategorySidebar() {
  const [orderedGroups, setOrderedGroups] = useState<Group[]>(defaultGroups);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const slugs: string[] = JSON.parse(saved);
      const map = new Map(defaultGroups.map((g) => [g.slug, g]));
      const ordered: Group[] = [];
      for (const s of slugs) {
        const g = map.get(s);
        if (g) {
          ordered.push(g);
          map.delete(s);
        }
      }
      ordered.push(...map.values());
      setOrderedGroups(ordered);
    } catch {
      // ignore
    }
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setOrderedGroups((prev) => {
      const oldIndex = prev.findIndex((g) => g.slug === active.id);
      const newIndex = prev.findIndex((g) => g.slug === over.id);
      if (oldIndex === -1 || newIndex === -1) return prev;
      const next = arrayMove(prev, oldIndex, newIndex);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next.map((g) => g.slug)));
      } catch {
        // ignore
      }
      return next;
    });
  }

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 rounded-lg border bg-card">
        <div className="border-b px-4 py-3 font-semibold text-sm text-foreground flex items-center justify-between">
          <span>Groups</span>
          <span className="text-xs font-normal text-muted-foreground">Drag to reorder</span>
        </div>
        <nav className="p-2">
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={orderedGroups.map((g) => g.slug)} strategy={verticalListSortingStrategy}>
              <Accordion type="multiple" className="w-full">
                {orderedGroups.map((g) => (
                  <SortableGroup key={g.slug} g={g} />
                ))}
              </Accordion>
            </SortableContext>
          </DndContext>
        </nav>
      </div>
    </aside>
  );
}