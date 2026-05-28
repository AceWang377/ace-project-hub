import type { Metadata } from "next";
import { ArrowRight, Bot, CheckCircle2, Clock, Code2, Database, Mail, Smartphone } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "GBP 10 Quick Tech Help",
  description:
    "Small AI, backend, iOS, data, and automation help from Ace for GBP 10 starter tasks.",
};

const offers = [
  {
    title: "AI or Chatbot Idea Check",
    body: "A quick review of your AI workflow, RAG idea, prompt, or automation plan with practical next steps.",
    icon: Bot,
  },
  {
    title: "Backend/API Debug Note",
    body: "A focused look at a Spring Boot, Python, REST, JWT, database, or deployment question.",
    icon: Code2,
  },
  {
    title: "Spreadsheet/Data Clean-Up",
    body: "A small table cleaned into clearer headings, filters, totals, and consistent formats.",
    icon: Database,
  },
  {
    title: "App or Website Feedback",
    body: "A short, specific UX and technical review for a small app, landing page, or prototype.",
    icon: Smartphone,
  },
];

const proof = [
  "MEng Computer Science with distinction",
  "Published two SwiftUI apps on the App Store",
  "Built Spring Boot RAG and AI voice product workflows",
  "Worked on industrial data pipelines with Node-RED, MQTT, QuestDB, and Grafana",
];

const contactEmail = "acewang377@gmail.com";
const contactSubject = "GBP 10 Quick Tech Help";
const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(contactSubject)}`;

export default async function QuickHelpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <section className="hero-rail overflow-hidden text-white">
        <div className="container-x grid min-h-[calc(100vh-64px)] items-center gap-10 py-14 md:grid-cols-[1fr_0.86fr] md:py-18">
          <div className="min-w-0 max-w-full">
            <h1 className="max-w-4xl text-[2rem] font-black leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-7xl md:leading-[0.97] md:tracking-[-0.055em]">
              <span className="block">GBP 10 tech help.</span>
              <span className="block">One small stuck point.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/68 md:text-xl">
              Send one small AI, backend, iOS, data, spreadsheet, app, or website question. I will return a clear fix note, tidy-up, or next-step checklist.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={mailtoHref}
                className="inline-flex h-12 items-center gap-2 rounded-[8px] bg-white px-5 text-sm font-black text-[#101211] transition hover:bg-[#eafbfd]"
              >
                Email the task
                <Mail size={16} />
              </a>
              <TrackedLink
                href="/contact?project=GBP%2010%20Quick%20Tech%20Help"
                eventName="quick_help_contact_click"
                className="inline-flex h-12 items-center gap-2 rounded-[8px] border border-white/20 px-5 text-sm font-black text-white transition hover:bg-white/10"
              >
                Contact form
                <ArrowRight size={16} />
              </TrackedLink>
            </div>
          </div>
          <div className="min-w-0 max-w-full overflow-hidden rounded-[8px] border border-white/14 bg-white/[0.06] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <div className="grid-paper min-w-0 rounded-[8px] bg-[#f6f7f4] p-5 text-[#101211]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#101211]/10 pb-4">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#68716b]">
                  Starter task
                </span>
                <span className="shrink-0 rounded-[8px] bg-[#101211] px-3 py-1 text-sm font-black text-white">
                  GBP 10
                </span>
              </div>
              <div className="mt-6 grid gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-[#68716b]">
                    Turnaround
                  </p>
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-xl font-black tracking-[-0.03em]">
                    <Clock size={18} className="text-[#00a5b0]" />
                    Today or within 24 hours
                  </p>
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-[#68716b]">
                    Direct contact
                  </p>
                  <a
                    href={mailtoHref}
                    className="mt-2 block break-words text-xl font-black tracking-[-0.03em] text-[#101211] transition hover:text-[#007e87]"
                  >
                    {contactEmail}
                  </a>
                  <p className="mt-1 text-sm font-semibold text-[#626b65]">
                    Subject: {contactSubject}
                  </p>
                </div>
                <div className="rounded-[8px] border border-[#101211]/10 bg-white p-4">
                  <p className="text-sm leading-6 text-[#626b65]">
                    Best for one small task: one question, one bug note, one document, one table, or one short review. Larger work can be scoped separately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">What I can do</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.055em] md:text-6xl">
            Pick one small outcome.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <article key={offer.title} className="rounded-[8px] border border-[#101211]/10 bg-white p-6">
                <Icon size={22} className="text-[#00a5b0]" />
                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">{offer.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#626b65]">{offer.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">Proof</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.055em] md:text-6xl">
              Practical software background.
            </h2>
          </div>
          <div className="grid gap-3">
            {proof.map((item) => (
              <div key={item} className="flex gap-3 rounded-[8px] border border-[#101211]/10 p-4">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#00a5b0]" />
                <p className="text-sm font-semibold leading-6 text-[#3d433f]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="rounded-[8px] bg-[#101211] p-6 text-white md:p-10">
          <h2 className="max-w-3xl text-3xl font-black tracking-[-0.05em] md:text-5xl">
            Send one task, get one useful answer.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">
            Please avoid passwords, bank details, private account access, identity documents, or confidential client data. Describe the problem and include screenshots or non-sensitive snippets if useful.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={mailtoHref}
              className="inline-flex h-12 items-center gap-2 rounded-[8px] bg-white px-5 text-sm font-black text-[#101211] transition hover:bg-[#eafbfd]"
            >
              Email a GBP 10 task
              <Mail size={16} />
            </a>
            <TrackedLink
              href="/contact?project=GBP%2010%20Quick%20Tech%20Help"
              eventName="quick_help_bottom_contact_click"
              className="inline-flex h-12 items-center gap-2 rounded-[8px] border border-white/18 px-5 text-sm font-black text-white transition hover:bg-white/10"
            >
              Use contact form
              <ArrowRight size={16} />
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
