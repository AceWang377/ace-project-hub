import { GitBranch } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Footer");
  const projects = getProjects(locale);

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
            {t("description")}
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
          title={t("projects")}
          links={projects.map((project) => ({
            href: `/projects/${project.slug}`,
            label: project.name,
          }))}
        />
        <FooterGroup
          title={t("company")}
          links={[
            { href: "/about", label: t("about") },
            { href: "/contact", label: t("contact") },
            { href: "/support", label: t("support") },
          ]}
        />
        <FooterGroup
          title={t("legal")}
          links={[
            { href: "/legal/privacy", label: t("privacy") },
            { href: "/legal/terms", label: t("terms") },
          ]}
        />
      </div>
      <div className="container-x border-t border-white/10 py-5 text-xs text-white/48">
        {t("copyright")}
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
