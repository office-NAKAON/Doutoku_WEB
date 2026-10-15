import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import "./globals.css";

const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;if(s==="dark"||(!s&&d)){document.documentElement.classList.add("dark");}}catch(e){}})();`;

export const metadata: Metadata = {
  title: {
    default: "2年3組 道徳Web",
    template: "%s / 2年3組 道徳Web",
  },
  description:
    "考えたことを、言葉にして残す。2026年度、2年3組の道徳ポートフォリオ。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Shippori+Mincho:wght@500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Providers>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[90] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            本文へスキップ
          </a>
          <Header />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
