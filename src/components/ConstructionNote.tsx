export function ConstructionNote({ size = "page" }: { size?: "page" | "inline" }) {
  const className =
    size === "page"
      ? "mt-12 block font-display text-2xl text-[#e08a8a] sm:text-3xl dark:text-[#f0b4b4]"
      : "mt-1 block text-sm leading-snug text-[#e08a8a] dark:text-[#f0b4b4]";

  return <span className={className}>鋭意制作中 Under Construction</span>;
}
