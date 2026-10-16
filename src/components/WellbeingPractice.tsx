import { wellbeingCategories, type WellbeingPractice as WellbeingPracticeData } from "@/data/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function WellbeingPractice({ practice }: { practice: WellbeingPracticeData }) {
  const category = wellbeingCategories[practice.category];

  return (
    <section className="mt-12">
      <p className="text-xs tracking-[0.18em] text-muted">あわせて行った実践</p>
      <h2 className="mt-3 font-display text-3xl">道徳×ウェルビーイング</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        この時間では、道徳のねらいに加えて、ウェルビーイング・コンピテンシーからも考えました。
      </p>

      {practice.prompt ? (
        <p className="mt-8 border-l-4 border-primary pl-6 font-display text-2xl leading-snug sm:text-3xl">
          {practice.prompt}
        </p>
      ) : null}

      <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <p className="text-xs tracking-[0.18em] text-muted">選んだカテゴリー</p>
        <p className="mt-3 font-display text-4xl tracking-tight">{category.label}</p>
        <p className="mt-2 text-sm text-muted">{category.scope}</p>
        <p className="mt-6 leading-relaxed">{practice.summary}</p>
      </div>

      <figure className="mt-8">
        <figcaption className="text-xs tracking-[0.18em] text-muted">クラスの選択</figcaption>
        {practice.results && practice.results.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-4">
            {practice.results.map((item) => (
              <li key={item.src} className="w-[16.5rem] max-w-full">
                <img
                  src={`${basePath}${item.src}`}
                  alt={item.alt}
                  className="w-full rounded-xl border border-border bg-card"
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 flex min-h-56 items-center justify-center rounded-xl border border-dashed border-border bg-secondary/40 px-6 py-12 text-center">
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              クラスで選んだ結果は、画像ができてからここに載せます。
            </p>
          </div>
        )}
      </figure>
    </section>
  );
}
