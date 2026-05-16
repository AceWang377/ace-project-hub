import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { HtmlLangSync } from "@/components/html-lang-sync";
import { PageTracker } from "@/components/page-tracker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://acewang.top"),
    title: {
      default: t("siteTitle"),
      template: "%s | Ace Project Hub",
    },
    description: t("description"),
    openGraph: {
      title: "Ace Project Hub",
      description: t("description"),
      url: "/",
      siteName: "Ace Project Hub",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ace Project Hub",
      description: t("description"),
      images: ["/opengraph-image"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlLangSync />
      <PageTracker />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </NextIntlClientProvider>
  );
}
