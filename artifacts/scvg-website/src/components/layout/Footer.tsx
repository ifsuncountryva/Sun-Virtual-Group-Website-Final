import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="w-48 bg-white rounded-lg p-2 mb-6">
              <img src="/logo-full.jpeg" alt="SCVG Logo" className="w-full h-auto object-contain" />
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Sun Country Virtual Group (SCXV) — chasing the Sun since 2023. Built on Sun Country roots, now expanded with Allegiant operations. A professional home for virtual aviators worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4 text-foreground">Operations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fleet" className="text-muted-foreground hover:text-primary transition-colors">Our Fleet</Link></li>
              <li><Link href="/routes" className="text-muted-foreground hover:text-primary transition-colors">Route Network</Link></li>
              <li><Link href="/handbook" className="text-muted-foreground hover:text-primary transition-colors">Pilot Handbook</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4 text-foreground">Join Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About SCXV</Link></li>
              <li><Link href="/quiz" className="text-muted-foreground hover:text-primary transition-colors">Membership Quiz</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Sun Country Virtual Group. Not affiliated with Sun Country Airlines or Allegiant Air.
          </p>
          <div className="text-xs text-muted-foreground">
            Designed for the Virtual Aviation Community
          </div>
        </div>
      </div>
    </footer>
  );
}
