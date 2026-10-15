"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Drawer } from "@/components/Drawer";
import { MenuButton } from "@/components/MenuButton";
import { SearchButton } from "@/components/SearchButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TransitionLink } from "@/components/TransitionLink";

const navItems = [
  { href: "/#themes", label: "四つの視点" },
  { href: "/records", label: "授業の記録" },
  { href: "/class", label: "クラスについて" },
  { href: "/sitemap", label: "サイトマップ" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <TransitionLink href="/" className="flex items-center gap-3" aria-label="2年3組 道徳Web のトップへ">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-[11px] font-semibold tracking-wide text-primary-foreground">
            2-3
          </span>
          <span className="font-display text-lg leading-none">道徳Web</span>
        </TransitionLink>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="主なページ">
          {navItems.map((item) => {
            const current =
              item.href === "/records" ? pathname.startsWith("/records") : item.href === pathname;
            return (
              <TransitionLink
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`text-sm transition-colors duration-200 ${
                  current ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </TransitionLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <SearchButton />
          <ThemeToggle />
          <MenuButton isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />
        </div>
      </div>

      <Drawer isOpen={isOpen} onClose={close}>
        <p className="pr-10 font-display text-2xl">2年3組</p>
        <p className="mt-1 text-sm text-muted">道徳Web</p>
        <nav className="mt-10 flex flex-col gap-2" aria-label="メニュー">
          {navItems.map((item) => (
            <TransitionLink
              key={item.href}
              href={item.href}
              onClick={close}
              className="rounded-lg px-2 py-3 font-display text-2xl transition-colors hover:bg-secondary"
            >
              {item.label}
            </TransitionLink>
          ))}
        </nav>
        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <span className="text-sm text-muted">表示</span>
          <ThemeToggle />
        </div>
      </Drawer>
    </header>
  );
}
