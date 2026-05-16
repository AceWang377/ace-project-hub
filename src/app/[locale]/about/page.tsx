import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });
  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <section className="container-x grid gap-12 py-16 md:grid-cols-[0.82fr_1fr] md:py-24">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">{t("label")}</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">
          {t("title")}
        </h1>
      </div>
      <div className="grid gap-6 text-lg leading-8 text-[#4f5853]">
        <p>{t("body1")}</p>
        <p>{t("body2")}</p>
        <Link href="/projects" className="inline-flex items-center gap-2 text-base font-black text-[#101211]">
          {t("explore")}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
