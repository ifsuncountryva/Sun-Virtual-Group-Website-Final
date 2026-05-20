import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Fleet() {
  const fleet = [
    {
      type: "Boeing 737-700",
      airline: "Sun Country",
      seating: "126 / 138",
      range: "3,010 nmi",
      image: "/images/fleet-737-800.png" // using available asset
    },
    {
      type: "Boeing 737-800",
      airline: "Sun Country",
      seating: "162 / 189",
      range: "2,935 nmi",
      image: "/images/fleet-737-800.png"
    },
    {
      type: "Boeing 737 MAX 8",
      airline: "Sun Country",
      seating: "162 / 189",
      range: "3,550 nmi",
      image: "/images/fleet-737-800.png"
    },
    {
      type: "Airbus A319",
      airline: "Allegiant",
      seating: "156",
      range: "3,750 nmi",
      image: "/images/fleet-a320.png"
    },
    {
      type: "Airbus A320",
      airline: "Allegiant",
      seating: "177 / 186",
      range: "3,300 nmi",
      image: "/images/fleet-a320.png"
    },
    {
      type: "Airbus A220",
      airline: "Allegiant",
      seating: "135",
      range: "3,450 nmi",
      image: "/images/fleet-a320.png" // conceptual asset for now
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-white">Our Fleet</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse collection of modern narrowbody aircraft powering our extensive network across North America.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((aircraft, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-card border-border overflow-hidden h-full flex flex-col">
                <div className="h-48 bg-muted/20 p-4 flex items-center justify-center">
                  <img 
                    src={aircraft.image} 
                    alt={aircraft.type} 
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-serif">{aircraft.type}</h3>
                    <Badge variant={aircraft.airline === "Sun Country" ? "default" : "secondary"}>
                      {aircraft.airline}
                    </Badge>
                  </div>
                  
                  <div className="mt-auto space-y-3 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Typical Seating</span>
                      <span className="font-medium text-white">{aircraft.seating}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Max Range</span>
                      <span className="font-medium text-white">{aircraft.range}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
