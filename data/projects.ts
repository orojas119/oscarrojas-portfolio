export interface ImpactComparable {
  product: string;
  vendor: string;
  annualCost: number;
  pricingBasis: string;
  sourceNote: string;
}

export interface ProjectImpact {
  peopleServed: string;
  before: string;
  after: string;
  comparables: ImpactComparable[];
  annualSavings: number;
}

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
  impact?: ProjectImpact;
}

export const projects: Project[] = [
  {
    slug: "nba-analytics",
    title: "NBA Analytics Dashboard",
    tagline: "A player stats pipeline for the 2025-26 season: nightly ingestion from the NBA Stats API, dbt transforms, and a Plotly Dash dashboard with 5 interactive filters.",
    description:
      "Built around a question I kept coming back to: which players are actually useful, not just efficient? The pipeline pulls 500+ player records nightly, runs them through dbt models with 7 quality tests, and serves them in a dashboard filterable by position, age, minutes, team, and games played. The Impact Score leaderboard combines PPG, APG, RPG, and +/- into a single composite, a more honest answer than any individual stat.",
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
      "Team Efficiency scatter: PPG vs FG%, bubble-sized by roster depth",
      "Impact Score leaderboard: weighted composite of PPG, APG, RPG, +/-",
      "7 dbt data quality tests, all passing",
      "Nightly data refresh from NBA Stats API with graceful fallback",
      "Technical architecture page with pipeline diagrams",
    ],
    learned: [
      "stats.nba.com blocks non-browser traffic, so I built a graceful fallback to a sample dataset",
      "dbt + protobuf version conflicts: pinned to protobuf==4.25.9 for stable builds",
      "pandas==2.1.4 + Python 3.11 required for Render deployment (3.14 incompatible)",
      "Context-managed DuckDB connections prevent resource leaks in production",
      "Plotly Dash styling requires inline styles, since Tailwind CDN classes don't apply without a build step",
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
      "A dashboard that polls live NBA data every 30 seconds and shows scores, game clocks, and per-player box scores for any active game. The FastAPI backend caches responses for 30 seconds to stay under the NBA Stats API rate limit. Off-season, everything runs off a fallback dataset, which turned out to be half the engineering work anyway.",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "Vite", "Render", "Vercel"],
    github: "https://github.com/orojas119/nba-live-tracker",
    demo: "https://nba-live-tracker-mauve.vercel.app",
    features: [
      "Real-time NBA scores with auto-refresh every 30 seconds",
      "Live game indicator with pulsing red badge and game clock",
      "Box score modal: top players by minutes for any game",
      "Team standings sidebar: top 5 per conference (East & West)",
      "Graceful fallback to sample data when no games are scheduled",
      "TypeScript throughout, with typed Game, Standing, and PlayerStat interfaces",
      "Dark theme (bg-gray-950) with a responsive 2-column layout",
      "FastAPI backend with 30-second caching to avoid API rate limits",
    ],
    learned: [
      "Vite scaffolding fails when src/ exists, so manual file creation is more reliable in CI environments",
      "nba_api live endpoints rate-limit aggressively off-season, so always build fallback sample data",
      "import.meta.env requires vite-env.d.ts for TypeScript to recognize Vite environment variables",
      "Starlette does exact string matching on allow_origins, so use allow_origin_regex for wildcard Vercel preview URLs",
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
    slug: "nba-salary-cap",
    title: "NBA Salary Cap Tracker",
    tagline: "Where every NBA team's payroll stands, what they owe in luxury tax, and what they're allowed to do next, backed by the actual CBA bracket math.",
    description:
      "The NBA luxury tax works like income tax: each bracket rate applies only to salary within that band, not the total. That distinction matters: it's why Phoenix owes $101M in tax while other teams just over the line owe a fraction of that. I built a Python engine that implements the full CBA formula and verified it with 27 unit tests against known boundary values. The frontend shows where each team sits relative to the cap, tax line, and both aprons, and lists what they can and can't do based on their tier.",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "Vite", "Tailwind CSS", "Render", "Vercel", "GitHub Actions", "pytest"],
    github: "https://github.com/orojas119/nba-salary-cap",
    demo: "https://nba-salary-cap.vercel.app",
    features: [
      "Custom luxury tax bracket engine, mathematically correct CBA bracket calculations with 27 passing unit tests",
      "All 30 teams with full player salary tables across 3 seasons (2026-27, 2027-28, 2028-29)",
      "SVG CapThresholdBar showing visual payroll position relative to cap, tax line, 1st apron, and 2nd apron",
      "Per-team restriction engine that dynamically lists what each team can and cannot do based on their tier",
      "League summary dashboard: total payroll, total tax collected, teams in each tier",
      "3-year payroll projection per team as contracts expire",
      "GitHub Actions daily validation: 30-team seed data validated and engine tests run every 24 hours",
      "Sort and filter by payroll, tax bill, cap space, conference, and tier",
    ],
    learned: [
      "The NBA luxury tax is an incremental bracket system like income tax: each rate applies only to salary within that band, not the total",
      "Repeater tax adds $1.00 to every bracket rate for teams that paid tax in 3 of the prior 4 seasons, which is what drives Phoenix's $101M bill",
      "Vite non-interactive scaffolding silently no-ops when the target directory isn't empty, so always verify file count before reporting build success",
      "GitHub Actions exit-code gating: validation exits 1 on bad data, stopping the workflow before stale data reaches cache",
      "Render prefers .python-version over runtime.txt. Include both for reliability across deploy environments.",
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
    tagline: "Replaced a paper-based purchase order process at Immaculata-La Salle High School: 200+ monthly transactions, dual-approval routing, and automatic PDF generation.",
    description:
      "The school ran purchase orders through paper forms, routed them manually, and filed PDFs by hand. I replaced that with a SharePoint backend, a Power Automate pipeline that routes approvals by department and dollar threshold, and a dashboard where staff can track every request. PDFs generate automatically when an order is approved. The fiscal year resets on July 1, with no manual rollover required.",
    techStack: ["Power Automate", "SharePoint", "Azure AD", "MSAL", "JavaScript", "GitHub Pages", "Encodian"],
    features: [
      "Dual-approval workflow routing by department and amount threshold",
      "Automated PDF generation and email notifications via Power Automate",
      "Fiscal year rollover that resets automatically on July 1 each year",
      "MSAL authentication, so only authorized staff can access the dashboard",
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
    impact: {
      peopleServed: "Every department head and approver who submits or routes a PO, plus Finance (roughly 20-30 staff school-wide)",
      before: "Purchase orders ran through paper forms routed by hand across departments, with no shared view of where a request stood or who needed to approve it next, and completed POs were filed as loose PDFs.",
      after: "Every PO routes automatically by department and dollar threshold, generates its own PDF the moment it's approved, and any staff member can check a live status instead of asking around.",
      comparables: [
        {
          product: "Procurify",
          vendor: "Procurify Inc.",
          annualCost: 10000,
          pricingBasis: "No public list price. Procurement software for ~15-20 requesters/approvers, small-org tier",
          sourceNote: "Procurify publishes no pricing (procurify.com/pricing, checked Sept 2026). Estimate is the midpoint of a $5k-$15k/year small-org range reported by third-party pricing tracker ITQlick, not a vendor-confirmed quote.",
        },
      ],
      annualSavings: 10000,
    },
  },
  {
    slug: "behavior-discipline-platform",
    title: "Student Behavior & Discipline Platform",
    tagline: "A system for the Dean of Students to log incidents, track patterns, and stay notified, built in 8 phases as requirements became clearer.",
    description:
      "Staff were managing incident reports through email and spreadsheets. I built a submission form for staff and a dashboard for the Dean of Students to review, filter, and manage cases, shipped in 8 phases as requirements evolved through stakeholder feedback. That's how internal tools actually get built. All data stays within the school's Microsoft 365 environment, which matters when you're dealing with student records. Role-based views mean staff only see the cases they filed.",
    techStack: ["SharePoint", "Power Automate", "JavaScript", "Azure AD", "MSAL", "HTML/CSS"],
    features: [
      "Staff incident submission form with category, severity, and follow-up fields",
      "Dean of Students dashboard, filterable by date, student, category, and status",
      "Power Automate email notifications on submission and status change",
      "Role-based access: staff vs. administrator data visibility",
      "SharePoint as the data layer, so no external database is required",
      "8-phase development lifecycle from requirements to production deployment",
    ],
    learned: [
      "Translating institutional paper workflows into digital systems with multiple stakeholder types",
      "Building role-based access with MSAL without a dedicated backend",
      "Managing multi-phase projects solo: scoping, building, testing, and deploying incrementally",
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
    impact: {
      peopleServed: "All ~100 staff who can file an incident, plus the Dean of Students who manages every case, covering all 890 students",
      before: "Incident reports were managed through email threads and spreadsheets, so seeing patterns across a student's history or filtering by category meant manually digging back through old messages.",
      after: "Staff file a structured incident form in minutes, and the Dean of Students filters and tracks every case from one dashboard, with automatic email notifications, without leaving the school's own Microsoft 365 environment.",
      comparables: [
        {
          product: "PBIS Rewards",
          vendor: "PBIS Rewards (or comparable: Kickboard / PowerSchool Behavior Support)",
          annualCost: 4000,
          pricingBasis: "$3-6/student/year, typical published range for single-purpose school behavior-tracking SaaS, applied to 890 students",
          sourceNote: "Neither PBIS Rewards nor Kickboard publish per-student pricing, so this uses an industry-typical range since no vendor quote exists. It's the least firmly sourced estimate in this showcase, flagged accordingly.",
        },
      ],
      annualSavings: 4000,
    },
  },
  {
    slug: "office-inventory-dashboard",
    title: "Office Inventory Dashboard",
    tagline: "A stock tracker for the school's operations team: real-time levels, automatic low-stock alerts, and a product categorizer built with regex instead of an API.",
    description:
      "The first version used the Anthropic API to categorize product names. It worked, but it added per-request cost and an external dependency for something that didn't need to be that complicated. Replaced it with a regex categorizer that's faster, free, and doesn't fail if the API is down. A Power Automate flow checks stock daily and alerts the team when anything runs low. Shipped with 14 pages of documentation so whoever maintains it next doesn't have to figure it out from scratch.",
    techStack: ["Azure Static Web Apps", "SharePoint", "Power Automate", "JavaScript", "MSAL", "Azure AD"],
    features: [
      "Real-time inventory view backed by SharePoint lists",
      "Regex-based product categorizer replacing an external API dependency",
      "Automated low-stock alerts via Power Automate, triggering when items fall below threshold",
      "MSAL authentication, scoped to ILS staff only",
      "ILS brand design system: green #004B23, gold #FFC20E, Montserrat/Bebas Neue",
      "14-page technical handoff documentation for future maintainers",
    ],
    learned: [
      "Replacing an AI API dependency with a deterministic regex categorizer: simpler, faster, and zero ongoing cost",
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
    impact: {
      peopleServed: "The school's operations team managing stock",
      before: "Stock levels lived in whoever last checked the supply closet's head, with no automatic alert before something actually ran out and no shared record of what was on hand.",
      after: "Stock levels are tracked live, low-stock alerts fire automatically, and the whole operations team sees the same numbers instead of relying on a supply run to find out something's missing.",
      comparables: [
        {
          product: "Sortly",
          vendor: "Sortly Inc.",
          annualCost: 470,
          pricingBasis: "~$39/mo effective (Advanced tier, billed annually), sortly.com/pricing",
          sourceNote: "Published pricing page, checked Sept 2026. Monthly billing would run $588/year instead.",
        },
      ],
      annualSavings: 470,
    },
  },
  {
    slug: "ltv-asset-checkout",
    title: "LTV Equipment Checkout",
    tagline: "A checkout system for the school's media production department: QR-scan checkout, indivisible equipment kits, and an overdue-reminder flow, replacing a sign-out sheet for 170+ pieces of gear.",
    description:
      "The media production team tracked camera, audio, and lighting gear on a sign-out sheet, which meant no real record of what was out, to whom, or for how long. I built a checkout system backed by SharePoint: staff print QR labels for each asset, scan to check out or return, and see overdue equipment at a glance. Some gear only makes sense checked out together (a camera, its mic, and its lens), so I added \"kits\": bundles that check out and return as a single indivisible unit.",
    techStack: ["Azure Static Web Apps", "Azure Functions", "SharePoint", "Microsoft Graph", "MSAL", "JavaScript"],
    features: [
      "QR-label scan-to-checkout (Avery 5195 labels) for both individual assets and kits",
      "Kits: indivisible equipment bundles that check out and return as one unit, with kit status always derived rather than stored",
      "Inventory search, inline cell editing, and double-checkout guards",
      "Auto-generated asset tags via a keyword/category classifier",
      "CSV bulk upload with a downloadable template",
      "Scheduled overdue-equipment email reminders",
      "Access restricted to named production-department staff",
    ],
    learned: [
      "SharePoint's multi-value lookup columns write unreliably at volume. Modeled kit membership as a plain tag on each asset instead, and always derived kit status from that rather than storing it as its own field.",
      "Azure Static Web Apps reserves the Authorization header for its own auth layer, so I routed the app's own bearer token through a custom header instead and validated it inside the Function with a JOSE library, which kept the whole app on the free hosting tier.",
      "A scheduled reminder flow built as a timer-triggered Function first ran into consumption-host and TLS-inspection proxy issues in this environment. A scheduled Power Automate flow reading the same SharePoint data sidestepped both.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | INVENTORY",
    accentColor: "#0891B2",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/ltv-dashboard.jpg",
    images: ["/images/ils/ltv-dashboard.jpg", "/images/ils/ltv-inventory.jpg"],
    impact: {
      peopleServed: "Media production department staff and students checking out ~170 pieces of equipment",
      before: "Equipment went out on a paper sign-out sheet, so there was no reliable record of what was checked out, to whom, or for how long, and no way to bundle gear that only made sense checked out together.",
      after: "Staff scan a QR label to check equipment in or out, kits move as one unit, and overdue gear is flagged automatically instead of discovered by accident.",
      comparables: [
        {
          product: "EZOfficeInventory",
          vendor: "EZO",
          annualCost: 800,
          pricingBasis: "$58/mo Advanced tier starting price, unlimited users, published pricing page",
          sourceNote: "ezo.io/pricing, figure corroborated via third-party trackers (costbench.com, itqlick.com) since a direct page fetch was incomplete. Treat this as a representative estimate.",
        },
      ],
      annualSavings: 800,
    },
  },
  {
    slug: "id-card-tool",
    title: "ID Card Management Tool",
    tagline: "Replaced a manual Power Automate + Excel-script pipeline for producing staff and student ID cards with a directory search, native photo resize, and direct filing into the card-production queue.",
    description:
      "Producing an ID card meant finding the person in a spreadsheet, resizing their photo by hand with an Excel macro, and filing the record for the card printer, one extra manual hop for every single card. I replaced it with a search-driven form: look someone up (or enter them manually if they're not in any roster yet), upload a photo, and the app resizes it natively and files the record directly into the shared production queue. The directory search itself went through a few iterations. It started against live Microsoft Graph, then moved to synced roster data for speed, with a live-directory fallback for anyone not yet in a synced list.",
    techStack: ["Vite", "React", "TypeScript", "Azure Functions", "Sharp", "MSAL", "SharePoint", "Microsoft Graph"],
    features: [
      "Directory search across synced roster sources with a live-directory fallback, or manual entry for anyone not listed",
      "Photo upload with native server-side resize, no more Excel macro step",
      "Extended a live, shared production-queue list with new fields (manual-entry flag, role/group, photo URL) without disrupting existing records",
      "Mobile-hardened form inputs for a front-office iPhone workflow",
      "A scheduled sync job that refreshes the roster sources nightly and archives the raw export files",
    ],
    learned: [
      "A legacy SharePoint list column can silently reject every write from the Graph API regardless of payload shape. Confirmed by direct testing, then worked around by adding a parallel column instead of fighting the old one.",
      "The photo output needed a non-uniform stretch rather than a center-crop, since losing part of the photo was worse than mild distortion for this printer's actual card template: an explicit product call, not the 'obviously correct' resize approach.",
      "Merging three separate roster export sources into one directory search, with a live-directory fallback, covers people the syncs miss without making every search pay for a live API call.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | IDENTITY",
    accentColor: "#E11D48",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/idcard-form.jpg",
    images: ["/images/ils/idcard-form.jpg"],
    impact: {
      peopleServed: "Front-office staff producing ID cards for students and staff",
      before: "Producing a card meant finding the person in a spreadsheet, resizing their photo by hand with an Excel macro, and filing the record for the card printer, one extra manual hop for every single card.",
      after: "A search-driven form looks someone up, resizes their photo natively, and files the record straight into the shared production queue. No macro, no manual filing step.",
      comparables: [
        {
          product: "CardExchange Professional",
          vendor: "CardExchange Solutions",
          annualCost: 230,
          pricingBasis: "$695 one-time perpetual license, amortized over 3 years",
          sourceNote: "ID badge software is typically sold as a perpetual license, not a subscription, so this is a rough annualized stand-in, not an apples-to-apples SaaS comparison. The bigger win here was eliminating a manual Excel-macro photo-resize step per card, which has no clean dollar comparable.",
        },
      ],
      annualSavings: 230,
    },
  },
  {
    slug: "senior-ipad-swap",
    title: "Senior iPad Swap",
    tagline: "A once-a-year event tool for the day seniors trade in their old iPad for a new one: student intake, corner-specific staff check-in stations, and a finance desk, all in one app.",
    description:
      "Once a year, the entire senior class trades in an iPad on a single day, split across three physical check-in stations. I built a tool that starts with a student intake form ahead of time (color choice, transfer status, self-reported damage), then gives each station a dedicated check-in screen and gives Finance its own screen for collecting fees. The two fee types aren't the same shape at all: a transfer fee is known ahead of time, but a damage fee is only discovered live at the corner and depends on the student's prior-damage history, so I modeled them as genuinely separate flows instead of forcing both into one generic \"fee\" field.",
    techStack: ["Vite", "React", "TypeScript", "Azure Functions", "SharePoint", "MSAL"],
    features: [
      "Student intake form, separate from staff corner check-in and a dedicated Finance screen",
      "Two distinct fee types, a known-ahead transfer fee and a tiered damage fee based on prior-break history, never conflated into one field",
      "Auto-assigns students who never picked a color to a corner, load-balanced across all three and recomputable anytime",
      "Writes back to a shared damage-history list in a way that avoids double-triggering that system's own automated billing email",
      "A local preview mode for rehearsing staff screens without needing to sign in",
    ],
    learned: [
      "Modeling two conceptually different fees as separate flows, rather than one generic fee field with a type flag, kept the known-ahead and discovered-live cases from bleeding into each other's edge cases.",
      "Writing a flag onto a shared history row prevented this app's own fee collection from double-triggering another system's automated charge email off the same underlying list.",
      "Branching access by email domain suffix (student vs. staff) removed the need to maintain a separate allowlist just to tell the two user types apart.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | EVENT OPS",
    accentColor: "#F59E0B",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/senior-swap-console.jpg",
    images: ["/images/ils/senior-swap-console.jpg"],
    impact: {
      peopleServed: "The senior class (~110 students) and the staff running intake, corners, and Finance on swap day",
      before: "Trade-in day ran on paper folders per corner: intake sheets, transfer status, and damage history all tracked by hand and reconciled by Finance afterward.",
      after: "One app carries intake, corner check-in, and Finance fee collection through the day, with transfer and damage fees modeled as genuinely separate flows instead of one generic fee field.",
      comparables: [
        {
          product: "Staff time saved (labor-hours)",
          vendor: "N/A: no clean SaaS comparable for a one-day event tool",
          annualCost: 240,
          pricingBasis: "~10-12 staff-hours saved per event year (paper intake, corner folder-flipping, manual Finance reconciliation) at an estimated $22/hr blended school support-staff rate",
          sourceNote: "Blended rate derived from NEA's 2024-25 national education-support-professional average (~$17.50/hr), adjusted for private-school context. The closest real SaaS product (Manage1to1, a year-round 1:1 device platform) would cost ~$1,257/year but overstates impact for a single annual event, so labor-hours is the more honest framing.",
        },
      ],
      annualSavings: 240,
    },
  },
  {
    slug: "picture-day-id-lookup",
    title: "Picture Day ID Lookup",
    tagline: "A once-a-year IT-table tool for picture day: search-as-you-type student lookup, ID-card-number recording, and an Excel export at the end of the day.",
    description:
      "On picture day, IT staff sit at a table recording which physical ID card number gets issued to each student, looked up against that year's device roster. I built a search-as-you-type lookup tool with a grade filter, an adaptive ID-number suggestion with duplicate-assignment prevention, and an admin flow to wipe and reimport a fresh roster each year. It shipped and ran on a live picture day, then kept picking up polish afterward: batched imports, progress bars, and a change-history log for admins.",
    techStack: ["Vite", "React", "TypeScript", "Azure Functions", "SharePoint", "MSAL", "ExcelJS"],
    features: [
      "Search-as-you-type lookup by name or school ID, filterable by grade",
      "Adaptive ID-card-number suggestion with duplicate-assignment prevention",
      "Admin: Excel export, wipe-and-reimport with a review-before-commit step, per-student entry clearing, and a change-history log",
      "Batched bulk import with a visible progress bar and automatic retry-with-backoff against SharePoint throttling",
      "Mobile/tablet-optimized layout for use at a physical check-in table",
      "Self-recovers from a stuck sign-in state instead of leaving the user stuck reloading",
    ],
    learned: [
      "SharePoint throttles rapid sequential bulk writes, so batching the import and adding retry-with-backoff turned an unreliable bulk import into a reliable one.",
      "A heuristic last-name split on a full-name CSV field breaks on compound surnames, so I added a review-before-commit screen instead of trusting the heuristic outright.",
      "The Microsoft auth library can get stuck in an 'interaction in progress' state after certain redirect timing. Added an automatic self-recovery path instead of requiring a manual page reload.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | EVENT OPS",
    accentColor: "#0EA5E9",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/pictureday-lookup.jpg",
    images: ["/images/ils/pictureday-lookup.jpg"],
    impact: {
      peopleServed: "IT staff at the picture-day table processing all 890 students in one day",
      before: "IT staff looked students up on a paper roster and hand-logged which ID card number went to whom. Slow under load, and error-prone enough to risk duplicate or misissued cards.",
      after: "Search-as-you-type lookup and adaptive ID-number suggestion with duplicate-assignment prevention move the line faster and remove the paper log entirely.",
      comparables: [
        {
          product: "Staff time saved + avoided card errors (labor-hours)",
          vendor: "N/A. No SaaS product does search-and-issuance lookup specifically, and ID-card design tools (IDCreator, CardExchange, AlphaCard) are card printers, not a fair comparable",
          annualCost: 410,
          pricingBasis: "~8-9 staff-hours saved (instant search + no manual re-keying of the paper log afterward) plus ~$220 in avoided duplicate/misissued-card costs, at an estimated 5% paper-process error rate across 890 students",
          sourceNote: "Own estimate, not a vendor figure, grounded in ILS's actual scale (890 students, one processing day).",
        },
      ],
      annualSavings: 410,
    },
  },
  {
    slug: "ihelp-ticketing",
    title: "IT Helpdesk Ticketing",
    tagline: "The school IT department's helpdesk: students and staff submit tickets, including dedicated device-break and loaner-iPad flows, and staff triage everything from a dashboard that's aware of the school's rotating bell schedule.",
    description:
      "ILS had been running its helpdesk on Freshdesk, where every single reply sent an email and nothing about the tool matched how this school actually works: a lot of device-break and loaner-iPad requests specifically, and staff who need to know where a student physically is right now, not just what they reported. I replaced it with a purpose-built Next.js helpdesk with a staff triage dashboard (bulk assign/close, internal notes, a knowledge base) and two dedicated flows for device breaks and loaner requests, each with their own lifecycle rather than being generic ticket notes. A daily sync of the school's rotation feed means a ticket shows the requester's current class block and room, not just their name.",
    techStack: ["Next.js", "TypeScript", "SQLite", "Prisma", "NextAuth", "Application Insights", "Cloudflare Turnstile"],
    features: [
      "Staff dashboard: bulk assign/close, internal notes, grouping by building, mobile swipe/pull-to-refresh, KB article management",
      "Dedicated device-break flow that syncs into the school's own device-damage tracking system",
      "Dedicated loaner-iPad flow: request, tracking-list sync, an in-portal status panel, and return/reminder handling",
      "Daily sync of the school's rotation/bell-schedule feed, so ticket detail shows the requester's current block and room",
      "Bot-protected public ticket form, email notifications on assignment and on charge/loss cases",
    ],
    learned: [
      "Syncing a daily rotation-schedule feed let ticket detail surface where a requester currently is in the school day, a small addition that mattered a lot for a helpdesk fielding in-person device issues.",
      "An Application Insights connection-string app setting alone produces zero telemetry. The SDK has to be explicitly initialized in code before any of it is actually collected.",
      "Modeling loaners as a full lifecycle (request → tracking record → status panel → return/reminder) instead of a one-off ticket note made the whole flow far easier to reason about at a glance.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | HELPDESK",
    accentColor: "#2563EB",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/ihelp-landing.jpg",
    images: ["/images/ils/ihelp-landing.jpg", "/images/ils/ihelp-dashboard-blurred.jpg", "/images/ils/ihelp-reports.jpg"],
    impact: {
      peopleServed: "890 students and 100 staff: everyone who can submit a ticket, plus every lookup the Room Locator feature resolves",
      before: "ILS paid for Freshdesk, a generic helpdesk tool where every single reply generated an email and nothing about it was tailored to the school. There was no device-break or loaner-specific flow, and no way to see where a student physically was for an in-person fix. Schedule data the Room Locator now surfaces didn't exist anywhere staff could see it in the moment.",
      after: "Staff triage every ticket from one dashboard with dedicated device-break and loaner flows, without generating an email for every reply, and ticket detail shows exactly where the requester is right now, synced nightly from PowerSchool's actual rotation.",
      comparables: [
        {
          product: "Freshdesk",
          vendor: "Freshworks",
          annualCost: 800,
          pricingBasis: "$800+/year, ILS's actual prior subscription before this tool replaced it",
          sourceNote: "Reported directly by ILS IT, not a researched estimate. The plan also meant every reply sent an email and no workflow matched the school's actual device-break/loaner processes.",
        },
        {
          product: "SmartPass",
          vendor: "Raptor Technologies",
          annualCost: 3115,
          pricingBasis: "~$2.50-$5/student/year, blended from a disclosed district rate and vendor-cited figures, for the Room Locator feature specifically (SmartPass has no fixed public price sheet)",
          sourceNote: "Frederick County Public Schools disclosed rate (~$3.15/student) plus SmartPass public marketing figures, Sept 2026, since Freshdesk never had an equivalent capability at any price.",
        },
      ],
      annualSavings: 3915,
    },
  },
  {
    slug: "driver-mvr-form",
    title: "Driver MVR Request Form",
    tagline: "Combined two separate paper forms for staff driver background checks into a single online submission that also generates the finished PDF packet automatically.",
    description:
      "Coaches and other driving staff had to fill out two separate paper forms (a request/approval form and a signed authorization) before a motor vehicle record check could even start, and someone then had to assemble everything into a packet by hand. I built one combined online form that handles both, supports submitting multiple drivers in a single pass, and automatically generates the finished PDF packet (approval form, authorization page, and license scan) filed straight into the reviewing office's document library.",
    techStack: ["MSAL", "Azure Functions", "SharePoint", "Microsoft Graph", "pdf-lib"],
    features: [
      "One combined form replacing two separate paper forms",
      "Multi-driver submissions handled in a single pass",
      "Automatic combined PDF packet generation (approval form, authorization, and license scan) filed directly into a SharePoint document library",
      "A status field the reviewing office updates directly once a record check comes back",
    ],
    learned: [
      "Generated the combined PDF packet natively in code instead of standing up a headless-browser or document-conversion service, which kept the whole pipeline to a single lightweight Function.",
      "Tracked down an Azure Functions CORS preflight request that was being intercepted by the hosting platform before any function code ran. The fix was a platform-level CORS setting, not an in-code header.",
      "Dropped a planned Power Automate step after finding its SharePoint connector needs a one-time interactive consent no matter how the flow is built, and replaced it with a plain authenticated API call instead.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | FORMS",
    accentColor: "#059669",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/mvr-signin.jpg",
    images: ["/images/ils/mvr-signin.jpg", "/images/ils/mvr-form.jpg"],
    impact: {
      peopleServed: "~30 coaches and activity-van drivers, plus the reviewing office",
      before: "Getting a driver cleared meant two separate paper forms (a request/approval form and a signed authorization) filled out, then manually assembled into a packet with a license scan before a record check could even start.",
      after: "One combined online form handles both, supports multiple drivers in a single pass, and the finished PDF packet generates automatically and files itself into the reviewing office's document library.",
      comparables: [
        {
          product: "SambaSafety continuous MVR monitoring",
          vendor: "SambaSafety",
          annualCost: 1185,
          pricingBasis: "$2.50/driver/month continuous monitoring + $9.50/MVR pull, published SambaSafety fee schedule, applied to an estimated ~30 driving staff",
          sourceNote: "Driver headcount (~30) is an ILS-specific estimate, not sourced from payroll/HR data. Adjust if a real count is known.",
        },
      ],
      annualSavings: 1185,
    },
  },
  {
    slug: "math-lab-scheduler",
    title: "Math Lab Scheduler",
    tagline: "A scheduling system for the school's peer-tutoring Math Lab program: student sign-up, tutor availability and auto-assignment, a live-session console, and its own reminder and hall-pass email automation.",
    description:
      "The Math Lab peer-tutoring program needed a system for students to sign up for a specific date, for tutors to set their availability and get assigned automatically, and for staff to run the day of it without manually juggling spreadsheets and emails. I built it in phases as the real requirements became clear through actual use, starting with basic sign-up and a staff roster, then a rotation-aware calendar engine, tutor availability and priority auto-assignment, a live-session console, and a full set of automated reminder and hall-pass emails that read directly off the same data the app already keeps current.",
    techStack: ["Vite", "React", "TypeScript", "Azure Functions", "SharePoint", "MSAL", "Power Automate"],
    features: [
      "Per-date tutee sign-up against the student directory, plus a standing-enrollment option for recurring tutees",
      "Month-based tutor availability with priority auto-assignment and day-of admin overrides",
      "A live-session console for running a session in real time",
      "Staff console with a rotation-calendar sync, day cancellation, attendance reporting with Excel export, and an activity log",
      "Scheduled reminder and tutor-confirmation emails, plus a dedicated hall-pass email automation that respects same-day cancellations",
      "A reversible test-mode email redirect so the automation can be safely tested without emailing real students",
    ],
    learned: [
      "Moved one specific automated email off Power Automate onto a small timer-triggered Function once real requirements (a cancelled-day check plus a per-slot time lookup) outgrew what a standard, non-premium connector could cleanly express.",
      "Used a no-signin click-through link for tutor confirmation rather than a one-click email action, specifically so automated email security scanners that pre-fetch links can't accidentally trigger the confirmation themselves.",
      "Rebuilt the sign-up model from a standing monthly enrollment to per-date sign-up once actual usage showed that's what the program really needed, a reminder that early data models should stay easy to revisit.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | SCHEDULING",
    accentColor: "#BE185D",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/mathlab-livesession.jpg",
    images: ["/images/ils/mathlab-livesession.jpg"],
    impact: {
      peopleServed: "Math Lab tutees and tutors school-wide, plus the staff running the program",
      before: "Sign-ups, tutor availability, and day-of scheduling ran through spreadsheets and email, with reminders and hall passes sent by hand for every session.",
      after: "Students sign up per date, tutors get auto-assigned by availability and priority, staff run the live day from one console, and reminder/hall-pass emails send themselves off the same data.",
      comparables: [
        {
          product: "Acuity Scheduling",
          vendor: "Squarespace",
          annualCost: 324,
          pricingBasis: "$27/month Standard tier, annual billing, published Acuity Scheduling pricing page",
          sourceNote: "Acuity is a generic appointment scheduler. It doesn't actually replicate tutor auto-assignment or the live-session console, so this is a conservative lower-bound comparable, not a feature-equivalent one.",
        },
      ],
      annualSavings: 324,
    },
  },
  {
    slug: "school-store-payments",
    title: "School Store Payments",
    tagline: "In Progress: an online school-store catalog and checkout so staff can buy branded items without a register visit. Catalog/admin API built; checkout blocked on payment-provider sandbox access.",
    description:
      "The school store only worked as an in-person register, so I'm building a web app so staff can browse the catalog and pay online instead, with Finance notified automatically on every sale. The catalog and admin management API are built and working; checkout is on hold waiting on sandbox credentials from the payment provider, so the storefront and payment flow haven't been built yet. Worth including here as an honest in-progress example rather than only finished work.",
    techStack: ["Azure Static Web Apps", "Azure Functions", "SharePoint", "Microsoft Graph", "Clover", "Power Automate"],
    features: [
      "Catalog and admin CRUD API, with the data layer isolated behind a single module so swapping in the real SharePoint-backed store is a contained change",
      "Role-gated admin routes, checked at both the hosting-platform gateway and inside each function handler (since direct API calls bypass the gateway check)",
      "Client-side payment tokenization planned so raw card data never touches the app's own servers",
      "Two checkout paths planned (guest and optional Microsoft sign-in) since not every staff member can reliably authenticate",
    ],
    learned: [
      "Isolated the data layer behind one repository module up front, specifically so the eventual swap from an in-memory stub to real SharePoint-backed storage stays a one-file change instead of a rewrite.",
      "Caught and corrected an incorrect payment-processor assumption early, before any checkout code was built around it. Worth verifying integration assumptions before writing to them.",
      "Learned that a platform can reserve certain URL path prefixes for its own routes, worked around by giving the affected functions an explicit route override.",
    ],
    status: "wip",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | IN PROGRESS",
    accentColor: "#7C3AED",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    images: [],
  },
  {
    slug: "openhouse-registration",
    title: "Open House Registration",
    tagline: "A public admissions-funnel form replacing a paper Open House sign-up: multi-student sibling registration, automatic confirmation emails, and a single shared QR code for day-of check-in.",
    description:
      "Open House sign-ups ran off a printed, Archdiocese-style paper form that had to be retyped into a spreadsheet before anyone had a real headcount. I replaced it with a public 3-step registration form (Student → Parent/Guardian → Review) that supports registering siblings in one pass, auto-detects Archdiocese of Miami schools to prompt for a shared PowerSchool number, and sends a confirmation email with the event details and calendar links the moment a family submits. On event day, families check in through a single shared QR code, and admissions staff watch registrant, guest, and check-in totals update live on a dashboard instead of reconciling a headcount afterward.",
    techStack: ["HTML/CSS/JavaScript", "Azure Functions", "SharePoint", "Microsoft Graph", "Cloudflare Turnstile", "GitHub Pages"],
    features: [
      "3-step public registration form with multi-student sibling support (up to 5 per submission) and ADOM-school auto-detection prompting a shared PowerSchool number field",
      "Live phone-number formatting and validation across Home/Cell/Office fields",
      "Automatic confirmation email with event details, an inline embedded crest, and Google/Apple calendar links, sent via Graph the moment a submission completes",
      "Day-of check-in flow with an editable party size, driven by a single shareable QR code with the ILS crest embedded directly in the code",
      "Admin dashboard: registrant table, deduplicated guest totals across sibling submissions, check-in stats, and self-service admin management (add/remove @ilsroyals.com admins with no redeploy)",
      "Layered bot protection on the public submit endpoint (honeypot, per-IP rate limit, a fill-time check, and Cloudflare Turnstile), all rejecting silently so a scraper can't tell which layer caught it",
    ],
    learned: [
      "Microsoft Graph rejects array values for a multi-select Choice column outright. Converted the column to plain text and joined selections into a delimited string instead of fighting the documented (but broken-in-practice) array format.",
      "Sibling rows from one multi-student submission all shared the same AttendeeCount, so the dashboard's guest total counted each sibling's party size separately, and a 2-sibling '4 attending' submission read as 8. Fixed by adding a SubmissionId column and deduplicating the total by submission, not by row.",
      "Relaxed the admin sign-in app's Enterprise Application from requiring explicit per-user assignment to open sign-in, then enforced the real admin allowlist in the API layer instead, avoiding the need for a Global-Admin-only Graph permission just so admins could manage each other.",
      "A native window.confirm() on the remove-admin action froze the browser-automation test session mid-test. Replaced with an in-page two-step confirm before shipping.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | ADMISSIONS",
    accentColor: "#0D9488",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/openhouse-registration.jpg",
    images: [],
    impact: {
      peopleServed: "Every prospective family registering (siblings included), plus the admissions/front-office staff running day-of check-in",
      before: "Open House sign-ups ran through a printed, Archdiocese-style paper form handed out and collected in person, then manually retyped into a spreadsheet before anyone could produce a real headcount or a working attendee list for check-in day.",
      after: "Families register online in a guided 3-step form with sibling support and get an automatic confirmation email, then check in on event day via one shared QR code while staff watch registrant, guest, and check-in totals update live.",
      comparables: [
        {
          product: "Formstack Suite",
          vendor: "Formstack",
          annualCost: 3000,
          pricingBasis: "$250/month billed annually, Suite plan, published Formstack pricing page",
          sourceNote: "A cheaper Forms-only tier ($996/year) exists but lacks the custom branding, self-check-in workflow, and submission volume this event actually needs.",
        },
      ],
      annualSavings: 3000,
    },
  },
  {
    slug: "dress-approval",
    title: "Dress Approval",
    tagline: "A 4-angle photo submission and staff review flow for event dress-code approval, built first for Homecoming, replacing an in-person walk-by check.",
    description:
      "Dress-code approval for events like Homecoming ran as a visual, in-person check with no record of who was reviewed or against what rule. I built a flow where students upload four full-body photos (front, back, left, right) ahead of the event. Each photo is hashed client-side to block duplicate images before upload. Staff review from a searchable, filterable admin queue: approve or reject with a note that's shown back to the student, so a rejection comes with exactly what to fix before resubmitting. Staff sign in through the school's Azure AD tenant, students through the separate ilsstudent.com tenant, both routed into the same app. It's one of three sub-apps sharing the 'ILS Activities' Azure Static Web App, alongside Fire Drill Checklist and the Scavenger Hunt.",
    techStack: ["Vite", "React", "TypeScript", "Azure Functions", "Azure AD", "MSAL", "Microsoft Graph", "SharePoint/OneDrive"],
    features: [
      "4-angle (front/back/left/right) full-body photo submission with client-side SHA-256 duplicate-photo detection before upload",
      "Staff admin queue: search by name, email, or student ID, filter by status, expand a row to view all four photos and leave a reviewer note",
      "Approve/Reject workflow with the reviewer's note surfaced back to the student on rejection",
      "Configurable per-event submission window and deadline, enforced both client-side and by the API",
      "Separate Azure AD tenants for staff (ilsroyals.com) and students (ilsstudent.com) routed into one app",
      "Deployed as one of three sub-apps sharing the same 'ILS Activities' Azure Static Web App",
    ],
    learned: [
      "Hashing each photo client-side with SHA-256 before submission catches duplicate uploads (e.g. the same photo picked for two angles) without a server round-trip first.",
      "Keeping a per-submission reviewer note visible to the student turned a rejection into something actionable instead of a dead end.",
      "Branching sign-in and role logic on which Azure AD tenant a user belongs to (staff vs. student) removed the need for a manual allowlist to tell the two apart.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | EVENT OPS",
    accentColor: "#D946EF",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/dress-approval.jpg",
    images: [],
    impact: {
      peopleServed: "Students attending dress-code-governed events (Homecoming first) and the approving staff",
      before: "Dress-code compliance was checked in person at the door, with no consistent rule application across reviewers, no record of who was checked, and no way for a student to know ahead of time if their outfit would pass.",
      after: "Students submit four photos days ahead and get an Approved/Rejected decision with a specific note if rejected, giving time to fix it before the event, while staff review from one queue with a permanent decision record.",
      comparables: [
        {
          product: "Jotform Gold",
          vendor: "Jotform",
          annualCost: 1150,
          pricingBasis: "~$39-99/month Gold tier (top of range for multiple approver seats), published Jotform pricing",
          sourceNote: "True SSO/Azure AD parity with the in-house tool would require Jotform's Enterprise tier (~$9,500/year median contract per Vendr). Using the closer-scoped Gold tier here understates, not overstates, the comparison.",
        },
      ],
      annualSavings: 1150,
    },
  },
  {
    slug: "fire-drill-checklist",
    title: "Fire Drill Checklist",
    tagline: "A real-time, building-by-building room-check list for fire drills, synced daily to the school's actual rotation and bell schedule.",
    description:
      "During a fire drill, staff needed to confirm every classroom and space was cleared, block by block. But ILS runs a rotating schedule, so 'Block A' isn't the same wall-clock time or teacher two days in a row, and there was no shared source of truth for which rooms belonged to which block on any given day. I built a checklist grouped by building and then by building leader, polling every 2 seconds so multiple staff checking different zones see each other's progress live without a checkbox flickering back mid-tap. A rotation banner reads the day's real bell schedule, synced daily from PowerSchool via a feed the iHelp helpdesk app exposes, and auto-selects the checklist's current or next-up block, so staff aren't figuring out 'what block are we in' during an actual drill. It's one of three sub-apps sharing the 'ILS Activities' Azure Static Web App.",
    techStack: ["Vite", "React", "TypeScript", "Azure Functions", "Cosmos DB", "Azure AD", "MSAL"],
    features: [
      "Real-time checklist polling every 2 seconds so multiple staff checking different buildings see each other's checkmarks live, without clobbering an in-flight tap",
      "Items grouped by building, then banded by building leader independent of storage order, so staff can find their zone fast during an actual drill",
      "Rotation banner reads the day's real bell schedule (daily-synced from PowerSchool via the iHelp helpdesk app's feed) and auto-selects the current or next-up block",
      "Per-block reset with a confirmation step and a last-reset audit line (who/when)",
      "Staff-only admin panel to manage the location list per block and control access, independent of the other two ILS Activities sub-apps",
    ],
    learned: [
      "Buffering in-flight taps against the 2-second poll kept a checkbox from visually flickering back before the server confirmed it, needed once multiple staff could hit the same block screen at once.",
      "ILS's rotating schedule means 'Block A' isn't the same time or teacher two days running. Reading the real daily rotation feed instead of a static bell schedule was the only way to make the auto-selected block trustworthy during an actual drill.",
      "Building-leader bands had to be assigned independent of storage order, since some locations were added to Cosmos in unrelated batches and don't sit adjacent to the rest of their leader's zone.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | SAFETY",
    accentColor: "#DC2626",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/fire-drill-checklist.jpg",
    images: [],
    impact: {
      peopleServed: "890 students and 100 staff, every building on campus during a drill",
      before: "Fire drills were tracked on paper or verbally, block-to-room assignments lived in someone's memory or an old printout, and there was no real-time view of which rooms across campus still hadn't been confirmed cleared.",
      after: "Every staff member checking a building sees the same live list, grouped to match how campus is actually organized, with the day's real rotation block already resolved for them.",
      comparables: [
        {
          product: "Raptor Emergency Management",
          vendor: "Raptor Technologies",
          annualCost: 2095,
          pricingBasis: "$2,095/building/year, a real disclosed district subscription (Raptor has no public list price)",
          sourceNote: "Reported district subscription cost via Times News Online, used as the most credible available proxy. Not a quote for ILS specifically, and actual cost would likely run higher with optional hardware/badge add-ons.",
        },
      ],
      annualSavings: 2095,
    },
  },
  {
    slug: "ils-scavenger-hunt",
    title: "ILS Scavenger Hunt",
    tagline: "A photo-submission scavenger hunt for a scheduled school event window, with an admin override to open submissions early or late.",
    description:
      "Built for a scheduled school activity where students submit up to 10 distinct photos, grade-tagged, during a fixed daily window (2:15–3:30pm ET). Each photo is hashed client-side to block duplicate submissions, enforcing the 'no repeats' rule automatically instead of leaving it to staff to eyeball. Staff get an admin queue to review submissions and a window-override toggle to open submissions outside the scheduled hours when the day's actual schedule shifts. It's one of three sub-apps sharing the 'ILS Activities' Azure Static Web App alongside Fire Drill Checklist and Dress Approval.",
    techStack: ["Vite", "React", "TypeScript", "Azure Functions", "Azure AD", "MSAL", "Microsoft Graph"],
    features: [
      "Grade-tagged photo submissions (up to 10 photos) with client-side SHA-256 hashing to block duplicate images before upload",
      "Scheduled submission window (2:15–3:30pm ET) enforced both client- and server-side, with a staff override to force it open regardless of the clock",
      "Staff admin queue for reviewing submissions by grade",
      "Shared MSAL sign-in and mock-mode local preview pattern with the other ILS Activities apps, so staff screens can be rehearsed without a live sign-in",
      "Post-launch fix: corrected a grade-column display bug found after the event went live",
    ],
    learned: [
      "Hashing every photo client-side made 'no duplicate photos' an enforceable rule instead of an honor-system checkbox, the same pattern reused from Dress Approval.",
      "A hard-coded submission window needed an admin override from day one, since a real event's actual schedule shifts and staff shouldn't be blocked from opening it manually.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | EVENT OPS",
    accentColor: "#65A30D",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/ils-scavenger-hunt.jpg",
    images: [],
    impact: {
      peopleServed: "890 students",
      before: "A scavenger-hunt-style activity would normally run on paper or a generic form tool with no duplicate-detection and no automatic window enforcement.",
      after: "Students submit through a purpose-built flow that blocks duplicate photos and enforces the scheduled window automatically, with staff able to override the window in one click if the day runs long or short.",
      comparables: [
        {
          product: "Goosechase (\"School 500\" tier)",
          vendor: "Goosechase",
          annualCost: 749,
          pricingBasis: "$749/year, up to ~500 participants, per third-party pricing aggregators",
          sourceNote: "Not Goosechase's own published price (their site lists Free, a $99/year single-classroom tier, and custom Schools & Districts quotes). Treat this as a floor, not an exact match, since ILS's 890 students exceed the 500-participant cap this figure is based on.",
        },
      ],
      annualSavings: 749,
    },
  },
  {
    slug: "classroom-walkthroughs",
    title: "Classroom Walkthroughs",
    tagline: "Replaced the Admin Team's Microsoft Form + hand-maintained Excel workbook for informal classroom observations with a live dashboard that rebuilds the old workbook's tabs automatically.",
    description:
      "The Admin Team's 8 observers logged classroom walkthroughs into a Microsoft Form that fed an Excel workbook someone had to keep current by hand, 81 historical rows deep, with no live view of who hadn't been observed yet and no trend line without opening the file and building a pivot table. I built a Next.js app with an /observe form matching the old workbook's exact fields (department, block, grade level, course level, engagement activities, classroom protocols, engagement band, visit length) so no historical data or habits were lost in the move, and an admin-only dashboard that recreates the workbook's by-teacher and results tabs live, plus trends, a not-yet-observed list, and a raw-data export. Both the observer allowlist and the teacher roster are governance-sensitive, so access is locked to 8 named observer emails and the dashboard to 2 admin emails, and the teacher list is read (not re-synced) from the same PowerSchool-backed SharePoint list another app already maintains.",
    techStack: ["Next.js", "TypeScript", "NextAuth", "Azure AD", "Microsoft Graph", "SharePoint", "Azure Static Web Apps"],
    features: [
      "Observation form matching the legacy workbook's exact fields: department, block, grade level, course level, 16 engagement activities, 13 classroom protocols, engagement band, and visit length",
      "Admin dashboard recreating the old workbook's by-teacher and results tabs automatically from live data",
      "Teacher matrix, trend chart, and year-over-year comparison views",
      "Not-yet-observed list, surfacing which teachers still need a walkthrough this period",
      "Raw-data table with an Excel export, and a live-linked SharePoint export view for direct access",
      "Reads the teacher roster from another app's PowerSchool-synced SharePoint list instead of re-syncing it: one source of truth, no duplicate SFTP job",
      "One-time migration script that imported all 81 rows of historical workbook data into the new list",
    ],
    learned: [
      "PowerSchool's 'Teacher' role tags counselors and Admin Team members the same as classroom teachers, and the school's public 'Meet the Team' page turned out not to be authoritative either (several staff listed there as non-Faculty actually do teach), so the exclusion list is maintained as its own corrected source of truth, not derived from either upstream source.",
      "Reused another app's (id-card-tool) nightly PowerSchool-synced teacher list read-only instead of standing up a second SFTP sync for the same data. One job owns the sync, this app just reads the result.",
      "Migrating the legacy workbook's 81 rows once, up front, meant the new dashboard had full historical trend data from day one instead of starting from zero.",
    ],
    status: "live",
    featured: false,
    year: "2026",
    discipline: "INTERNAL TOOLS | OBSERVATION",
    accentColor: "#6366F1",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    coverImage: "/images/ils/classroom-walkthroughs.jpg",
    images: [],
    impact: {
      peopleServed: "8 Admin Team observers and ~90 teachers observed across the school year (of ILS's ~100 staff)",
      before: "Observers logged walkthroughs into a Microsoft Form that fed an Excel workbook someone had to keep current by hand. Seeing which teachers hadn't been observed yet, or comparing trends across a school year, meant opening the file and building a pivot table from scratch every time, 81 rows deep with no live view of any of it.",
      after: "Every walkthrough now writes straight to a SharePoint list, and the dashboard rebuilds the old workbook's by-teacher and results tabs live, plus a not-yet-observed list, a trend chart, and year-over-year comparison. The same information that used to take manual spreadsheet work is now just a page load.",
      comparables: [
        {
          product: "TeachBoost Pro",
          vendor: "TeachBoost",
          annualCost: 5400,
          pricingBasis: "$50/user/month, 9 licensed seats (8 observers + 1 admin), published TeachBoost starting price",
          sourceNote: "TeachBoost's exact school/enterprise pricing requires a sales quote. The calculation assumes per-observer-seat licensing, the more common model for this SaaS category: an assumption, not a quote.",
        },
      ],
      annualSavings: 5400,
    },
  },
  {
    slug: "ils-ios-apps",
    title: "Native iOS Apps",
    tagline: "Native iOS companion apps for the tools that need to live on every student and staff device, starting with iHelp, Math Lab Scheduler, the PO System, and the Behavior & Discipline Platform.",
    description:
      "Several of these tools get used often enough, by enough of the school, that a bookmarked web page is the wrong shape for them. The plan is native iOS apps for the highest-frequency, most device-bound tools first: iHelp for students and staff filing tickets, Math Lab Scheduler for tutees and tutors, the PO System for approved requesters and approvers, and the Behavior & Discipline Platform for the Dean of Students and staff filing incidents.",
    techStack: ["Swift", "SwiftUI"],
    features: [
      "Native iOS apps for iHelp, Math Lab Scheduler, the PO System, and the Behavior & Discipline Platform",
      "Shared Azure AD sign-in with the existing web apps, no separate account to manage",
      "Push notifications for ticket updates, tutor assignments, and PO approvals instead of relying on email",
    ],
    learned: [],
    status: "planned",
    featured: false,
    year: "TBD",
    discipline: "INTERNAL TOOLS | PLANNED",
    accentColor: "#9CA3AF",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    images: [],
  },
  {
    slug: "campus-store-tech-sales",
    title: "Campus Store + Tech Sales",
    tagline: "A full campus store app built on top of School Store Payments, plus a staff/faculty-only Tech Sales storefront gated to @ilsroyals.com sign-in.",
    description:
      "School Store Payments already has a working catalog and admin API. The next phase turns that into a full campus store app, and adds a separate Tech Sales section for discounted or surplus tech equipment, restricted to staff and faculty who sign in with an @ilsroyals.com account.",
    techStack: ["Azure Static Web Apps", "Azure Functions", "SharePoint", "Microsoft Graph"],
    features: [
      "Full campus store app extending School Store Payments' existing catalog and admin API",
      "A separate Tech Sales storefront for surplus and discounted equipment, staff and faculty only",
      "Access gated to @ilsroyals.com sign-in, no separate account or approval step",
    ],
    learned: [],
    status: "planned",
    featured: false,
    year: "TBD",
    discipline: "INTERNAL TOOLS | PLANNED",
    accentColor: "#9CA3AF",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    images: [],
  },
  {
    slug: "maintenance-ticketing",
    title: "Maintenance Ticketing System",
    tagline: "A dedicated ticketing system for the Maintenance department, replacing their own Freshdesk subscription the same way iHelp replaced IT's.",
    description:
      "Maintenance currently runs work orders through Freshdesk, the same generic tool IT paid for before iHelp replaced it. The plan is the same transition: a ticketing flow built around how Maintenance actually operates, replacing another recurring Freshdesk subscription with a purpose-built system.",
    techStack: ["Next.js", "TypeScript", "Azure AD"],
    features: [
      "Work-order ticketing built around Maintenance's actual request types and priority levels",
      "Staff triage dashboard modeled on the same pattern already proven with iHelp",
      "Replaces Maintenance's own Freshdesk subscription",
    ],
    learned: [],
    status: "planned",
    featured: false,
    year: "TBD",
    discipline: "INTERNAL TOOLS | PLANNED",
    accentColor: "#9CA3AF",
    category: "Internal Tools",
    deployment: "private",
    organization: "Immaculata-La Salle High School",
    images: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

const ILS_ORG = "Immaculata-La Salle High School";

export function getIlsProjects(): Project[] {
  return projects.filter((p) => p.organization === ILS_ORG && p.status === "live");
}

export function getIlsPlannedProjects(): Project[] {
  return projects.filter((p) => p.organization === ILS_ORG && p.status === "planned");
}

export function getIlsAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const ils = getIlsProjects();
  const index = ils.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? ils[index - 1] : null,
    next: index < ils.length - 1 ? ils[index + 1] : null,
  };
}

export function getIlsImpactSummary() {
  const ils = getIlsProjects();
  const withImpact = ils.filter((p): p is Project & { impact: ProjectImpact } => !!p.impact);
  const totalAnnualSavings = withImpact.reduce((sum, p) => sum + p.impact.annualSavings, 0);
  return {
    toolCount: ils.length,
    totalAnnualSavings,
    studentsServed: 890,
    staffServed: 100,
  };
}
