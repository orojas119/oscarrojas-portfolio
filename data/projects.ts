export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  features: string[];
  learned: string[];
  status: "live" | "wip" | "planned";
  featured: boolean;
  year: string;
  discipline: string;
  accentColor: string;
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
    features: [
      "529+ NBA players tracked across the 2024-25 season",
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
    techStack: ["Python", "FastAPI", "WebSockets", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/orojas119",
    demo: undefined,
    features: [
      "Real-time score and stat updates pushed via WebSockets",
      "Live play-by-play feed with event parsing",
      "Player box score with live efficiency stats",
      "Responsive UI optimized for mobile viewing during games",
      "Graceful handling of connection drops and automatic reconnects",
    ],
    learned: [
      "Gained hands-on experience with WebSocket lifecycle management — including heartbeat pings, reconnection backoff, and graceful shutdown.",
      "Learned to build efficient streaming data parsers that handle high-frequency event streams without blocking the event loop.",
      "Deepened understanding of React state management under rapid, concurrent data updates.",
    ],
    status: "live",
    featured: true,
    year: "2025",
    discipline: "REAL-TIME | WEBSOCKETS",
    accentColor: "#F97316",
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
