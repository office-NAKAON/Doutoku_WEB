"use client";

import { useEffect, useState } from "react";
import { searchData, type SearchItem } from "@/data/search-data";
import { fuzzySearch } from "@/lib/search";

export function useSearch(query: string) {
  const [state, setState] = useState<{ query: string; results: SearchItem[] }>({
    query: "",
    results: [],
  });

  useEffect(() => {
    const q = query.trim();
    if (!q) {
      setState({ query: "", results: [] });
      return;
    }

    const timer = setTimeout(() => {
      setState({ query: q, results: fuzzySearch(query, searchData) });
    }, 160);

    return () => clearTimeout(timer);
  }, [query]);

  return {
    results: state.results,
    pending: query.trim() !== state.query,
  };
}
