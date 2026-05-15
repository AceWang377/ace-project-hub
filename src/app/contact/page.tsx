import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ace, send support questions, or request updates about Ace projects.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const { project } = await searchParams;

  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">Contact</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">
          Send feedback or request early access.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5f6862]">
          Use the contact form for support, collaboration, project feedback, or App Store review
          questions. Use the update form if you only want project launch notes.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-[8px] border border-[#101211]/10 bg-white p-6">
          <h2 className="text-2xl font-black tracking-[-0.04em]">Contact Ace</h2>
          <div className="mt-6">
            <ContactForm defaultProject={project} />
          </div>
        </div>
        <div className="rounded-[8px] border border-[#101211]/10 bg-white p-6">
          <h2 className="text-2xl font-black tracking-[-0.04em]">Join Updates</h2>
          <div className="mt-6">
            <WaitlistForm defaultProject={project} />
          </div>
        </div>
      </div>
    </section>
  );
}
