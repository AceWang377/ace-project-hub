import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Ace",
  description: "About Ace, the creator behind Ace Project Hub.",
};

export default function AboutPage() {
  return (
    <section className="container-x grid gap-12 py-16 md:grid-cols-[0.82fr_1fr] md:py-24">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">About</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">
          A practical base for products that are still moving.
        </h1>
      </div>
      <div className="grid gap-6 text-lg leading-8 text-[#4f5853]">
        <p>
          Ace Project Hub is the public identity layer for Ace&apos;s independent apps, web tools,
          mobile products, and experiments. It is built to keep product discovery, support, and
          legal pages in one maintainable place.
        </p>
        <p>
          The style is intentionally direct: clear project pages, honest status labels, editable
          copy, and no fake social proof. As projects mature, their App Store links, screenshots,
          changelogs, and subdomains can be added from the project config.
        </p>
        <Link href="/projects" className="inline-flex items-center gap-2 text-base font-black text-[#101211]">
          Explore projects
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
