// ─────────────────────────────────────────────────────────────────────────────
//  SCXV SPOTLIGHT — edit this file to update the home page each month
// ─────────────────────────────────────────────────────────────────────────────
//
//  HOW TO UPDATE:
//  1. Open this file in Replit (artifacts/scvg-website/src/data/spotlight.ts)
//  2. Change the values below — text between the quotes
//  3. Save the file (Ctrl+S) — the site reloads automatically
//
// ─────────────────────────────────────────────────────────────────────────────

export const airportOfTheMonth = {
  code: "MSP",
  name: "Minneapolis–Saint Paul International",
  state: "Minnesota",
  note: "Our home base and the heart of Sun Country operations. A great month to fly leisure routes out of the Twin Cities.",
  division: "Sun Country",   // "Sun Country" | "Allegiant" | "Both"
};

export const airlineOfTheMonth = {
  name: "Sun Country Airlines",
  shortName: "Sun Country",
  note: "Celebrating our founding airline and the 737-800 that started it all. Bonus XP for Sun Country scheduled operations this month.",
  division: "Sun Country",   // "Sun Country" | "Allegiant"
};

// ─────────────────────────────────────────────────────────────────────────────
//  ANNOUNCEMENTS — add new items to the TOP of this list (newest first)
//  Each item needs: date, title, body
//  To remove an old one, delete its { } block and the comma after it
// ─────────────────────────────────────────────────────────────────────────────

export const announcements: {
  date: string;
  title: string;
  body: string;
  tag?: string;
}[] = [
  {
    date: "May 2026",
    title: "Welcome to the new SCXV website!",
    tag: "News",
    body: "Our brand-new site is live — explore the Handbook, check out the Route Network, and take the membership quiz to join the group on Discord.",
  },
  {
    date: "May 2026",
    title: "Allegiant Division Now Open",
    tag: "Operations",
    body: "SCXV is officially expanding with Allegiant Air operations. Members at First Officer rank and above can now fly Allegiant routes and the 737-8-200 MAX.",
  },
];
