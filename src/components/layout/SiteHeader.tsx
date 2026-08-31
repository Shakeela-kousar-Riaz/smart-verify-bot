import { Link } from "@tanstack/react-router";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";

const NAV = [
  { to: "/analyze", label: "Analyze" },
  { to: "/verify", label: "Verify Company" },
  { to: "/awareness", label: "Awareness" },
  { to: "/dashboard", label: "Dashboard" },
] as const;

export function SiteHeader() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between gap-3 border-b border-line/70 bg-panel/60 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="ss-blink size-1.5 rounded-full bg-neon-lime" /> System online
        </span>
        <span className="hidden sm:block">encrypted channel · pattern engine v1.0</span>
        <span className="text-neon-cyan">v1.0</span>
      </div>

      <header className="sticky top-0 z-40 border-b border-line/70 bg-background/85 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="neon-text grid size-9 place-items-center rounded-md bg-neon-cyan/15 text-neon-cyan">
              <ShieldCheck className="size-4" />
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              ScamShield<span className="text-neon-cyan"> AI</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-neon-cyan" }}
                className="transition hover:text-neon-cyan"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {user ? (
              <button
                type="button"
                onClick={() => signOut()}
                className="hidden rounded-md border border-line px-3 py-2 text-sm text-foreground transition hover:border-neon-cyan hover:text-neon-cyan sm:block"
              >
                Sign out
              </button>
            ) : (
              <Link
                to="/auth"
                className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground sm:block"
              >
                Sign in
              </Link>
            )}
            <Link
              to={user ? "/analyze" : "/auth"}
              className="rounded-md bg-neon-cyan px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-neon-lime"
            >
              {user ? "New analysis" : "Get started"}
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
              className="grid size-9 place-items-center rounded-md border border-line bg-panel text-muted-foreground md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="mx-auto mt-3 grid max-w-7xl gap-1 border-t border-line/70 pt-3 text-sm md:hidden">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-neon-cyan" }}
                className="rounded-md px-2 py-2 text-muted-foreground transition hover:bg-panel hover:text-neon-cyan"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
