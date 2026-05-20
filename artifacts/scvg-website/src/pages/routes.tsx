import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Routes() {
  const [searchTerm, setSearchTerm] = useState("");

  const hubs = [
    { code: "MSP", city: "Minneapolis", airline: "Sun Country", type: "Primary Hub" },
    { code: "LAS", city: "Las Vegas", airline: "Dual Operation", type: "Primary Hub" },
    { code: "LAX", city: "Los Angeles", airline: "Sun Country", type: "Focus City" },
    { code: "PIE", city: "Tampa/St. Pete", airline: "Allegiant", type: "Primary Hub" },
    { code: "SFB", city: "Orlando/Sanford", airline: "Allegiant", type: "Primary Hub" },
  ];

  const destinations = [
    "BZN (Bozeman)", "DEN (Denver)", "BOS (Boston)", "MCO (Orlando)", 
    "MIA (Miami)", "ORD (Chicago)", "DFW (Dallas/Fort Worth)", 
    "PHX (Phoenix)", "SLC (Salt Lake City)", "SEA (Seattle)", 
    "PDX (Portland)", "SAN (San Diego)"
  ];

  const filteredHubs = hubs.filter(hub => 
    hub.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
    hub.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDestinations = destinations.filter(dest => 
    dest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-white">Route Network</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our extensive network spanning coast to coast, serving major hubs and leisure destinations.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              type="text"
              placeholder="Search hubs or destinations..."
              className="pl-10 py-6 text-lg bg-card border-border"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold font-serif mb-6 text-white flex items-center gap-2">
              <MapPin className="text-primary" /> Operational Hubs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredHubs.map((hub, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-3xl font-bold text-white">{hub.code}</h3>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {hub.airline}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-1">{hub.city}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{hub.type}</p>
                  </CardContent>
                </Card>
              ))}
              {filteredHubs.length === 0 && <p className="text-muted-foreground">No hubs match your search.</p>}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold font-serif mb-6 text-white flex items-center gap-2">
              <MapPin className="text-secondary" /> Featured Destinations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredDestinations.map((dest, i) => (
                <div key={i} className="bg-card/50 border border-border p-4 rounded-lg text-center hover:border-primary transition-colors">
                  <span className="font-medium text-muted-foreground">{dest}</span>
                </div>
              ))}
              {filteredDestinations.length === 0 && <p className="text-muted-foreground col-span-full">No destinations match your search.</p>}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
