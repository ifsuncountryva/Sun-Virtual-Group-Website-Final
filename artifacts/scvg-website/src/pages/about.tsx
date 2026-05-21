import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const SC_ORANGE = "rgba(244,124,32,";
const G4_BLUE   = "rgba(37,99,235,";

export function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_0%,rgba(244,124,32,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_0%,rgba(37,99,235,0.14),transparent)]" />
        <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg,#F47C20 0%,#2563EB 100%)" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            <span className="text-primary">Sun Country</span>
            <span>·</span>
            <span className="text-blue-400">Allegiant</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold font-serif mb-4"
            style={{ background: "linear-gradient(90deg,#fff 40%,#F47C20 70%,#2563EB 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            About SCXV
          </h1>
          <p className="text-xl text-muted-foreground">Chasing the Sun since 2023 — and now flying further than ever.</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl pb-20">
        <div className="space-y-20">

          {/* Our Story */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-7 w-1 rounded-full" style={{ background: "linear-gradient(180deg,#F47C20,#2563EB)" }} />
              <h2 className="text-3xl font-bold font-serif text-white">Our Story</h2>
            </div>
            <div className="prose prose-invert prose-lg max-w-none">
              <p>
                Sun Country Virtual was founded in 2023 by a group of flight sim enthusiasts who wanted to do one thing right: replicate the real Sun Country Airlines experience. That meant Boeing 737 operations, MSP as home base, and a community that treated virtual aviation with the same respect as the real thing. From day one, our motto has been simple — <em>Chasing the Sun.</em>
              </p>
              <p>
                We grew steadily, building a reputation for professionalism, realistic procedures, and a welcoming atmosphere for sim pilots of all experience levels. Sun Country is who we are, and that never changes.
              </p>
              <p>
                When Allegiant Air and Sun Country Airlines announced their real-world merger, it felt natural to reflect that in our virtual community. We evolved from a single virtual airline into the <strong>Sun Country Virtual Group</strong> — adding Allegiant operations to our network while keeping Sun Country squarely at the heart of everything we do. Allegiant brings more routes, more Airbus operations, and more sky to explore. But make no mistake: this is still Sun Country's home.
              </p>
            </div>
          </motion.section>

          {/* Gradient divider */}
          <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,#F47C20 30%,#2563EB 70%,transparent)" }} />

          {/* Mission & Values */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-7 w-1 rounded-full" style={{ background: "linear-gradient(180deg,#F47C20,#2563EB)" }} />
              <h2 className="text-3xl font-bold font-serif text-white">Mission & Values</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Realism First",
                  body: "We strive to replicate real-world airline operations as closely as possible within the constraints of modern flight simulators, emphasizing proper procedures and airmanship.",
                  accent: SC_ORANGE,
                },
                {
                  title: "Community Driven",
                  body: "A virtual airline is nothing without its pilots. We foster an inclusive, supportive environment where aviators of all skill levels can learn and grow together.",
                  accent: G4_BLUE,
                },
                {
                  title: "Operational Excellence",
                  body: "From dispatch to landing, we maintain high standards. Our resources, training, and tracking systems are designed to encourage operational excellence.",
                  accent: SC_ORANGE,
                },
                {
                  title: "Continuous Evolution",
                  body: "As simulation technology and real-world aviation change, so do we. We continually update our routes, fleet, and procedures to reflect reality.",
                  accent: G4_BLUE,
                },
              ].map((card, i) => (
                <Card
                  key={i}
                  className="border overflow-hidden"
                  style={{
                    borderColor: `${card.accent}0.3)`,
                    background: `linear-gradient(135deg,${card.accent}0.10),rgba(13,27,62,0.6))`,
                  }}
                >
                  <CardContent className="p-6">
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: card.accent === SC_ORANGE ? "#F47C20" : "#60a5fa" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground">{card.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Gradient divider */}
          <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,#2563EB 30%,#F47C20 70%,transparent)" }} />

          {/* Leadership Team */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-7 w-1 rounded-full" style={{ background: "linear-gradient(180deg,#2563EB,#F47C20)" }} />
              <h2 className="text-3xl font-bold font-serif text-white">Leadership Team</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-xl">
              {[
                { role: "Founder & CEO",  name: "flyinggoosey",    callsign: "Sun Country 001SY",  accent: SC_ORANGE },
                { role: "Chief Advisor",  name: "co-pilot-goosey", callsign: "Sun Country 003SY",  accent: SC_ORANGE },
              ].map((leader, i) => (
                <Card
                  key={i}
                  className="border text-center py-6 overflow-hidden"
                  style={{
                    borderColor: `${leader.accent}0.25)`,
                    background: `linear-gradient(135deg,${leader.accent}0.07),rgba(13,27,62,0.7))`,
                  }}
                >
                  <CardContent className="p-0">
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                      style={{ background: `linear-gradient(135deg,${leader.accent}0.6),${leader.accent}0.3))` }}
                    >
                      {leader.name.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="font-bold text-lg mb-1 text-white">{leader.name}</h3>
                    <p className="text-sm font-semibold mb-1" style={{ color: leader.accent === SC_ORANGE ? "#F47C20" : "#60a5fa" }}>
                      {leader.role}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground">{leader.callsign}</p>
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
