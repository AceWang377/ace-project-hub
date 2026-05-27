import type { Locale } from "@/i18n/routing";

export type Note = {
  title: string;
  date: string;
  summary: string;
};

export const localizedNotes: Record<Locale, Note[]> = {
  en: [
    {
      title: "AceSignalForge PRD completed",
      date: "2026-05-15",
      summary: "The growth-console workflow is moving from concept into product structure.",
    },
    {
      title: "Blacktop and Last Percent are live",
      date: "2026-05-27",
      summary: "Both iOS apps are now published on the App Store, with hub pages updated to point users to the live releases.",
    },
    {
      title: "Main project hub in progress",
      date: "2026-05-15",
      summary: "Ace Project Hub becomes the shared home for project discovery, legal links, and updates.",
    },
  ],
  zh: [
    {
      title: "AceSignalForge PRD 已完成",
      date: "2026-05-15",
      summary: "增长控制台从概念进入产品结构阶段，开始承载真实发布工作流。",
    },
    {
      title: "Blacktop 和 Last Percent 已上线",
      date: "2026-05-27",
      summary: "两个 iOS App 都已经在 App Store 发布，Hub 页面已更新为指向真实上线版本。",
    },
    {
      title: "主项目 Hub 正在完善",
      date: "2026-05-15",
      summary: "Ace Project Hub 成为项目发现、法律链接、支持入口和更新记录的统一主页。",
    },
  ],
};

export const notes = localizedNotes.en;

export function getNotes(locale: string = "en") {
  return localizedNotes[locale as Locale] ?? notes;
}
