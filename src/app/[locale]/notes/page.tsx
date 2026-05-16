import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getNotes } from "@/content/notes";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Notes" });
  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function NotesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Notes");
  const notes = getNotes(locale);

  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">{t("label")}</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">
          {t("title")}
        </h1>
      </div>
      <div className="mt-12 grid gap-4">
        {notes.map((note) => (
          <article key={note.title} className="rounded-[8px] border border-[#101211]/10 bg-white p-6">
            <time className="text-sm font-black text-[#00a5b0]">{note.date}</time>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.04em]">{note.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#606963]">{note.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
