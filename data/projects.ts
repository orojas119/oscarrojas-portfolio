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
    tagline: "End-to-end NBA analytics: Python → dbt → DuckDB → live dashboard with 5 interactive filters",
    description:
      "A production data pipeline that ingests 500+ NBA player records nightly, transforms them through dbt models with automated data quality tests, and surfaces insights through a live Plotly Dash dashboard. Features interactive filtering by position, age, minutes, team, and games played, plus an Impact Score leaderboard ranking players by a weighted composite metric. Built with Python, dbt, DuckDB, and deployed on Render with auto-deploy from GitHub.",
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
    tagline: "Real-time NBA game tracking with live score updates",
    description:
      "A real-time game tracking application that streams live NBA game data to users via WebSockets. Built with a Python/FastAPI backend and a Next.js frontend, it shows live scores, player stats, and play-by-play updates with sub-second latency.",
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
    slug: "po-automation-platform",
    title: "PO Automation Platform",
    tagline: "Full-stack purchase order system replacing a paper process — 200+ monthly transactions, dual-approval routing, custom domain",
    description:
      "Designed and built a complete purchase order and requisition system from scratch for a K-12 institution. Replaced a manual paper-based workflow with a Power Automate-driven dual-approval pipeline, SharePoint backend, automated PDF generation via Encodian, and a GitHub Pages SPA dashboard secured with MSAL/Azure AD authentication. Includes fiscal-year rollover logic that resets automatically on July 1. Live on a custom domain at po.ilsroyals.com.",
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
    tagline: "Multi-phase incident reporting system for school administrators — tracking, analytics, and automated notifications",
    description:
      "Built an end-to-end student behavior and discipline reporting platform across 8 development phases. The system includes a staff-facing incident submission form, a Dean of Students SPA dashboard for reviewing and managing cases, Power Automate flows for email notifications, and SharePoint as the data layer. Role-based access ensures staff see only relevant data while administrators have full visibility. All data is handled in compliance with institutional privacy requirements.",
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
    tagline: "Azure-hosted inventory management with automated low-stock alerts, smart categorization, and ILS brand design system",
    description:
      "Built and deployed an office inventory management dashboard on Azure Static Web Apps with MSAL authentication. Features a regex-based product categorizer that replaced an external Anthropic API dependency — reducing cost and removing a third-party point of failure. Includes a Power Automate flow that monitors stock levels and sends automated low-stock alerts to the operations team. Shipped with a 14-page technical handoff document.",
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
