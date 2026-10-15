"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Drawer({ isOpen, onClose, children }: DrawerProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        <div
          id="site-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="メニュー"
          aria-hidden={!isOpen}
          inert={!isOpen}
          className={`pointer-events-auto absolute top-0 right-0 h-dvh w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 dark:bg-neutral-900 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
        <div className="p-6">
          <button
            ref={closeRef}
            onClick={onClose}
            className="absolute top-4 right-4 rounded-lg p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="メニューを閉じる"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {children}
        </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
