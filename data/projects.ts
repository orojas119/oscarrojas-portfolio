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
}

export const projects: Project[] = [
  {
    slug: "nba-analytics",
    title: "NBA Analytics Dashboard",
    tagline: "End-to-end data pipeline for NBA game statistics",
    description:
      "A data engineering pipeline that ingests NBA game data via public APIs, transforms it using dbt, and serves analytics through a PostgreSQL-backed dashboard. Includes automated daily ingestion, data quality checks, and interactive visualizations.",
    techStack: ["Python", "dbt", "PostgreSQL", "Apache Airflow", "Pandas", "Docker"],
    github: "https://github.com/orojas12",
    demo: undefined,
    features: [
      "Automated daily ingestion of NBA game data from public APIs",
      "dbt transformations with tests and documentation",
      "PostgreSQL data warehouse with normalized schema",
      "Apache Airflow DAGs for pipeline orchestration",
      "Data quality checks and row-level validation",
    ],
    learned: [
      "Designed and implemented a production-grade ELT pipeline from scratch using dbt and Airflow.",
      "Learned how to model sports data efficiently for analytical queries, including handling slowly changing dimensions and late-arriving facts.",
      "Built confidence in data testing and observability practices — every model has tests, every run has logs.",
    ],
    status: "live",
    featured: true,
  },
  {
    slug: "live-game-tracker",
    title: "Live Game Tracker",
    tagline: "Real-time NBA game tracking with live score updates",
    description:
      "A real-time game tracking application that streams live NBA game data to users via WebSockets. Built with a Python/FastAPI backend and a Next.js frontend, it shows live scores, player stats, and play-by-play updates with sub-second latency.",
    techStack: ["Python", "FastAPI", "WebSockets", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/orojas12",
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
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
