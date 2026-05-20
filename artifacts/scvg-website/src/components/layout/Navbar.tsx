import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { PlaneTakeoff, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/fleet", label: "Fleet" },
    { href: "/routes", label: "Routes" },
    { href: "/handbook", label: "Handbook" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center overflow-hidden">
            <img src="/logo-mark.png" alt="SCVG Logo Mark" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-serif font-bold text-xl hidden sm:block">SCVG</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/quiz">
            <Button className="font-semibold gap-2">
              <PlaneTakeoff className="w-4 h-4" />
              Take the Quiz
            </Button>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium p-2 rounded-md ${
                location === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
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
