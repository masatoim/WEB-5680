# Luna Pocket — デザイン方針

既存サイト（luna-pocket.jp）のビジュアルをほぼ忠実に踏襲する。

## カラー

モノクロ基調。彩度をほぼ持たせない。定義は `packages/web/src/web/styles/tokens.css`。

| 変数 | 値 | 用途 |
|---|---|---|
| `--void` | `#0f0f0f` | ベース背景 |
| `--void-soft` | `#171717` | 交互に配置するセクション背景 |
| `--void-card` | `#1c1c1c` | カード・パネル |
| `--line` | `#333333` | 1px の罫線、グリッド、区切り |
| `--silver` | `#e6e6e6` | 見出し・本文 |
| `--silver-dim` | `#949494` | 補足文・ラベル |
| `--accent` | `#e6e6e6` | 強調（色ではなく明度で作る） |
| `--mauve` | `#a8a8a8` | 二次強調・コードラベル |

## タイポグラフィ

- 見出し: Space Grotesk 700（日本語は Noto Sans JP へフォールバック）
- 本文: Noto Sans JP
- ラベル・数値・コード: JetBrains Mono（`letter-spacing` を 0.1〜0.3em 広げる）

ヒーロー見出しは `font-size: 14vw`（デスクトップで 5.5vw まで縮小）、`line-height: 0.95`。

## レイアウト原則

- 最大幅 `--shell: 1600px` / `--shell-narrow: 1400px`、左右余白は `--pad-x`（SP 1.5rem → PC 4rem）
- カード群は `background: var(--line)` + `gap: 1px` の擬似ボーダーグリッドで区切る
- セクション上下は 7rem（PC 10rem）
- 全セクションに `.grid-hairline` の 64px 方眼を重ね、`opacity` で強弱をつける

## モーション

- スクロール連動フェードイン（`.reveal` → `.reveal--in`、`IntersectionObserver`）
- ヒーローのポケットはマウス位置に応じて最大 8deg 傾く
- 軌道ドットは 18 秒で 1 周（`luna-spin`）
- `prefers-reduced-motion: reduce` で全アニメーションを無効化

## 構造の方針

見た目とコンテンツを完全に分離する。文章・アプリ情報・法務文書は
`packages/web/src/web/content/` の TypeScript データファイルに集約し、
コンポーネントはその描画だけを担当する。更新手順は `UPDATING.md` を参照。
