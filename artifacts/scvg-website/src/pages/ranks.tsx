import { motion } from "framer-motion";

const ranks = [
  {
    id: 1,
    title: "Cadet",
    code: "CDT",
    stripes: 0,
    color: "#94a3b8",
    glowColor: "rgba(148,163,184,0.25)",
    division: "Both",
    requirements: [
      "Pass the SCXV membership quiz with 100%",
      "Join the official SCXV Discord server",
      "Complete your pilot profile and claim your callsign",
    ],
    privileges: [
      "Access to the SCXV Discord community",
      "Fly Sun Country routes as an observer",
      "Access to the SCXV Handbook and training materials",
    ],
    note: "Your starting rank. All new members enter as Cadets after passing the quiz.",
  },
  {
    id: 2,
    title: "Second Officer",
    code: "S/O",
    stripes: 1,
    color: "#94a3b8",
    glowColor: "rgba(148,163,184,0.25)",
    division: "Sun Country",
    requirements: [
      "Hold Cadet rank",
      "Complete 5 logged Sun Country flights",
      "Minimum 3 hours total flight time",
      "Submit a flight report for at least one flight",
    ],
    privileges: [
      "All Cadet privileges",
      "Fly any Sun Country scheduled route",
      "Access to SCXV flight tracking",
      "Eligible for monthly flight awards",
    ],
    note: "Your first stripe. You're now an active Sun Country pilot.",
  },
  {
    id: 3,
    title: "First Officer",
    code: "F/O",
    stripes: 2,
    color: "#F47C20",
    glowColor: "rgba(244,124,32,0.30)",
    division: "Both",
    requirements: [
      "Hold Second Officer rank",
      "Complete 20 total logged flights",
      "Minimum 15 hours total flight time",
      "Fly at least 3 different Sun Country routes",
    ],
    privileges: [
      "All Second Officer privileges",
      "Cleared to fly Allegiant Air routes",
      "Access to the Allegiant fleet (A320, 737 MAX)",
      "Eligible for special events and group flights",
    ],
    note: "The gateway rank. First Officers unlock Allegiant operations.",
  },
  {
    id: 4,
    title: "Senior First Officer",
    code: "SR F/O",
    stripes: 2,
    color: "#F47C20",
    glowColor: "rgba(244,124,32,0.30)",
    division: "Both",
    requirements: [
      "Hold First Officer rank",
      "Complete 50 total logged flights",
      "Minimum 40 hours total flight time",
      "Fly routes for both Sun Country and Allegiant",
      "Maintain a clean conduct record",
    ],
    privileges: [
      "All First Officer privileges",
      "Priority slot booking for group events",
      "Display Senior F/O badge in Discord",
      "Eligible to assist new Cadets",
    ],
    note: "A seasoned line pilot with experience across both divisions.",
  },
  {
    id: 5,
    title: "Captain",
    code: "CPT",
    stripes: 4,
    color: "#2563EB",
    glowColor: "rgba(37,99,235,0.35)",
    division: "Both",
    requirements: [
      "Hold Senior First Officer rank",
      "Complete 100 total logged flights",
      "Minimum 80 hours total flight time",
      "Fly at least 10 unique routes across both divisions",
      "Endorsed by a member of leadership",
    ],
    privileges: [
      "All Senior F/O privileges",
      "Full Captain privileges across all SCXV routes",
      "Can lead and organise group flights",
      "Eligible for Captain of the Month recognition",
      "Access to advanced training routes",
    ],
    note: "The command rank. Captains lead the line and set the standard.",
  },
  {
    id: 6,
    title: "Senior Captain",
    code: "SR CPT",
    stripes: 4,
    color: "#2563EB",
    glowColor: "rgba(37,99,235,0.35)",
    division: "Both",
    requirements: [
      "Hold Captain rank",
      "Complete 200 total logged flights",
      "Minimum 160 hours total flight time",
      "Demonstrated leadership in the community",
      "Nominated and approved by leadership",
    ],
    privileges: [
      "All Captain privileges",
      "Senior Captain badge and distinction",
      "Eligible for Staff Advisory roles",
      "Input on route network expansions",
      "Mentor status — formally guide new pilots",
    ],
    note: "Elite veterans who represent the best of SCXV operations.",
  },
  {
    id: 7,
    title: "Chief Pilot",
    code: "CP",
    stripes: 4,
    color: "#F47C20",
    glowColor: "rgba(244,124,32,0.50)",
    division: "Both",
    requirements: [
      "Appointed by the Founder — not applied for",
      "Demonstrated exceptional commitment to SCXV",
      "Hold Senior Captain rank",
    ],
    privileges: [
      "All Senior Captain privileges",
      "Full operational authority across both divisions",
      "Input on all SCXV policy decisions",
      "Staff-level Discord permissions",
    ],
    note: "Leadership appointment only. Reserved for the most trusted veterans.",
  },
];

function Epaulette({ stripes, color, size = "md" }: { stripes: number; color: string; size?: "sm" | "md" }) {
  const barH = size === "sm" ? "h-1" : "h-1.5";
  const w = size === "sm" ? "w-10" : "w-14";
  const gap = size === "sm" ? "gap-0.5" : "gap-1";
  return (
    <div className={`flex flex-col ${gap} items-center`}>
      <div className={`${w} h-6 rounded-sm`} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }} />
      <div className={`flex flex-col items-center ${gap}`}>
        {Array.from({ length: stripes }).map((_, i) => (
          <div key={i} className={`${w} ${barH} rounded-full`} style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
        ))}
        {stripes === 0 && <div className={`${w} ${barH} rounded-full opacity-20`} style={{ background: color }} />}
      </div>
    </div>
  );
}

export function Ranks() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Page hero */}
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
              Every pilot starts as a Cadet. Fly more, earn more — your rank reflects your commitment and experience across both divisions.
            </p>
          </motion.div>
          {/* Gradient rule */}
          <div className="mt-10 mx-auto max-w-xs h-px" style={{ background: "linear-gradient(90deg,transparent,#F47C20 30%,#2563EB 70%,transparent)" }} />
        </div>
      </section>

      {/* Rank cards */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            {/* Vertical progress line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-px hidden md:block"
              style={{ background: "linear-gradient(180deg,#F47C20 0%,#2563EB 100%)" }} />

            <div className="space-y-5">
              {ranks.map((rank, i) => (
                <motion.div
                  key={rank.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="md:ml-14 relative"
                >
                  {/* Step node on the timeline */}
                  <div className="hidden md:flex absolute -left-14 top-6 w-7 h-7 rounded-full items-center justify-center text-xs font-bold z-10"
                    style={{ background: rank.color, boxShadow: `0 0 14px ${rank.glowColor}`, color: "#fff" }}>
                    {rank.id}
                  </div>

                  <div className="rounded-xl border overflow-hidden"
                    style={{ borderColor: `${rank.color}30`, background: "rgba(255,255,255,0.02)" }}>
                    {/* Top accent line */}
                    <div className="h-0.5" style={{ background: `linear-gradient(90deg,${rank.color},transparent)` }} />

                    <div className="p-6">
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-4">
                          <Epaulette stripes={rank.stripes} color={rank.color} />
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                                style={{ background: `${rank.color}20`, color: rank.color }}>
                                {rank.code}
                              </span>
                              {rank.division === "Both" ? (
                                <span className="text-xs text-muted-foreground">Sun Country + Allegiant</span>
                              ) : (
                                <span className="text-xs text-muted-foreground">{rank.division} only</span>
                              )}
                            </div>
                            <h3 className="text-2xl font-bold font-serif text-white">{rank.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1 max-w-lg">{rank.note}</p>
                          </div>
                        </div>
                      </div>

                      {/* Requirements + Privileges */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: rank.color }}>
                            Requirements
                          </div>
                          <ul className="space-y-1.5">
                            {rank.requirements.map((r, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: rank.color }} />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                            Privileges
                          </div>
                          <ul className="space-y-1.5">
                            {rank.privileges.map((p, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-white/20" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
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
          <p className="text-muted-foreground mb-8">Pass the quiz, join the Discord, and claim your Cadet rank today.</p>
          <a
            href="/quiz"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(90deg,#F47C20,#2563EB)", boxShadow: "0 0 24px rgba(244,124,32,0.30)" }}
          >
            Take the Membership Quiz
          </a>
        </div>
      </section>
    </div>
  );
}
