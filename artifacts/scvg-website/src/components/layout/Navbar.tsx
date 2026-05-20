import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { PlaneTakeoff, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/fleet", label: "Fleet" },
    { href: "/routes", label: "Routes" },
    { href: "/handbook", label: "Handbook" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Main header bar — always dark, always branded */}
      <div className="bg-[#0a1528]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30">
        {/* Top gradient accent line */}
        <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, #F47C20 0%, #2563EB 100%)" }} />

        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo-mark-clean.png"
              alt="SCXV"
              className="h-9 w-auto transition-transform group-hover:scale-110"
              style={{ filter: "drop-shadow(0 0 8px rgba(244,124,32,0.45))" }}
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-serif font-bold text-base text-white tracking-wide">Sun Country</span>
              <span className="font-serif font-bold text-base tracking-wide"
                style={{ background: "linear-gradient(90deg,#F47C20,#2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Virtual Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav — centred */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/quiz">
              <Button className="font-semibold gap-2 h-9 text-sm">
                <PlaneTakeoff className="w-4 h-4" />
                Take the Quiz
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1528]/98 backdrop-blur-md border-b border-white/5 shadow-xl px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3 py-2.5 rounded-md transition-colors ${
                location === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-white/5 hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/quiz" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full font-semibold gap-2 mt-2">
              <PlaneTakeoff className="w-4 h-4" />
              Take the Quiz
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
