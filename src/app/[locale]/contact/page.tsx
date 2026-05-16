import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact-form";
import { WaitlistForm } from "@/components/waitlist-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ project?: string }>;
}) {
  const { locale } = await params;
  const { project } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">{t("label")}</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5f6862]">
          {t("description")}
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-[8px] border border-[#101211]/10 bg-white p-6">
          <h2 className="text-2xl font-black tracking-[-0.04em]">{t("contactAce")}</h2>
          <div className="mt-6">
            <ContactForm defaultProject={project} />
          </div>
        </div>
        <div className="rounded-[8px] border border-[#101211]/10 bg-white p-6">
          <h2 className="text-2xl font-black tracking-[-0.04em]">{t("joinUpdates")}</h2>
          <div className="mt-6">
            <WaitlistForm defaultProject={project} />
          </div>
        </div>
      </div>
    </section>
  );
}
