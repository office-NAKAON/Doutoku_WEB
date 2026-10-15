"use client";

import { usePathname } from "next/navigation";
import { usePageTransition } from "@/components/PageTransition";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-current"?: "page" | undefined;
}

export function TransitionLink({
  href,
  children,
  className,
  onClick,
  "aria-current": ariaCurrent,
}: TransitionLinkProps) {
  const pathname = usePathname();
  const { navigate } = usePageTransition();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const publicHref = href.startsWith("/") ? `${basePath}${href}` : href;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return;
    if (url.pathname === pathname && url.hash) return;
    if (url.pathname === pathname && !url.hash) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    navigate(href);
  };

  return (
    <a href={publicHref} onClick={handleClick} className={className} aria-current={ariaCurrent}>
      {children}
    </a>
  );
}
