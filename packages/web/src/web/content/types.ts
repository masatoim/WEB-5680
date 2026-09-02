/* ------------------------------------------------------------------
   コンテンツの型定義
   ここを触る必要はほぼありません。文章の編集は同フォルダの
   site.ts / apps.ts / privacy.ts / legal.ts で行ってください。
   ------------------------------------------------------------------ */

/** 文字列内の {{accent}} / {{mauve}} / {{dim}} タグで色を付けられます */
export type RichText = string;

export type LegalBlock =
  | { kind: "paragraph"; text: RichText }
  | { kind: "list"; items: RichText[] }
  | { kind: "table"; rows: { key: string; value: RichText }[] };

export type LegalSection = {
  /** 見出し。省略すると本文だけが表示されます */
  heading?: string;
  blocks: LegalBlock[];
};

export type LegalPage = {
  eyebrow: string;
  title: string;
  updatedAt: string;
  intro?: string;
  sections: LegalSection[];
};

export type AppFeature = {
  title: string;
  description: string;
};

export type AppEntry = {
  /** URL に使われます: /apps/<slug> */
  slug: string;
  caseLabel: string;
  name: string;
  spec: string;
  tagline: RichText;
  description: string;
  image: string;
  features: AppFeature[];
  badges: { label: string; accent?: boolean }[];
  externalUrl?: string;
  /** 個別ページのみに表示する追加セクション */
  detail?: {
    overview: string;
    sections: { heading: string; body: string }[];
  };
};
