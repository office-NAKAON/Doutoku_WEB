"use client";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg p-2 transition-colors hover:bg-neutral-100 lg:hidden dark:hover:bg-neutral-800"
      aria-label="メニュー"
      aria-expanded={isOpen}
      aria-controls="site-drawer"
    >
      <div className="relative flex h-5 w-6 flex-col justify-between">
        <span
          className={`block h-0.5 bg-neutral-900 transition-all duration-300 dark:bg-neutral-100 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 bg-neutral-900 transition-all duration-300 dark:bg-neutral-100 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 bg-neutral-900 transition-all duration-300 dark:bg-neutral-100 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </div>
    </button>
  );
}
