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
    description: "向上心と個性の伸長、希望と勇気、自主・自律・自由と責任、真理の探究を扱う。",
    focus: ["向上心、個性の伸長", "希望と勇気、克己と強い意志", "自主、自律、自由と責任", "真理の探究、創造"],
  },
  {
    slug: "others",
    index: "02",
    title: "人との関わり",
    description: "礼儀、友情、信頼、思いやり、感謝、相互理解、寛容を扱う。",
    focus: ["礼儀", "友情、信頼", "思いやり、感謝", "相互理解、寛容"],
  },
  {
    slug: "society",
    index: "03",
    title: "集団や社会",
    description: "勤労、公正・公平・社会正義、郷土の伝統と文化、国際理解を扱う。",
    focus: ["勤労", "公正、公平、社会正義", "郷土の伝統と文化の尊重、郷土を愛する態度", "国際理解、国際貢献"],
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
    slug: "ojisan",
    index: "1",
    code: "A-3",
    title: "おじさん役と私",
    themeSlug: "self",
    contentItem: "向上心、個性の伸長",
    date: "2026-04-15",
    aim: "個性を生かす",
    lead: "向上心、個性の伸長。ねらいは、個性を生かす。",
    tags: ["自分自身"],
    keywords: ["おじさん", "役", "向上心", "個性", "伸長", "A-3", "A－3"],
  },
  {
    slug: "omajinai",
    index: "2",
    code: "C-13",
    title: "おばちゃんのくれた〝おまじない〟",
    themeSlug: "society",
    contentItem: "勤労",
    date: "2026-04-22",
    aim: "なんのために働くのか",
    lead: "勤労。ねらいは、なんのために働くのか。",
    tags: ["集団や社会"],
    keywords: ["おばちゃん", "おまじない", "勤労", "働く", "C-13", "C－13"],
  },
  {
    slug: "aisatsu",
    index: "3",
    code: "B-7",
    title: "挨拶は言葉のスキンシップ",
    themeSlug: "others",
    contentItem: "礼儀",
    date: "2026-05-13",
    aim: "挨拶の意味",
    lead: "礼儀。ねらいは、挨拶の意味。",
    tags: ["人との関わり"],
    keywords: ["挨拶", "言葉", "スキンシップ", "礼儀", "B-7", "B－7"],
  },
  {
    slug: "shoshin",
    index: "4",
    code: "A-4",
    title: "初心",
    themeSlug: "self",
    contentItem: "希望と勇気、克己と強い意志",
    date: "2026-05-27",
    aim: "目標に向かって",
    lead: "希望と勇気、克己と強い意志。ねらいは、目標に向かって。",
    tags: ["自分自身"],
    keywords: ["初心", "希望", "勇気", "克己", "意志", "目標", "A-4", "A－4"],
  },
  {
    slug: "gogatsu-kana",
    index: "5",
    code: "A-1",
    title: "五月の風―カナ―",
    themeSlug: "self",
    contentItem: "自主、自律、自由と責任",
    date: "2026-06-03",
    aim: "自分の意志で",
    lead: "自主、自律、自由と責任。ねらいは、自分の意志で。",
    tags: ["自分自身"],
    keywords: ["五月", "風", "カナ", "自主", "自律", "自由", "責任", "意志", "A-1", "A－1"],
  },
  {
    slug: "gogatsu-mika",
    index: "6",
    code: "B-8",
    title: "五月の風―ミカ―",
    themeSlug: "others",
    contentItem: "友情、信頼",
    date: "2026-06-10",
    aim: "信頼される友達",
    lead: "友情、信頼。ねらいは、信頼される友達。",
    tags: ["人との関わり"],
    keywords: ["五月", "風", "ミカ", "友情", "信頼", "友達", "B-8", "B－8"],
  },
  {
    slug: "respect",
    index: "7",
    code: "C-11",
    title: "リスペクト アザース",
    themeSlug: "society",
    contentItem: "公正、公平、社会正義",
    date: "2026-06-17",
    aim: "人権を考える",
    lead: "公正、公平、社会正義。ねらいは、人権を考える。",
    tags: ["集団や社会"],
    keywords: ["リスペクト", "アザース", "人権", "公正", "公平", "社会正義", "C-11", "C－11"],
  },
  {
    slug: "nanori",
    index: "8",
    code: "B-6",
    title: "名乗り出なかった友",
    themeSlug: "others",
    contentItem: "思いやり、感謝",
    date: "2026-06-24",
    aim: "思いやりのある行動",
    lead: "思いやり、感謝。ねらいは、思いやりのある行動。",
    tags: ["人との関わり"],
    keywords: ["名乗り出", "友", "思いやり", "感謝", "行動", "B-6", "B－6"],
  },
  {
    slug: "shuzai",
    index: "9",
    code: "A-5",
    title: "戦争を取材する",
    themeSlug: "self",
    contentItem: "真理の探究、創造",
    date: "2026-07-01",
    aim: "真実を追い求める",
    lead: "真理の探究、創造。ねらいは、真実を追い求める。",
    tags: ["自分自身"],
    keywords: ["戦争", "取材", "真理", "探究", "創造", "真実", "A-5", "A－5"],
  },
  {
    slug: "kashino",
    index: "10",
    code: "C-18",
    title: "時を越えて―樫野で生まれたきずな―",
    themeSlug: "society",
    contentItem: "国際理解、国際貢献",
    date: "2026-07-08",
    aim: "国と国のきずな",
    lead: "国際理解、国際貢献。ねらいは、国と国のきずな。",
    slides: {
      href: "/materials/kashino-gallery.pdf",
      title: "振り返りギャラリー",
    },
    tags: ["集団や社会"],
    keywords: ["時", "樫野", "きずな", "国際理解", "国際貢献", "振り返り", "ギャラリー", "C-18", "C－18"],
  },
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
    slides: {
      href: "/materials/fathers-determination.pdf",
      title: "まとめスライド",
    },
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
    keywords: ["父の決意", "生命", "尊さ", "生き抜く", "スライド", "ウェルビーイング", "コンピテンシー", "I", "D-19", "D－19"],
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
    slides: {
      href: "/materials/yosito.pdf",
      title: "まとめスライド",
    },
    tags: ["集団や社会"],
    keywords: ["ヨシト", "公正", "公平", "社会正義", "スライド", "C-11", "C－11"],
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
    slides: {
      href: "/materials/great-nature.pdf",
      title: "まとめスライド",
    },
    tags: ["生命と自然"],
    keywords: ["杉", "樹齢", "七千年", "感動", "畏敬", "自然", "スライド", "D-21", "D－21"],
  },
];

export function getTheme(slug: string) {
  return themes.find((theme) => theme.slug === slug);
}

export function isRecordPublished(lesson: Pick<Lesson, "slides">) {
  return Boolean(lesson.slides);
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
  text: "1「おじさん役と私」から、16「樹齢七千年の杉」まで。",
  note: "各ページには、教材名、内容項目、ねらいを載せています。",
};
