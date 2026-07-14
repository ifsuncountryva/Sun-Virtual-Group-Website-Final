import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Users, Globe, ChevronRight, Award, ShieldCheck, MapPin, Star, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { announcements, airportOfTheMonth, airlineOfTheMonth } from "@/data/spotlight";

export function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-border">
        {/* Dual-airline gradient bg: warm orange glow left, Allegiant blue glow right */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_50%,rgba(244,124,32,0.15),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(37,99,235,0.18),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(13,27,62,0.0),rgba(13,27,62,0.7))]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
          {/* Logo — landscape, no clutter line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center gap-5"
          >
            <img
              src="/logo-mark-clean.png"
              alt="SCXV mark"
              className="h-24 md:h-32 w-auto"
              style={{ filter: "drop-shadow(0 0 32px rgba(244,124,32,0.75)) drop-shadow(0 0 64px rgba(244,124,32,0.35))" }}
            />
            <div className="text-left">
              <div className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight tracking-wide">
                Sun Country
              </div>
              <div
                className="text-3xl md:text-4xl font-serif font-bold leading-tight tracking-wide"
                style={{ background: "linear-gradient(90deg, #F47C20 0%, #2563EB 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Virtual Group
              </div>
            </div>
          </motion.div>

          <motion.h1
            {...fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 tracking-tight text-white"
          >
            Chasing the Sun <span className="text-primary">Since 2023</span>
          </motion.h1>

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            Sun Country Virtual Group is a professional virtual airline community rooted in Sun Country Airlines operations — now expanding with Allegiant Air to bring you more routes, more aircraft, and more sky to explore.
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/quiz">
              <Button size="lg" className="text-lg px-8 py-6 h-auto gap-2 w-full sm:w-auto">
                <Plane className="w-5 h-5" />
                Join the Group
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto w-full sm:w-auto">
                Discover Our Story
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom fade into stats bar */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-card to-transparent z-10" />
      </section>

      {/* ── Stats Bar ── gradient from SC-orange tint to Allegiant-blue tint */}
      <section className="relative py-12 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(244,124,32,0.08)] via-card to-[rgba(37,99,235,0.10)]" />
        {/* thin gradient rule at top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-primary via-transparent to-blue-500" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users className="w-6 h-6 mb-2 mx-auto text-primary" />, stat: "2023", label: "Founded" },
              { icon: <Globe className="w-6 h-6 mb-2 mx-auto text-primary" />, stat: "1,400+", label: "Combined Routes" },
              { icon: <Plane className="w-6 h-6 mb-2 mx-auto text-blue-400" />, stat: "2 Airlines", label: "Sun Country · Allegiant" },
              { icon: <Award className="w-6 h-6 mb-2 mx-auto text-blue-400" />, stat: "6", label: "Aircraft Types" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {item.icon}
                <div className="text-3xl font-bold font-serif text-white mb-1">{item.stat}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* ── Live Mode Feature Banner ── */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(244,124,32,0.07),transparent)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: "rgba(244,124,32,0.15)", color: "#F47C20", border: "1px solid rgba(244,124,32,0.30)" }}>
                ⚡ NEW FEATURE
              </span>
            </div>

            {/* Banner image — full width, clickable to handbook */}
            <Link href="/handbook#livemode">
              <div className="rounded-2xl overflow-hidden border border-primary/25 cursor-pointer group relative"
                style={{ boxShadow: "0 0 60px rgba(244,124,32,0.18), 0 0 120px rgba(244,124,32,0.06)" }}>
                <img
                  src="/live-mode-banner.png"
                  alt="Live Mode Has Landed — Sun Country Virtual Group"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                />
                {/* Overlay CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-white font-bold text-lg tracking-wide bg-primary/80 px-6 py-2 rounded-full backdrop-blur-sm">
                    Learn More in the Handbook →
                  </span>
                </div>
              </div>
            </Link>

            {/* Subtext */}
            <p className="text-center text-muted-foreground text-sm mt-4">
              Exclusive to <span className="text-primary font-semibold">Executive Flight Crew</span> rank · Limited beta via Infinite Flight waitlist ·{" "}
              <Link href="/ranks">
                <span className="text-blue-400 hover:text-blue-300 cursor-pointer underline underline-offset-2">See rank requirements</span>
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(244,124,32,0.3) 50%,transparent)" }} />

      {/* ── Our Story Teaser ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Combined badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-sm font-semibold border border-border"
                style={{ background: "linear-gradient(90deg, rgba(244,124,32,0.15), rgba(37,99,235,0.15))" }}>
                <span className="text-primary">Sun Country</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-blue-400">Allegiant</span>
                <span className="text-muted-foreground text-xs">at Heart</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
                Where We Come From
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We started in 2023 as Sun Country Virtual — a tight-knit group of sim pilots passionate about replicating Sun Country Airlines' leisure routes out of Minneapolis. What began as one airline grew into something bigger. With the real-world merger of Allegiant Air and Sun Country, we expanded our community into a full virtual group, adding Allegiant operations while keeping Sun Country at the core of everything we do.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-muted-foreground">Sun Country roots — Boeing 737 operations from MSP since 2023</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0" />
                  <span className="text-muted-foreground">Now expanded with Allegiant Airbus operations across the country</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-muted-foreground">One community, one standard, two great airlines</span>
                </li>
              </ul>
              <Link href="/about">
                <Button variant="link" className="p-0 text-primary hover:text-primary/80 gap-1 text-lg">
                  Read the full story <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex-1 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {/* Sun Country card — orange accent */}
                <Card className="border-primary/40 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, rgba(244,124,32,0.12), rgba(244,124,32,0.04))" }}>
                  <CardContent className="p-6">
                    <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Founded 2023</div>
                    <h3 className="font-bold text-xl mb-2 text-white">Sun Country</h3>
                    <p className="text-sm text-muted-foreground">Our home. Boeing 737 ops out of MSP.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border overflow-hidden mt-8">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-white">Minneapolis</h3>
                    <p className="text-sm text-muted-foreground">Primary Hub — MSP</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                {/* Allegiant card — blue accent */}
                <Card className="border-blue-500/40 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(37,99,235,0.04))" }}>
                  <CardContent className="p-6">
                    <div className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Now Joining</div>
                    <h3 className="font-bold text-xl mb-2 text-white">Allegiant</h3>
                    <p className="text-sm text-muted-foreground">Airbus ops expanding our reach.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border overflow-hidden mt-8">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-white">Las Vegas</h3>
                    <p className="text-sm text-muted-foreground">Allegiant Hub — LAS</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Gradient divider ── */}
      <div className="h-px bg-gradient-to-r from-primary/60 via-blue-500/60 to-primary/60" />

      {/* ── Fleet Preview ── */}
      <section className="py-24 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/ramp-aerial.jpeg" alt="" className="w-full h-full object-cover object-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
          {/* Side colour bleeds */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_15%_50%,rgba(244,124,32,0.12),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_85%_50%,rgba(37,99,235,0.14),transparent)]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-white">Our Fleet on the Ramp</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Sun Country and Allegiant flying side by side — just like our virtual group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SC card — orange border left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 border border-primary/30 flex flex-col items-center backdrop-blur-sm"
              style={{ background: "linear-gradient(135deg, rgba(244,124,32,0.10), rgba(13,27,62,0.85))" }}
            >
              <div className="h-44 flex items-center justify-center mb-4 w-full">
                <img src="/fleet-sc-737-clean.png" alt="Sun Country Boeing 737-800" className="h-full w-full object-contain"
                  style={{ filter: "drop-shadow(0 8px 24px rgba(244,124,32,0.35))" }} />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-1 text-white">Boeing 737-800</h3>
              <p className="text-primary text-sm font-semibold mb-1">Sun Country Division</p>
              <p className="text-muted-foreground text-sm">Scheduled routes and charter ops from MSP.</p>
            </motion.div>

            {/* Allegiant card — blue border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-xl p-6 border border-blue-500/30 flex flex-col items-center backdrop-blur-sm"
              style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(13,27,62,0.85))" }}
            >
              <div className="h-44 flex items-center justify-center mb-4 w-full">
                <img src="/fleet-g4-737max-clean.png" alt="Allegiant Boeing 737 MAX" className="h-full w-full object-contain"
                  style={{ filter: "drop-shadow(0 8px 24px rgba(37,99,235,0.40))" }} />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-1 text-white">Boeing 737-8-200 MAX</h3>
              <p className="text-blue-400 text-sm font-semibold mb-1">Allegiant Division</p>
              <p className="text-muted-foreground text-sm">High-density leisure routes across the network.</p>
            </motion.div>
          </div>

          <div className="mt-12">
            <Link href="/fleet">
              <Button variant="outline" size="lg" className="border-border/60 hover:border-primary/60">
                Explore Full Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Monthly Spotlight + Announcements ── */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(244,124,32,0.06),transparent)]" />
        <div className="container mx-auto px-4 relative z-10">

          {/* Section heading */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-6 w-1 rounded-full" style={{ background: "linear-gradient(180deg,#F47C20,#2563EB)" }} />
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">This Month at SCXV</h2>
            </div>
            <p className="text-muted-foreground ml-4">Spotlights and announcements from the leadership team.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Airport of the Month */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
              <div className="rounded-xl p-6 h-full border relative overflow-hidden"
                style={{ borderColor: "rgba(244,124,32,0.30)", background: "linear-gradient(135deg,rgba(244,124,32,0.10),rgba(13,27,62,0.85))" }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: "linear-gradient(90deg,#F47C20,transparent)" }} />
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                  <MapPin className="w-3.5 h-3.5" /> Airport of the Month
                </div>
                <div className="text-5xl font-bold font-mono text-white mb-1">{airportOfTheMonth.code}</div>
                <div className="text-lg font-semibold text-white mb-0.5">{airportOfTheMonth.name}</div>
                <div className="text-sm text-muted-foreground mb-4">{airportOfTheMonth.state}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{airportOfTheMonth.note}</p>
              </div>
            </motion.div>

            {/* Airline of the Month */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.10 }}>
              <div className="rounded-xl p-6 h-full border relative overflow-hidden"
                style={{ borderColor: "rgba(37,99,235,0.30)", background: "linear-gradient(135deg,rgba(37,99,235,0.10),rgba(13,27,62,0.85))" }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: "linear-gradient(90deg,#2563EB,transparent)" }} />
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
                  <Star className="w-3.5 h-3.5" /> Airline of the Month
                </div>
                <div className="text-3xl font-bold font-serif text-white mb-3">{airlineOfTheMonth.name}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{airlineOfTheMonth.note}</p>
              </div>
            </motion.div>

            {/* Announcements */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="rounded-xl p-6 h-full border border-white/8 relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  <Megaphone className="w-3.5 h-3.5" /> Announcements
                </div>
                <div className="space-y-4">
                  {announcements.slice(0, 3).map((a, i) => (
                    <div key={i} className={`${i > 0 ? "pt-4 border-t border-white/5" : ""}`}>
                      <div className="flex items-center gap-2 mb-1">
                        {a.tag && (
                          <span className="text-xs font-semibold px-1.5 py-0.5 rounded"
                            style={{ background: "rgba(244,124,32,0.15)", color: "#F47C20" }}>
                            {a.tag}
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground">{a.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{a.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{a.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(37,99,235,0.4) 50%,transparent)" }} />

      {/* ── Join the Ranks ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* subtle combined background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(37,99,235,0.07),transparent)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-white">Join the Ranks</h2>
            <p className="text-muted-foreground text-lg">Your career at SCXV starts with three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01", title: "Read the Handbook", desc: "Familiarize yourself with our operational standards and code of conduct.",
                gradient: "linear-gradient(135deg,#F47C20,#e06910)",
                glow: "rgba(244,124,32,0.30)"
              },
              {
                step: "02", title: "Pass the Quiz", desc: "Demonstrate your knowledge in a quick 10-question multiple choice exam.",
                gradient: "linear-gradient(135deg,#F47C20,#2563EB)",
                glow: "rgba(150,80,180,0.25)"
              },
              {
                step: "03", title: "Take the Skies", desc: "Gain access to our Discord, claim your pilot ID, and log your first flight.",
                gradient: "linear-gradient(135deg,#2563EB,#1d4ed8)",
                glow: "rgba(37,99,235,0.30)"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center bg-card p-8 rounded-xl border border-border relative overflow-hidden"
              >
                {/* Subtle gradient tint behind card */}
                <div className="absolute inset-0 opacity-5 rounded-xl" style={{ background: item.gradient }} />
                <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6"
                  style={{
                    background: item.gradient,
                    boxShadow: `0 0 24px ${item.glow}`
                  }}
                >
                  {item.step}
                </div>
                <h3 className="relative z-10 text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="relative z-10 text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/quiz">
              <Button size="lg" className="px-12 py-6 text-lg h-auto">Start Your Application</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom gradient rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </div>
  );
}
