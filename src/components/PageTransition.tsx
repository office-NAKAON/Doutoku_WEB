"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type TransitionContextValue = {
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("PageTransition の内側で使ってください");
  }
  return context;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [covered, setCovered] = useState(true);
  const [origin, setOrigin] = useState<"top" | "bottom">("top");
  const locking = useRef(false);

  useEffect(() => {
    locking.current = false;
    setOrigin("top");
    setCovered(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => setCovered(false), reduce ? 0 : 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navigate = (href: string) => {
    if (locking.current) return;
    locking.current = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setOrigin("bottom");
    setCovered(true);
    window.setTimeout(() => {
      router.push(href);
    }, reduce ? 0 : 500);
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[80] bg-neutral-900 dark:bg-neutral-100 ${
          covered ? "scale-y-100" : "pointer-events-none scale-y-0"
        }`}
        style={{
          transformOrigin: origin === "bottom" ? "bottom" : "top",
          transition: "transform 500ms cubic-bezier(0.87, 0, 0.13, 1)",
        }}
      />
      {children}
    </TransitionContext.Provider>
  );
}
