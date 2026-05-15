"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TrackedLink } from "@/components/tracked-link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/#notes", label: "Notes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#101211]/10 bg-[#f6f7f4]/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-black tracking-[-0.02em]">
          <span className="flex size-10 items-center justify-center overflow-hidden rounded-[8px] border border-[#101211]/10 bg-white shadow-sm">
            <Image
              src="/brand/ace-logo.png"
              alt="Ace logo"
              width={40}
              height={40}
              className="scale-[1.42] object-cover"
              priority
            />
          </span>
          <span>Ace</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#3d433f] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#101211]">
              {link.label}
            </Link>
          ))}
        </nav>
        <TrackedLink
          href="/projects"
          eventName="project_primary_cta_click"
          className="hidden h-10 items-center justify-center rounded-[8px] bg-[#101211] px-4 text-sm font-bold text-white transition hover:bg-[#222826] md:inline-flex"
        >
          View Projects
        </TrackedLink>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-[8px] border border-[#101211]/15 bg-white text-[#101211] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[#101211]/10 bg-[#f6f7f4] md:hidden">
          <nav className="container-x grid gap-2 py-4 text-sm font-semibold">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[8px] px-2 py-3 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
