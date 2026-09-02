import { Fragment, type ReactNode } from "react";

/**
 * コンテンツファイル内の簡易マークアップを描画します。
 *   {{accent:テキスト}} → アクセント色
 *   {{mauve:テキスト}}  → モーブ色
 *   {{dim:テキスト}}    → 薄いグレー
 *   \n                  → 改行
 */
const PATTERN = /\{\{(accent|mauve|dim):([^}]*)\}\}/g;

export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  const pushPlain = (value: string) => {
    value.split("\n").forEach((line, index, arr) => {
      if (line) nodes.push(<Fragment key={`t${key++}`}>{line}</Fragment>);
      if (index < arr.length - 1) nodes.push(<br key={`b${key++}`} />);
    });
  };

  for (const match of text.matchAll(PATTERN)) {
    const index = match.index ?? 0;
    pushPlain(text.slice(lastIndex, index));
    nodes.push(
      <span key={`s${key++}`} className={match[1]}>
        {match[2]}
      </span>,
    );
    lastIndex = index + match[0].length;
  }
  pushPlain(text.slice(lastIndex));

  return <>{nodes}</>;
}
