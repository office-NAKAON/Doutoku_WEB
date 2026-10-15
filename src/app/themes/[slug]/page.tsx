import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { TransitionLink } from "@/components/TransitionLink";
import { formatLessonDate, lessonsForTheme, themes } from "@/data/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return themes.map((theme) => ({ slug: theme.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const theme = themes.find((item) => item.slug === slug);
  if (!theme) return { title: "視点" };
  return {
    title: theme.title,
    description: theme.description,
  };
}

export default async function ThemePage({ params }: Props) {
  const { slug } = await params;
  const theme = themes.find((item) => item.slug === slug);
  if (!theme) notFound();

  const records = lessonsForTheme(theme.slug);

  return (
    <>
      <PageHeader eyebrow={`PERSPECTIVE ${theme.index}`} title={theme.title} description={theme.description} />
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <ul className="flex flex-wrap gap-2">
          {theme.focus.map((item) => (
            <li key={item} className="rounded-full bg-secondary px-3 py-1 text-xs">
              {item}
            </li>
          ))}
        </ul>

        {records.length > 0 ? (
          <ul className="mt-10 border-t border-border">
            {records.map((lesson) => (
              <li key={lesson.slug}>
                <TransitionLink
                  href={`/records/${lesson.slug}`}
                  className="grid gap-2 border-b border-border py-6 transition-colors hover:bg-secondary/70 sm:grid-cols-12 sm:items-baseline sm:gap-4"
                >
                  <span className="font-display text-lg text-primary sm:col-span-1">{lesson.index}</span>
                  <span className="font-display text-3xl sm:col-span-6">{lesson.title}</span>
                  <span className="text-sm text-muted sm:col-span-3">{lesson.contentItem}</span>
                  <span className="text-sm text-muted sm:col-span-2 sm:text-right">{formatLessonDate(lesson.date)}</span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-sm text-muted">この視点の記録は、まだありません。</p>
        )}
      </div>
    </>
  );
}
