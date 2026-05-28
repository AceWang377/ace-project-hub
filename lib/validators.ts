import { z } from "zod";
import { getProjectSlugs } from "@/lib/projects";

const projectSlugs = [...getProjectSlugs(), "quick-help"];

export const waitlistSchema = z.object({
  email: z.email("Enter a valid email address."),
  name: z.string().max(120).optional().or(z.literal("")),
  project_slug: z
    .string()
    .optional()
    .refine((value) => !value || projectSlugs.includes(value), "Choose a valid project."),
  source_path: z.string().max(240).optional().or(z.literal("")),
  message: z.string().max(1200).optional().or(z.literal("")),
  company: z.string().max(0).optional().or(z.literal("")),
});

export const contactSchema = waitlistSchema.extend({
  message: z.string().min(8, "Add a short message.").max(1600),
});
