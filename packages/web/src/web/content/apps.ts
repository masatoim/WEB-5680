/* ==================================================================
   開発アプリ一覧
   → 新しいアプリを追加するときは、この配列に 1 つオブジェクトを足すだけ。
     トップページの一覧と /apps/<slug> の個別ページが自動で増えます。
     画像は packages/web/public/images/ に置いてパスを書いてください。
   ================================================================== */

import type { AppEntry } from "./types";

export const apps: AppEntry[] = [
  {
    slug: "ice-focus-timer",
    caseLabel: "CASE 01 — MOBILE APP",
    name: "Ice Focus Timer",
    spec: "ICE FOCUS TIMER · iOS / Android · 近日公開",
    tagline: "効率よく、{{mauve:時間}}を友達に。",
    description:
      "触感ギミックとご褒美演出で、集中を楽しく持続させる体験型フォーカスタイマー。氷が溶けるのを眺めながら「いま」に没頭する——行動経済学とゲーミフィケーションをハードウェア的触感とデジタル演出で融合したプロダクト。",
    image: "/images/ice-focus-timer.webp",
    features: [
      {
        title: "触感ギミック",
        description:
          "袋を切り開く・マッチを擦る・薪をくべる。集中へのスイッチを物理的に入れる。",
      },
      {
        title: "ご褒美演出",
        description:
          "氷が溶けて冷え冷えのご褒美缶が現れる。達成の儀式がモチベーションを保つ。",
      },
      {
        title: "集中モード",
        description:
          "タイマー実行中はSNS・ゲームの起動をブロック。誘惑を遮断し深い没入へ。（近日公開）",
      },
      {
        title: "あきらめペナルティ",
        description:
          "途中で諦めるとハンマーでボウルが砕け散る。その痛みが最後までやり抜く原動力に。",
      },
    ],
    badges: [
      { label: "iOS" },
      { label: "Android" },
      { label: "近日公開", accent: true },
    ],
    externalUrl: "https://ice-focus-timer.luna-pocket.jp/",
    detail: {
      overview:
        "「集中しなきゃ」と思うほど集中できない。Ice Focus Timer は、その矛盾を根性ではなく体験の設計で解こうとするフォーカスタイマーです。開始も達成も挫折も、すべてに手触りのある演出を与えることで、時間を管理する対象から一緒に過ごす相手へと変えていきます。",
      sections: [
        {
          heading: "開発の背景",
          body: "既存のポモドーロアプリは数字が減っていくだけで、続ける理由が本人の意志力に依存していました。行動経済学でいう「即時報酬」と「損失回避」を、タイマーという最小の道具に組み込めないか——そこが出発点です。",
        },
        {
          heading: "体験の設計",
          body: "開始の儀式（触感ギミック）、経過の可視化（溶けていく氷）、達成の報酬（ご褒美缶）、挫折のコスト（ボウルの破砕）。四つの節目それぞれに演出を割り当て、一回のセッションを小さな物語として完結させています。",
        },
        {
          heading: "リリース状況",
          body: "iOS / Android 向けに近日公開予定です。集中モードなど一部機能は公開後の順次アップデートで提供します。ベータテストの募集はサイト内のフォームからご案内します。",
        },
      ],
    },
  },
];

export function findApp(slug: string): AppEntry | undefined {
  return apps.find((app) => app.slug === slug);
}
