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
  title: string;
  themeSlug: string;
  contentItem: string;
  date: string;
  lead: string;
  question: string;
  notes: string[];
  tags: string[];
  keywords: string[];
};

export const themes: Theme[] = [
  {
    slug: "self",
    index: "01",
    title: "自分自身",
    description:
      "だれかに言われたからではなく、自分の理由で決める。決めた結果まで引き受ける。",
    focus: [
      "自主、自律、自由と責任",
      "節度、節制",
      "向上心、個性の伸長",
      "希望と勇気、克己と強い意志",
      "真理の探究、創造",
    ],
  },
  {
    slug: "others",
    index: "02",
    title: "人との関わり",
    description:
      "正しさより先に、言葉の届き方を確かめる。同意し続けることと、信頼は別のもの。",
    focus: ["思いやり、感謝", "礼儀", "友情、信頼", "相互理解、寛容"],
  },
  {
    slug: "society",
    index: "03",
    title: "集団や社会",
    description:
      "きまり、仕事、見慣れた景色。自分ひとりでは完結しない暮らしの側に立って考える。",
    focus: [
      "遵法精神、公徳心",
      "公正、公平、社会正義",
      "社会参画、公共の精神",
      "勤労",
      "家族愛、家庭生活の充実",
      "よりよい学校生活、集団生活の充実",
      "郷土の伝統と文化の尊重、郷土を愛する態度",
      "我が国の伝統と文化の尊重、国を愛する態度",
      "国際理解、国際貢献",
    ],
  },
  {
    slug: "life",
    index: "04",
    title: "生命と自然",
    description:
      "生きていることは、たくさんのいのちと時間の上に成り立っている。",
    focus: ["生命の尊さ", "自然愛護", "感動、畏敬の念", "よりよく生きる喜び"],
  },
];

export const lessons: Lesson[] = [
  {
    slug: "kotoba",
    index: "01",
    title: "言葉の温度",
    themeSlug: "others",
    contentItem: "思いやり、感謝",
    date: "2026.04.17",
    lead: "同じ内容でも、言い方ひとつで相手の受け取り方は変わる。",
    question: "その言葉は、相手のどの気持ちに触れるだろう。",
    notes: [
      "授業では、同じ伝言を「短い指示」と「相手の状況を想像した言い方」の二つで比べた。内容は同じでも、後者の方が次の行動を相談しやすかった。",
      "班では、自分が言われたときに黙った経験がいくつか出た。正しさで押し切ると、話し合いはそこで止まる。",
      "残った考えは、意見を言う前に一呼吸おき、この言葉が相手のどの気持ちに触れるかを確かめる、ということ。",
    ],
    tags: ["人との関わり"],
    keywords: ["思いやり", "感謝", "言葉", "言い方", "温度"],
  },
  {
    slug: "honne",
    index: "02",
    title: "本音でいる距離",
    themeSlug: "others",
    contentItem: "友情、信頼",
    date: "2026.05.15",
    lead: "合わせ続けることと、信頼されることは同じではない。",
    question: "友だちでいるために、どこまで本音を預けるだろう。",
    notes: [
      "空気を読むこと自体は悪くない。ただ、読み続けた結果、自分の考えが消えていないかを確かめた。",
      "信頼は、いつも同意することではない。違っていても関係が壊れないことだ、という意見が出た。",
      "距離の取り方は相手によって変わる。それでも、黙って合わせるだけが友情ではない、という点は揃った。",
    ],
    tags: ["人との関わり"],
    keywords: ["友情", "信頼", "本音", "空気", "友だち"],
  },
  {
    slug: "kimeta",
    index: "03",
    title: "自分で決めたこと",
    themeSlug: "self",
    contentItem: "自主、自律、自由と責任",
    date: "2026.06.12",
    lead: "だれかに言われたから、ではなく、自分の理由で動く。",
    question: "自分で決めたと言えるのは、どの選択だろう。",
    notes: [
      "朝の支度、提出物、残るべきかどうか。日常の選択を「自分で決めたもの」と「流されたもの」に分けてみた。",
      "自由は、やりたいことをするだけではない。決めた結果を引き受けることまで含む、という話になった。",
      "向上心は、他人と比べて勝つことより、昨日の自分との差を言葉にできることだ、とまとめた。",
    ],
    tags: ["自分自身"],
    keywords: ["自主", "自律", "自由", "責任", "向上心", "決断"],
  },
  {
    slug: "rule",
    index: "04",
    title: "ルールの向こう側",
    themeSlug: "society",
    contentItem: "遵法精神、公徳心",
    date: "2026.07.03",
    lead: "守るか破るかの前に、きまりの先にいる人を想像する。",
    question: "そのきまりは、だれを守っているだろう。",
    notes: [
      "校則や交通ルールを、めんどうなものとしてではなく、だれかの安全と結びついているかで見直した。",
      "納得できないきまりもある。そのときは、破る前に、変えるための言い方を考える、という意見が強かった。",
      "公徳心は、見られているから守ることではない。見ていない人のぶんまで想像することだ、と記録する。",
    ],
    tags: ["集団や社会"],
    keywords: ["ルール", "遵法", "公徳", "校則", "きまり", "公正"],
  },
  {
    slug: "shigoto",
    index: "05",
    title: "誰かの仕事の時間",
    themeSlug: "society",
    contentItem: "勤労",
    date: "2026.09.11",
    lead: "あたりまえの後ろにある、誰かの時間をたどる。",
    question: "自分の一日は、だれの仕事で成り立っているだろう。",
    notes: [
      "登校から下校まで、自分を支えている仕事を書き出した。掃除、給食、運転、店の品出し、家の人の支度。",
      "勤労は、将来の職業の話だけではない。今、誰かが使っている時間に気づくことでもある。",
      "感謝を気持ちで終わらせず、無駄にしない使い方に変える、という行動目標が出た。",
    ],
    tags: ["集団や社会"],
    keywords: ["勤労", "仕事", "給食", "感謝", "労働"],
  },
  {
    slug: "machi",
    index: "06",
    title: "この町の朝",
    themeSlug: "society",
    contentItem: "郷土の伝統と文化の尊重",
    date: "2026.09.25",
    lead: "見慣れた場所にも、自分より長い時間がある。",
    question: "この景色は、だれの記憶を引き受けているだろう。",
    notes: [
      "通学路にある店、川、古い標識。毎日過ぎている場所を一つ選び、家の人に昔の様子を聞いた。",
      "知っているつもりだった場所が、別の時代には違う使われ方をしていた、という発見が多かった。",
      "郷土を大切にする気持ちは、ほめる言葉より先に、知ることから始まる、とまとめた。",
    ],
    tags: ["集団や社会"],
    keywords: ["郷土", "伝統", "文化", "町", "通学路", "風景"],
  },
  {
    slug: "inochi",
    index: "07",
    title: "つながっているいのち",
    themeSlug: "life",
    contentItem: "生命の尊さ",
    date: "2026.10.02",
    lead: "生きていることは、たくさんのいのちの上に成り立っている。",
    question: "今日の自分は、どのいのちとつながっているだろう。",
    notes: [
      "食事、薬、衣服、通学路の木。自分の生活から、命のあるものをたどった。",
      "大切と言うだけでは、何も変わらない。残さず食べる、雑に扱わない、苦しんでいる様子を見逃さない、という具体に落とした。",
      "自分の命も、だれかに支えられて続いている。特別な日だけでなく、普通の日に思い出せるようにしておきたい。",
    ],
    tags: ["生命と自然"],
    keywords: ["生命", "いのち", "尊さ", "自然", "命", "つながり"],
  },
];

export function getTheme(slug: string) {
  return themes.find((theme) => theme.slug === slug);
}

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
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
  label: "2学期の共通の問い",
  text: "「正しい」と言い切る前に、誰の立場が抜けていないか。",
  note: "授業の記録は、それぞれの内容項目から、この問いへ戻ってくる。結論を急がず、抜けている立場を一つ見つけるところから始める。",
};
