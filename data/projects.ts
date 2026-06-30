export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  coverImage?: string;
  images?: string[];
  features: string[];
  learned: string[];
  status: "live" | "wip" | "planned";
  featured: boolean;
  year: string;
  discipline: string;
  accentColor: string;
  category?: string;
  deployment?: string;
  organization?: string;
}

export const projects: Project[] = [
  {
    slug: "nba-analytics",
    title: "NBA Analytics Dashboard",
    tagline: "A player stats pipeline for the 2025-26 season — nightly ingestion from the NBA Stats API, dbt transforms, and a Plotly Dash dashboard with 5 interactive filters.",
    description:
      "Built around a question I kept coming back to: which players are actually useful, not just efficient? The pipeline pulls 500+ player records nightly, runs them through dbt models with 7 quality tests, and serves them in a dashboard filterable by position, age, minutes, team, and games played. The Impact Score leaderboard combines PPG, APG, RPG, and +/- into a single composite — a more honest answer than any individual stat.",
    techStack: ["Python", "dbt", "DuckDB", "Plotly Dash", "Pandas", "Render"],
    github: "https://github.com/orojas119/nba-analytics",
    demo: "https://nba-analytics-mzv8.onrender.com",
    coverImage: "/images/nba-analytics/nba-analytics-dashboard.png",
    images: [
      "/images/nba-analytics/nba-analytics-dashboard.png",
      "/images/nba-analytics/nba-analytics-filters.png",
      "/images/nba-analytics/nba-analytics-leaderboard.png",
      "/images/nba-analytics/nba-analytics-about.png",
    ],
    features: [
      "529+ NBA players tracked across the 2025-26 season",
      "5 interactive filters: Minutes, Position, Age, Team, Games Played",
      "Top 15 Scorers visualization with blue gradient bars",
      "Team Efficiency scatter — PPG vs FG%, bubble-sized by roster depth",
      "Impact Score leaderboard: weighted composite of PPG, APG, RPG, +/-",
      "7 dbt data quality tests — all passing",
      "Nightly data refresh from NBA Stats API with graceful fallback",
      "Technical architecture page with pipeline diagrams",
    ],
    learned: [
      "stats.nba.com blocks non-browser traffic — built graceful fallback to sample dataset",
      "dbt + protobuf version conflicts: pinned to protobuf==4.25.9 for stable builds",
      "pandas==2.1.4 + Python 3.11 required for Render deployment (3.14 incompatible)",
      "Context-managed DuckDB connections prevent resource leaks in production",
      "Plotly Dash styling requires inline styles — Tailwind CDN classes don't apply without a build step",
      "dcc.RangeSlider is better UX than dropdown for continuous numeric filters like Games Played",
    ],
    status: "live",
    featured: true,
    year: "2024",
    discipline: "DATA ENGINEERING | PIPELINE",
    accentColor: "#2DD4BF",
  },
  {
    slug: "live-game-tracker",
    title: "Live Game Tracker",
    tagline: "NBA live scores, box scores, and standings that refresh every 30 seconds automatically.",
    description:
      "A dashboard that polls live NBA data every 30 seconds and shows scores, game clocks, and per-player box scores for any active game. The FastAPI backend caches responses for 30 seconds to stay under the NBA Stats API rate limit. Off-season, everything runs off a fallback dataset — which turned out to be half the engineering work anyway.",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "Vite", "Render", "Vercel"],
    github: "https://github.com/orojas119/nba-live-tracker",
    demo: "https://nba-live-tracker-mauve.vercel.app",
    features: [
      "Real-time NBA scores with auto-refresh every 30 seconds",
      "Live game indicator with pulsing red badge and game clock",
      "Box score modal — top players by minutes for any game",
      "Team standings sidebar — top 5 per conference (East & West)",
      "Graceful fallback to sample data when no games are scheduled",
      "TypeScript throughout — typed Game, Standing, and PlayerStat interfaces",
      "Dark theme — bg-gray-950 with responsive 2-column layout",
      "FastAPI backend with 30-second caching to avoid API rate limits",
    ],
    learned: [
      "Vite scaffolding fails when src/ exists — manual file creation is more reliable in CI environments",
      "nba_api live endpoints rate-limit aggressively off-season — always build fallback sample data",
      "import.meta.env requires vite-env.d.ts for TypeScript to recognize Vite environment variables",
      "Starlette does exact string matching on allow_origins — use allow_origin_regex for wildcard Vercel preview URLs",
      "FastAPI + uvicorn workers need explicit 0.0.0.0:$PORT binding for Render deployment",
    ],
    status: "live",
    featured: true,
    year: "2025",
    discipline: "REAL-TIME | FULL-STACK",
    accentColor: "#F97316",
    coverImage: "/images/live-tracker/live-tracker-dashboard.png",
    images: [
      "/images/live-tracker/live-tracker-dashboard.png",
      "/images/live-tracker/live-tracker-boxscore.png",
    ],
  },
  {
    slug: "dfs-optimizer",
    title: "DFS Lineup Optimizer",
    tagline: "Daily fantasy sports lineup optimizer using linear programming",
    description:
      "A lineup optimizer for daily fantasy sports (DraftKings/FanDuel) that uses integer linear programming to maximize projected points within salary constraints. Incorporates player projections, ownership data, and correlation-aware stacking rules.",
    techStack: ["Python", "OR-Tools", "Pandas", "FastAPI", "React"],
    github: undefined,
    demo: undefined,
    features: [
      "Integer linear programming optimizer with salary cap constraints",
      "Support for DraftKings and FanDuel contest formats",
      "Player ownership and projection data integration",
      "Correlation-aware stacking rules for tournament play",
      "Bulk lineup generation for large-field tournaments",
    ],
    learned: [
      "Applied operations research techniques (ILP) to a real-world combinatorial optimization problem.",
      "Learned how to model complex constraints in linear programming, including positional requirements and exposure caps.",
    ],
    status: "planned",
    featured: false,
    year: "2026",
    discipline: "OPTIMIZATION | COMING SOON",
    accentColor: "#8B5CF6",
  },
  {
    slug: "nba-salary-cap",
    title: "NBA Salary Cap Tracker",
    tagline: "Where every NBA team's payroll stands, what they owe in luxury tax, and what they're allowed to do next — backed by the actual CBA bracket math.",
    description:
      "The NBA luxury tax works like income tax: each bracket rate applies only to salary within that band, not the total. That distinction matters — it's why Phoenix owes $101M in tax while other teams just over the line owe a fraction of that. I built a Python engine that implements the full CBA formula and verified it with 27 unit tests against known boundary values. The frontend shows where each team sits relative to the cap, tax line, and both aprons, and lists what they can and can't do based on their tier.",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "Vite", "Tailwind CSS", "Render", "Vercel", "GitHub Actions", "pytest"],
    github: "https://github.com/orojas119/nba-salary-cap",
    demo: "https://nba-salary-cap.vercel.app",
    features: [
      "Custom luxury tax bracket engine — mathematically correct CBA bracket calculations with 27 passing unit tests",
      "All 30 teams with full player salary tables across 3 seasons (2026-27, 2027-28, 2028-29)",
      "SVG CapThresholdBar — visual payroll position relative to cap, tax line, 1st apron, and 2nd apron",
      "Per-team restriction engine — dynamically lists what each team can and cannot do based on their tier",
      "League summary dashboard — total payroll, total tax collected, teams in each tier",
      "3-year payroll projection per team as contracts expire",
      "GitHub Actions daily validation — 30-team seed data validated and engine tests run every 24 hours",
      "Sort and filter by payroll, tax bill, cap space, conference, and tier",
    ],
    learned: [
      "The NBA luxury tax is an incremental bracket system like income tax — each rate applies only to salary within that band, not the total",
      "Repeater tax adds $1.00 to every bracket rate for teams that paid tax in 3 of the prior 4 seasons — this is what drives Phoenix's $101M bill",
      "Vite non-interactive scaffolding silently no-ops when the target directory isn't empty — always verify file count before reporting build success",
      "GitHub Actions exit-code gating: validation exits 1 on bad data, stopping the workflow before stale data reaches cache",
      "Render prefers .python-version over runtime.txt — include both for reliability across deploy environments",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "DATA ENGINEERING | FINANCE",
    accentColor: "#22c55e",
    category: "Data Engineering",
    deployment: "live",
    coverImage: "/images/nba-salary-cap/dashboard.png",
    images: [
      "/images/nba-salary-cap/dashboard.png",
      "/images/nba-salary-cap/team-detail.png",
    ],
  },
  {
    slug: "po-automation-platform",
    title: "PO Automation Platform",
    tagline: "Replaced a paper-based purchase order process at a K-12 school — 200+ monthly transactions, dual-approval routing, and automatic PDF generation.",
    description:
      "The school ran purchase orders through paper forms, routed them manually, and filed PDFs by hand. I replaced that with a SharePoint backend, a Power Automate pipeline that routes approvals by department and dollar threshold, and a dashboard where staff can track every request. PDFs generate automatically when an order is approved. The fiscal year resets on July 1 — no manual rollover required.",
    techStack: ["Power Automate", "SharePoint", "Azure AD", "MSAL", "JavaScript", "GitHub Pages", "Encodian"],
    features: [
      "Dual-approval workflow routing by department and amount threshold",
      "Automated PDF generation and email notifications via Power Automate",
      "Fiscal year rollover — resets automatically on July 1 each year",
      "MSAL authentication — only authorized staff can access the dashboard",
      "SharePoint REST API for attachment handling and list management",
      "SPA dashboard showing PO status, history, and filters",
      "Custom domain deployment at po.ilsroyals.com",
    ],
    learned: [
      "Rotating exposed Power Automate SAS URLs and migrating to OAuth bearer token authentication after security audit",
      "SharePoint REST API pagination and attachment handling at scale",
      "Fiscal year state management without a traditional database",
      "Building multi-stakeholder approval flows where each approver has different data visibility",
    ],
    status: "live",
    featured: false,
    year: "2025",
    discipline: "INTERNAL TOOLS | WORKFLOW AUTOMATION",
    accentColor: "#0078D4",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/po-platform.png",
    images: [],
  },
  {
    slug: "behavior-discipline-platform",
    title: "Student Behavior & Discipline Platform",
    tagline: "A system for the Dean of Students to log incidents, track patterns, and stay notified — built in 8 phases as requirements became clearer.",
    description:
      "Staff were managing incident reports through email and spreadsheets. I built a submission form for staff and a dashboard for the Dean of Students to review, filter, and manage cases — shipped in 8 phases as requirements evolved through stakeholder feedback — which is how internal tools actually get built. All data stays within the school's Microsoft 365 environment, which matters when you're dealing with student records. Role-based views mean staff only see the cases they filed.",
    techStack: ["SharePoint", "Power Automate", "JavaScript", "Azure AD", "MSAL", "HTML/CSS"],
    features: [
      "Staff incident submission form with category, severity, and follow-up fields",
      "Dean of Students dashboard — filterable by date, student, category, and status",
      "Power Automate email notifications on submission and status change",
      "Role-based access — staff vs. administrator data visibility",
      "SharePoint as the data layer — no external database required",
      "8-phase development lifecycle from requirements to production deployment",
    ],
    learned: [
      "Translating institutional paper workflows into digital systems with multiple stakeholder types",
      "Building role-based access with MSAL without a dedicated backend",
      "Managing multi-phase projects solo — scoping, building, testing, and deploying incrementally",
      "Handling sensitive student data within Microsoft 365 compliance boundaries",
    ],
    status: "live",
    featured: false,
    year: "2025",
    discipline: "INTERNAL TOOLS | DASHBOARD",
    accentColor: "#004B23",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/discipline-dashboard.png",
    images: [],
  },
  {
    slug: "office-inventory-dashboard",
    title: "Office Inventory Dashboard",
    tagline: "A stock tracker for the school's operations team — real-time levels, automatic low-stock alerts, and a product categorizer built with regex instead of an API.",
    description:
      "The first version used the Anthropic API to categorize product names. It worked, but it added per-request cost and an external dependency for something that didn't need to be that complicated. Replaced it with a regex categorizer — faster, free, and doesn't fail if the API is down. A Power Automate flow checks stock daily and alerts the team when anything runs low. Shipped with 14 pages of documentation so whoever maintains it next doesn't have to figure it out from scratch.",
    techStack: ["Azure Static Web Apps", "SharePoint", "Power Automate", "JavaScript", "MSAL", "Azure AD"],
    features: [
      "Real-time inventory view backed by SharePoint lists",
      "Regex-based product categorizer replacing an external API dependency",
      "Automated low-stock alerts via Power Automate — triggers when items fall below threshold",
      "MSAL authentication — scoped to ILS staff only",
      "ILS brand design system — green #004B23, gold #FFC20E, Montserrat/Bebas Neue",
      "14-page technical handoff documentation for future maintainers",
    ],
    learned: [
      "Replacing an AI API dependency with a deterministic regex categorizer — simpler, faster, and zero ongoing cost",
      "Writing technical handoff documentation thorough enough that someone else can maintain and extend the system",
      "Azure Static Web Apps deployment pipeline and MSAL token flow for SPAs",
      "Designing a brand-compliant UI from an institutional style guide",
    ],
    status: "live",
    featured: false,
    year: "2025",
    discipline: "INTERNAL TOOLS | DATA",
    accentColor: "#FFC20E",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/inventory-dashboard.png",
    images: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
