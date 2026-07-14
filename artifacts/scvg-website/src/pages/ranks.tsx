import { motion } from "framer-motion";
import { Link } from "wouter";

const ranks = [
  {
    id: 1,
    title: "Cadet",
    code: "CDT",
    hours: "0 – 39 hrs",
    hoursMin: 0,
    hoursMax: 39,
    stripes: 0,
    color: "#94a3b8",
    accentColor: "rgba(148,163,184,0.30)",
    glowColor: "rgba(148,163,184,0.20)",
    unlocks: "Sun Country & Allegiant Scheduled Routes",
    description:
      "Every SCXV pilot begins as a Cadet. Pass the membership quiz, join the Discord, and start logging hours on Sun Country and Allegiant's scheduled route network.",
    access: [
      "Sun Country scheduled routes",
      "Allegiant Air scheduled routes",
      "SCXV Discord community access",
      "Flight tracking and logbook",
    ],
  },
  {
    id: 2,
    title: "First Officer",
    code: "F/O",
    hours: "40 hrs",
    hoursMin: 40,
    hoursMax: 199,
    stripes: 2,
    color: "#F47C20",
    accentColor: "rgba(244,124,32,0.30)",
    glowColor: "rgba(244,124,32,0.25)",
    unlocks: "All Codeshare Routes",
    description:
      "Reaching 40 hours marks your first major milestone. First Officers unlock the full SCXV codeshare network — over a dozen partner carriers spanning Europe, South America, and beyond.",
    access: [
      "All SCXV Codeshare Routes",
      "Partner carrier fleet (Aeroflot, easyJet, jetBlue, Norse, and more)",
      "Access to group flight events",
    ],
  },
  {
    id: 3,
    title: "Captain",
    code: "CPT",
    hours: "200 hrs",
    hoursMin: 200,
    hoursMax: 399,
    stripes: 4,
    color: "#2563EB",
    accentColor: "rgba(37,99,235,0.30)",
    glowColor: "rgba(37,99,235,0.30)",
    unlocks: "Prime Air Routes & Charter Flights",
    description:
      "200 hours earns you the four bars. Captains unlock Prime Air cargo routes and the full charter network — fly the Sun Country 737-800 to any 737-capable airport worldwide.",
    access: [
      "Prime Air cargo routes",
      "Charter flights — See Handbook",
      "Can lead and organise group flights",
      "Captain designation on all SCXV records",
    ],
  },
  {
    id: 4,
    title: "Training Captain",
    code: "TRG CPT",
    hours: "400 hrs",
    hoursMin: 400,
    hoursMax: 749,
    stripes: 4,
    color: "#a78bfa",
    accentColor: "rgba(167,139,250,0.30)",
    glowColor: "rgba(167,139,250,0.30)",
    unlocks: "Gemini Air Cargo Routes",
    description:
      "Training Captains have the hours and the experience to mentor new pilots. This rank unlocks Gemini Air Cargo operations and formal mentoring responsibilities within the group.",
    access: [
      "Gemini Air Cargo routes",
      "Formal pilot mentoring role",
      "Training Captain badge and distinction",
    ],
  },
  {
    id: 5,
    title: "Executive Flight Crew",
    code: "EFC",
    hours: "750 hrs",
    hoursMin: 750,
    hoursMax: null,
    stripes: 4,
    color: "#F47C20",
    accentColor: "rgba(244,124,32,0.35)",
    glowColor: "rgba(244,124,32,0.40)",
    unlocks: "Live Mode",
    description:
      "The pinnacle of SCXV operations. Executive Flight Crew pilots have proven themselves across every corner of the network and now unlock Live Mode — the most immersive and exclusive flying experience SCXV offers.",
    access: [
      "Live Mode access",
      "Highest distinction within SCXV",
    ],
  },
];

function Epaulette({ stripes, color, id }: { stripes: number; color: string; id: number }) {
  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      {/* Shoulder board */}
      <div className="w-14 h-7 rounded-sm flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
        {id === 5 && (
          <span className="text-[9px] font-bold tracking-wider" style={{ color }}>★ EFC</span>
        )}
      </div>
      {/* Stripes */}
      <div className="flex flex-col gap-0.5 items-center">
        {stripes === 0 && (
          <div className="w-14 h-1 rounded-full opacity-15" style={{ background: color }} />
        )}
        {stripes === 2 && Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="w-14 h-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
        ))}
        {stripes === 4 && (
          <>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-14 h-1 rounded-full" style={{ background: color, boxShadow: `0 0 5px ${color}` }} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export function Ranks() {
  return (
    <div className="flex flex-col min-h-screen bg-background">

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(37,99,235,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_60%,rgba(244,124,32,0.08),transparent)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              <span className="h-px w-8 bg-primary/50" />
              SUN COUNTRY · ALLEGIANT
              <span className="h-px w-8 bg-blue-500/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
              Pilot{" "}
              <span style={{ background: "linear-gradient(90deg,#F47C20,#2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Ranks
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Rank is earned through approved flight hours and unlocks new aircraft, routes, and privileges. Promotions are automatic — no application required.
            </p>
          </motion.div>
          <div className="mt-10 mx-auto max-w-xs h-px" style={{ background: "linear-gradient(90deg,transparent,#F47C20 30%,#2563EB 70%,transparent)" }} />
        </div>
      </section>

      {/* Quick reference table */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="overflow-hidden rounded-xl border border-white/8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/8" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <th className="text-left px-5 py-3 font-semibold text-white">#</th>
                    <th className="text-left px-5 py-3 font-semibold text-white">Rank</th>
                    <th className="text-left px-5 py-3 font-semibold text-white">Hours</th>
                    <th className="text-left px-5 py-3 font-semibold text-white hidden sm:table-cell">Access Unlocked</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {ranks.map((r) => (
                    <tr key={r.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-5 py-3">
                        <span className="text-xs font-bold text-muted-foreground">{r.id}</span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{r.title}</span>
                          <span className="hidden sm:inline text-xs font-mono px-1.5 py-0.5 rounded"
                            style={{ background: `${r.color}18`, color: r.color }}>{r.code}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3 font-mono text-sm" style={{ color: r.color }}>{r.hours}</td>
                      <td className="px-5 py-3 text-muted-foreground hidden sm:table-cell">{r.unlocks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Promotions are processed automatically when hour thresholds are reached.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed rank cards */}
      <section className="py-8 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-px hidden md:block"
              style={{ background: "linear-gradient(180deg,#94a3b8 0%,#F47C20 25%,#2563EB 50%,#a78bfa 75%,#F47C20 100%)" }} />

            <div className="space-y-5">
              {ranks.map((rank, i) => (
                <motion.div
                  key={rank.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="md:ml-14 relative"
                >
                  {/* Timeline node */}
                  <div className="hidden md:flex absolute -left-14 top-6 w-7 h-7 rounded-full items-center justify-center text-xs font-bold z-10 text-white"
                    style={{ background: rank.color, boxShadow: `0 0 16px ${rank.glowColor}` }}>
                    {rank.id}
                  </div>

                  <div className="rounded-xl border overflow-hidden"
                    style={{ borderColor: rank.accentColor, background: "rgba(255,255,255,0.02)" }}>
                    <div className="h-0.5" style={{ background: `linear-gradient(90deg,${rank.color},transparent)` }} />

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start gap-5 mb-5">
                        <Epaulette stripes={rank.stripes} color={rank.color} id={rank.id} />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                              style={{ background: `${rank.color}18`, color: rank.color }}>
                              {rank.code}
                            </span>
                            <span className="text-xs font-mono font-semibold" style={{ color: rank.color }}>
                              {rank.hours}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold font-serif text-white mb-1">{rank.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{rank.description}</p>
                        </div>
                      </div>

                      {/* Access unlocked */}
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: rank.color }}>
                          Access Unlocked
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                          {rank.access.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: rank.color }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_50%,rgba(244,124,32,0.06),transparent)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold font-serif text-white mb-3">Ready to start your climb?</h2>
          <p className="text-muted-foreground mb-8">Pass the quiz, join the Discord, and begin logging hours as a Cadet today.</p>
          <Link href="/quiz">
            <span
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 cursor-pointer"
              style={{ background: "linear-gradient(90deg,#F47C20,#2563EB)", boxShadow: "0 0 24px rgba(244,124,32,0.30)" }}
            >
              Take the Membership Quiz
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
