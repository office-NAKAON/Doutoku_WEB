import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TransitionLink } from "@/components/TransitionLink";
import { themes } from "@/data/content";

export const metadata: Metadata = {
  title: "クラスについて",
  description: "2年3組 道徳Web の読み方と、記録に残していないこと。",
};

const keptOut = [
  "個人の名前、出席番号、発言の特定",
  "家庭の事情や、だれかを傷つける記述",
  "評価や、心の点数につながる記録",
];

export default function ClassPage() {
  return (
    <>
      <PageHeader
        eyebrow="CLASS 2-3"
        title="クラスについて"
        description="教材1から16の「内容項目」と「ねらい」を、クラスで共有するためのサイトです。"
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-12 lg:py-20">
        <div className="space-y-6 text-lg leading-loose lg:col-span-7">
          <p>
            道徳の時間で扱った教材を「内容項目」と「ねらい」とともに置く場所です。
          </p>
          <p>
            掲載している実践は、教材1「おじさん役と私」から教材16「樹齢七千年の杉」までの16です。各ページに「内容項目」と「ねらい」を載せています。
          </p>
        </div>
        <aside className="rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-5">
          <h2 className="font-display text-2xl">載せていないこと</h2>
          <ul className="mt-5 space-y-4">
            {keptOut.map((item) => (
              <li key={item} className="border-t border-border pt-4 text-sm leading-relaxed first:border-t-0 first:pt-0">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl">四つの視点へ</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {themes.map((theme) => (
              <li key={theme.slug}>
                <TransitionLink
                  href={`/themes/${theme.slug}`}
                  className="block rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
                >
                  <span className="text-xs tracking-[0.18em] text-primary">{theme.index}</span>
                  <span className="mt-2 block font-display text-2xl">{theme.title}</span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
