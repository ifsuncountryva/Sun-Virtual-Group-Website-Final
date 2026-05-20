import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Routes() {
  const [searchTerm, setSearchTerm] = useState("");

  const hubs = [
    { code: "MSP", city: "Minneapolis",     airline: "Sun Country",   type: "Primary Hub",    division: "sc" },
    { code: "LAS", city: "Las Vegas",       airline: "Dual Operation",type: "Primary Hub",    division: "both" },
    { code: "LAX", city: "Los Angeles",     airline: "Sun Country",   type: "Focus City",     division: "sc" },
    { code: "PIE", city: "Tampa / St. Pete",airline: "Allegiant",     type: "Primary Hub",    division: "g4" },
    { code: "SFB", city: "Orlando / Sanford",airline: "Allegiant",   type: "Primary Hub",    division: "g4" },
  ];

  const destinations = [
    "BZN (Bozeman)", "DEN (Denver)", "BOS (Boston)", "MCO (Orlando)",
    "MIA (Miami)", "ORD (Chicago)", "DFW (Dallas/Fort Worth)",
    "PHX (Phoenix)", "SLC (Salt Lake City)", "SEA (Seattle)",
    "PDX (Portland)", "SAN (San Diego)",
  ];

  const filtered = hubs.filter(
    (h) =>
      h.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.city.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredDests = destinations.filter((d) =>
    d.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const hubStyle = (div: string) => {
    if (div === "sc")   return { border: "rgba(244,124,32,0.35)", bg: "linear-gradient(135deg,rgba(244,124,32,0.10),rgba(13,27,62,0.7))", badge: "#F47C20", badgeBg: "rgba(244,124,32,0.12)" };
    if (div === "g4")   return { border: "rgba(37,99,235,0.35)",  bg: "linear-gradient(135deg,rgba(37,99,235,0.12),rgba(13,27,62,0.7))",  badge: "#60a5fa", badgeBg: "rgba(37,99,235,0.12)" };
    /* both */          return { border: "rgba(150,80,180,0.35)", bg: "linear-gradient(135deg,rgba(244,124,32,0.08),rgba(37,99,235,0.10))", badge: "#c084fc", badgeBg: "rgba(150,80,180,0.12)" };
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our network spanning coast to coast — Sun Country's leisure roots out of MSP, plus Allegiant's nationwide reach.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search hubs or destinations…"
              className="pl-10 py-6 text-lg bg-card border-border"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl pb-20 space-y-14">

        {/* Legend */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex flex-wrap gap-4 justify-center">
          {[
            { label: "Sun Country",    color: "#F47C20" },
            { label: "Allegiant",      color: "#60a5fa" },
            { label: "Dual Operation", color: "#c084fc" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-3 h-3 rounded-full" style={{ background: l.color }} />
              {l.label}
            </div>
          ))}
        </motion.div>

        {/* Hubs */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-6 w-1 rounded-full" style={{ background: "linear-gradient(180deg,#F47C20,#2563EB)" }} />
            <h2 className="text-2xl font-bold font-serif text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Operational Hubs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((hub, i) => {
              const s = hubStyle(hub.division);
              return (
                <Card key={i} className="border overflow-hidden" style={{ borderColor: s.border, background: s.bg }}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-4xl font-bold text-white font-mono">{hub.code}</h3>
                      <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ color: s.badge, background: s.badgeBg }}>
                        {hub.airline}
                      </span>
                    </div>
                    <p className="text-white font-medium mb-1">{hub.city}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{hub.type}</p>
                  </CardContent>
                </Card>
              );
            })}
            {filtered.length === 0 && <p className="text-muted-foreground col-span-full">No hubs match your search.</p>}
          </div>
        </motion.section>

        {/* Gradient divider */}
        <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,#F47C20 30%,#2563EB 70%,transparent)" }} />

        {/* Destinations */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-6 w-1 rounded-full" style={{ background: "linear-gradient(180deg,#2563EB,#F47C20)" }} />
            <h2 className="text-2xl font-bold font-serif text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" /> Featured Destinations
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredDests.map((dest, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 text-center transition-colors duration-200 hover:border-primary/50 hover:bg-primary/5 cursor-default"
                style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
              >
                <span className="font-mono text-sm text-muted-foreground">{dest}</span>
              </div>
            ))}
            {filteredDests.length === 0 && (
              <p className="text-muted-foreground col-span-full">No destinations match your search.</p>
            )}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
