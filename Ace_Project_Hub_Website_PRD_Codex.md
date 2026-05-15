# PRD: Ace Project Hub Website

**Document type:** Codex-ready Product Requirements Document  
**Working product name:** Ace Project Hub  
**Owner:** Ace  
**Date:** 2026-05-15  
**Primary goal:** Build one formal main website that introduces all of Ace's projects, links to each project's landing page or app, and provides legal/support pages needed for App Store and future product launches.

---

## 1. Product Summary

Ace Project Hub is the main public website for all of Ace's independent apps, web tools, experiments, and studios.

Instead of buying one domain for every project immediately, Ace will buy one main umbrella domain and use it as the central project hub.

Example structure:

```txt
maindomain.com
├── /                         Main homepage
├── /projects                 All projects
├── /projects/acesignalforge  AceSignalForge intro page
├── /projects/blacktop        Blacktop intro page
├── /projects/lastpercent     LastPercent intro page
├── /projects/ace-studio      Ace Studio intro page
├── /legal/privacy/...        Privacy policies by project
├── /legal/terms/...          Terms by project
└── /contact                  Contact / support
```

Optional future subdomains:

```txt
acesignalforge.maindomain.com   Actual AceSignalForge app dashboard
blacktop.maindomain.com         Blacktop product page or app
lastpercent.maindomain.com      LastPercent product page or app
studio.maindomain.com           Ace Studio page or app
```

This website should look formal enough for App Store review, user trust, and product discovery, while staying simple enough for one founder to maintain.

---

## 2. Why This Website Matters

The site is not only a portfolio. It should function as:

1. **A formal identity layer** for Ace's projects.
2. **A project directory** where users can discover Blacktop, LastPercent, Ace Studio, AceSignalForge, and future apps.
3. **A landing page system** for each product.
4. **A legal/support host** for privacy policy, terms, and support links.
5. **A lightweight growth layer** that tracks which project pages and CTAs attract real users.
6. **A long-term brand base** before deciding whether each project deserves its own domain.

The main website should make the projects feel connected under one creator/brand, but each project page should still feel like it has its own identity.

---

## 3. Research Notes and Design Inspiration

This PRD is informed by modern portfolio, SaaS, and developer landing page patterns.

### 3.1 Useful references

- Vercel Portfolio Starter Kit: shows a practical personal/portfolio site pattern with MDX/Markdown, SEO support, sitemap, robots, JSON-LD, RSS, dynamic OG images, and analytics-friendly deployment.
- Magic Portfolio for Next.js: good reference for a creative portfolio structure with projects, blog, gallery, responsive design, accessibility, and SEO.
- shadcn landing page templates: useful for building polished SaaS-style sections with Next.js, TypeScript, Tailwind, and shadcn/ui.
- Modern SaaS/product landing pages: common strong patterns include clear hero messaging, early credibility, product/project visualization, bento grids, and clear CTAs.

### 3.2 What to borrow

Borrow these patterns:

```txt
Clear hero message
Project cards with visual identity
Bento-style project grid
Minimal but strong typography
Product screenshots or simple mockups
Clear CTAs
Fast loading
SEO metadata
Per-project Open Graph images
Privacy/support links
Analytics events for CTA clicks
```

### 3.3 What not to copy

Do not copy any existing brand style directly. The site should not look like a generic AI SaaS template. It should feel:

```txt
simple
premium
sharp
creator-led
formal
credible
slightly sporty / bold
not over-designed
not too AI-looking
```

Visual direction should align with the recent AceSignalForge icon direction: clean, simple, black/white first, with limited accent color only when useful.

---

## 4. Target Users

### 4.1 Primary users

**Potential app users**  
People who discover one of Ace's apps and want to understand what it does, whether it is trustworthy, and where to try it.

**App Store reviewers**  
Reviewers who need clear privacy policy, support, and product information.

**Future collaborators / customers**  
People who want to know what Ace builds and may contact Ace.

**Ace himself**  
The site should be easy to update without rebuilding everything. Adding a new project should be simple.

---

## 5. Product Goals

### 5.1 MVP goals

1. Launch a polished main website under one domain.
2. Introduce all current projects.
3. Create reusable project landing page structure.
4. Provide privacy policy and support pages for all App Store projects.
5. Link to future subdomains or app pages.
6. Track CTA clicks and waitlist/contact submissions.
7. Make it easy to add future projects through config or MDX.

### 5.2 Non-goals for MVP

The MVP should not include:

```txt
User login
Full CMS admin panel
Payment system
Complex animation-heavy pages
Auto-generated AI content
Multi-language admin system
Heavy backend dashboard
Project-specific custom domain purchases
```

---

## 6. Recommended Information Architecture

### 6.1 Public routes

```txt
/                              Homepage
/projects                      Project index
/projects/[slug]               Project detail page
/about                         About Ace / creator profile
/notes                         Optional build notes / blog index
/notes/[slug]                  Optional build note detail
/contact                       Contact page
/legal/privacy                 General privacy index
/legal/privacy/[projectSlug]   Project-specific privacy policy
/legal/terms                   General terms index
/legal/terms/[projectSlug]     Project-specific terms
/support                       Support index
/support/[projectSlug]         Project-specific support page
```

### 6.2 Optional app subdomains

The main website should support linking to subdomains, but it does not need to host those apps inside the same project.

Example:

```txt
/project/acesignalforge             Intro page on main website
acesignalforge.maindomain.com       Actual app dashboard
```

---

## 7. Homepage Requirements

### 7.1 Homepage purpose

The homepage should answer these questions within 5 seconds:

```txt
Who is Ace?
What does Ace build?
Which projects exist?
Which project should I click first?
How can I contact or follow updates?
```

### 7.2 Homepage sections

#### Section 1: Navigation

Desktop navigation:

```txt
Ace / logo
Projects
Notes
About
Contact
```

Mobile:

```txt
Logo
Menu button
Collapsed links
```

Optional right-side CTA:

```txt
View Projects
Contact
```

#### Section 2: Hero

Purpose: establish a clean formal identity.

Example copy direction:

```txt
Building focused apps and tools for real workflows.

I design and build small, practical products across productivity, AI workflows, creative tools, and mobile apps.
```

CTA buttons:

```txt
Explore Projects
Contact Ace
```

Optional micro-status:

```txt
Currently building: AceSignalForge
```

#### Section 3: Featured Projects

A bento/grid section showing 3-6 projects.

Each project card should include:

```txt
Project icon
Project name
Short tagline
Status badge
Category tags
Primary CTA
Secondary CTA if available
```

Example cards:

```txt
AceSignalForge
AI growth console for turning app ideas into marketing experiments.
Status: Building
CTA: View Project
Secondary CTA: Open App / Coming Soon

Blacktop
[Placeholder: add real description]
Status: In review / Live / Building
CTA: View Project

LastPercent
[Placeholder: add real description]
Status: In review / Live / Building
CTA: View Project

Ace Studio
[Placeholder: add real description]
Status: Active / Building
CTA: View Project
```

#### Section 4: Philosophy / Operating Principles

Short section that explains how Ace builds:

```txt
Ship small.
Measure real signals.
Improve from user feedback.
Keep products focused.
```

This helps the site feel personal and credible instead of just being a list of apps.

#### Section 5: Latest Updates / Build Notes

Optional for MVP, but useful if easy.

Example:

```txt
Latest notes
- AceSignalForge PRD completed
- Two iOS apps submitted for review
- Main project hub in progress
```

Data can come from local MDX files or simple config.

#### Section 6: Contact / Feedback

Simple CTA:

```txt
Interested in one of the projects?
Send feedback or request early access.
```

Buttons:

```txt
Contact
Join Updates
```

#### Section 7: Footer

Footer should include:

```txt
Projects
About
Contact
Privacy
Terms
Support
GitHub / X / LinkedIn if available
Copyright
```

---

## 8. Project Detail Page Requirements

Route:

```txt
/projects/[slug]
```

Each project page should be generated from a shared template, with per-project content.

### 8.1 Project page sections

#### Section 1: Project Hero

Includes:

```txt
Project icon
Project name
One-line tagline
Short 2-3 sentence intro
Status badge
Primary CTA
Secondary CTA
```

Possible CTAs:

```txt
Open App
View App Store
Join Waitlist
Request Access
Read Build Notes
```

#### Section 2: Problem

Explain what problem this project solves.

Template:

```txt
Most people struggle with [problem].
This project helps by [solution].
```

#### Section 3: Product Preview

For MVP, this can be:

```txt
Static screenshot
Simple mockup image
Placeholder card
Short video embed later
```

Do not require high-cost video production for MVP.

#### Section 4: Who It Is For

List 2-4 user groups.

Example for AceSignalForge:

```txt
Indie app developers
Solo founders
Creators launching small tools
People who need structured marketing experiments
```

#### Section 5: Key Features

3-6 features, each with:

```txt
Feature title
One-sentence explanation
Optional icon
```

#### Section 6: Current Status

Examples:

```txt
In App Store review
Private internal tool
Public beta
Live
Coming soon
```

#### Section 7: Roadmap / Next

Short roadmap. Do not overpromise.

Example:

```txt
Now: Building MVP
Next: Add publishing queue
Later: Add platform API integrations
```

#### Section 8: CTA Block

Repeat the most important action.

```txt
Try it
Join waitlist
Contact Ace
Open App Store
```

#### Section 9: FAQ

Include basic questions:

```txt
Is this project live?
Who is it for?
How do I try it?
How do I contact support?
Where is the privacy policy?
```

#### Section 10: Legal / Support Links

Every project page should link to:

```txt
Privacy Policy
Terms
Support
Contact
```

---

## 9. Legal and App Store Support Requirements

This site should host legal/support pages for every app.

### 9.1 Required legal pages

```txt
/legal/privacy/[projectSlug]
/legal/terms/[projectSlug]
/support/[projectSlug]
```

For iOS apps, each App Store Connect app should have a publicly accessible privacy policy URL.

Example:

```txt
https://maindomain.com/legal/privacy/blacktop
https://maindomain.com/legal/privacy/lastpercent
https://maindomain.com/legal/privacy/acesignalforge
```

### 9.2 Privacy policy content template

Each privacy policy page should include:

```txt
Project name
Last updated date
What data is collected
How data is used
Third-party services
Analytics / tracking disclosure
Contact email
User rights / deletion requests
Changes to policy
```

Important: keep privacy policy content accurate to the actual app behavior. Do not copy generic privacy policy text blindly.

### 9.3 Support page content

Each support page should include:

```txt
Project name
Support email
Common issues
How to report bugs
How to request data deletion if applicable
App Store link if available
```

---

## 10. Functional Requirements

### 10.1 Project content system

MVP should allow adding or editing projects through one of these approaches:

Preferred MVP:

```txt
/content/projects.ts
```

Alternative:

```txt
/content/projects/[slug].mdx
```

Each project object should include:

```ts
type ProjectStatus =
  | 'idea'
  | 'building'
  | 'in_review'
  | 'private_beta'
  | 'public_beta'
  | 'live'
  | 'paused';

type Project = {
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
    status: 'done' | 'current' | 'planned';
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
    theme?: 'light' | 'dark' | 'mono';
  };
  media: {
    heroImage?: string;
    screenshots?: string[];
  };
};
```

### 10.2 Project card component

Create reusable component:

```txt
<ProjectCard />
```

Required props:

```txt
name
tagline
status
category tags
icon
primary link
```

### 10.3 Project page component

Create reusable component:

```txt
<ProjectDetailPage />
```

Should render project content from config/MDX.

### 10.4 Waitlist / contact form

MVP should include at least one basic form:

```txt
Name optional
Email required
Project interest dropdown
Message optional
Consent checkbox optional
Submit button
```

Store submissions in Supabase.

Tables:

```sql
create table public.waitlist_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  project_slug text,
  source_path text,
  message text,
  created_at timestamptz default now()
);

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  project_slug text,
  message text not null,
  source_path text,
  created_at timestamptz default now()
);
```

### 10.5 Analytics events

Track these events:

```txt
homepage_view
projects_index_view
project_page_view
project_card_click
project_primary_cta_click
project_secondary_cta_click
app_store_click
web_app_click
waitlist_submit
contact_submit
privacy_policy_view
support_page_view
```

For MVP, analytics can use:

```txt
Vercel Web Analytics
Plausible
PostHog
Supabase event table
```

If using Supabase event table:

```sql
create table public.site_events (
  id uuid primary key default gen_random_uuid(),
  event_name text not null,
  project_slug text,
  source_path text,
  target_url text,
  metadata jsonb,
  created_at timestamptz default now()
);
```

### 10.6 SEO and metadata

Every page should have:

```txt
Title
Meta description
Canonical URL
Open Graph title
Open Graph description
Open Graph image
Twitter/X card metadata
```

The site should include:

```txt
sitemap.xml
robots.txt
JSON-LD structured data for homepage and project pages
```

Recommended metadata format:

```txt
Homepage title:
Ace — Apps, tools, and experiments

Project title:
AceSignalForge — AI growth console for indie app marketing
```

### 10.7 Dynamic OG images

MVP should support simple generated OG images or static project OG images.

Option A:

```txt
Use static images in /public/og/[projectSlug].png
```

Option B:

```txt
Use Next.js dynamic OG image generation
```

---

## 11. Design Requirements

### 11.1 Visual direction

The site should feel:

```txt
clean
formal
premium
creator-led
minimal
high-trust
not too AI-themed
not template-looking
```

### 11.2 Style guide

Base style:

```txt
Background: white / near-white
Text: black / near-black
Accent: one controlled accent color, optional
Cards: subtle border, soft radius, minimal shadow
Typography: strong headings, readable body text
Motion: minimal and purposeful
```

Avoid:

```txt
Neon AI gradients everywhere
Generic robot/AI illustrations
Too many glassmorphism effects
Heavy animation
Fake testimonials
Fake user counts
Overpromising copy
```

### 11.3 Layout style

Use:

```txt
Large hero with clear statement
Bento project grid
Project cards with strong hierarchy
Simple icons
Responsive spacing
Clear CTA buttons
Readable legal pages
```

### 11.4 Responsiveness

Must work on:

```txt
Mobile 375px+
Tablet
Desktop
Large desktop
```

Project cards should stack cleanly on mobile.

---

## 12. Tech Stack

Recommended MVP stack:

```txt
Next.js App Router
TypeScript
Tailwind CSS
shadcn/ui
Supabase for forms and optional analytics
MDX optional for notes/blog
Vercel deployment recommended
```

### 12.1 Why this stack

- Next.js gives clean routing, SEO support, static generation, server components, and easy deployment.
- Tailwind and shadcn/ui allow fast polished UI without building every component from scratch.
- Supabase is enough for waitlist/contact submissions and optional event storage.
- Vercel deployment makes custom domains and subdomains straightforward.

---

## 13. Domain and Routing Plan

Assume the main domain is:

```txt
maindomain.com
```

### 13.1 Main website

```txt
maindomain.com
www.maindomain.com
```

### 13.2 Project intro pages

```txt
maindomain.com/projects/acesignalforge
maindomain.com/projects/blacktop
maindomain.com/projects/lastpercent
maindomain.com/projects/ace-studio
```

### 13.3 Future subdomains

```txt
acesignalforge.maindomain.com
blacktop.maindomain.com
lastpercent.maindomain.com
studio.maindomain.com
```

### 13.4 DNS plan

At Aliyun DNS or another DNS provider:

```txt
@                 -> main website hosting provider
www               -> main website hosting provider
acesignalforge    -> AceSignalForge deployment
blacktop          -> Blacktop deployment
lastpercent       -> LastPercent deployment
studio            -> Ace Studio deployment
```

For MVP, only configure root and www. Add project subdomains when those apps are ready.

---

## 14. Suggested Content for Initial Projects

Use placeholders until accurate descriptions are ready.

### 14.1 AceSignalForge

```txt
Name: AceSignalForge
Tagline: Turn app ideas into marketing experiments.
Status: Building
Category: AI, Marketing, Indie Apps
Description: An internal AI growth console that helps turn app information into content ideas, multi-platform copy, asset requirements, publishing queues, and weekly growth reviews.
Primary CTA: View Project
Secondary CTA: Open App / Coming Soon
```

### 14.2 Blacktop

```txt
Name: Blacktop
Tagline: [Add final tagline]
Status: In review / Live
Category: Mobile App
Description: [Add accurate description]
Primary CTA: View Project
Secondary CTA: App Store / Coming Soon
```

### 14.3 LastPercent

```txt
Name: LastPercent
Tagline: [Add final tagline]
Status: In review / Live
Category: Mobile App
Description: [Add accurate description]
Primary CTA: View Project
Secondary CTA: App Store / Coming Soon
```

### 14.4 Ace Studio

```txt
Name: Ace Studio
Tagline: Experiments, design, and tools by Ace.
Status: Active
Category: Studio, Experiments
Description: A space for Ace's creative, technical, and product experiments.
Primary CTA: View Project
```

---

## 15. Admin / Maintenance Requirements

MVP does not need an admin panel.

Ace should be able to update:

```txt
Project list
Project status
Project copy
CTA links
Privacy policy text
Support links
Screenshots
Build notes
```

by editing:

```txt
/content/projects.ts
/content/legal/*.mdx
/content/notes/*.mdx
```

Future version can add a Supabase-backed admin panel.

---

## 16. Performance Requirements

Target:

```txt
Lighthouse Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 90+
First Load JS: keep low
Images: optimized with next/image
```

Avoid large animation libraries unless necessary.

---

## 17. Accessibility Requirements

Must include:

```txt
Semantic HTML
Keyboard-accessible navigation
Visible focus states
Alt text for images
Color contrast passing WCAG AA where possible
No motion that blocks reading
Accessible form labels and error states
```

---

## 18. Security and Privacy Requirements

For MVP:

```txt
No user login required
Contact/waitlist forms must validate inputs
Use Supabase server-side or protected endpoint for inserts
Do not expose Supabase service role key in client
Use environment variables for secrets
Add simple spam protection later if needed
```

Possible spam protection:

```txt
Honeypot field
Rate limit by IP
Turnstile / reCAPTCHA later if needed
```

---

## 19. Codex Development Plan

### Phase 1: Project setup

Build the initial project.

Requirements:

```txt
Next.js App Router
TypeScript
Tailwind CSS
shadcn/ui
Basic layout
Responsive navigation
Footer
Homepage placeholder
```

Acceptance:

```txt
npm install works
npm run dev works
Homepage renders
Navigation works on mobile and desktop
```

### Phase 2: Content model and project config

Create:

```txt
/content/projects.ts
/lib/projects.ts
/components/project-card.tsx
```

Acceptance:

```txt
Projects can be added by editing projects.ts
Homepage reads featured projects from config
/projects page lists all projects
```

### Phase 3: Project detail pages

Create:

```txt
/app/projects/[slug]/page.tsx
/components/project-detail.tsx
```

Acceptance:

```txt
Each project has generated detail page
Unknown slug returns 404
Each page has project-specific metadata
Each page has legal/support links
```

### Phase 4: Legal and support pages

Create:

```txt
/app/legal/privacy/[projectSlug]/page.tsx
/app/legal/terms/[projectSlug]/page.tsx
/app/support/[projectSlug]/page.tsx
```

Acceptance:

```txt
Each project has privacy URL
Each project has support URL
Pages are readable and formal
```

### Phase 5: Supabase forms

Create:

```txt
Contact form
Waitlist form
Supabase insert API route or server action
```

Acceptance:

```txt
Form validation works
Submissions stored in Supabase
Success and error states shown
```

### Phase 6: SEO and OG images

Create:

```txt
metadata for all pages
sitemap.xml
robots.txt
Open Graph images
JSON-LD where appropriate
```

Acceptance:

```txt
Each page has unique title and description
OG preview works
Sitemap includes project pages and legal pages
```

### Phase 7: Analytics events

Create tracking for:

```txt
CTA clicks
Project card clicks
Waitlist submissions
App Store clicks
Web app clicks
```

Acceptance:

```txt
Events are captured through selected analytics method
Project slug is included when relevant
```

### Phase 8: Deployment and domain setup

Deploy to Vercel or preferred host.

Acceptance:

```txt
Production site works
Custom domain works
www redirects correctly
HTTPS works
Environment variables configured
```

---

## 20. Codex Master Prompt

Use this prompt with Codex:

```txt
Build a polished main project hub website called "Ace Project Hub".

Goal:
This website is the formal umbrella website for all of Ace's apps and projects. It should introduce multiple projects, provide project-specific landing pages, legal/privacy/support pages, contact/waitlist forms, SEO metadata, and future links to subdomains or app dashboards.

Tech stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase for waitlist/contact forms
- MDX optional for notes and legal pages
- Vercel-ready deployment

Design direction:
- Minimal, premium, black/white first
- Clean and formal, not generic AI SaaS
- Slightly sporty/bold brand feeling
- Project grid / bento layout
- Strong typography
- Simple motion only if useful
- Fully responsive

Main routes:
- /
- /projects
- /projects/[slug]
- /about
- /contact
- /legal/privacy/[projectSlug]
- /legal/terms/[projectSlug]
- /support/[projectSlug]

Initial projects:
- AceSignalForge
- Blacktop
- LastPercent
- Ace Studio

Project data should live in /content/projects.ts so I can add new projects easily.

Each project should include:
- slug
- name
- tagline
- description
- status
- category tags
- target users
- problem
- solution
- features
- roadmap
- links
- brand/icon/media fields

Homepage sections:
- Navigation
- Hero
- Featured projects grid
- Build philosophy
- Latest updates placeholder
- Contact CTA
- Footer

Project page sections:
- Hero
- Problem
- Product preview
- Who it is for
- Features
- Status
- Roadmap
- CTA
- FAQ
- Legal/support links

Forms:
- Contact form
- Waitlist form
- Store submissions in Supabase
- Validate with Zod
- Show success and error states

SEO:
- Metadata for every page
- sitemap.xml
- robots.txt
- Open Graph images
- JSON-LD if practical

Acceptance criteria:
- I can run npm install and npm run dev
- Homepage looks polished on desktop and mobile
- /projects lists all projects
- /projects/acesignalforge works
- Legal/privacy/support pages work for every project
- Contact/waitlist form saves to Supabase
- Project data is easy to edit
- Site is ready for custom domain deployment
```

---

## 21. Acceptance Criteria

The MVP is complete when:

```txt
1. Main homepage is polished and responsive.
2. Projects page lists all current projects.
3. Each project has a detail page.
4. AceSignalForge page exists and links to future app subdomain.
5. Blacktop, LastPercent, and Ace Studio pages exist with editable placeholder content.
6. Each project has privacy, terms, and support URLs.
7. Contact/waitlist form works and stores data.
8. SEO metadata exists for all core pages.
9. Sitemap and robots are generated.
10. Custom domain deployment is ready.
11. Adding a new project requires editing only one project config or MDX file.
```

---

## 22. Future Improvements

After MVP:

```txt
Admin panel for editing projects
Blog/build log with MDX
Newsletter signup
Project-specific changelogs
Dynamic OG image generator
Automatic App Store link/campaign tracking
Case studies after real users exist
Project-specific custom domains later
Multi-language support if needed
```

---

## 23. Reference Links

These references should be used as inspiration and technical guidance, not copied directly.

```txt
Vercel Portfolio Starter Kit
https://vercel.com/templates/next.js/portfolio-starter-kit

Vercel nextjs-portfolio-starter GitHub
https://github.com/vercel/nextjs-portfolio-starter

Magic Portfolio for Next.js
https://vercel.com/templates/next.js/magic-portfolio-for-next-js

shadcn landing page template example
https://github.com/nobruf/shadcn-landing-page

awesome shadcn/ui templates
https://github.com/bytefer/awesome-shadcn-ui

SaaS landing page examples library
https://saaslandingpage.com/

Apple App Store Connect privacy policy requirement
https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy/

Apple App Privacy Details
https://developer.apple.com/app-store/app-privacy-details/

Vercel custom domains
https://vercel.com/docs/domains/working-with-domains/add-a-domain

Supabase redirect URLs
https://supabase.com/docs/guides/auth/redirect-urls
```
