import { useState } from "react";
import { motion } from "framer-motion";

const SC = "#F47C20";
const G4 = "#2563EB";
const BOTH = "#c084fc";

// Map coordinate helpers — viewBox 900×520
// Lon range: -128° → -65° (63° span), Lat range: 23° → 50° (27° span)
const mx = (lon: number) => ((lon + 128) / 63) * 870 + 15;
const my = (lat: number) => ((50 - lat) / 27) * 490 + 15;

type Airport = {
  code: string;
  name: string;
  lat: number;
  lon: number;
  division: "sc" | "g4" | "both";
  type: string;
};

const airports: Airport[] = [
  { code: "MSP", name: "Minneapolis",          lat: 44.9,  lon: -93.2,  division: "sc",   type: "Primary Hub" },
  { code: "DFW", name: "Dallas / Fort Worth",  lat: 32.9,  lon: -97.0,  division: "sc",   type: "Focus City" },
  { code: "LAX", name: "Los Angeles",           lat: 34.0,  lon: -118.4, division: "sc",   type: "Focus City" },
  { code: "SFO", name: "San Francisco",         lat: 37.6,  lon: -122.4, division: "sc",   type: "Focus City" },
  { code: "PDX", name: "Portland",              lat: 45.5,  lon: -122.6, division: "sc",   type: "Focus City" },
  { code: "LAS", name: "Las Vegas",             lat: 36.1,  lon: -115.2, division: "g4",   type: "Operating Base" },
  { code: "AZA", name: "Phoenix – Mesa",        lat: 33.4,  lon: -111.7, division: "g4",   type: "Operating Base" },
  { code: "FLL", name: "Fort Lauderdale",       lat: 26.1,  lon: -80.1,  division: "g4",   type: "Operating Base" },
  { code: "PIE", name: "St. Pete / Clearwater", lat: 27.9,  lon: -82.7,  division: "g4",   type: "Operating Base" },
  { code: "SFB", name: "Sanford / Orlando",     lat: 28.8,  lon: -81.2,  division: "g4",   type: "Operating Base" },
];

type Route = { from: string; to: string; division: "sc" | "g4" | "both" };

const routes: Route[] = [
  { from: "MSP", to: "DFW", division: "sc" },
  { from: "MSP", to: "LAX", division: "sc" },
  { from: "MSP", to: "SFO", division: "sc" },
  { from: "MSP", to: "PDX", division: "sc" },
  { from: "LAS", to: "FLL", division: "g4" },
  { from: "LAS", to: "PIE", division: "g4" },
  { from: "LAS", to: "SFB", division: "g4" },
  { from: "AZA", to: "FLL", division: "g4" },
  { from: "AZA", to: "PIE", division: "g4" },
  { from: "AZA", to: "SFB", division: "g4" },
  { from: "LAS", to: "MSP", division: "both" },
];

const divColor = (d: "sc" | "g4" | "both") =>
  d === "sc" ? SC : d === "g4" ? G4 : BOTH;

// Simplified US outline path (approximate, recognizable)
const US_PATH =
  "M 56,40 L 88,22 L 247,22 L 345,22 L 451,26 " +
  "L 572,130 L 638,156 L 752,102 L 855,58 " +
  "L 822,165 L 769,184 L 744,222 L 714,304 " +
  "L 682,350 L 682,460 L 673,482 " +
  "L 643,421 L 596,376 L 562,376 " +
  "L 486,388 L 439,455 L 337,384 " +
  "L 248,354 L 163,332 L 89,240 " +
  "L 66,162 L 56,40 Z";

// Great Lakes rough shape
const GREAT_LAKES = [
  "M 598,138 Q 610,130 625,135 L 638,155 Q 620,160 605,155 Z",
  "M 638,140 Q 655,130 670,136 L 672,152 Q 658,155 642,148 Z",
];

export function Routes() {
  const [hovered, setHovered] = useState<string | null>(null);

  const getAirport = (code: string) => airports.find((a) => a.code === code)!;

  const hoveredAirport = hovered ? getAirport(hovered) : null;

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <div className="relative pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_0%,rgba(244,124,32,0.11),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_0%,rgba(37,99,235,0.13),transparent)]" />
        <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg,#F47C20 0%,#2563EB 100%)" }} />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4 text-center">
          <h1
            className="text-5xl md:text-7xl font-bold font-serif mb-4"
            style={{ background: "linear-gradient(90deg,#fff 40%,#F47C20 70%,#2563EB 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Route Network
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our network spanning coast to coast — Sun Country's leisure roots out of MSP, plus Allegiant's nationwide reach.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl pb-20 space-y-12">

        {/* ── Legend ── */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-6 justify-center pt-6">
          {[
            { label: "Sun Country",     color: SC,   dot: true },
            { label: "Allegiant Air",   color: G4,   dot: true },
            { label: "Dual Operation",  color: BOTH, dot: true },
            { label: "Primary Hub",     color: "#fff", shape: "ring" },
            { label: "Focus City / Base", color: "rgba(255,255,255,0.5)", shape: "dot" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              {l.shape === "ring" ? (
                <span className="w-3.5 h-3.5 rounded-full border-2 border-white" />
              ) : l.shape === "dot" ? (
                <span className="w-3 h-3 rounded-full bg-white/50" />
              ) : (
                <span className="w-3 h-3 rounded-full" style={{ background: l.color }} />
              )}
              {l.label}
            </div>
          ))}
        </motion.div>

        {/* ── Interactive SVG Map ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-white/8"
          style={{ background: "rgba(13,27,62,0.70)" }}
        >
          <div className="relative">
            {/* Tooltip */}
            {hoveredAirport && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <div className="rounded-xl border px-4 py-2 text-center backdrop-blur-md"
                  style={{
                    background: "rgba(13,27,62,0.90)",
                    borderColor: hoveredAirport.division === "sc" ? "rgba(244,124,32,0.5)"
                      : hoveredAirport.division === "g4" ? "rgba(37,99,235,0.5)"
                      : "rgba(192,132,252,0.5)",
                  }}>
                  <span className="font-mono font-bold text-xl text-white">{hoveredAirport.code}</span>
                  <span className="text-muted-foreground text-sm ml-2">{hoveredAirport.name}</span>
                  <span className="ml-2 text-xs px-1.5 py-0.5 rounded font-semibold"
                    style={{
                      color: divColor(hoveredAirport.division),
                      background: `${divColor(hoveredAirport.division)}18`,
                    }}>
                    {hoveredAirport.type}
                  </span>
                </div>
              </div>
            )}

            <svg
              viewBox="0 0 900 520"
              className="w-full"
              style={{ display: "block" }}
            >
              {/* Background grid */}
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                </pattern>
                {/* Glow filters */}
                <filter id="glow-sc">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-g4">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <style>{`
                  @keyframes dash {
                    to { stroke-dashoffset: -24; }
                  }
                  .route-line { animation: dash 1.4s linear infinite; }
                `}</style>
              </defs>
              <rect width="900" height="520" fill="url(#grid)" />

              {/* US outline */}
              <path d={US_PATH}
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Great Lakes */}
              {GREAT_LAKES.map((p, i) => (
                <path key={i} d={p} fill="rgba(37,99,235,0.18)" stroke="rgba(37,99,235,0.30)" strokeWidth="1" />
              ))}

              {/* Route lines */}
              {routes.map((r) => {
                const a = getAirport(r.from);
                const b = getAirport(r.to);
                const ax = mx(a.lon), ay = my(a.lat);
                const bx = mx(b.lon), by = my(b.lat);
                const cx = (ax + bx) / 2, cy = Math.min(ay, by) - 40;
                const color = divColor(r.division);
                const isActive = hovered === r.from || hovered === r.to;
                return (
                  <path
                    key={`${r.from}-${r.to}`}
                    d={`M ${ax},${ay} Q ${cx},${cy} ${bx},${by}`}
                    fill="none"
                    stroke={color}
                    strokeWidth={isActive ? 2 : 1}
                    strokeOpacity={isActive ? 0.9 : 0.35}
                    strokeDasharray="6 6"
                    className="route-line"
                    style={{ transition: "stroke-opacity 0.2s, stroke-width 0.2s" }}
                  />
                );
              })}

              {/* Airport nodes */}
              {airports.map((ap) => {
                const x = mx(ap.lon);
                const y = my(ap.lat);
                const color = divColor(ap.division);
                const isPrimary = ap.type === "Primary Hub";
                const isHov = hovered === ap.code;
                return (
                  <g key={ap.code}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHovered(ap.code)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Pulse ring on hover */}
                    {isHov && (
                      <circle cx={x} cy={y} r={isPrimary ? 14 : 10}
                        fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" />
                    )}
                    {/* Outer ring for primary hubs */}
                    {isPrimary && (
                      <circle cx={x} cy={y} r={9}
                        fill="none" stroke={color} strokeWidth={isHov ? 2 : 1.5} strokeOpacity={isHov ? 1 : 0.8} />
                    )}
                    {/* Core dot */}
                    <circle cx={x} cy={y} r={isPrimary ? 5 : 4}
                      fill={isHov ? color : `${color}cc`}
                      style={{ transition: "r 0.15s, fill 0.15s" }}
                    />
                    {/* Label */}
                    <text
                      x={x}
                      y={y - (isPrimary ? 14 : 11)}
                      textAnchor="middle"
                      fill={isHov ? "#fff" : "rgba(255,255,255,0.75)"}
                      fontSize="10"
                      fontWeight={isPrimary ? "700" : "600"}
                      fontFamily="monospace"
                      style={{ pointerEvents: "none", transition: "fill 0.15s" }}
                    >
                      {ap.code}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Map footer */}
          <div className="border-t border-white/6 px-6 py-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-muted-foreground">
            <span>Hover over airports to explore</span>
            <span className="text-primary/60">· Sun Country hub: MSP</span>
            <span className="text-blue-400/60">· Allegiant bases: LAS · AZA · FLL · PIE · SFB</span>
            <span className="text-purple-400/60">· Purple routes = dual operations</span>
          </div>
        </motion.div>

        {/* ── Hawaii Operations ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border overflow-hidden"
          style={{ borderColor: "rgba(244,124,32,0.25)", background: "linear-gradient(135deg,rgba(244,124,32,0.06),rgba(37,99,235,0.06))" }}
        >
          <div className="p-6 border-b border-white/6">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl">🌺</span>
              <h2 className="text-2xl font-bold font-serif text-white">Hawaii Operations</h2>
              <span className="text-xs font-semibold px-2 py-1 rounded-full"
                style={{ background: "rgba(244,124,32,0.15)", color: SC, border: "1px solid rgba(244,124,32,0.30)" }}>
                Both Divisions
              </span>
            </div>
            <p className="text-muted-foreground text-sm mt-1">
              Both Sun Country and Allegiant feature Hawaii service. Hawaii routes connect western US cities to the islands — and Sun Country offers convenient MSP connections via LAX.
            </p>
          </div>

          <div className="p-6 grid md:grid-cols-2 gap-6">
            {/* Honolulu / Maui cards */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: BOTH }} />
                Hawaii Destinations (Both Airlines)
              </h3>
              <div className="space-y-2">
                {[
                  { code: "HNL", name: "Honolulu, Oahu", note: "Flagship Hawaii hub" },
                  { code: "OGG", name: "Kahului, Maui",  note: "Valley Isle" },
                ].map((d) => (
                  <div key={d.code} className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/3 px-4 py-2.5">
                    <span className="font-mono font-bold text-white text-sm w-10">{d.code}</span>
                    <span className="text-muted-foreground text-sm flex-1">{d.name}</span>
                    <span className="text-xs text-muted-foreground/60">{d.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Route summary */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: SC }} />
                Sun Country Hawaii Routing
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/3 px-4 py-2.5">
                  <span className="font-mono text-primary font-bold">MSP</span>
                  <span className="text-white/40">→</span>
                  <span className="font-mono text-primary font-bold">LAX</span>
                  <span className="text-white/40">→</span>
                  <span className="font-mono text-purple-300 font-bold">HNL / OGG</span>
                  <span className="ml-auto text-xs text-muted-foreground/60">Connection</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/3 px-4 py-2.5">
                  <span className="font-mono text-primary font-bold">SFO</span>
                  <span className="text-white/40">→</span>
                  <span className="font-mono text-purple-300 font-bold">HNL / OGG</span>
                  <span className="ml-auto text-xs text-muted-foreground/60">Nonstop</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/3 px-4 py-2.5">
                  <span className="font-mono text-primary font-bold">LAX</span>
                  <span className="text-white/40">→</span>
                  <span className="font-mono text-purple-300 font-bold">HNL / OGG</span>
                  <span className="ml-auto text-xs text-muted-foreground/60">Nonstop</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/60 mt-3">
                Allegiant also operates Hawaii service from select western US bases.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Division breakdown ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Sun Country */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: "rgba(244,124,32,0.30)", background: "linear-gradient(135deg,rgba(244,124,32,0.08),rgba(13,27,62,0.80))" }}
          >
            <div className="h-1" style={{ background: SC }} />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "rgba(244,124,32,0.20)", color: SC }}>SY</div>
                <h3 className="text-lg font-bold text-white">Sun Country Airlines</h3>
              </div>
              <div className="mb-3">
                <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: SC }}>Primary Hub</div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-mono font-bold text-white">MSP</span>
                  <span className="text-muted-foreground">Minneapolis-Saint Paul</span>
                  <span className="ml-auto text-xs px-1.5 py-0.5 rounded"
                    style={{ background: "rgba(244,124,32,0.15)", color: SC }}>Hub</span>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: SC }}>Focus Cities</div>
                <ul className="space-y-1">
                  {[
                    { code: "DFW", name: "Dallas / Fort Worth" },
                    { code: "LAX", name: "Los Angeles" },
                    { code: "SFO", name: "San Francisco" },
                    { code: "PDX", name: "Portland" },
                  ].map((c) => (
                    <li key={c.code} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: SC }} />
                      <span className="font-mono text-white/70">{c.code}</span>
                      <span>{c.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Allegiant */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: "rgba(37,99,235,0.30)", background: "linear-gradient(135deg,rgba(37,99,235,0.10),rgba(13,27,62,0.80))" }}
          >
            <div className="h-1" style={{ background: G4 }} />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "rgba(37,99,235,0.20)", color: "#60a5fa" }}>G4</div>
                <h3 className="text-lg font-bold text-white">Allegiant Air</h3>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#60a5fa" }}>Operating Bases</div>
                <ul className="space-y-1">
                  {[
                    { code: "LAS", name: "Las Vegas (Harry Reid)" },
                    { code: "AZA", name: "Phoenix – Mesa Gateway" },
                    { code: "FLL", name: "Fort Lauderdale" },
                    { code: "PIE", name: "St. Petersburg / Clearwater" },
                    { code: "SFB", name: "Sanford / Orlando" },
                  ].map((c) => (
                    <li key={c.code} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: G4 }} />
                      <span className="font-mono text-white/70">{c.code}</span>
                      <span>{c.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
