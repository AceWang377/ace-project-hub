export type ProjectStatus =
  | "idea"
  | "building"
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
    tagline: "Turn app ideas into marketing experiments.",
    description:
      "An internal AI growth console that helps turn app information into content ideas, multi-platform copy, asset requirements, publishing queues, and weekly growth reviews.",
    status: "building",
    category: ["AI", "Marketing", "Indie Apps"],
    targetUsers: [
      "Indie app developers",
      "Solo founders",
      "Creators launching small tools",
      "People who need structured marketing experiments",
    ],
    problem:
      "Small product teams often know what they are building, but struggle to turn that work into repeatable launch signals.",
    solution:
      "AceSignalForge translates app context into practical campaigns, content variants, asset checklists, and review loops.",
    features: [
      {
        title: "Product signal intake",
        description:
          "Capture app positioning, audience, launch status, and current blockers in one structured brief.",
      },
      {
        title: "Campaign idea forge",
        description:
          "Generate small, testable campaign angles instead of one large unfocused launch plan.",
      },
      {
        title: "Publishing queue",
        description:
          "Organize copy and creative requirements by channel so weekly execution stays visible.",
      },
      {
        title: "Review cadence",
        description:
          "Turn outcomes into the next experiment, preserving what worked and what needs to change.",
      },
    ],
    roadmap: [
      {
        label: "Now",
        description: "Building the MVP workflow and project intake model.",
        status: "current",
      },
      {
        label: "Next",
        description: "Add publishing queues and reusable campaign templates.",
        status: "planned",
      },
      {
        label: "Later",
        description: "Connect platform APIs after the core workflow proves useful.",
        status: "planned",
      },
    ],
    links: {
      webApp: "https://acesignalforge.maindomain.com",
      waitlist: "/contact?project=acesignalforge",
      support: "/support/acesignalforge",
      privacy: "/legal/privacy/acesignalforge",
      terms: "/legal/terms/acesignalforge",
    },
    brand: { icon: "ASF", accentColor: "#00c7d4", theme: "dark" },
    media: {},
  },
  {
    slug: "blacktop",
    name: "Blacktop",
    tagline: "A focused mobile app with a bold court-side identity.",
    description:
      "Blacktop is a mobile app project under Ace. The final public description can be updated from this project config when App Store positioning is confirmed.",
    status: "in_review",
    category: ["Mobile App", "iOS"],
    targetUsers: ["Mobile-first users", "Early App Store reviewers", "People trying focused everyday tools"],
    problem:
      "New mobile apps need a trustworthy public page before the full product story is finalized.",
    solution:
      "Blacktop's hub page gives reviewers and users the support, privacy, status, and contact links they need.",
    features: [
      {
        title: "App Store ready profile",
        description: "A clear project page with public legal, support, and contact paths.",
      },
      {
        title: "Editable positioning",
        description: "Tagline, feature copy, and App Store links can be updated in one file.",
      },
      {
        title: "Clean mobile-first brand",
        description: "A slightly sporty identity that still feels formal and credible.",
      },
    ],
    roadmap: [
      { label: "Now", description: "Prepare App Store review support pages.", status: "current" },
      { label: "Next", description: "Add App Store link when available.", status: "planned" },
      { label: "Later", description: "Publish product screenshots and release notes.", status: "planned" },
    ],
    links: {
      waitlist: "/contact?project=blacktop",
      support: "/support/blacktop",
      privacy: "/legal/privacy/blacktop",
      terms: "/legal/terms/blacktop",
    },
    brand: { icon: "BT", accentColor: "#111111", theme: "mono" },
    media: {},
  },
  {
    slug: "lastpercent",
    name: "LastPercent",
    tagline: "A mobile product for the final mile of everyday decisions.",
    description:
      "LastPercent is an Ace mobile app project. Its final feature description can be replaced here once the App Store page and screenshots are ready.",
    status: "in_review",
    category: ["Mobile App", "Productivity"],
    targetUsers: ["iPhone users", "People who like focused utilities", "App Store reviewers"],
    problem:
      "Useful small apps still need a stable public home for discovery, legal pages, and support.",
    solution:
      "LastPercent gets a formal project page with editable copy, support links, and a waitlist/contact route.",
    features: [
      {
        title: "Focused utility framing",
        description: "Short, careful copy that avoids overpromising before the launch is public.",
      },
      {
        title: "Legal page coverage",
        description: "Privacy, terms, and support URLs are generated from the same project data.",
      },
      {
        title: "Launch-ready CTA",
        description: "The page can switch from coming soon to App Store once the listing is live.",
      },
    ],
    roadmap: [
      { label: "Now", description: "Keep reviewer-facing pages online.", status: "current" },
      { label: "Next", description: "Publish exact feature copy and App Store URL.", status: "planned" },
      { label: "Later", description: "Add screenshots and changelog notes.", status: "planned" },
    ],
    links: {
      waitlist: "/contact?project=lastpercent",
      support: "/support/lastpercent",
      privacy: "/legal/privacy/lastpercent",
      terms: "/legal/terms/lastpercent",
    },
    brand: { icon: "LP", accentColor: "#00a36c", theme: "light" },
    media: {},
  },
  {
    slug: "ace-studio",
    name: "Ace Studio",
    tagline: "Experiments, design, and tools by Ace.",
    description:
      "Ace Studio is the umbrella for creative, technical, and product experiments that may grow into standalone apps later.",
    status: "live",
    category: ["Studio", "Experiments", "Design"],
    targetUsers: ["Collaborators", "Future customers", "People following Ace's build process"],
    problem:
      "Experiments can feel disconnected when each one lives in a different folder, note, or prototype.",
    solution:
      "Ace Studio gives the work a consistent home while keeping each project flexible enough to evolve.",
    features: [
      {
        title: "Experiment index",
        description: "A place to collect tools, concepts, prototypes, and product notes.",
      },
      {
        title: "Creator-led identity",
        description: "The studio page keeps the human builder visible without becoming a resume site.",
      },
      {
        title: "Future-ready routing",
        description: "Experiments can graduate into project pages or subdomains when they need more space.",
      },
    ],
    roadmap: [
      { label: "Done", description: "Defined the studio as the umbrella identity.", status: "done" },
      { label: "Now", description: "Use the hub to organize active projects.", status: "current" },
      { label: "Next", description: "Add build notes and case studies after launch.", status: "planned" },
    ],
    links: {
      waitlist: "/contact?project=ace-studio",
      support: "/support/ace-studio",
      privacy: "/legal/privacy/ace-studio",
      terms: "/legal/terms/ace-studio",
    },
    brand: { icon: "AS", accentColor: "#6f6a5f", theme: "light" },
    media: {},
  },
];

export const featuredProjects = projects;
