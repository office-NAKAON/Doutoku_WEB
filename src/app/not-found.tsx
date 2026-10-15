import { TransitionLink } from "@/components/TransitionLink";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs tracking-[0.28em] text-primary">404</p>
      <h1 className="mt-4 font-display text-5xl">ページが見つかりません</h1>
      <p className="mt-6 leading-relaxed text-muted">
        アドレスが変わったか、まだ記録のないページです。
      </p>
      <TransitionLink
        href="/"
        className="mt-8 inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
      >
        トップへ戻る
      </TransitionLink>
    </div>
  );
}
