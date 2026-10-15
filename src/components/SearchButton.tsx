"use client";

import { useSearchUI } from "@/components/SearchModal";

export function SearchButton() {
  const { openSearch } = useSearchUI();

  return (
    <button
      type="button"
      onClick={openSearch}
      className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted shadow-sm transition-all duration-200 hover:border-primary"
      aria-label="サイト内検索を開く"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 110-15 7.5 7.5 0 010 15z" />
      </svg>
      <span className="hidden sm:inline">検索</span>
      <kbd className="hidden rounded-md bg-secondary px-1.5 py-0.5 font-sans text-[10px] font-medium tracking-wide text-foreground sm:inline">
        Ctrl K
      </kbd>
    </button>
  );
}
