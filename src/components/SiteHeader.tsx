import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { groups } from "@/data/categories";

const aboutLinks = [
  { to: "/about", label: "About Us" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/disclaimer", label: "Disclaimer" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary shrink-0">
          <BookOpen className="h-6 w-6" />
          <span>QuizMaster</span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden md:flex items-center gap-1 text-sm">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Groups <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              {groups.map((g) => (
                <DropdownMenuItem key={g.slug} asChild>
                  <Link to="/group/$slug" params={{ slug: g.slug }}>
                    <span className="mr-2" aria-hidden>{g.icon}</span>
                    {g.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" asChild>
            <Link to="/adsense">Google AdSense</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                About <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {aboutLinks.map((l) => (
                <DropdownMenuItem key={l.to} asChild>
                  <Link to={l.to}>{l.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-card">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1 text-sm">
            <Link to="/" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-accent">Home</Link>
            <Link to="/adsense" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-accent">Google AdSense</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-accent">Contact Us</Link>
            <div className="mt-2 px-2 text-xs font-semibold uppercase text-muted-foreground">About</div>
            {aboutLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-accent">
                {l.label}
              </Link>
            ))}
            <div className="mt-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Groups</div>
            {groups.map((g) => (
              <Link
                key={g.slug}
                to="/group/$slug"
                params={{ slug: g.slug }}
                onClick={() => setOpen(false)}
                className="px-2 py-2 rounded hover:bg-accent"
              >
                <span className="mr-2" aria-hidden>{g.icon}</span>
                {g.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}