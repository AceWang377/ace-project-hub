"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { TrackedLink } from "@/components/tracked-link";
import { Link } from "@/i18n/navigation";

const links = [
  { href: "/projects", labelKey: "projects" },
  { href: "/#notes", labelKey: "notes" },
  { href: "/about", labelKey: "about" },
  { href: "/contact", labelKey: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Nav");

  return (
    <header className="sticky top-0 z-50 border-b border-[#101211]/10 bg-[#f6f7f4]/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-black tracking-[-0.02em]">
          <span className="flex size-10 items-center justify-center overflow-hidden rounded-[8px] border border-[#101211]/10 bg-white shadow-sm">
            <Image
              src="/brand/ace-logo.png"
              alt="Ace logo"
              width={56}
              height={56}
              className="max-w-none object-cover"
              priority
            />
          </span>
          <span>Ace</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#3d433f] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#101211]">
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>
        <TrackedLink
          href="/projects"
          eventName="project_primary_cta_click"
          className="hidden h-10 items-center justify-center rounded-[8px] bg-[#101211] px-4 text-sm font-bold text-white transition hover:bg-[#222826] md:inline-flex"
        >
          {t("viewProjects")}
        </TrackedLink>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-[8px] border border-[#101211]/15 bg-white text-[#101211] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[#101211]/10 bg-[#f6f7f4] md:hidden">
          <nav className="container-x grid gap-2 py-4 text-sm font-semibold">
            <LanguageSwitcher />
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[8px] px-2 py-3 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
