import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TransitionLink } from "@/components/TransitionLink";
import { formatLessonDate, getLesson, getTheme, lessons, lessonsForTheme } from "@/data/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "記録" };
  return {
    title: lesson.title,
    description: lesson.lead,
  };
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const theme = getTheme(lesson.themeSlug);
  const related = lessonsForTheme(lesson.themeSlug).filter((item) => item.slug !== lesson.slug);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <p className="text-xs tracking-[0.2em] text-muted">
        {theme ? (
          <TransitionLink href={`/themes/${theme.slug}`} className="transition-colors hover:text-primary">
            {theme.title}
          </TransitionLink>
        ) : null}
        <span className="px-2">/</span>
        <span>{lesson.contentItem}</span>
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">{lesson.title}</h1>
      <p className="mt-4 text-sm text-muted">
        {formatLessonDate(lesson.date)}
        <span className="px-2">/</span>
        教材 {lesson.index}
        <span className="px-2">/</span>
        {lesson.code}
      </p>

      <p className="mt-12 text-xs tracking-[0.18em] text-muted">ねらい</p>
      <p className="mt-3 border-l-4 border-primary pl-6 font-display text-3xl leading-snug sm:text-4xl">
        {lesson.aim}
      </p>

      <aside className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <p className="text-xs tracking-[0.18em] text-muted">内容項目</p>
        <p className="mt-2 font-display text-2xl">{lesson.contentItem}</p>
        <p className="mt-6 text-xs tracking-[0.18em] text-muted">区分</p>
        <p className="mt-2 font-display text-2xl">{lesson.code}</p>
      </aside>

      {related.length > 0 && (
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="font-display text-2xl">同じ視点の記録</h2>
          <ul className="mt-6 divide-y divide-border">
            {related.map((item) => (
              <li key={item.slug}>
                <TransitionLink
                  href={`/records/${item.slug}`}
                  className="flex flex-wrap items-baseline justify-between gap-3 py-4 transition-colors hover:text-primary"
                >
                  <span className="font-display text-xl">{item.title}</span>
                  <span className="text-sm text-muted">{formatLessonDate(item.date)}</span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
