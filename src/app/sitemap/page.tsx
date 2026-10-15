import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TransitionLink } from "@/components/TransitionLink";
import { searchData } from "@/data/search-data";

export const metadata: Metadata = {
  title: "サイトマップ",
  description: "2年3組 道徳Web のページ一覧。",
};

const categoryOrder = ["案内", "学びの視点", "授業の記録"];

export default function SitemapPage() {
  const grouped = categoryOrder.map((category) => ({
    category,
    items: searchData.filter((item) => item.category === category),
  }));

  return (
    <>
      <PageHeader
        eyebrow="SITEMAP"
        title="サイトマップ"
        description="案内、学びの視点、授業の記録。番号は、その区分のなかでの順番です。"
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-3 lg:py-20">
        {grouped.map(({ category, items }) => (
          <section key={category} className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-display text-2xl">{category}</h2>
            <ul className="mt-5 space-y-3">
              {items.map((item, index) => (
                <li key={item.url}>
                  <TransitionLink href={item.url} className="flex items-center gap-3 rounded-lg py-1 transition-colors hover:text-primary">
                    <span className="badge">{index + 1}</span>
                    <span>{item.title}</span>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
