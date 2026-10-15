import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { RecordBoard } from "@/components/RecordBoard";
import { currentQuestion } from "@/data/content";

export const metadata: Metadata = {
  title: "授業の記録",
  description: "2年3組の道徳で残した問いと、話し合いのあとの考え。",
};

export default function RecordsPage() {
  return (
    <>
      <PageHeader
        eyebrow="RECORDS"
        title="授業の記録"
        description="新しい記録を先に置いています。視点で絞ると、同じ関係のなかで考えがどう動いたかをたどれます。"
      />
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.18em] text-muted">{currentQuestion.label}</p>
          <p className="mt-2 font-display text-2xl">{currentQuestion.text}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{currentQuestion.note}</p>
        </div>
        <div className="mt-10">
          <RecordBoard />
        </div>
      </div>
    </>
  );
}
