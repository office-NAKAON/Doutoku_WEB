import type { SearchItem } from "@/data/search-data";

export function fuzzySearch(query: string, data: SearchItem[]): SearchItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return data
    .map((item) => {
      let score = 0;
      const title = item.title.toLowerCase();

      if (title === q) score += 100;
      else if (title.startsWith(q)) score += 80;
      else if (title.includes(q)) score += 60;

      if (item.keywords.some((kw) => kw.toLowerCase().includes(q))) score += 50;
      if (item.description.toLowerCase().includes(q)) score += 40;

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function highlight(text: string, query: string): string {
  const escaped = escapeHtml(text);
  const q = query.trim();
  if (!q) return escaped;
  const safe = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${safe})`, "gi");
  return escaped.replace(regex, "<mark>$1</mark>");
}
