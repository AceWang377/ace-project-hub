import { GitBranch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#101211]/10 bg-[#101211] text-white">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 font-black">
            <span className="flex size-10 items-center justify-center overflow-hidden rounded-[8px] bg-white">
              <Image
                src="/brand/ace-logo.png"
                alt="Ace logo"
                width={56}
                height={56}
                className="max-w-none object-cover"
              />
            </span>
            <span>Ace Project Hub</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/64">
            A formal home for Ace&apos;s apps, tools, experiments, legal pages, and support links.
          </p>
          <a
            href={siteConfig.links.github}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
          >
            <GitBranch size={16} />
            GitHub
          </a>
        </div>
        <FooterGroup
          title="Projects"
          links={projects.map((project) => ({
            href: `/projects/${project.slug}`,
            label: project.name,
          }))}
        />
        <FooterGroup
          title="Company"
          links={[
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/support", label: "Support" },
          ]}
        />
        <FooterGroup
          title="Legal"
          links={[
            { href: "/legal/privacy", label: "Privacy" },
            { href: "/legal/terms", label: "Terms" },
          ]}
        />
      </div>
      <div className="container-x border-t border-white/10 py-5 text-xs text-white/48">
        Copyright 2026 Ace Zero Trading Ltd. All rights reserved.
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="text-xs font-black uppercase tracking-[0.14em] text-white/40">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm text-white/70">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
