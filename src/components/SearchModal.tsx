"use client";

import { createContext, useContext, useEffect, useId, useRef, useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { highlight } from "@/lib/search";
import { usePageTransition } from "@/components/PageTransition";
import type { SearchItem } from "@/data/search-data";

type SearchContextValue = {
  openSearch: () => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function useSearchUI() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("SearchRoot の内側で使ってください");
  }
  return context;
}

const suggestions = [
  { title: "授業の記録", url: "/records" },
  { title: "四つの視点", url: "/#themes" },
  { title: "クラスについて", url: "/class" },
  { title: "サイトマップ", url: "/sitemap" },
];

export function SearchRoot({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <SearchContext.Provider value={{ openSearch: () => setIsOpen(true) }}>
      {children}
      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </SearchContext.Provider>
  );
}

function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { navigate } = usePageTransition();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { results, pending } = useSearch(query);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const onCloseRef = useRef(onClose);
  const navigateRef = useRef(navigate);
  const resultsRef = useRef<SearchItem[]>(results);
  const selectedRef = useRef(selectedIndex);
  const titleId = useId();
  const listId = useId();

  onCloseRef.current = onClose;
  navigateRef.current = navigate;
  resultsRef.current = results;
  selectedRef.current = selectedIndex;

  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    setQuery("");
    setSelectedIndex(0);
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      const currentResults = resultsRef.current;
      const currentIndex = selectedRef.current;

      if (event.key === "ArrowDown" && currentResults.length > 0) {
        event.preventDefault();
        setSelectedIndex((index) => (index + 1) % currentResults.length);
      }

      if (event.key === "ArrowUp" && currentResults.length > 0) {
        event.preventDefault();
        setSelectedIndex((index) => (index - 1 + currentResults.length) % currentResults.length);
      }

      if (event.key === "Enter" && currentResults[currentIndex]) {
        event.preventDefault();
        const url = currentResults[currentIndex].url;
        onCloseRef.current();
        navigateRef.current(url);
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          "a[href], button, input, [tabindex]:not([tabindex='-1'])",
        ),
      ).filter((element) => !element.hasAttribute("disabled"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    document.getElementById(`${listId}-option-${selectedIndex}`)?.scrollIntoView({
      block: "nearest",
    });
  }, [isOpen, listId, selectedIndex]);

  const openResult = (url: string) => {
    onClose();
    navigate(url);
  };

  if (!isOpen) return null;

  const activeId = results.length > 0 ? `${listId}-option-${selectedIndex}` : undefined;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]">
      <button type="button" className="absolute inset-0 bg-black/50" aria-label="検索を閉じる" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-xl border border-border bg-background shadow-lg"
      >
        <h2 id={titleId} className="sr-only">
          サイト内検索
        </h2>
        <div className="border-b border-border px-4">
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="サイト内検索"
            aria-controls={listId}
            aria-activedescendant={activeId}
            aria-autocomplete="list"
            role="combobox"
            aria-expanded={results.length > 0}
            placeholder="ページ、内容項目、キーワード"
            className="w-full bg-transparent py-4 text-base text-foreground outline-none placeholder:text-muted"
          />
        </div>
        <div className="sr-only" aria-live="polite">
          {query.trim() ? `${results.length}件の結果` : "キーワードを入力"}
        </div>
        {query.trim() ? (
          pending ? (
            <p className="px-4 py-8 text-sm text-muted">検索しています</p>
          ) : results.length > 0 ? (
            <ul id={listId} role="listbox" className="max-h-80 overflow-y-auto py-2">
              {results.map((item, index) => (
                <li key={item.url} role="presentation">
                  <button
                    id={`${listId}-option-${index}`}
                    role="option"
                    type="button"
                    aria-selected={index === selectedIndex}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onClick={() => openResult(item.url)}
                    className={`flex w-full flex-col gap-1 px-4 py-3 text-left transition-colors ${
                      index === selectedIndex ? "bg-secondary" : "hover:bg-secondary"
                    }`}
                  >
                    <span className="text-xs tracking-[0.16em] text-muted">{item.category}</span>
                    <span
                      className="font-display text-lg"
                      dangerouslySetInnerHTML={{ __html: highlight(item.title, query) }}
                    />
                    <span
                      className="text-sm leading-relaxed text-muted"
                      dangerouslySetInnerHTML={{ __html: highlight(item.description, query) }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-8 text-sm text-muted">一致するページがありません。</p>
          )
        ) : (
          <div className="px-4 py-4">
            <p className="text-xs tracking-[0.16em] text-muted">よく見るページ</p>
            <ul className="mt-3">
              {suggestions.map((item) => (
                <li key={item.url}>
                  <button
                    type="button"
                    onClick={() => openResult(item.url)}
                    className="w-full rounded-lg px-2 py-2 text-left text-sm transition-colors hover:bg-secondary"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-border px-4 py-3 text-xs text-muted">
          <span>上下で移動</span>
          <span>Enter で開く</span>
          <span>Esc で閉じる</span>
        </div>
      </div>
    </div>
  );
}
