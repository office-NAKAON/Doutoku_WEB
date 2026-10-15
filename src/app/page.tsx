import { FadeIn } from "@/components/FadeIn";
import { NumberBadge } from "@/components/NumberBadge";
import { RecordBoard } from "@/components/RecordBoard";
import { TransitionLink } from "@/components/TransitionLink";
import {
  countForTheme,
  currentQuestion,
  getLesson,
  lessonsNewestFirst,
  themes,
} from "@/data/content";

const stats = [
  { value: "04", label: "学びの視点" },
  { value: "07", label: "授業の記録" },
  { value: "2学期", label: "いまの地点" },
  { value: "2026", label: "年度" },
];

const guide = [
  {
    title: "授業のあと",
    body: "記録を読み、自分の考えとどこが違うかを見つける。同じ意見を探すページではない。",
  },
  {
    title: "話し合う前",
    body: `ページにある問いだけを先に読む。${currentQuestion.start}`,
  },
  {
    title: "家の人と",
    body: "名前は出さない。内容項目と問いを手がかりに、今日の授業で残ったことを話す。",
  },
];

export default function Home() {
  const latest = lessonsNewestFirst()[0];
  const latestLesson = getLesson(latest.slug);

  return (
    <>
      <section className="relative border-b border-border">
        <div className="mx-auto grid max-w-6xl px-6 lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:col-span-1 lg:flex lg:pt-28">
            <p className="font-sans text-[11px] tracking-[0.35em] text-muted [writing-mode:vertical-rl]">
              CLASS 2-3 / MORAL PORTFOLIO / 2026
            </p>
          </div>

          <div className="py-16 lg:col-span-6 lg:py-24">
            <p className="font-sans text-xs tracking-[0.28em] text-muted">中学校 第2学年 / 第3組</p>
            <div className="mt-6 border-l-4 border-primary pl-5 sm:pl-6">
              <h1 className="font-display text-6xl leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
                2年3組
                <span className="mt-2 block">道徳Web</span>
              </h1>
            </div>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              考えたことを、言葉にして残す。話し合いの前とあとで、自分の見方がどう動いたかを記録する、2年3組のポートフォリオです。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {latestLesson && (
                <TransitionLink
                  href={`/records/${latestLesson.slug}`}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:brightness-110 active:scale-95"
                >
                  最新の記録を読む
                </TransitionLink>
              )}
              <a
                href="#question"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium transition-all duration-200 hover:border-primary active:scale-95"
              >
                いまの問い
              </a>
            </div>
          </div>

          <div className="pb-16 lg:col-span-5 lg:py-24">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-sans text-xs tracking-[0.22em] text-muted">CONTENTS</p>
                <p className="text-xs text-muted">四つの視点</p>
              </div>
              <ol className="mt-2 divide-y divide-border">
                {themes.map((theme) => (
                  <li key={theme.slug}>
                    <TransitionLink
                      href={`/themes/${theme.slug}`}
                      className="group flex items-start gap-4 py-4"
                    >
                      <NumberBadge value={theme.index} />
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-2xl transition-colors group-hover:text-primary">
                          {theme.title}
                        </span>
                        <span className="mt-1 block text-sm text-muted">{theme.focus.join(" / ")}</span>
                      </span>
                      <span className="pt-1 text-xs text-muted">記録 {countForTheme(theme.slug)}</span>
                    </TransitionLink>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-6 py-6 ${index > 0 ? "sm:border-l sm:border-border" : ""} ${
                  index % 2 === 0 ? "border-r border-border sm:border-r-0" : ""
                } ${index < 2 ? "border-b border-border sm:border-b-0" : ""}`}
              >
                <dt className="text-xs tracking-[0.18em] text-muted">{stat.label}</dt>
                <dd className="mt-2 font-display text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="themes" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-[0.28em] text-primary">01</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">学びの視点</h2>
            <p className="mt-4 leading-relaxed text-muted">
              道徳の内容を、四つの関係に分けて置いています。授業の記録は、どれか一つの視点に戻って読めます。
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {themes.map((theme) => (
              <TransitionLink
                key={theme.slug}
                href={`/themes/${theme.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
              >
                <span className="flex items-center justify-between">
                  <NumberBadge value={theme.index} />
                  <span className="text-xs text-muted">記録 {countForTheme(theme.slug)}</span>
                </span>
                <h3 className="mt-8 font-display text-3xl">{theme.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted">{theme.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {theme.focus.map((item) => (
                    <li key={item} className="rounded-full bg-secondary px-3 py-1 text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm font-medium text-primary">この視点を開く</p>
              </TransitionLink>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="font-sans text-xs tracking-[0.28em] text-primary">02</p>
                <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">授業の記録</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  いちばん新しい記録を大きく置き、それ以前は目次のように並べています。個人の名前は出していません。
                </p>
              </div>
              <TransitionLink href="/records" className="text-sm font-medium text-primary">
                記録の一覧
              </TransitionLink>
            </div>
            <div className="mt-10">
              <RecordBoard />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="question" className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <p className="font-sans text-xs tracking-[0.28em] text-background/70">{currentQuestion.label}</p>
          <p className="mt-6 max-w-4xl font-display text-3xl leading-snug sm:text-5xl">{currentQuestion.text}</p>
          <p className="mt-8 max-w-2xl leading-relaxed text-background/75">{currentQuestion.note}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <FadeIn>
          <p className="font-sans text-xs tracking-[0.28em] text-primary">03</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">このサイトの読み方</h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            {guide.map((row, index) => (
              <article
                key={row.title}
                className={`grid gap-3 px-6 py-7 md:grid-cols-12 md:items-center md:gap-8 ${
                  index > 0 ? "border-t border-border" : ""
                }`}
              >
                <h3 className="font-display text-2xl md:col-span-4">{row.title}</h3>
                <p className="leading-relaxed text-muted md:col-span-8">{row.body}</p>
              </article>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
