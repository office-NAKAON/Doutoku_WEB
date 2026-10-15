"use client";

import { PageTransition } from "@/components/PageTransition";
import { SearchRoot } from "@/components/SearchModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      <SearchRoot>{children}</SearchRoot>
    </PageTransition>
  );
}
