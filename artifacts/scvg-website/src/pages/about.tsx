import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-white">About SCVG</h1>
          <p className="text-xl text-muted-foreground">The story of two distinct carriers united by a passion for virtual aviation.</p>
        </motion.div>

        <div className="space-y-16">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-serif mb-6 text-white">Our Story & The Merger</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p>
                The Sun Country Virtual Group (SCVG) began as a dedicated community for simulation pilots who shared a passion for Sun Country Airlines. Focusing on meticulous 737 operations out of Minneapolis, the group quickly grew a reputation for professionalism and a warm community atmosphere.
              </p>
              <p>
                As the virtual aviation landscape evolved, an opportunity presented itself. Allegiant Virtual, known for its extensive Airbus operations and leisure-focused route network, shared a similar operational philosophy and community spirit.
              </p>
              <p>
                In a historic move for our community, the two organizations merged to form the Sun Country Virtual Group. This strategic alliance allows pilots to fly an incredibly diverse network, operating both Boeing and Airbus narrowbodies under a single, unified leadership and tracking system.
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-serif mb-6 text-white">Mission & Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Realism First</h3>
                  <p className="text-muted-foreground">We strive to replicate real-world airline operations as closely as possible within the constraints of modern flight simulators, emphasizing proper procedures and airmanship.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Community Driven</h3>
                  <p className="text-muted-foreground">A virtual airline is nothing without its pilots. We foster an inclusive, supportive environment where aviators of all skill levels can learn and grow together.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Operational Excellence</h3>
                  <p className="text-muted-foreground">From dispatch to landing, we maintain high standards. Our resources, training, and tracking systems are designed to encourage operational excellence.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Continuous Evolution</h3>
                  <p className="text-muted-foreground">As simulation technology and real-world aviation change, so do we. We continually update our routes, fleet, and procedures to reflect reality.</p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-serif mb-6 text-white">Leadership Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { role: "Chief Executive Officer", name: "SCVG CEO" },
                { role: "Chief Operating Officer", name: "SCVG COO" },
                { role: "Hub Manager - MSP", name: "MSP Manager" },
                { role: "Hub Manager - LAS", name: "LAS Manager" },
                { role: "Events Coordinator", name: "Events Lead" },
                { role: "Training Director", name: "Training Lead" },
              ].map((leader, i) => (
                <Card key={i} className="bg-card border-border text-center py-6">
                  <CardContent className="p-0">
                    <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-muted-foreground">
                      {leader.name.charAt(0)}
                    </div>
                    <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                    <p className="text-sm text-primary">{leader.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
