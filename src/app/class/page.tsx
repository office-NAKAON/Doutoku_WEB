import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TransitionLink } from "@/components/TransitionLink";
import { currentQuestion, themes } from "@/data/content";

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
        description="道徳の時間に出た問いを、その場で終わらせないためのサイトです。2年3組の共有の考えだけを残します。"
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-12 lg:py-20">
        <div className="space-y-6 text-lg leading-loose lg:col-span-7">
          <p>
            授業では、資料を読んで話し合い、最後に自分の考えがどこで動いたかを言葉にします。このサイトは、その「動いたあと」をクラスの記録として置く場所です。
          </p>
          <p>
            正解を発表するページではありません。内容項目ごとに、クラスが立ち止まった問いと、話し合いのあとで残った考えを短くまとめています。
          </p>
          <p>
            いまの共通の問いは、{currentQuestion.text}
            個別の記録を読んだら、もう一度この文に戻ってみてください。
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
