import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Support",
  description: "Support links for Ace projects.",
};

export default function SupportIndexPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <h1 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">Support</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f6862]">
        Choose a project for support details, common issues, deletion requests, and contact paths.
      </p>
      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/support/${project.slug}`}
            className="rounded-[8px] border border-[#101211]/10 bg-white p-5 font-black transition hover:border-[#101211]/30"
          >
            {project.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
