import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BookOpen, Shield, Plane, Radio, Gauge, Award, FileText, ChevronRight, AlertTriangle, Info, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "welcome",    label: "Welcome & Introduction",        icon: BookOpen },
  { id: "conduct",   label: "Rules & Code of Conduct",       icon: Shield },
  { id: "ops",       label: "Flight Operations Standards",   icon: Plane },
  { id: "atc",       label: "Radio & ATC Procedures",        icon: Radio },
  { id: "minimums",  label: "Aircraft Operating Minimums",   icon: Gauge },
  { id: "ranks",     label: "Rank & Progression System",     icon: Award },
  { id: "reporting", label: "Reporting Requirements",        icon: FileText },
];

function Callout({ type, children }: { type: "info" | "warning" | "rule"; children: React.ReactNode }) {
  const styles = {
    info:    { border: "border-blue-500/40",   bg: "bg-blue-500/10",   icon: <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> },
    warning: { border: "border-amber-500/40",  bg: "bg-amber-500/10",  icon: <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> },
    rule:    { border: "border-primary/40",    bg: "bg-primary/10",    icon: <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> },
  };
  const s = styles[type];
  return (
    <div className={`flex gap-3 rounded-lg border ${s.border} ${s.bg} px-4 py-3 my-4 text-sm leading-relaxed`}>
      {s.icon}
      <span className="text-foreground/90">{children}</span>
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
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            <BookOpen className="w-3 h-3" /> Official Documentation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-3 text-white">Pilot Handbook</h1>
          <p className="text-lg text-muted-foreground">
            Standard operating procedures and community rules for the Sun Country Virtual Group (SCXV). Read every section before taking the membership quiz.
          </p>
        </motion.div>

        {/* SOP Upload Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-xl border border-amber-500/30 bg-amber-500/10 px-6 py-4"
        >
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-amber-300 mb-0.5">Official SOPs Coming Soon</p>
            <p className="text-xs text-muted-foreground">Our full Standard Operating Procedures document is being finalized and will be published here. The content below reflects current operational standards — review it to prepare for the membership quiz.</p>
          </div>
          <Link href="/quiz">
            <Button size="sm" variant="outline" className="shrink-0 text-xs border-amber-500/40 text-amber-300 hover:bg-amber-500/10">
              Take the Quiz <ChevronRight className="w-3 h-3 ml-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Two-column layout: TOC sidebar + content */}
        <div className="flex gap-8 items-start">

          {/* Sticky TOC Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block w-64 shrink-0 sticky top-28 self-start"
          >
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 px-2">Contents</p>
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
            className="flex-1 min-w-0 space-y-12"
          >

            {/* ── Section 1 ── */}
            <section id="welcome" ref={(el) => { sectionRefs.current["welcome"] = el; }} className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Section 1</span>
                  <h2 className="text-2xl font-bold font-serif text-white leading-tight">Welcome & Introduction</h2>
                </div>
              </div>
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                <p>Welcome to the <strong>Sun Country Virtual Group (SCXV)</strong> — a virtual airline community founded in 2023 around a shared passion for Sun Country Airlines operations. We have been chasing the Sun ever since, growing from a single Boeing 737 operation out of Minneapolis into a full virtual group that now includes Allegiant Air's expansive route network.</p>
                <p>This handbook is the authoritative source of truth for all SCXV operations, rules, and expectations. Whether you are flying a Sun Country 737-800 out of MSP or an Allegiant A320 out of Las Vegas, the standards described here apply to every pilot, every flight.</p>
                <p>We take virtual aviation seriously — not because it has to be stressful, but because flying with real procedures alongside a community that cares makes every flight more rewarding. Take the time to read this handbook in full before attempting the membership quiz.</p>

                <Callout type="info">
                  SCXV is not affiliated with Sun Country Airlines or Allegiant Air. We are an independent virtual aviation community that models our operations on those real-world carriers.
                </Callout>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">Who We Are</h3>
                <p>SCXV operates two virtual airline divisions under a single unified leadership and tracking system:</p>
                <ul className="text-muted-foreground space-y-1 mt-2">
                  <li><strong className="text-foreground">Sun Country Division</strong> — Boeing 737-700, 737-800, and 737 MAX 8. Hub: Minneapolis (MSP). 300+ routes. Callsign: SUN COUNTRY.</li>
                  <li><strong className="text-foreground">Allegiant Division</strong> — Airbus A319, A320, and A220. Hubs: Las Vegas (LAS), Tampa/St. Pete (PIE), Orlando Sanford (SFB). 1,100+ routes. Callsign: ALLEGIANT.</li>
                </ul>
                <p>Pilots may fly for either or both divisions once they have passed the membership quiz and joined the Discord server. Division transfers and dual endorsements are available after your first 10 approved flight hours.</p>
              </div>
            </section>

            {/* ── Section 2 ── */}
            <section id="conduct" ref={(el) => { sectionRefs.current["conduct"] = el; }} className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Section 2</span>
                  <h2 className="text-2xl font-bold font-serif text-white leading-tight">Rules & Code of Conduct</h2>
                </div>
              </div>
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                <p>Our community thrives because of the quality of its people. Every pilot who joins SCXV agrees to uphold these standards at all times — on Discord, on the network, and in any public representation of the group.</p>

                <Callout type="rule">
                  All SCXV members must treat other members with respect and professionalism at all times. This is non-negotiable and applies in every channel, every flight, and every interaction.
                </Callout>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">2.1 General Conduct</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>Harassment, discrimination, or toxic behavior of any kind is grounds for immediate dismissal without appeal.</li>
                  <li>Constructive criticism is welcome. Personal attacks are not.</li>
                  <li>Treat staff decisions with respect. If you disagree with a ruling, submit a formal appeal through the proper Discord channel — do not argue publicly.</li>
                  <li>Do not publicly represent SCXV in a negative light on social media, forums, or other VA communities.</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">2.2 Discord Rules</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>Use channels for their designated purpose. Keep off-topic discussion to the designated channels.</li>
                  <li>No spam, excessive self-promotion, or unsolicited advertising.</li>
                  <li>Keep language appropriate. We are a diverse community with members of all ages.</li>
                  <li>Report rule violations to staff privately — do not publicly call out other members.</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">2.3 Network Etiquette</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>When flying on VATSIM or IVAO, you represent SCXV. Fly professionally.</li>
                  <li>Follow ATC instructions promptly and courteously.</li>
                  <li>Do not ghost ATC without a valid reason. If you must disconnect mid-flight, inform ATC when possible.</li>
                </ul>
              </div>
            </section>

            {/* ── Section 3 ── */}
            <section id="ops" ref={(el) => { sectionRefs.current["ops"] = el; }} className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <Plane className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Section 3</span>
                  <h2 className="text-2xl font-bold font-serif text-white leading-tight">Flight Operations Standards</h2>
                </div>
              </div>
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                <p>SCXV uses a flight tracking system to log and validate all pilot activity. To ensure your flights count toward rank progression and remain on record, follow these standards precisely.</p>

                <Callout type="rule">
                  Pilots must complete the flight log with all required fields before submitting a flight report. Incomplete or missing logs may be automatically rejected.
                </Callout>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">3.1 Required Flight Log Fields</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>Departure and arrival airports (ICAO format)</li>
                  <li>Aircraft type and registration</li>
                  <li>Block departure and arrival times (UTC)</li>
                  <li>Total block time and flight time</li>
                  <li>Division flown (Sun Country or Allegiant)</li>
                  <li>Simulator platform used</li>
                  <li>Any notable events, deviations, or diversions</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">3.2 Simulation Standards</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>Simulation rate must remain at <strong>1x</strong> for the entirety of all logged flights. Accelerated time renders the flight invalid.</li>
                  <li>Pause is permitted briefly for real-life emergencies only. Extended pause periods are discouraged.</li>
                  <li>Flights must begin and end at a valid airport with a proper pushback, taxi, takeoff, approach, landing, and taxi-in sequence.</li>
                  <li>Cold-and-dark startup is strongly encouraged for realism. Departing from a pre-configured state mid-flight is not permitted.</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">3.3 Simulator Crashes & Technical Issues</h3>
                <Callout type="warning">
                  If you experience a simulator crash mid-flight, file a PIREP and note the technical issue in the flight log. Do not artificially relocate your aircraft to resume — log a new flight from the diversion or departure airport.
                </Callout>
                <p>Repeated technical PIREPs from the same pilot may trigger a review by the Training Director to ensure logging standards are being met correctly.</p>
              </div>
            </section>

            {/* ── Section 4 ── */}
            <section id="atc" ref={(el) => { sectionRefs.current["atc"] = el; }} className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <Radio className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Section 4</span>
                  <h2 className="text-2xl font-bold font-serif text-white leading-tight">Radio & ATC Procedures</h2>
                </div>
              </div>
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                <p>Flying on VATSIM or IVAO is strongly encouraged for all SCXV pilots. Interacting with live ATC adds a level of realism that offline flying cannot replicate, and it reflects well on the group when our pilots communicate professionally.</p>

                <Callout type="rule">
                  Proper ICAO phraseology is required for all ATC communication. Non-standard language causes confusion and reflects poorly on SCXV.
                </Callout>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">4.1 Callsign Usage</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li><strong className="text-foreground">Sun Country Division:</strong> Use callsign <em>SUN COUNTRY</em> followed by flight number (e.g., SUN COUNTRY 201).</li>
                  <li><strong className="text-foreground">Allegiant Division:</strong> Use callsign <em>ALLEGIANT</em> followed by flight number (e.g., ALLEGIANT 802).</li>
                  <li>Always verify your callsign is set correctly in your network client before connecting.</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">4.2 Basic Radio Standards</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>Read back all ATC clearances in full — altitude, heading, frequency, and clearance limit.</li>
                  <li>Monitor the correct frequency at all times. Do not transmit on guard (121.5 / 243.0) unless declaring an emergency.</li>
                  <li>Use position and intentions reports when flying in uncontrolled airspace (CTAF procedures).</li>
                  <li>If you are new to ATC communication, review the VATSIM/IVAO pilot resources before flying in controlled airspace.</li>
                </ul>
              </div>
            </section>

            {/* ── Section 5 ── */}
            <section id="minimums" ref={(el) => { sectionRefs.current["minimums"] = el; }} className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <Gauge className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Section 5</span>
                  <h2 className="text-2xl font-bold font-serif text-white leading-tight">Aircraft Operating Minimums</h2>
                </div>
              </div>
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                <p>Realism means operating within the limits of your aircraft — not just flying the route, but flying it correctly. The following minimums apply to all SCXV flights regardless of division.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">5.1 Weight & Balance</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>Do not exceed Maximum Takeoff Weight (MTOW) or Maximum Landing Weight (MLW).</li>
                  <li>Ensure correct center of gravity (CG) is within the certified envelope for the aircraft type.</li>
                  <li>Use a proper load sheet or EFB tool to calculate fuel and payload before each departure.</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">5.2 Fuel Planning</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>Load: Trip fuel + 5% contingency + alternate fuel (if applicable) + final reserve (30 min for jets).</li>
                  <li>Diversions due to weather, ATC, or technical issues are a normal part of operations — plan for them.</li>
                  <li>Fuel emergencies caused by inadequate planning are not valid grounds for a PIREP override.</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">5.3 Weather Minimums</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>Observe published CAT I ILS minimums at a minimum: 200 ft DH / 1,800 RVR (or ½ SM visibility).</li>
                  <li>Do not attempt approaches below published minimums unless your aircraft and pilot qualification support it.</li>
                  <li>Takeoff minimums: 500 RVR with operative runway lighting for SCXV operations.</li>
                </ul>

                <Callout type="warning">
                  Landing rates worse than -600 fpm on a normal flight will flag the PIREP for automatic review. Hard landings happen — extreme hard landings suggest improper approach technique and may result in a review by the Training Director.
                </Callout>
              </div>
            </section>

            {/* ── Section 6 ── */}
            <section id="ranks" ref={(el) => { sectionRefs.current["ranks"] = el; }} className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Section 6</span>
                  <h2 className="text-2xl font-bold font-serif text-white leading-tight">Rank & Progression System</h2>
                </div>
              </div>
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                <p>SCXV uses a unified rank structure that mirrors real-world airline career progression. Your rank is determined entirely by accumulated approved flight hours — no competitions, no fees, no favoritism.</p>

                <Callout type="rule">
                  Rank advancement follows real-world equivalent hours for each rank tier. Only approved flight hours — those that pass all validation checks — count toward progression.
                </Callout>

                <h3 className="text-lg font-bold text-white mt-6 mb-3">6.1 Rank Structure</h3>
                <div className="not-prose overflow-hidden rounded-lg border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50 border-b border-border">
                        <th className="text-left px-4 py-3 text-foreground font-semibold">Rank</th>
                        <th className="text-left px-4 py-3 text-foreground font-semibold">Hours Required</th>
                        <th className="text-left px-4 py-3 text-foreground font-semibold">Privileges</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { rank: "Student Pilot",  hours: "0 hrs",       priv: "Training flights only" },
                        { rank: "First Officer",   hours: "10 hrs",      priv: "Full line flying, both divisions" },
                        { rank: "Senior F/O",      hours: "100 hrs",     priv: "Mentorship eligibility" },
                        { rank: "Captain",         hours: "250 hrs",     priv: "Route bidding priority, checkride examiner" },
                        { rank: "Senior Captain",  hours: "500 hrs",     priv: "Staff candidacy, hub manager eligible" },
                      ].map((row) => (
                        <tr key={row.rank} className="hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 font-medium text-foreground">{row.rank}</td>
                          <td className="px-4 py-3 text-primary font-mono">{row.hours}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.priv}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">6.2 Promotion Process</h3>
                <p>Promotions are processed automatically when flight hours thresholds are met and approved. You will receive a notification in Discord when your rank is updated. There is no application required for standard rank progressions.</p>
                <p>Staff positions (Hub Manager, Training Director, Events Lead) are not based on hours alone — they require an application and interview process when a vacancy opens.</p>
              </div>
            </section>

            {/* ── Section 7 ── */}
            <section id="reporting" ref={(el) => { sectionRefs.current["reporting"] = el; }} className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Section 7</span>
                  <h2 className="text-2xl font-bold font-serif text-white leading-tight">Reporting Requirements</h2>
                </div>
              </div>
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
                <p>An active roster keeps SCXV healthy and ensures our route network reflects real pilot demand. The following activity requirements apply to all members.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">7.1 Activity Requirements</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>Pilots must submit at least <strong className="text-foreground">one valid flight report every 30 days</strong> to remain on the active roster.</li>
                  <li>Pilots who miss the 30-day window without a filed LOA will receive an inactivity warning via Discord DM.</li>
                  <li>A second missed window results in removal from the active roster. Reinstatement requires re-taking the membership quiz.</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">7.2 Leave of Absence (LOA)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>LOAs are available for periods of inactivity up to 90 days.</li>
                  <li>Request an LOA via the designated Discord channel before your 30-day window expires.</li>
                  <li>LOAs exceeding 90 days require staff approval and are reviewed on a case-by-case basis.</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">7.3 PIREP Submission</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>All PIREPs must be submitted within 48 hours of flight completion.</li>
                  <li>Late or amended PIREPs require a staff note explaining the reason for the delay.</li>
                  <li>Falsified PIREPs (fabricated routes, inflated hours) are grounds for immediate permanent dismissal.</li>
                </ul>

                <Callout type="info">
                  When in doubt, submit a PIREP with notes rather than not submitting at all. The training team can review and adjust — they cannot review what was never filed.
                </Callout>
              </div>
            </section>

            {/* Ready to Join CTA */}
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-8 text-center">
              <h3 className="text-2xl font-bold font-serif text-white mb-3">Ready to Fly with SCXV?</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">You've read the handbook. Now prove it — score 100% on the membership quiz to unlock access to our Discord and start logging flights.</p>
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
