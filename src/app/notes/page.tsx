import type { Metadata } from "next";
import { notes } from "@/content/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Build notes and project updates from Ace Project Hub.",
};

export default function NotesPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">Notes</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">
          Build notes and release signals.
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
