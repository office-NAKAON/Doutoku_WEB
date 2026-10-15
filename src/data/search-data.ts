import { lessons, themes } from "@/data/content";

export interface SearchItem {
  title: string;
  description: string;
  url: string;
  category: string;
  keywords: string[];
  tags?: string[];
}

export const searchData: SearchItem[] = [
  {
    title: "トップ",
    description: "2年3組 道徳Web の表紙。四つの視点と、いまの問いへ入る。",
    url: "/",
    category: "案内",
    keywords: ["ホーム", "トップ", "表紙", "2年3組", "道徳"],
    tags: ["案内"],
  },
  {
    title: "クラスについて",
    description: "このポートフォリオの読み方と、載せていないこと。",
    url: "/class",
    category: "案内",
    keywords: ["クラス", "2年3組", "使い方", "はじめに", "道徳"],
    tags: ["案内"],
  },
  {
    title: "授業の記録",
    description: "話し合いのあとに残った問いと、クラスの考え。",
    url: "/records",
    category: "案内",
    keywords: ["記録", "授業", "ポートフォリオ", "一覧"],
    tags: ["案内"],
  },
  {
    title: "サイトマップ",
    description: "ページを視点と記録に分けて一覧する。",
    url: "/sitemap",
    category: "案内",
    keywords: ["サイトマップ", "一覧", "目次", "ページ"],
    tags: ["案内"],
  },
  ...themes.map((theme) => ({
    title: theme.title,
    description: theme.description,
    url: `/themes/${theme.slug}`,
    category: "学びの視点",
    keywords: ["視点", "内容項目", ...theme.focus],
    tags: [theme.title],
  })),
  ...lessons.map((lesson) => ({
    title: lesson.title,
    description: lesson.lead,
    url: `/records/${lesson.slug}`,
    category: "授業の記録",
    keywords: [lesson.contentItem, lesson.question, ...lesson.keywords],
    tags: lesson.tags,
  })),
];
