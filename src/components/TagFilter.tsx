"use client";

interface TagFilterProps {
  tags: readonly string[];
  activeTag: string;
  onSelect: (tag: string) => void;
}

export function TagFilter({ tags, activeTag, onSelect }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="toolbar" aria-label="記録の絞り込み">
      <button
        type="button"
        onClick={() => onSelect("all")}
        className={`tag ${activeTag === "all" ? "active" : ""}`}
        aria-pressed={activeTag === "all"}
      >
        すべて
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onSelect(tag)}
          className={`tag ${activeTag === tag ? "active" : ""}`}
          aria-pressed={activeTag === tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
