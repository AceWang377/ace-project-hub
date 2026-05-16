import type { Locale } from "@/i18n/routing";

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
    iconImage?: string;
    accentColor?: string;
    theme?: "light" | "dark" | "mono";
  };
  media: {
    heroImage?: string;
    screenshots?: string[];
  };
};

const sharedProjects = {
  acesignalforge: {
    slug: "acesignalforge",
    name: "AceSignalForge",
    shortName: "SignalForge",
    status: "building",
    links: {
      github: "https://github.com/AceWang377/ace-signal-forge",
      waitlist: "/contact?project=acesignalforge",
      support: "/support/acesignalforge",
      privacy: "/legal/privacy/acesignalforge",
      terms: "/legal/terms/acesignalforge",
    },
    brand: {
      icon: "ASF",
      iconImage: "/projects/acesignalforge/icon.png",
      accentColor: "#00c7d4",
      theme: "dark",
    },
    media: {
      screenshots: ["/projects/acesignalforge/logo.png"],
    },
  },
  blacktop: {
    slug: "blacktop",
    name: "Blacktop",
    status: "unreviewed",
    links: {
      landing: "https://acewang377.github.io/Blacktop-App/",
      github: "https://github.com/AceWang377/Blacktop-App",
      waitlist: "/contact?project=blacktop",
      support: "/support/blacktop",
      privacy: "/legal/privacy/blacktop",
      terms: "/legal/terms/blacktop",
    },
    brand: {
      icon: "BT",
      iconImage: "/projects/blacktop/icon.png",
      accentColor: "#97f05a",
      theme: "dark",
    },
    media: {
      screenshots: [
        "/projects/blacktop/map.jpg",
        "/projects/blacktop/filters.jpg",
        "/projects/blacktop/details.jpg",
      ],
    },
  },
  lastpercent: {
    slug: "lastpercent",
    name: "Last Percent",
    shortName: "LastPercent",
    status: "unreviewed",
    links: {
      github: "https://github.com/AceWang377/LastPrecent",
      waitlist: "/contact?project=lastpercent",
      support: "/support/lastpercent",
      privacy: "/legal/privacy/lastpercent",
      terms: "/legal/terms/lastpercent",
    },
    brand: {
      icon: "LP",
      iconImage: "/projects/lastpercent/icon.png",
      accentColor: "#ffffff",
      theme: "mono",
    },
    media: {
      screenshots: [
        "/projects/lastpercent/low-battery.png",
        "/projects/lastpercent/quest.png",
        "/projects/lastpercent/archive.png",
      ],
    },
  },
  aceStudio: {
    slug: "ace-studio",
    name: "AceStudio",
    status: "live",
    links: {
      webApp: "https://ace-product-studio.vercel.app",
      github: "https://github.com/AceWang377/AceProductStudio",
      waitlist: "/contact?project=ace-studio",
      support: "/support/ace-studio",
      privacy: "/legal/privacy/ace-studio",
      terms: "/legal/terms/ace-studio",
    },
    brand: {
      icon: "AS",
      iconImage: "/projects/ace-studio/icon.png",
      accentColor: "#111111",
      theme: "light",
    },
    media: {
      screenshots: [
        "/projects/ace-studio/product-media.png",
        "/projects/ace-studio/growth-detail.png",
      ],
    },
  },
} satisfies Record<string, Partial<Project>>;

export const localizedProjects: Record<Locale, Project[]> = {
  en: [
    {
      ...sharedProjects.acesignalforge,
      tagline: "AI growth console for indie app marketing.",
      description:
        "AceSignalForge is a private AI growth console for indie app launches. It turns product profiles, personas, pain points, and launch notes into scored content ideas, multi-platform copy packages, asset requirements, publishing queues, metrics, weekly reviews, and integration planning.",
      category: ["AI", "Marketing", "Indie Apps"],
      targetUsers: [
        "Indie iOS app developers",
        "Solo builders launching small products",
        "Creators who need repeatable growth experiments",
        "Developers tracking App Store signals and content results",
      ],
      problem:
        "Indie app builders can ship products faster than they can explain, test, and review growth messages across platforms.",
      solution:
        "AceSignalForge turns launch context into a repeatable loop: profile the app, create ideas, package content, plan assets, queue publishing, record metrics, and review the week.",
      features: [
        {
          title: "App profile to ideas",
          description:
            "Capture positioning, personas, launch status, and pain points, then generate scored content ideas with rationale.",
        },
        {
          title: "Multi-platform copy packages",
          description:
            "Draft X, Threads, LinkedIn, Reddit, Product Hunt, and short-video scripts from one approved angle.",
        },
        {
          title: "Asset requirements",
          description:
            "Plan screenshots, short demos, cover text, shot lists, and creative requirements before production starts.",
        },
        {
          title: "Publishing queue",
          description:
            "Keep manual-first publishing organized with approval states, platform-fit checks, and publish-attempt records.",
        },
        {
          title: "Weekly review loop",
          description:
            "Record results and use AI review to decide which messages, channels, and assets should change next.",
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
          description: "Using it privately to plan launch experiments for Ace's iOS apps.",
          status: "current",
        },
        {
          label: "Next",
          description: "Add real integrations only after the manual operating loop proves useful.",
          status: "planned",
        },
      ],
    },
    {
      ...sharedProjects.blacktop,
      tagline: "Court facts, not ratings.",
      description:
        "Blacktop is a SwiftUI iOS app for finding basketball courts by practical playability facts. It starts with Sheffield, uses a clean MapKit court map, and helps players decide before they leave: indoor or outdoor, free or paid, lights, surface, rain impact, nets, rim height, facilities, access notes, and data confidence.",
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
        "Blacktop gives a no-login basketball court map with useful filters, local saved courts, Apple Maps directions, and transparent data-source notes.",
      features: [
        {
          title: "Map-first discovery",
          description: "Browse nearby basketball courts on a clean map with court pins and a fast court count.",
        },
        {
          title: "Practical filters",
          description:
            "Filter by outdoor, indoor, free, lights, dry surface, nets, and standard rim before travelling.",
        },
        {
          title: "Court fact cards",
          description:
            "Open details such as surface, rain impact, rim type, cleanliness, facilities, and access notes.",
        },
        {
          title: "Local saves",
          description: "Save courts on device without an account, backend profile, or social feed.",
        },
        {
          title: "Data transparency",
          description: "Review source and confidence information from Profile so the map stays honest.",
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
          description: "Blacktop is unreviewed and waiting in the Apple App Store review flow.",
          status: "current",
        },
        {
          label: "Next",
          description: "Add the App Store link after approval and continue improving court coverage.",
          status: "planned",
        },
      ],
    },
    {
      ...sharedProjects.lastpercent,
      tagline: "One quest before your phone dies.",
      description:
        "Last Percent is a no-backend iOS MVP that gives users one tiny real-world mission when their phone battery reaches a chosen low-battery unlock point. It is intentionally minimal, black-and-white, no-login, no-feed, and not an app blocker.",
      category: ["Mobile App", "iOS", "Digital Minimalism"],
      targetUsers: [
        "People trying to interrupt doomscrolling",
        "Users who like weird, memorable utility apps",
        "Mobile users who want a tiny real-world prompt",
        "App Store reviewers checking on-device battery behavior",
      ],
      problem:
        "Low battery is a memorable moment, but most apps ignore it or turn behavior change into heavy productivity systems.",
      solution:
        "Last Percent uses the low-battery state as a light ritual: one real-world quest, local history, optional daily reminders, and no backend.",
      features: [
        {
          title: "Battery unlock point",
          description:
            "Choose the battery percent where the app unlocks a quest while avoiding false background-trigger promises.",
        },
        {
          title: "One quest per moment",
          description: "Generate a single simple real-world task that can be completed or skipped.",
        },
        {
          title: "Local-only history",
          description: "Quest history and settings stay on device through SwiftData with no account or backend service.",
        },
        {
          title: "Optional check-ins",
          description: "Daily reminders invite users back without pretending to monitor battery in the background.",
        },
        {
          title: "Minimal tone",
          description: "Black-and-white interface with a calm, slightly absurd utility-app feeling.",
        },
      ],
      roadmap: [
        {
          label: "Done",
          description: "Built the SwiftUI no-backend MVP, local data model, screenshots, and review notes.",
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
    },
    {
      ...sharedProjects.aceStudio,
      tagline: "AI product content workspace for Shopify sellers.",
      description:
        "AceStudio is a Shopify-focused ecommerce content workspace for turning product photos into generated image sets, editable SEO copy, product readiness checks, and reviewable Shopify draft publishing.",
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
          description: "Upload a product photo and generate reviewable image sets for Shopify product pages.",
        },
        {
          title: "SEO and GEO copy",
          description: "Create descriptions, FAQs, alt text, product fields, and AI-answer-ready content.",
        },
        {
          title: "Shopify draft publishing",
          description: "Connect a Shopify store and publish approved product drafts through the Admin GraphQL API.",
        },
        {
          title: "Growth Studio",
          description:
            "Audit live Shopify pages for SEO, GEO, image alt text, internal links, and approved write-back updates.",
        },
        {
          title: "Operational controls",
          description: "Includes usage exports, billing, launch checks, support tools, and admin QA foundations.",
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
    },
  ],
  zh: [
    {
      ...sharedProjects.acesignalforge,
      tagline: "面向独立 App 增长的 AI 内容控制台。",
      description:
        "AceSignalForge 是一个私有的独立 App 增长控制台。它把产品定位、用户画像、痛点和发布状态转成可评分的内容创意、多平台文案包、素材需求、发布队列、指标记录、周复盘和集成规划。",
      category: ["AI", "增长营销", "独立 App"],
      targetUsers: [
        "正在发布 iOS App 的独立开发者",
        "一个人推进小产品上线的 builder",
        "需要可重复增长实验流程的创作者",
        "想追踪 App Store 信号和内容效果的开发者",
      ],
      problem:
        "独立开发者往往能更快把产品做出来，却很难持续讲清楚产品、测试不同渠道信息，并复盘哪些增长动作有效。",
      solution:
        "AceSignalForge 把发布上下文变成一条可重复流程：完善产品档案、生成创意、打包内容、规划素材、排发布队列、记录指标、做周复盘。",
      features: [
        {
          title: "产品档案生成创意",
          description: "记录定位、用户画像、发布阶段和痛点，再生成带理由的可评分内容创意。",
        },
        {
          title: "多平台文案包",
          description: "从一个确认过的角度生成 X、Threads、LinkedIn、Reddit、Product Hunt 和短视频脚本。",
        },
        {
          title: "素材需求规划",
          description: "在制作前先规划截图、短 demo、封面文案、镜头清单和创意要求。",
        },
        {
          title: "发布队列",
          description: "用审批状态、平台适配检查和发布尝试记录，把手动发布流程变得有序。",
        },
        {
          title: "周复盘闭环",
          description: "记录结果，用 AI 复盘判断下一轮应该调整信息、渠道还是素材。",
        },
      ],
      roadmap: [
        {
          label: "已完成",
          description: "完成 Next.js/Supabase 控制台主体结构和 mock AI fallback 流程。",
          status: "done",
        },
        {
          label: "现在",
          description: "作为 Ace 自己 iOS App 发布实验的私有工作流使用。",
          status: "current",
        },
        {
          label: "下一步",
          description: "先验证手动流程真的有用，再接入真实平台集成。",
          status: "planned",
        },
      ],
    },
    {
      ...sharedProjects.blacktop,
      tagline: "看球场事实，不看评分噪音。",
      description:
        "Blacktop 是一个 SwiftUI iOS App，用实用的可打球信息帮助用户找篮球场。它从 Sheffield 开始，使用清爽的 MapKit 球场地图，让你出门前就知道室内/室外、免费/付费、灯光、地面、雨后影响、篮网、篮筐高度、设施、入口说明和数据可信度。",
      category: ["运动", "地图导航", "iOS"],
      targetUsers: [
        "出门打球前想确认球场情况的篮球玩家",
        "寻找附近室外或室内球场的人",
        "关心灯光、篮网、地面和入口信息的玩家",
        "检查无登录定位行为的 App Store 审核人员",
      ],
      problem:
        "很多球场发现工具依赖评分、社交内容或不完整地图信息，但玩家真正需要的是能不能打、好不好去、现在值不值得去。",
      solution:
        "Blacktop 提供无登录篮球场地图、实用筛选、本地收藏、Apple Maps 导航和清楚的数据来源说明。",
      features: [
        {
          title: "地图优先发现",
          description: "在清爽地图上浏览附近篮球场，查看球场 pin 和快速球场数量。",
        },
        {
          title: "实用筛选",
          description: "出发前按室外、室内、免费、灯光、干燥地面、篮网和标准篮筐筛选。",
        },
        {
          title: "球场事实卡片",
          description: "查看地面、雨后影响、篮筐类型、整洁度、设施和入口说明等实用细节。",
        },
        {
          title: "本地收藏",
          description: "无需账号、后端资料或社交动态，直接在设备本地收藏球场。",
        },
        {
          title: "数据透明",
          description: "在 Profile 中查看数据来源和可信度，让地图信息保持诚实。",
        },
      ],
      roadmap: [
        {
          label: "已完成",
          description: "准备好 App Store 元数据、截图、隐私、支持和条款页面。",
          status: "done",
        },
        {
          label: "现在",
          description: "Blacktop 仍处于 Apple App Store 审核队列，当前尚未通过审核。",
          status: "current",
        },
        {
          label: "下一步",
          description: "审核通过后补充 App Store 链接，并持续完善球场覆盖。",
          status: "planned",
        },
      ],
    },
    {
      ...sharedProjects.lastpercent,
      tagline: "手机没电前，先完成一个小任务。",
      description:
        "Last Percent 是一个无后端 iOS MVP。当手机电量到达用户设定的低电量解锁点时，它给用户一个很小的现实世界任务。产品刻意保持极简、黑白、无登录、无信息流，也不是 App blocker。",
      category: ["移动 App", "iOS", "数字极简"],
      targetUsers: [
        "想打断 doomscrolling 的用户",
        "喜欢奇怪但难忘的小工具 App 的人",
        "想要一个现实世界轻提示的手机用户",
        "检查本机电池行为的 App Store 审核人员",
      ],
      problem:
        "低电量是一个很有记忆点的时刻，但大多数 App 要么忽略它，要么把行为改变做成沉重的效率系统。",
      solution:
        "Last Percent 把低电量变成一个轻仪式：一个现实任务、本地历史、可选日提醒，并且没有后端。",
      features: [
        {
          title: "电量解锁点",
          description: "选择任务解锁的电量百分比，同时避免承诺 iOS 后台无法保证的电量触发。",
        },
        {
          title: "一次只给一个任务",
          description: "生成一个简单现实世界任务，用户可以完成，也可以跳过。",
        },
        {
          title: "仅本地历史",
          description: "任务历史和设置通过 SwiftData 保存在设备上，不需要账号或后端服务。",
        },
        {
          title: "可选提醒",
          description: "日提醒把用户带回 App，但不假装能在后台持续监控电量。",
        },
        {
          title: "极简语气",
          description: "黑白界面，安静、稍微荒诞，但仍然像一个真正有用的小工具。",
        },
      ],
      roadmap: [
        {
          label: "已完成",
          description: "完成 SwiftUI 无后端 MVP、本地数据模型、截图和审核说明。",
          status: "done",
        },
        {
          label: "现在",
          description: "整理公开支持、隐私、截图和发布定位内容。",
          status: "current",
        },
        {
          label: "下一步",
          description: "根据真实用户反馈决定是否增加更多任务或更强的提醒流程。",
          status: "planned",
        },
      ],
    },
    {
      ...sharedProjects.aceStudio,
      tagline: "给 Shopify 卖家的 AI 产品内容工作台。",
      description:
        "AceStudio 是面向 Shopify 的电商内容工作台，可以把产品照片转成可审核的图片组、可编辑 SEO 文案、产品发布准备检查和 Shopify 草稿发布流程。",
      category: ["Shopify", "AI 内容", "电商"],
      targetUsers: [
        "正在准备商品 listing 的 Shopify 卖家",
        "想提升 SEO 和 GEO 准备度的小型电商团队",
        "需要先审核再发布 AI 输出的运营人员",
        "想把草稿商品发布到 Shopify 的店主",
      ],
      problem:
        "电商团队需要产品图、SEO 文案、Shopify 字段和页面改进，但未经审核的 AI 输出直接发布风险很高。",
      solution:
        "AceStudio 集中处理上传、生成、质量检查、额度使用、Shopify OAuth、草稿发布、增长审计和审核后回写。",
      features: [
        {
          title: "产品图片生成",
          description: "上传一张产品图，生成可审核的 Shopify 商品页图片组。",
        },
        {
          title: "SEO 和 GEO 文案",
          description: "生成描述、FAQ、alt text、商品字段和更适合 AI 搜索回答的内容。",
        },
        {
          title: "Shopify 草稿发布",
          description: "连接 Shopify 店铺，通过 Admin GraphQL API 发布审核通过的商品草稿。",
        },
        {
          title: "Growth Studio",
          description: "审计线上 Shopify 页面里的 SEO、GEO、图片 alt、内链，并支持审核后回写。",
        },
        {
          title: "运营控制",
          description: "包含用量导出、计费、上线检查、支持工具和后台 QA 基础能力。",
        },
      ],
      roadmap: [
        {
          label: "已完成",
          description: "完成 monorepo Web App、Shopify 流程、Supabase 基础、计费和法律页面。",
          status: "done",
        },
        {
          label: "现在",
          description: "继续打磨生产准备度、公开资源和增长监控流程。",
          status: "current",
        },
        {
          label: "下一步",
          description: "当使用量增长后，把轻量任务处理替换成更可靠的队列系统。",
          status: "planned",
        },
      ],
    },
  ],
};

export const projects = localizedProjects.en;
export const featuredProjects = projects;
