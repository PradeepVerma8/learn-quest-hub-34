import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { CategorySidebar } from "./CategorySidebar";

export function PageShell({ children, withSidebar = true }: { children: ReactNode; withSidebar?: boolean }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        {withSidebar && <CategorySidebar />}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
      <footer className="border-t mt-12">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} QuizMaster — Practice MCQs for IT certifications.
        </div>
      </footer>
    </div>
  );
}