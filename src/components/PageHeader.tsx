export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <p className="font-sans text-xs tracking-[0.28em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
      </div>
    </header>
  );
}
