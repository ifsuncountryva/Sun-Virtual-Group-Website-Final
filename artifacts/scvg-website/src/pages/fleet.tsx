import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

type Division = "All" | "Sun Country" | "Allegiant" | "Codeshare";

interface Aircraft {
  type: string;
  division: "Sun Country" | "Allegiant" | "Codeshare";
  role: string;
  cruiseSpeed: string;
  maxAlt?: string;
  image?: string;
  rankRequired?: string;
}

const fleet: Aircraft[] = [
  {
    type: "Boeing 737-800",
    division: "Sun Country",
    role: "Scheduled & Charter Operations",
    cruiseSpeed: "Mach 0.74 – 0.80",
    maxAlt: "FL410",
  },
  {
    type: "DC-10",
    division: "Sun Country",
    role: "Gemini Air Cargo",
    cruiseSpeed: "Mach 0.77 – 0.83",
    rankRequired: "Training Captain (400 hrs)",
  },
  {
    type: "Airbus A320",
    division: "Allegiant",
    role: "Primary Narrowbody",
    cruiseSpeed: "Mach 0.76 – 0.80",
    maxAlt: "FL390",
  },
  {
    type: "Boeing 737-8-200 MAX",
    division: "Allegiant",
    role: "High-Density Leisure Routes",
    cruiseSpeed: "Mach 0.74 – 0.80",
    maxAlt: "FL410",
  },
  {
    type: "Boeing 757-200",
    division: "Allegiant",
    role: "Longer Range Leisure Routes",
    cruiseSpeed: "Mach 0.77 – 0.81",
    maxAlt: "FL420",
  },
];

const codeshare = [
  { airline: "Aeroflot",              types: ["A320", "A333", "A359", "B739", "B77W"] },
  { airline: "Air Europa",            types: ["B738", "B789"] },
  { airline: "Aerolíneas Argentinas", types: ["E190", "B738", "A332"] },
  { airline: "Condor",               types: ["A321", "A333", "A339"] },
  { airline: "easyJet",              types: ["A319", "A320", "A21N"] },
  { airline: "Ice Air Virtual",       types: ["A21N", "B38M", "B39M", "B752"] },
  { airline: "jetBlue",              types: ["A223", "A320", "A321", "E190"] },
  { airline: "Norse",                types: ["B789"] },
  { airline: "Porter",               types: ["E295", "Q400"] },
  { airline: "REX",                  types: ["B738"] },
  { airline: "Royal Jordanian",      types: ["B788", "E175", "E190"] },
  { airline: "SkyAlps",             types: ["Q400"] },
];

const divisionColors: Record<string, string> = {
  "Sun Country": "bg-primary/10 text-primary border-primary/30",
  "Allegiant":   "bg-blue-500/10 text-blue-400 border-blue-400/30",
  "Codeshare":   "bg-muted text-muted-foreground border-border",
};

function AircraftImagePlaceholder({ type, image }: { type: string; image?: string }) {
  if (image) {
    return (
      <img
        src={image}
        alt={type}
        className="w-full h-full object-contain drop-shadow-xl"
      />
    );
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 opacity-30">
      <Plane className="w-14 h-14 text-primary" strokeWidth={1} />
      <span className="text-xs text-muted-foreground font-mono">{type}</span>
    </div>
  );
}

export function Fleet() {
  const [activeFilter, setActiveFilter] = useState<Division>("All");

  const filters: Division[] = ["All", "Sun Country", "Allegiant", "Codeshare"];

  const filtered = activeFilter === "All" || activeFilter === "Codeshare"
    ? fleet
    : fleet.filter((a) => a.division === activeFilter);

  const showCodeshare = activeFilter === "All" || activeFilter === "Codeshare";

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-white">Our Fleet</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From Sun Country's workhorse 737s to Allegiant's leisure narrowbodies and a 12-airline codeshare network.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              data-testid={`filter-${f.toLowerCase().replace(" ", "-")}`}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Main Fleet Grid */}
        {activeFilter !== "Codeshare" && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((aircraft, i) => (
                <motion.div
                  key={aircraft.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  data-testid={`aircraft-card-${i}`}
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col hover:border-primary/40 transition-colors duration-300">
                    {/* Image area */}
                    <div className="h-44 bg-gradient-to-b from-muted/30 to-muted/10 flex items-center justify-center p-4 relative">
                      <AircraftImagePlaceholder type={aircraft.type} image={aircraft.image} />
                      {/* Division badge top-right */}
                      <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full border ${divisionColors[aircraft.division]}`}>
                        {aircraft.division}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold font-serif text-white mb-1">{aircraft.type}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{aircraft.role}</p>

                      <div className="mt-auto space-y-2.5 pt-4 border-t border-border">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Cruise Speed</span>
                          <span className="font-mono text-xs text-foreground font-medium">{aircraft.cruiseSpeed}</span>
                        </div>
                        {aircraft.maxAlt && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Max Cruise Alt</span>
                            <span className="font-mono text-xs text-primary font-medium">{aircraft.maxAlt}</span>
                          </div>
                        )}
                        {aircraft.rankRequired && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Rank Required</span>
                            <Badge variant="outline" className="text-xs border-primary/40 text-primary">
                              {aircraft.rankRequired}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Codeshare Fleet */}
        {showCodeshare && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-border" />
              <h2 className="text-2xl font-bold font-serif text-white whitespace-nowrap">Codeshare Partners</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground text-sm text-center mb-8 max-w-xl mx-auto">
              Unlocked at <span className="text-primary font-semibold">First Officer</span> rank (40 hrs). Fly on behalf of 12 partner carriers using their aircraft types.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {codeshare.map((partner, i) => (
                <motion.div
                  key={partner.airline}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-4 hover:border-border/80 transition-colors"
                  data-testid={`codeshare-card-${i}`}
                >
                  <h4 className="font-semibold text-foreground mb-2">{partner.airline}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.types.map((t) => (
                      <span key={t} className="text-xs font-mono bg-muted text-muted-foreground px-2 py-0.5 rounded border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
