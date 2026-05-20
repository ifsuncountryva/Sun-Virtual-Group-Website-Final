import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  BookOpen, Shield, Plane, Star, Award, FileText,
  Gauge, Radio, ChevronRight, Info, CheckCircle, AlertTriangle
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "welcome",   label: "Welcome to SCXV",             icon: BookOpen },
  { id: "activity",  label: "Activity Policy",              icon: Shield },
  { id: "fleet",     label: "Aircraft Fleet",               icon: Plane },
  { id: "ranks",     label: "Rank Structure",               icon: Award },
  { id: "routes",    label: "Routes & Charter Ops",         icon: Radio },
  { id: "featured",  label: "Featured Flights",             icon: Star },
  { id: "ops",       label: "General Operating Procedures", icon: Gauge },
];

function Callout({ type, children }: { type: "info" | "warning" | "rule"; children: React.ReactNode }) {
  const styles = {
    info:    { border: "border-blue-500/40",  bg: "bg-blue-500/10",  icon: <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> },
    warning: { border: "border-amber-500/40", bg: "bg-amber-500/10", icon: <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> },
    rule:    { border: "border-primary/40",   bg: "bg-primary/10",   icon: <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> },
  };
  const s = styles[type];
  return (
    <div className={`flex gap-3 rounded-lg border ${s.border} ${s.bg} px-4 py-3 my-4 text-sm leading-relaxed`}>
      {s.icon}
      <span className="text-foreground/90">{children}</span>
    </div>
  );
}

function SectionHeader({ id, num, label, icon: Icon }: { id: string; num: string; label: string; icon: React.ElementType }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-5 pb-4 border-b border-border scroll-mt-28">
      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Section {num}</span>
        <h2 className="text-2xl font-bold font-serif text-white leading-tight">{label}</h2>
      </div>
    </div>
  );
}

export function Handbook() {
  const [activeSection, setActiveSection] = useState("welcome");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Hero header — gradient treatment matching other pages */}
      <div className="relative pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_15%_0%,rgba(244,124,32,0.11),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_85%_0%,rgba(37,99,235,0.13),transparent)]" />
        <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg,#F47C20 0%,#2563EB 100%)" }} />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5 text-muted-foreground">
            <BookOpen className="w-3 h-3 text-primary" /> Official SCXV Documentation
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold font-serif mb-3"
            style={{ background: "linear-gradient(90deg,#fff 40%,#F47C20 70%,#2563EB 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Pilot Handbook
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Standard Operating Procedures for the Sun Country Virtual Group (SCXV). Read every section before taking the membership quiz.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="flex gap-8 items-start">

          {/* Sticky TOC Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block w-64 shrink-0 sticky top-28 self-start"
          >
            <div className="rounded-xl border bg-card p-4 overflow-hidden relative"
              style={{ borderColor: "rgba(244,124,32,0.2)" }}>
              {/* gradient rule at top of sidebar */}
              <div className="absolute top-0 inset-x-0 h-0.5 rounded-t-xl"
                style={{ background: "linear-gradient(90deg,#F47C20,#2563EB)" }} />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 px-2 mt-1">Contents</p>
              <nav className="space-y-0.5">
                {sections.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    data-testid={`toc-link-${id}`}
                    className={`w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === id
                        ? "bg-primary/15 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="leading-snug">{label}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
              <p className="text-xs text-muted-foreground mb-3">Ready to join SCXV?</p>
              <Link href="/quiz">
                <Button size="sm" className="w-full text-xs font-semibold gap-1.5">
                  <Plane className="w-3 h-3" /> Take the Quiz
                </Button>
              </Link>
            </div>
          </motion.aside>

          {/* Handbook Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex-1 min-w-0 space-y-14"
          >

            {/* ── Section 1 — Welcome ── */}
            <section ref={(el) => { sectionRefs.current["welcome"] = el; }}>
              <SectionHeader id="welcome" num="1" label="Welcome to SCXV" icon={BookOpen} />
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                <p>
                  Welcome to <strong>Sun Country Virtual (SCXV)</strong> — a community that brings hometown airline vibes to the Infinite Flight world. We are a respectful, energetic, and welcoming group of virtual pilots united by a love of aviation and the carriers that inspire us.
                </p>
                <p>We proudly simulate:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li><strong className="text-foreground">Scheduled operations</strong> — Allegiant and Sun Country</li>
                  <li><strong className="text-foreground">Charter operations</strong> — Sun Country</li>
                  <li><strong className="text-foreground">Historic routes</strong> — Allegiant and Sun Country</li>
                </ul>
                <Callout type="info">
                  Above all else — have fun. SCXV exists to make virtual flying enjoyable and accessible. If you have ideas or suggestions, don't hesitate to reach out.
                </Callout>
              </div>
            </section>

            {/* ── Section 2 — Activity ── */}
            <section ref={(el) => { sectionRefs.current["activity"] = el; }}>
              <SectionHeader id="activity" num="2" label="Activity Policy" icon={Shield} />
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                <p>At SCXV, we value flexibility above rigid quotas.</p>
                <Callout type="rule">
                  There is no strict activity requirement. Pilots are encouraged to fly whenever it suits them best.
                </Callout>
                <p>
                  Life happens. We will never remove a pilot for simply being busy. If you plan to be away for an extended period, give us a heads-up in Discord so we know you're still part of the crew.
                </p>
              </div>
            </section>

            {/* ── Section 3 — Fleet ── */}
            <section ref={(el) => { sectionRefs.current["fleet"] = el; }}>
              <SectionHeader id="fleet" num="3" label="Aircraft Fleet" icon={Plane} />
              <div className="space-y-8">

                <div>
                  <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary" /> Sun Country Division
                  </h3>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/50 border-b border-border">
                          <th className="text-left px-4 py-3 text-foreground font-semibold">Aircraft</th>
                          <th className="text-left px-4 py-3 text-foreground font-semibold">Role</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 font-medium text-foreground">Boeing 737-800</td>
                          <td className="px-4 py-3 text-muted-foreground">Sun Country Airlines — scheduled &amp; charter</td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 font-medium text-foreground">DC-10</td>
                          <td className="px-4 py-3 text-muted-foreground">Gemini Air Cargo — cargo operations</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-400" /> Allegiant Division
                  </h3>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/50 border-b border-border">
                          <th className="text-left px-4 py-3 text-foreground font-semibold">Aircraft</th>
                          <th className="text-left px-4 py-3 text-foreground font-semibold">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {[
                          { ac: "Airbus A320", note: "Primary narrowbody" },
                          { ac: "Boeing 737-8-200 MAX", note: "High-density leisure routes" },
                          { ac: "Boeing 757-200 (Generic)", note: "Longer range leisure routes" },
                        ].map((r) => (
                          <tr key={r.ac} className="hover:bg-muted/30 transition-colors">
                            <td className="px-4 py-3 font-medium text-foreground">{r.ac}</td>
                            <td className="px-4 py-3 text-muted-foreground">{r.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-muted-foreground" /> Codeshare Fleet
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">Unlocked at First Officer rank (40 hrs). Fly on behalf of our partner carriers.</p>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/50 border-b border-border">
                          <th className="text-left px-4 py-3 text-foreground font-semibold">Airline</th>
                          <th className="text-left px-4 py-3 text-foreground font-semibold">Aircraft Types</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {[
                          { airline: "Aeroflot",               types: "A320, A333, A359, B739, B77W" },
                          { airline: "Air Europa",              types: "B738, B789" },
                          { airline: "Aerolíneas Argentinas",   types: "E190, B738, A332" },
                          { airline: "Condor",                  types: "A321, A333, A339" },
                          { airline: "easyJet",                 types: "A319, A320, A21N" },
                          { airline: "Ice Air Virtual",         types: "A21N, B38M, B39M (739), B752" },
                          { airline: "jetBlue",                 types: "A223, A320, A321, E190" },
                          { airline: "Norse",                   types: "B789" },
                          { airline: "Porter",                  types: "E295 (E190), Q400" },
                          { airline: "REX",                     types: "B738" },
                          { airline: "Royal Jordanian",         types: "B788, E175, E190" },
                          { airline: "SkyAlps",                 types: "Q400 (generic)" },
                        ].map((r) => (
                          <tr key={r.airline} className="hover:bg-muted/30 transition-colors">
                            <td className="px-4 py-3 font-medium text-foreground">{r.airline}</td>
                            <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{r.types}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Section 4 — Ranks ── */}
            <section ref={(el) => { sectionRefs.current["ranks"] = el; }}>
              <SectionHeader id="ranks" num="4" label="Rank Structure" icon={Award} />
              <p className="text-sm text-muted-foreground mb-4">Rank is earned through approved flight hours and unlocks new aircraft, routes, and privileges.</p>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border">
                      <th className="text-left px-4 py-3 text-foreground font-semibold">Rank</th>
                      <th className="text-left px-4 py-3 text-foreground font-semibold">Hours</th>
                      <th className="text-left px-4 py-3 text-foreground font-semibold">Access Unlocked</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { rank: "Cadet",                hours: "0 – 39 hrs",  access: "Sun Country & Allegiant Scheduled Routes" },
                      { rank: "First Officer",        hours: "40 hrs",      access: "All Codeshare Routes" },
                      { rank: "Captain",              hours: "200 hrs",     access: "Prime Air Routes" },
                      { rank: "Training Captain",     hours: "400 hrs",     access: "Gemini Air Cargo Routes" },
                      { rank: "Executive Flight Crew",hours: "750 hrs",     access: "Charter Flights" },
                    ].map((r, i) => (
                      <tr key={r.rank} className={`hover:bg-muted/30 transition-colors ${i === 4 ? "bg-primary/5" : ""}`}>
                        <td className="px-4 py-3 font-semibold text-foreground">{r.rank}</td>
                        <td className="px-4 py-3 text-primary font-mono">{r.hours}</td>
                        <td className="px-4 py-3 text-muted-foreground">{r.access}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Callout type="info">
                Promotions are processed automatically when hour thresholds are reached. No application required for standard rank progressions.
              </Callout>
            </section>

            {/* ── Section 5 — Routes & Charter ── */}
            <section ref={(el) => { sectionRefs.current["routes"] = el; }}>
              <SectionHeader id="routes" num="5" label="Routes & Charter Operations" icon={Radio} />
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground space-y-6">

                <div>
                  <h3 className="text-base font-bold text-white mb-2">5.1 Route Network</h3>
                  <p>
                    SCXV maintains a comprehensive route database covering all known scheduled routes — past and present — for both Sun Country and Allegiant. We operate an <strong>open route policy</strong>: if a route is missing, open a ticket in <span className="font-mono text-primary">#support</span> and it will be added.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2">5.2 Charter Operations</h3>
                  <p>Sun Country operates one of the largest charter networks in North America. SCXV has replicated this in a unique fashion.</p>

                  <Callout type="rule">
                    Charter flights are restricted to pilots who have reached <strong>Executive Flight Crew</strong> rank (750 hours).
                  </Callout>

                  <div className="not-prose mt-4 grid sm:grid-cols-3 gap-4">
                    {[
                      { label: "Aircraft", value: "Sun Country B737-800 only" },
                      { label: "Airports", value: "Any 737-capable airport worldwide" },
                      { label: "Max Flight Time", value: "8 hours" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-lg border border-border bg-card p-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-bold text-white mb-2">Charter PIREP Callsign Format</h4>
                    <p className="text-muted-foreground text-sm mb-3">Charter PIREPs use a callsign with the <span className="font-mono text-primary font-bold">SY8</span> prefix:</p>
                    <div className="not-prose flex gap-3 flex-wrap">
                      <code className="bg-muted rounded-md px-3 py-2 text-sm font-mono text-primary border border-border">SY8XXX</code>
                      <code className="bg-muted rounded-md px-3 py-2 text-sm font-mono text-primary border border-border">SY8001</code>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Section 6 — Featured Flights ── */}
            <section ref={(el) => { sectionRefs.current["featured"] = el; }}>
              <SectionHeader id="featured" num="6" label="Featured Flights" icon={Star} />
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                <p>
                  SCXV runs a flexible monthly featured system instead of fixed weekly routes of the week. This gives every pilot freedom to participate on their own schedule.
                </p>
                <h3 className="text-base font-bold text-white mt-4 mb-2">How it Works</h3>
                <p>Each month, two features are announced in Discord:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li><strong className="text-foreground">Airport of the Month</strong> — fly any route to or from that airport</li>
                  <li><strong className="text-foreground">Airline of the Month</strong> — fly any route using that month's featured airline</li>
                </ul>
                <p>There are no limits on how many featured flights you can complete in a month.</p>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  { label: "Airline of the Month", multiplier: "1.5x", color: "border-blue-500/40 bg-blue-500/10" },
                  { label: "Airport of the Month", multiplier: "1.5x", color: "border-blue-500/40 bg-blue-500/10" },
                  { label: "Both Combined — Triple Sun Bonus", multiplier: "3x", color: "border-primary/40 bg-primary/10" },
                ].map((item) => (
                  <div key={item.label} className={`rounded-lg border ${item.color} p-4 text-center`}>
                    <p className="text-3xl font-bold font-serif text-primary mb-1">{item.multiplier}</p>
                    <p className="text-xs text-muted-foreground leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 7 — General Ops ── */}
            <section ref={(el) => { sectionRefs.current["ops"] = el; }}>
              <SectionHeader id="ops" num="7" label="General Operating Procedures" icon={Gauge} />
              <div className="space-y-8">

                <div>
                  <h3 className="text-base font-bold text-white mb-3">7.1 Aircraft Performance</h3>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/50 border-b border-border">
                          <th className="text-left px-4 py-3 text-foreground font-semibold">Aircraft</th>
                          <th className="text-left px-4 py-3 text-foreground font-semibold">Cruise Speed</th>
                          <th className="text-left px-4 py-3 text-foreground font-semibold">Max Cruise Alt</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {[
                          { ac: "Boeing 737-800",    speed: "Mach 0.74 – 0.80", alt: "FL410" },
                          { ac: "DC-10",             speed: "Mach 0.77 – 0.83", alt: "—" },
                          { ac: "Airbus A320",       speed: "Mach 0.76 – 0.80", alt: "FL390" },
                          { ac: "Boeing 757-200",    speed: "Mach 0.77 – 0.81", alt: "FL420" },
                        ].map((r) => (
                          <tr key={r.ac} className="hover:bg-muted/30 transition-colors">
                            <td className="px-4 py-3 font-medium text-foreground">{r.ac}</td>
                            <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{r.speed}</td>
                            <td className="px-4 py-3 text-primary font-mono text-xs">{r.alt}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-3">7.2 Flight Rules</h3>
                  <div className="space-y-2">
                    <Callout type="rule">
                      All SCXV flights must be conducted on the <strong>Expert Server</strong>. No exceptions.
                    </Callout>
                    <Callout type="rule">
                      When IFATC is active, all ATC instructions must be followed promptly and correctly.
                    </Callout>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-3">7.3 PIREP Notes & AP+ Rules</h3>
                  <ul className="text-sm text-muted-foreground space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>AP+ is permitted on all flights.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Maximum of 2 flights</strong> may be logged simultaneously using AP+.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>If AP+ incorrectly tracks fuel or time, pilots may use <strong className="text-foreground">SimBrief or Flightradar24 values</strong> as substitutes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final Note */}
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-white mb-2">A Note from Leadership</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    "Above all else… have fun. SCXV exists to make virtual flying enjoyable and accessible. If you have ideas or suggestions, don't hesitate to reach out!"
                  </p>
                  <p className="text-primary text-sm font-semibold">— flyinggoosey</p>
                </div>
              </div>
            </div>

            {/* Quiz CTA */}
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <h3 className="text-2xl font-bold font-serif text-white mb-3">Ready to Fly with SCXV?</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                You've read the handbook. Score 100% on the membership quiz to unlock our Discord and start logging flights.
              </p>
              <Link href="/quiz">
                <Button size="lg" className="px-10 py-5 h-auto text-base font-semibold gap-2">
                  <Plane className="w-5 h-5" /> Take the Membership Quiz
                </Button>
              </Link>
            </div>

          </motion.main>
        </div>
      </div>
    </div>
  );
}
