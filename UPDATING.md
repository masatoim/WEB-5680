# サイトの更新方法

文章や画像を変えるだけなら、**`packages/web/src/web/content/` の中のファイルを編集するだけ**です。
HTML やコンポーネントを触る必要はありません。保存すると画面が自動で更新されます。

## どのファイルを編集すればいいか

| 変えたいもの | 編集するファイル |
|---|---|
| トップページの文言全般（キャッチコピー、事業説明、プロセス、召喚セクション、フッターの連絡先） | `content/site.ts` |
| 開発アプリの追加・編集 | `content/apps.ts` |
| プライバシーポリシー | `content/privacy.ts` |
| 事業者情報・特商法表記 | `content/legal.ts` |
| 色・フォント・余白 | `styles/tokens.css` |
| セクションの見た目 | `styles/site.css` |

すべて `packages/web/src/web/` の下にあります。

## よくある更新

### 電話番号やメールを変える

`content/site.ts` の `footer.contact` を編集します。事業者情報ページにも載っているので、
`content/legal.ts` の該当行もあわせて直してください。

### Google フォームの URL を変える

`content/site.ts` の先頭にある `links` を書き換えれば、サイト内の全リンクに反映されます。

```ts
export const links = {
  appIdeaForm: "https://forms.gle/xxxxx",
  localDxForm: "https://forms.gle/yyyyy",
};
```

### 新しいアプリを追加する

1. 画像を `packages/web/public/images/` に置く
2. `content/apps.ts` の配列にオブジェクトを 1 つ足す

```ts
{
  slug: "my-new-app",              // → /apps/my-new-app が自動で作られます
  caseLabel: "CASE 02 — MOBILE APP",
  name: "My New App",
  spec: "MY NEW APP · iOS · 公開中",
  tagline: "ひとことで{{accent:魅力}}を。",
  description: "アプリの説明文。",
  image: "/images/my-new-app.png",
  features: [{ title: "機能名", description: "機能の説明" }],
  badges: [{ label: "iOS" }, { label: "公開中", accent: true }],
  externalUrl: "https://example.com",
  detail: {
    overview: "個別ページの導入文",
    sections: [{ heading: "開発の背景", body: "本文" }],
  },
}
```

トップページの一覧と個別ページの両方に自動で反映されます。`detail` は省略できます。

### 文章の一部だけ色を変える

コンテンツファイルの文章では次の記法が使えます。

- `{{accent:テキスト}}` … 明るいシルバー（強調）
- `{{mauve:テキスト}}` … 中間グレー
- `{{dim:テキスト}}` … 暗いグレー
- `\n`（改行）… そのまま改行として表示されます

例： `"妄想から、{{accent:現実}}までの\n四つの工程。"`

### 法務ページに条項を追加する

`content/privacy.ts` / `content/legal.ts` の `sections` に足します。ブロックは 3 種類です。

```ts
{
  heading: "13. 新しい条項",
  blocks: [
    { kind: "paragraph", text: "本文をここに。" },
    { kind: "list", items: ["箇条書き1", "箇条書き2"] },
    { kind: "table", rows: [{ key: "項目名", value: "内容" }] },
  ],
}
```

`table` の value にメールアドレスや URL を入れると自動でリンクになります。

### 色やフォントを変える

`styles/tokens.css` の `:root` にある変数を書き換えると、サイト全体に反映されます。

```css
--void: #0f0f0f;        /* 背景 */
--silver: #e6e6e6;      /* 本文の文字色 */
--accent: #e6e6e6;      /* 強調色 */
--font-display: "Space Grotesk", "Noto Sans JP", sans-serif;
```

## 開発の起動

```bash
bun run dev            # 開発サーバー
bun run build          # 本番ビルドの確認
bun run typecheck      # 型チェック
```

## ページを増やしたいとき

1. `src/web/pages/` に新しいファイルを作る
2. `src/web/app.tsx` の `<Switch>` に `<Route path="/xxx" component={Xxx} />` を足す
3. ヘッダーやフッターに出したい場合は `content/site.ts` の `nav.items` / `footer.legalLinks` に追加

## 画像について

画像・動画・フォントは必ず `packages/web/public/` の下に置き、`/images/xxx.png` のように
絶対パスで参照してください（ビルド時に自動で最適化されます）。
