"use client";

import { useMemo, useState } from "react";
import { formatLessonDate, isRecordPublished, lessonsNewestFirst, perspectiveTags, type Lesson } from "@/data/content";
import { ConstructionNote } from "@/components/ConstructionNote";
import { TagFilter } from "@/components/TagFilter";
import { TransitionLink } from "@/components/TransitionLink";

export function RecordBoard() {
  const [activeTag, setActiveTag] = useState("all");
  const lessons = useMemo(() => {
    const sorted = lessonsNewestFirst();
    if (activeTag === "all") return sorted;
    return sorted.filter((lesson) => lesson.tags.includes(activeTag));
  }, [activeTag]);

  const [featured, ...rest] = lessons;

  return (
    <div>
      <TagFilter tags={perspectiveTags} activeTag={activeTag} onSelect={setActiveTag} />
      {featured ? (
        <div className="mt-8">
          <FeaturedLesson lesson={featured} />
          {rest.length > 0 && (
            <ul className="mt-4 border-t border-border">
              {rest.map((lesson) => (
                <li key={lesson.slug}>
                  <LessonRow lesson={lesson} />
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <p className="mt-8 text-sm text-muted">この視点の記録は、まだありません。</p>
      )}
    </div>
  );
}

function FeaturedLesson({ lesson }: { lesson: Lesson }) {
  return (
    <TransitionLink
      href={`/records/${lesson.slug}`}
      className="group relative block overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md sm:p-8"
    >
      <span className="pointer-events-none absolute top-2 right-4 font-display text-8xl leading-none text-foreground/[0.06]">
        {lesson.index}
      </span>
      <p className="text-xs tracking-[0.18em] text-muted">
        {formatLessonDate(lesson.date)}
        <span className="px-2">/</span>
        教材 {lesson.index}
        <span className="px-2">/</span>
        {lesson.code}
        <span className="px-2">/</span>
        {lesson.contentItem}
      </p>
      <h3 className="mt-6 font-display text-4xl tracking-tight">{lesson.title}</h3>
      <p className="mt-6 text-xs tracking-[0.18em] text-muted">ねらい</p>
      <p className="mt-2 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">{lesson.aim}</p>
      {isRecordPublished(lesson) ? null : <ConstructionNote size="inline" />}
      <p className="mt-8 text-sm font-medium text-primary">記録を読む</p>
    </TransitionLink>
  );
}

function LessonRow({ lesson }: { lesson: Lesson }) {
  return (
    <TransitionLink
      href={`/records/${lesson.slug}`}
      className="grid grid-cols-12 items-baseline gap-x-4 gap-y-1 border-b border-border py-5 transition-colors duration-200 hover:bg-secondary/80"
    >
      <span className="col-span-2 font-display text-lg text-primary sm:col-span-1">{lesson.index}</span>
      <span className="col-span-10 sm:col-span-5">
        <span className="block font-display text-2xl">{lesson.title}</span>
        {isRecordPublished(lesson) ? null : <ConstructionNote size="inline" />}
      </span>
      <span className="col-span-7 text-sm text-muted sm:col-span-4">{lesson.contentItem}</span>
      <span className="col-span-5 text-right text-sm text-muted sm:col-span-2">
        {formatLessonDate(lesson.date)}
      </span>
    </TransitionLink>
  );
}
