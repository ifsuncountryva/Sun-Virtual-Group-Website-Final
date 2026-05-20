import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#070e1c] border-t border-white/5 pt-14 pb-8 relative overflow-hidden">
      {/* Top gradient rule */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg,#F47C20 0%,#2563EB 100%)" }} />
      {/* Subtle bg glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_15%_0%,rgba(244,124,32,0.05),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_85%_0%,rgba(37,99,235,0.06),transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand block */}
          <div className="col-span-1 md:col-span-2">
            {/* Clean landscape logo — same as hero/navbar */}
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo-mark-clean.png"
                alt="SCXV"
                className="h-12 w-auto"
                style={{ filter: "drop-shadow(0 0 12px rgba(244,124,32,0.5))" }}
              />
              <div className="flex flex-col leading-none">
                <span className="font-serif font-bold text-lg text-white tracking-wide">Sun Country</span>
                <span
                  className="font-serif font-bold text-lg tracking-wide"
                  style={{ background: "linear-gradient(90deg,#F47C20,#2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Virtual Group
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Sun Country Virtual Group (SCXV) — chasing the Sun since 2023. Built on Sun Country roots, now expanded with Allegiant operations. A professional home for virtual aviators worldwide.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-4 italic">Chasing the Sun since 2023.</p>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4 text-white text-sm uppercase tracking-widest">Operations</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/fleet" className="text-muted-foreground hover:text-primary transition-colors">Our Fleet</Link></li>
              <li><Link href="/routes" className="text-muted-foreground hover:text-primary transition-colors">Route Network</Link></li>
              <li><Link href="/handbook" className="text-muted-foreground hover:text-primary transition-colors">Pilot Handbook</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4 text-white text-sm uppercase tracking-widest">Join Us</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About SCXV</Link></li>
              <li><Link href="/quiz" className="text-muted-foreground hover:text-primary transition-colors">Membership Quiz</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} Sun Country Virtual Group · SCXV · Not affiliated with Sun Country Airlines or Allegiant Air.
          </p>
          <div className="text-xs text-muted-foreground/50 tracking-wider uppercase">
            Built for the Virtual Aviation Community
          </div>
        </div>
      </div>
    </footer>
  );
}
