export type Theme = {
  slug: string;
  index: string;
  title: string;
  description: string;
  focus: string[];
};

export type Lesson = {
  slug: string;
  index: string;
  code: string;
  title: string;
  themeSlug: string;
  contentItem: string;
  date: string;
  aim: string;
  lead: string;
  slides?: {
    href: string;
    title: string;
  };
  wellbeing?: WellbeingPractice;
  tags: string[];
  keywords: string[];
};

export type WellbeingCategory = "I" | "WE" | "SOCIETY";

export type WellbeingPractice = {
  category: WellbeingCategory;
  prompt?: string;
  summary: string;
  results?: {
    src: string;
    alt: string;
  }[];
};

export const wellbeingCategories: Record<WellbeingCategory, { label: string; scope: string }> = {
  I: { label: "I", scope: "自分の気持ちや行動" },
  WE: { label: "WE", scope: "近しい人との関わり" },
  SOCIETY: { label: "SOCIETY", scope: "社会との関わり" },
};

export const themes: Theme[] = [
  {
    slug: "self",
    index: "01",
    title: "自分自身",
    description: "内容項目は、自主、自律、自由と責任。教材は「ネット将棋」。",
    focus: ["自主、自律、自由と責任"],
  },
  {
    slug: "others",
    index: "02",
    title: "人との関わり",
    description: "内容項目は、相互理解、寛容。教材は「他人の靴を履いてみる」。",
    focus: ["相互理解、寛容"],
  },
  {
    slug: "society",
    index: "03",
    title: "集団や社会",
    description:
      "郷土の伝統と文化、公正・公平・社会正義を扱う。教材は「和樹の夏祭り」と「ヨシト」。",
    focus: ["郷土の伝統と文化の尊重、郷土を愛する態度", "公正、公平、社会正義"],
  },
  {
    slug: "life",
    index: "04",
    title: "生命と自然",
    description:
      "生命の尊さと、感動、畏敬の念を扱う。教材は「父の決意」と「樹齢七千年の杉」。",
    focus: ["生命の尊さ", "感動、畏敬の念"],
  },
];

export const lessons: Lesson[] = [
  {
    slug: "chichi",
    index: "11",
    code: "D-19",
    title: "父の決意",
    themeSlug: "life",
    contentItem: "生命の尊さ",
    date: "2026-09-01",
    aim: "生き抜くこと",
    lead: "生命の尊さ。ねらいは、生き抜くこと。",
    wellbeing: {
      category: "I",
      prompt: "困難なとき、自分が生き抜くために大切にしたいことを一つ選びましょう。",
      summary: "ウェルビーイング・コンピテンシーの「I」にある9つの中から、1つを選びました。",
      results: [
        { src: "/materials/wellbeing/i-01.png", alt: "第1位、自分で決める、7人" },
        { src: "/materials/wellbeing/i-02.png", alt: "第2位、挑戦、4人" },
        { src: "/materials/wellbeing/i-03.png", alt: "第3位、心の平穏、3人" },
        { src: "/materials/wellbeing/i-04.png", alt: "第4位、日常、2人" },
        { src: "/materials/wellbeing/i-05.png", alt: "第4位、希望、2人" },
        { src: "/materials/wellbeing/i-06.png", alt: "第4位、自分らしさ、2人" },
        { src: "/materials/wellbeing/i-07.png", alt: "第7位、熱中、1人" },
        { src: "/materials/wellbeing/i-08.png", alt: "第7位、達成、1人" },
        { src: "/materials/wellbeing/i-09.png", alt: "第7位、成長、1人" },
      ],
    },
    tags: ["生命と自然"],
    keywords: ["父の決意", "生命", "尊さ", "生き抜く", "ウェルビーイング", "コンピテンシー", "I", "D-19", "D－19"],
  },
  {
    slug: "natsumatsuri",
    index: "12",
    code: "C-16",
    title: "和樹の夏祭り",
    themeSlug: "society",
    contentItem: "郷土の伝統と文化の尊重、郷土を愛する態度",
    date: "2026-09-09",
    aim: "地域の活動のよさ",
    lead: "郷土の伝統と文化の尊重、郷土を愛する態度。ねらいは、地域の活動のよさ。",
    slides: {
      href: "/materials/natsumatsuri-board.pdf",
      title: "まとめスライド",
    },
    wellbeing: {
      category: "SOCIETY",
      prompt: "社会貢献するときに、あなたが大切にしたいことを一つ選びましょう。",
      summary: "「SOCIETY」のカテゴリーから、自分が最も大切にしたいものを選びました。",
      results: [
        { src: "/materials/wellbeing/society-01.png", alt: "第1位、思いやり、10人" },
        { src: "/materials/wellbeing/society-02.png", alt: "第2位、協調、7人" },
        { src: "/materials/wellbeing/society-03.png", alt: "第3位、多様性、2人" },
        { src: "/materials/wellbeing/society-04.png", alt: "第4位、社会貢献、1人" },
        { src: "/materials/wellbeing/society-05.png", alt: "第5位、決まりを守る、0人" },
      ],
    },
    tags: ["集団や社会"],
    keywords: ["和樹", "夏祭り", "郷土", "伝統", "文化", "地域", "掲示", "振り返り", "スライド", "ウェルビーイング", "SOCIETY", "C-16", "C－16"],
  },
  {
    slug: "kutsu",
    index: "13",
    code: "B-9",
    title: "他人の靴を履いてみる",
    themeSlug: "others",
    contentItem: "相互理解、寛容",
    date: "2026-09-16",
    aim: "ほかの人の立場",
    lead: "相互理解、寛容。ねらいは、ほかの人の立場。",
    slides: {
      href: "/materials/kutsu-feedback.pdf",
      title: "まとめスライド",
    },
    wellbeing: {
      category: "WE",
      prompt: "「わたしたち」として活動するとき、あなたが大切にしたいことを一つ選びましょう。",
      summary: "「WE」のカテゴリーから、自分が最も大切にしたいものを選びました。",
      results: [
        { src: "/materials/wellbeing/we-01.png", alt: "第1位、価値観の理解、7人" },
        { src: "/materials/wellbeing/we-02.png", alt: "第2位、信頼、5人" },
        { src: "/materials/wellbeing/we-03.png", alt: "第3位、友情、3人" },
        { src: "/materials/wellbeing/we-04.png", alt: "第3位、認め合う、3人" },
        { src: "/materials/wellbeing/we-05.png", alt: "第5位、応援・推し、2人" },
        { src: "/materials/wellbeing/we-06.png", alt: "第6位、愛、1人" },
        { src: "/materials/wellbeing/we-07.png", alt: "第6位、感謝、1人" },
        { src: "/materials/wellbeing/we-08.png", alt: "第8位、あこがれ・尊敬、0人" },
        { src: "/materials/wellbeing/we-09.png", alt: "第8位、祝福、0人" },
      ],
    },
    tags: ["人との関わり"],
    keywords: ["他人の靴", "靴", "相互理解", "寛容", "立場", "フィードバック", "ウェルビーイング", "WE", "B-9", "B－9"],
  },
  {
    slug: "yoshito",
    index: "14",
    code: "C-11",
    title: "ヨシト",
    themeSlug: "society",
    contentItem: "公正、公平、社会正義",
    date: "2026-10-07",
    aim: "公正な態度",
    lead: "公正、公平、社会正義。ねらいは、公正な態度。",
    tags: ["集団や社会"],
    keywords: ["ヨシト", "公正", "公平", "社会正義", "C-11", "C－11"],
  },
  {
    slug: "shogi",
    index: "15",
    code: "A-1",
    title: "ネット将棋",
    themeSlug: "self",
    contentItem: "自主、自律、自由と責任",
    date: "2026-05-20",
    aim: "責任ある言動",
    lead: "自主、自律、自由と責任。ねらいは、責任ある言動。",
    tags: ["自分自身"],
    keywords: ["ネット将棋", "将棋", "自主", "自律", "自由", "責任", "A-1", "A－1"],
  },
  {
    slug: "sugi",
    index: "16",
    code: "D-21",
    title: "樹齢七千年の杉",
    themeSlug: "life",
    contentItem: "感動、畏敬の念",
    date: "2026-10-14",
    aim: "自然の偉大さ",
    lead: "感動、畏敬の念。ねらいは、自然の偉大さ。",
    tags: ["生命と自然"],
    keywords: ["杉", "樹齢", "七千年", "感動", "畏敬", "自然", "D-21", "D－21"],
  },
];

export function getTheme(slug: string) {
  return themes.find((theme) => theme.slug === slug);
}

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function formatLessonDate(date: string) {
  const [year, month, day] = date.split("-");
  return `${year}.${month}.${day}`;
}

export function lessonsNewestFirst() {
  return [...lessons].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function lessonsForTheme(slug: string) {
  return lessonsNewestFirst().filter((lesson) => lesson.themeSlug === slug);
}

export function countForTheme(slug: string) {
  return lessons.filter((lesson) => lesson.themeSlug === slug).length;
}

export const perspectiveTags = [
  "自分自身",
  "人との関わり",
  "集団や社会",
  "生命と自然",
] as const;

export const currentQuestion = {
  label: "掲載中の教材",
  text: "11「父の決意」から、16「樹齢七千年の杉」まで。",
  note: "各ページには、教材名、内容項目、ねらいを載せています。",
};
