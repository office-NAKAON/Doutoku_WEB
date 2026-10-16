import { TransitionLink } from "@/components/TransitionLink";

const links = [
  { href: "/#themes", label: "四つの視点" },
  { href: "/records", label: "授業の記録" },
  { href: "/class", label: "クラスについて" },
  { href: "/sitemap", label: "サイトマップ" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-display text-3xl">2年3組 道徳Web</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            教材11から16の「内容項目」と「ねらい」。2026年度、2年3組の道徳ポートフォリオ。
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm md:col-span-6 md:justify-items-end" aria-label="フッター">
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <TransitionLink href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </TransitionLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 text-xs text-muted">
          <p>個人が特定される記述は載せていません。授業の文章の無断転載はできません。</p>
          <p>検索は Ctrl + K</p>
        </div>
      </div>
    </footer>
  );
}
