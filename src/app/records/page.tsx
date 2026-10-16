import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { RecordBoard } from "@/components/RecordBoard";

export const metadata: Metadata = {
  title: "授業の記録",
  description: "教材11から16の「内容項目」と「ねらい」。",
};

export default function RecordsPage() {
  return (
    <>
      <PageHeader
        eyebrow="RECORDS"
        title="授業の記録"
        description="教材11から16までを、実施日の新しいものから並べています。視点で絞ると、同じ関係の教材をまとめて読めます。"
      />
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <RecordBoard />
      </div>
    </>
  );
}
