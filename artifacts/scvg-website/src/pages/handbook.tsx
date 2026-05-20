import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export function Handbook() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background flex justify-center">
      <div className="container px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white">Pilot Handbook</h1>
          <p className="text-xl text-muted-foreground">Official documentation and standard operating procedures for the Sun Country Virtual Group.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-2xl"
        >
          <div className="prose prose-invert prose-blue max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-white prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-p:text-muted-foreground">
            
            <h2>Welcome & Introduction</h2>
            <p>
              Welcome to the Sun Country Virtual Group (SCVG). This handbook serves as the primary source of truth for all operations, rules, and procedures within our organization. Whether you are flying a Sun Country 737 out of Minneapolis or an Allegiant A320 out of Las Vegas, the standards herein apply universally. We are committed to fostering a professional, realistic, and welcoming environment for virtual aviators of all skill levels.
            </p>

            <h2>Group Rules & Code of Conduct</h2>
            <p>
              Our community thrives on mutual respect and a shared passion for aviation. All members are expected to conduct themselves professionally.
            </p>
            <ul>
              <li><strong>treat all members with respect and professionalism at all times.</strong> Harassment, discrimination, or toxic behavior will not be tolerated and is grounds for immediate dismissal.</li>
              <li>Maintain a constructive attitude in Discord and on external networks (VATSIM, IVAO).</li>
              <li>Respect the decisions of the staff and moderation team.</li>
            </ul>

            <h2>Flight Operations Standards</h2>
            <p>
              SCVG utilizes custom smartACARS software for flight tracking. To ensure flights are logged accurately and fairly:
            </p>
            <ul>
              <li>Pilots must <strong>complete the flight log with all required fields before submitting a flight report.</strong> Incomplete logs may be rejected by the system.</li>
              <li>Simulation rate must remain at 1x for the entirety of the flight.</li>
              <li>Pause functions are highly discouraged except for emergencies.</li>
              <li>If sim crash occurs, file a PIREP and note the technical issue in the flight log. Do not artificially alter your location to resume.</li>
            </ul>

            <h2>Radio & ATC Procedures</h2>
            <p>
              While offline flying is permitted, flying on networks like VATSIM or IVAO is highly encouraged. When interacting with Air Traffic Control:
            </p>
            <ul>
              <li><strong>Proper ICAO phraseology is required for all ATC communication.</strong></li>
              <li>Use the correct callsigns: "SUN COUNTRY" for SCX flights, and "ALLEGIANT" for AAY flights.</li>
              <li>If you are unfamiliar with ATC procedures, please utilize our training resources before flying into busy, controlled airspace.</li>
            </ul>

            <h2>Aircraft Operating Minimums</h2>
            <p>
              Safety and realism dictate that pilots operate their aircraft within certified limits.
            </p>
            <ul>
              <li>Do not exceed Maximum Takeoff Weight (MTOW) or Maximum Landing Weight (MLW).</li>
              <li>Adhere to weather minimums. Diversions to alternate airports are a normal part of aviation and are fully supported by our tracking system.</li>
              <li>Ensure sufficient block fuel is loaded, including trip, contingency, alternate, and final reserve fuel.</li>
            </ul>

            <h2>Rank & Progression System</h2>
            <p>
              Our unified rank structure rewards dedication and experience.
            </p>
            <ul>
              <li>Rank advancement follows real-world equivalent hours for each rank tier.</li>
              <li>New pilots begin as Trainees and progress through First Officer, Captain, and Senior Captain ranks based purely on approved flight hours.</li>
              <li>Certain heavy or long-haul airframes may be restricted until specific ranks are achieved.</li>
            </ul>

            <h2>Reporting Requirements</h2>
            <p>
              Active participation keeps our roster healthy and realistic.
            </p>
            <ul>
              <li>Pilots must submit at least one valid flight report every 30 days to remain on the active roster.</li>
              <li>Leaves of Absence (LOA) can be requested via the pilot dashboard for periods of inactivity extending up to 90 days.</li>
              <li>Failed PIREPs due to extreme landing rates (-600 fpm or worse) or blatant rule violations will trigger an automatic review by the Training Director.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
