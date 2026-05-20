import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Users, Globe, ChevronRight, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-border">
        {/* Background gradient/pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background z-0" />
        
        <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 w-64 md:w-96 rounded-xl bg-white p-4 shadow-2xl"
          >
            <img src="/logo-full.jpeg" alt="SCVG Logo" className="w-full h-auto" />
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
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-y border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users className="w-6 h-6 text-primary mb-2 mx-auto" />, stat: "500+", label: "Active Pilots" },
              { icon: <Globe className="w-6 h-6 text-primary mb-2 mx-auto" />, stat: "120+", label: "Destinations" },
              { icon: <Plane className="w-6 h-6 text-primary mb-2 mx-auto" />, stat: "5,000+", label: "Monthly Flights" },
              { icon: <Award className="w-6 h-6 text-primary mb-2 mx-auto" />, stat: "99.9%", label: "Realism Rate" },
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
      </section>

      {/* Our Story Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-6">
                Sun Country at Heart. A Group by Choice.
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
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
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
                <Card className="bg-primary/10 border-primary/30 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Founded 2023</div>
                    <h3 className="font-bold text-xl mb-2 text-white">Sun Country</h3>
                    <p className="text-sm text-muted-foreground">Our home. Boeing 737 ops out of MSP.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border overflow-hidden mt-8 group">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">Minneapolis</h3>
                    <p className="text-sm text-muted-foreground">Primary Hub — MSP</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="bg-card border-border overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Now Joining</div>
                    <h3 className="font-bold text-xl mb-2 text-white">Allegiant</h3>
                    <p className="text-sm text-muted-foreground">Airbus ops expanding our reach.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border overflow-hidden mt-8 group">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">Las Vegas</h3>
                    <p className="text-sm text-muted-foreground">Allegiant Hub — LAS</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-white">Modern Fleet</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Command a diverse fleet of narrowbody aircraft tailored for efficiency and range.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border border-border flex flex-col items-center"
            >
              <img src="/images/fleet-737-800.png" alt="Boeing 737" className="w-full h-auto mb-4 object-contain" />
              <h3 className="text-2xl font-bold font-serif mb-2">Boeing 737 Family</h3>
              <p className="text-muted-foreground mb-4">The backbone of Sun Country operations.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background rounded-xl p-6 border border-border flex flex-col items-center"
            >
              <img src="/images/fleet-a320.png" alt="Airbus A320" className="w-full h-auto mb-4 object-contain" />
              <h3 className="text-2xl font-bold font-serif mb-2">Airbus A320 Family</h3>
              <p className="text-muted-foreground mb-4">Powering the Allegiant route network.</p>
            </motion.div>
          </div>
          
          <div className="mt-12">
            <Link href="/fleet">
              <Button variant="outline" size="lg">Explore Full Fleet</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-white">Join the Ranks</h2>
            <p className="text-muted-foreground text-lg">Your career at SCVG starts with three simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border z-0" />
            
            {[
              { step: "01", title: "Read the Handbook", desc: "Familiarize yourself with our operational standards and code of conduct." },
              { step: "02", title: "Pass the Quiz", desc: "Demonstrate your knowledge in a quick 10-question multiple choice exam." },
              { step: "03", title: "Take the Skies", desc: "Gain access to our Discord, claim your pilot ID, and log your first flight." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center bg-background p-6 rounded-xl border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
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
    </div>
  );
}
