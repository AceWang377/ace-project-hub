"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const locales: Locale[] = ["en", "zh"];

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Nav");

  return (
    <div
      className="inline-flex h-10 items-center gap-1 rounded-[8px] border border-[#101211]/12 bg-white p-1 text-xs font-black text-[#101211] shadow-sm"
      aria-label={t("language")}
    >
      <Languages size={15} className="ml-2 text-[#5e6761]" aria-hidden="true" />
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          className={[
            "h-8 rounded-[7px] px-2.5 transition",
            item === locale ? "bg-[#101211] text-white" : "text-[#5e6761] hover:bg-[#f1f3ef]",
          ].join(" ")}
          onClick={() => router.replace(pathname, { locale: item })}
          aria-pressed={item === locale}
        >
          {item === "en" ? t("english") : t("chinese")}
        </button>
      ))}
    </div>
  );
}
