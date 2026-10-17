# 2年3組 道徳Web

2026年度、2年3組の道徳ポートフォリオです。教材1から16を、「内容項目」と「ねらい」とともに残しています。

公開サイト: https://office-nakaon.github.io/Doutoku_WEB/

振り返りの PDF がまだない教材には、「鋭意制作中 Under Construction」と表示します。

## 教材を足す

教材の一覧は `src/data/content.ts` です。振り返りの PDF は `public/materials/` に置き、該当する教材の `slides` にパスを書きます。`slides` がある教材は公開済みとして扱い、制作中の表示は出ません。

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## 公開

`main` への push で、GitHub Actions が静的サイトをビルドし、GitHub Pages に公開します。

## ライセンス

プログラム部分は [MIT License](LICENSE) です。

授業記録、文章、写真などの教育コンテンツは MIT License の対象外です。無断転載はできません。
