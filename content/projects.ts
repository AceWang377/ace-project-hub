export type ProjectStatus =
  | "idea"
  | "building"
  | "unreviewed"
  | "in_review"
  | "private_beta"
  | "public_beta"
  | "live"
  | "paused";

export type Project = {
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  category: string[];
  targetUsers: string[];
  problem: string;
  solution: string;
  features: {
    title: string;
    description: string;
  }[];
  roadmap: {
    label: string;
    description: string;
    status: "done" | "current" | "planned";
  }[];
  links: {
    appStore?: string;
    webApp?: string;
    landing?: string;
    github?: string;
    waitlist?: string;
    support?: string;
    privacy?: string;
    terms?: string;
  };
  brand: {
    icon?: string;
    accentColor?: string;
    theme?: "light" | "dark" | "mono";
  };
  media: {
    heroImage?: string;
    screenshots?: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "acesignalforge",
    name: "AceSignalForge",
    shortName: "SignalForge",
    tagline: "AI growth console for indie app marketing.",
    description:
      "AceSignalForge is an internal, single-user AI growth console for indie iOS apps. It turns app profiles, personas, and pain points into scored content ideas, multi-platform text packages, asset requirements, publishing queue items, metrics, weekly reviews, and integration planning.",
    status: "building",
    category: ["AI", "Marketing", "Indie Apps"],
    targetUsers: [
      "Indie iOS app developers",
      "Solo builders launching small tools",
      "Creators who need structured growth experiments",
      "Developers tracking App Store signals and content results",
    ],
    problem:
      "Indie app builders can ship products faster than they can explain, test, and review growth messages across platforms.",
    solution:
      "AceSignalForge turns app context into a repeatable loop: app profile, ideas, content packages, asset requirements, publishing queue, metrics, and weekly review.",
    features: [
      {
        title: "App profile to ideas",
        description:
          "Capture positioning, personas, pain points, and launch status, then generate scored content ideas.",
      },
      {
        title: "Multi-platform packages",
        description:
          "Draft X, Threads, LinkedIn, Reddit, Product Hunt, and short-video scripts from one approved idea.",
      },
      {
        title: "Asset requirements",
        description:
          "Plan screenshots, short demos, cover text, shot lists, and creative requirements before production.",
      },
      {
        title: "Publishing queue",
        description:
          "Keep manual-first publishing organized with approval, platform fit checks, and publish-attempt records.",
      },
      {
        title: "Weekly review",
        description:
          "Record metrics and use AI review to decide what should change in the next growth cycle.",
      },
    ],
    roadmap: [
      {
        label: "Done",
        description: "Built the core Next.js/Supabase console structure and mock AI fallback flow.",
        status: "done",
      },
      {
        label: "Now",
        description: "Using it as a private workflow for Ace's iOS app launch experiments.",
        status: "current",
      },
      {
        label: "Next",
        description: "Add real integrations only after the manual loop proves useful.",
        status: "planned",
      },
    ],
    links: {
      github: "https://github.com/AceWang377/ace-signal-forge",
      waitlist: "/contact?project=acesignalforge",
      support: "/support/acesignalforge",
      privacy: "/legal/privacy/acesignalforge",
      terms: "/legal/terms/acesignalforge",
    },
    brand: { icon: "ASF", accentColor: "#00c7d4", theme: "dark" },
    media: {
      screenshots: ["/projects/acesignalforge/logo.png"],
    },
  },
  {
    slug: "blacktop",
    name: "Blacktop",
    tagline: "Court facts, not ratings.",
    description:
      "Blacktop is a SwiftUI iOS app for finding basketball courts by practical playability facts. It starts with Sheffield, uses a clean MapKit court map, and focuses on decisions before you leave: outdoor or indoor, free or paid, lights, surface, rain impact, nets, rim height, court space, facilities, access notes, and data confidence.",
    status: "unreviewed",
    category: ["Sports", "Navigation", "iOS"],
    targetUsers: [
      "Basketball players checking courts before a run",
      "People looking for nearby outdoor or indoor courts",
      "Players who care about lights, nets, surface, and access",
      "App Store reviewers checking no-login location behavior",
    ],
    problem:
      "Court discovery often depends on ratings, social noise, or incomplete map listings when players mainly need practical court facts.",
    solution:
      "Blacktop gives a no-login basketball court map with filters, saved courts stored locally, Apple Maps directions, and clear data source notes.",
    features: [
      {
        title: "Map-first discovery",
        description:
          "Browse nearby basketball courts on a clean map with court pins and a fast court count.",
      },
      {
        title: "Practical filters",
        description:
          "Filter by outdoor, indoor, free, lights, dry surface, nets, and standard rim before travelling.",
      },
      {
        title: "Court fact cards",
        description:
          "Open practical details such as surface, rain impact, rim type, cleanliness, facilities, and access notes.",
      },
      {
        title: "Local saves",
        description:
          "Save courts on device without an account, backend profile, or social feed.",
      },
      {
        title: "Data transparency",
        description:
          "Review source and data confidence information from Profile so the map stays honest.",
      },
    ],
    roadmap: [
      {
        label: "Done",
        description: "Prepared App Store metadata, screenshots, privacy, support, and terms pages.",
        status: "done",
      },
      {
        label: "Now",
        description: "Blacktop is unreviewed in Apple App Store review flow.",
        status: "current",
      },
      {
        label: "Next",
        description: "Add the App Store link after approval and keep improving court coverage.",
        status: "planned",
      },
    ],
    links: {
      landing: "https://acewang377.github.io/Blacktop-App/",
      github: "https://github.com/AceWang377/Blacktop-App",
      waitlist: "/contact?project=blacktop",
      support: "/support/blacktop",
      privacy: "/legal/privacy/blacktop",
      terms: "/legal/terms/blacktop",
    },
    brand: { icon: "BT", accentColor: "#97f05a", theme: "dark" },
    media: {
      screenshots: [
        "/projects/blacktop/map.jpg",
        "/projects/blacktop/filters.jpg",
        "/projects/blacktop/details.jpg",
      ],
    },
  },
  {
    slug: "lastpercent",
    name: "Last Percent",
    shortName: "LastPercent",
    tagline: "One quest before your phone dies.",
    description:
      "Last Percent is a no-backend iOS MVP that gives users one tiny real-world mission when their phone battery reaches a chosen low-battery unlock point. It is intentionally minimal, black-and-white, no-login, no-feed, and not an app blocker.",
    status: "unreviewed",
    category: ["Mobile App", "iOS", "Digital Minimalism"],
    targetUsers: [
      "People trying to interrupt doomscrolling",
      "Users who like weird, memorable utility apps",
      "Mobile users who want a tiny real-world prompt",
      "App Store reviewers checking on-device battery behavior",
    ],
    problem:
      "Low battery is a memorable moment, but most apps either ignore it or turn behavior change into heavy productivity systems.",
    solution:
      "Last Percent uses the low-battery state as a light ritual: one real-world quest, stored locally, with optional daily reminders and no backend.",
    features: [
      {
        title: "Battery unlock point",
        description:
          "Choose the battery percent where the app unlocks a quest while avoiding false background-trigger promises.",
      },
      {
        title: "One quest per low-battery moment",
        description:
          "Generate a single simple real-world task that can be completed or skipped.",
      },
      {
        title: "Local-only history",
        description:
          "Quest history and settings stay on device through SwiftData with no account or backend service.",
      },
      {
        title: "Optional check-ins",
        description:
          "Daily reminders invite users back without pretending to monitor battery in the background.",
      },
      {
        title: "Minimal tone",
        description:
          "Black-and-white interface with a calm, slightly absurd utility-app feeling.",
      },
    ],
    roadmap: [
      {
        label: "Done",
        description: "Built the SwiftUI no-backend MVP, local data model, and App Store review notes.",
        status: "done",
      },
      {
        label: "Now",
        description: "Preparing public-facing support, privacy, screenshots, and launch positioning.",
        status: "current",
      },
      {
        label: "Next",
        description: "Use real user feedback to decide whether to add more quests or stronger reminder flows.",
        status: "planned",
      },
    ],
    links: {
      github: "https://github.com/AceWang377/LastPrecent",
      waitlist: "/contact?project=lastpercent",
      support: "/support/lastpercent",
      privacy: "/legal/privacy/lastpercent",
      terms: "/legal/terms/lastpercent",
    },
    brand: { icon: "LP", accentColor: "#ffffff", theme: "mono" },
    media: {
      screenshots: [
        "/projects/lastpercent/low-battery.png",
        "/projects/lastpercent/quest.png",
        "/projects/lastpercent/archive.png",
      ],
    },
  },
  {
    slug: "ace-studio",
    name: "AceStudio",
    tagline: "AI product content workspace for Shopify sellers.",
    description:
      "AceStudio is a Shopify-focused ecommerce content workspace for turning product photos into generated image sets, editable SEO copy, product readiness checks, and reviewable Shopify draft publishing.",
    status: "live",
    category: ["Shopify", "AI Content", "Ecommerce"],
    targetUsers: [
      "Shopify sellers preparing product listings",
      "Small ecommerce teams improving SEO and GEO readiness",
      "Operators who want review-first AI output",
      "Store owners publishing draft products to Shopify",
    ],
    problem:
      "Ecommerce teams need product images, SEO copy, Shopify fields, and page improvements, but raw AI output is risky without review and publishing controls.",
    solution:
      "AceStudio centralizes upload, generation, quality checks, credit usage, Shopify OAuth, draft publishing, growth audits, and approved write-back updates.",
    features: [
      {
        title: "Product media generation",
        description:
          "Upload a product photo and generate reviewable image sets for Shopify product pages.",
      },
      {
        title: "SEO and GEO copy",
        description:
          "Create descriptions, FAQs, alt text, product fields, and AI-answer-ready content.",
      },
      {
        title: "Shopify draft publishing",
        description:
          "Connect a Shopify store and publish approved product drafts through the Admin GraphQL API.",
      },
      {
        title: "Growth Studio",
        description:
          "Audit live Shopify pages for SEO, GEO, image alt text, internal links, and approved write-back updates.",
      },
      {
        title: "Operational controls",
        description:
          "Includes usage exports, billing, launch checks, support tools, and admin QA foundations.",
      },
    ],
    roadmap: [
      {
        label: "Done",
        description: "Built the monorepo web app, Shopify workflow, Supabase foundations, billing, and legal pages.",
        status: "done",
      },
      {
        label: "Now",
        description: "Polishing production readiness, public resources, and growth-monitoring flows.",
        status: "current",
      },
      {
        label: "Next",
        description: "Replace lightweight job handling with a durable queue when usage volume grows.",
        status: "planned",
      },
    ],
    links: {
      webApp: "https://ace-product-studio.vercel.app",
      github: "https://github.com/AceWang377/AceProductStudio",
      waitlist: "/contact?project=ace-studio",
      support: "/support/ace-studio",
      privacy: "/legal/privacy/ace-studio",
      terms: "/legal/terms/ace-studio",
    },
    brand: { icon: "AS", accentColor: "#111111", theme: "light" },
    media: {
      screenshots: [
        "/projects/ace-studio/product-media.png",
        "/projects/ace-studio/growth-detail.png",
      ],
    },
  },
];

export const featuredProjects = projects;
