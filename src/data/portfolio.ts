// ─── All portfolio content lives here ───────────────────────────────────────
// Edit this file to update resume data — components read from these exports.

export const meta = {
  name: "Hansini Gundavarapu",
  title: "Data Science & Quantitative Economics",
  school: "Tufts University · Class of 2027",
  location: "Boston, MA",
  email: "hansini.gundavarapu@tufts.edu",
  emailPersonal: "hansinig101@gmail.com",
  phone: "(781) 929-0810",
  linkedin: "https://linkedin.com/in/hansini-gundavarapu-335768278",
  github: "https://github.com/hansini",
  tagline: "At the intersection of quantitative finance and full-stack engineering.",
  bio: "I'm a junior at Tufts University studying Data Science and Quantitative Economics. My work sits at the intersection of rigorous quantitative analysis and real-world application — from financial modeling and equity research to full-stack development and mapping tools that reach thousands of users.",
  roles: [
    "Equity Researcher",
    "Software Developer",
    "Financial Modeler",
    "Data Scientist",
    "Speaker Coach",
  ],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "finance" | "engineering" | "leadership";
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "JPMorgan Chase & Co.",
    role: "CareerED.YOU Fellow",
    period: "Sep 2025 – Nov 2025",
    location: "Remote",
    type: "finance",
    bullets: [
      "Selected for a competitive fellowship focused on investment banking, markets, risk management, and corporate finance led by senior JPMorgan analysts and associates.",
      "Applied equity research, valuation, and comparable company analysis frameworks across live workshops on capital markets, credit risk, and M&A structuring.",
    ],
  },
  {
    company: "Tufts University – JumboCode",
    role: "Software Developer",
    period: "Sep 2025 – May 2026",
    location: "Medford, MA",
    type: "engineering",
    bullets: [
      "Engineered a TypeScript + MapLibre mapping feature visualizing 100+ Massachusetts school data points, reducing client lookup time from hours to seconds.",
      "Collaborated on front-end and back-end improvements for a nonprofit case-management platform serving 1,000+ users.",
    ],
  },
  {
    company: "Tufts University – TEDxTufts",
    role: "Speaker Coach",
    period: "Sep 2025 – Apr 2026",
    location: "Medford, MA",
    type: "leadership",
    bullets: [
      "Coached 10+ speakers on narrative structure, pacing, and audience engagement for a TEDx event attended by 200+ guests.",
    ],
  },
  {
    company: "Tufts University – Office of Campus Life",
    role: "Political Engagement Pre-Orientation Coordinator",
    period: "Apr 2026 – Present",
    location: "Medford, MA",
    type: "leadership",
    bullets: [
      "Recruited and trained 19 facilitators to lead a civic engagement program for 60+ incoming first-year students.",
    ],
  },
];

export interface Project {
  category: string;
  title: string;
  description: string;
  tools: string[];
  highlight?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    category: "Equity Research · Independent",
    title: "CAVA Group DCF & Comps",
    description:
      "Built a 3-statement model, DCF valuation, and comparable company analysis on CAVA Group. Pitched a long thesis with a $105 price target backed by 4x unit growth runway against Chipotle. Conducted event-study analysis on 20+ S&P 500 earnings announcements using Python and statistical significance testing.",
    tools: ["Excel", "Python", "Public Filings"],
    highlight: "$105 price target",
    featured: true,
  },
  {
    category: "Trading Pitch · Tufts Trading Club",
    title: "Starbucks Long – Q2 FY2026",
    description:
      "Pitched a long Starbucks trade ahead of Q2 FY2026 earnings, arguing the turnaround was inflecting after 7 straight quarters of comp decline under CEO Brian Niccol. Grounded the thesis in first-hand campus store closure observations. Entry: $82 · Price target: $98.",
    tools: ["Excel", "Bloomberg"],
    highlight: "$82 → $98 target",
    featured: true,
  },
  {
    category: "Full-Stack · JumboCode Nonprofit",
    title: "Massachusetts History Day",
    description:
      "Engineered an interactive school-location mapping feature in TypeScript using MapLibre GL, visualizing 100+ data points across Massachusetts. Collaborated with a 13-person team on a nonprofit case-management platform deployed to 1,000+ end users.",
    tools: ["TypeScript", "MapLibre", "Next.js"],
    highlight: "1,000+ users",
    featured: true,
  },
  {
    category: "Systems Programming · CS 15",
    title: "Gerp — File Search Indexer",
    description:
      "A grep-like file search tool built in C++ that recursively indexes directories and searches large codebases for exact and case-insensitive string matches. Designed for performance with a custom hash map implementation handling thousands of files.",
    tools: ["C++", "Data Structures", "Hashing"],
  },
  {
    category: "Web Development · CS 20",
    title: "Full-Stack Web Apps",
    description:
      "A series of web programming projects covering MongoDB, PHP/MySQL, React, and AJAX/JSON — building dynamic applications with both frontend interactivity and backend data management.",
    tools: ["React", "MongoDB", "PHP"],
  },
];

export interface Skill {
  label: string;
  level: number; // 1–5 for bar width
}

export const skills: Record<string, Skill[]> = {
  Finance: [
    { label: "Financial Modeling", level: 5 },
    { label: "DCF Valuation", level: 5 },
    { label: "Comparable Company Analysis", level: 5 },
    { label: "3-Statement Modeling", level: 4 },
    { label: "Equity Research", level: 5 },
    { label: "Event-Study Analysis", level: 4 },
    { label: "Bloomberg Terminal", level: 3 },
  ],
  Engineering: [
    { label: "Python (pandas, NumPy)", level: 5 },
    { label: "TypeScript / JavaScript", level: 5 },
    { label: "React / Next.js", level: 4 },
    { label: "SQL", level: 4 },
    { label: "C++", level: 3 },
    { label: "MapLibre GL", level: 4 },
  ],
  Productivity: [
    { label: "Excel (INDEX/MATCH, Pivots)", level: 5 },
    { label: "PowerPoint", level: 4 },
    { label: "French (Intermediate)", level: 3 },
  ],
};

export const activities = [
  {
    org: "Tufts University Bhangra Team",
    role: "Team Manager",
    period: "May 2026 – Present",
    detail: "Manage $10K+ annual budget and 8-person eboard; coordinate 3 competitions and 7+ performances per season.",
  },
  {
    org: "Tufts Association of South Asians",
    role: "Events Coordinator",
    period: "Sep 2025 – Present",
    detail: "Plan and execute 12+ cultural events for 300+ members, partnering with peer universities.",
  },
  {
    org: "Students Heightening Actionable Political Engagement (SHAPE)",
    role: "Program Coordinator",
    period: "Apr 2026 – Present",
    detail: "Leading civic engagement pre-orientation program for 60+ incoming students.",
  },
];

export const education = {
  school: "Tufts University",
  location: "Medford, MA",
  degree: "Bachelor of Science, Data Science and Quantitative Economics",
  expected: "May 2027",
  coursework: [
    "Finance",
    "Algorithms",
    "Data Structures",
    "Linear Algebra",
    "Calculus III",
    "Database Systems",
    "Quantitative Economics",
  ],
  honors: [
    "AP Scholar with Distinction",
    "Gold Presidential Award — 120+ hours of community service",
  ],
};
