export const siteConfig = {
  name: "Ace Project Hub",
  creator: "Ace",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hub.acezerotrading.com",
  description:
    "The formal home for Ace's apps, tools, experiments, legal pages, and support links.",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "admin@acezerotrading.com",
  links: {
    github: "https://github.com/AceWang377",
  },
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
