/* ==================================================================
   トップページ・共通パーツの文言
   → 文章を変えたいときは基本的にこのファイルだけを編集してください
   ================================================================== */

export const meta = {
  siteName: "Luna Pocket",
  title: "Luna Pocket — 妄想を、現実にハックする。",
  description:
    "Luna Pocket — アイデアをアプリとして世に出すスタジオと、街のお店のデジタル化を支えるローカルDX。あなたの「あったらいいな」を、ポケットの中に。",
  ogImage: "/og-image.png",
  logo: "/images/logo-light.png",
};

/** 外部フォーム・リンク。URL が変わったらここだけ差し替えれば全ページ反映されます */
export const links = {
  appIdeaForm: "https://forms.gle/EPvQhWa1grKgXtYz6",
  localDxForm: "https://forms.gle/tkWkd66YSAQLbzPBA",
};

export const nav = {
  items: [
    { label: "ホーム", href: "/#philosophy" },
    { label: "事業", href: "/#lab" },
    { label: "プロセス", href: "/#process" },
    { label: "開発アプリ", href: "/#apps" },
    { label: "召喚", href: "/#summon" },
  ],
  cta: { label: "妄想を投げる →", href: "/#summon" },
  mobileCta: { label: "召喚", href: "/#summon" },
};

export const hero = {
  titleLines: ["あ、{{accent:ったら}}いいな", "を、{{accent:形}}に。"],
  lead: "「あったらいいな」を、ポケットの中に。",
  sub: "アイデアをアプリとして世に出すスタジオと、街のお店のデジタル化を支えるローカルDX——二つの事業で、あなたの「こんな感じ」を現実にする。",
  cta: { label: "妄想を形にする", href: "/#summon" },
};

export const philosophy = {
  eyebrow: { num: "01", label: "— 名の起源" },
  origins: [
    {
      title: "{{dim:Luna}}—猫のように自由で、\n気ままな探求心。",
      body: "夜空を徘徊する猫のように、固定観念に縛られない好奇心。それがLunaの源流です。",
    },
    {
      title: "{{accent:Pocket}}—どんな夢も形にして\n取り出す、未知のポケット。",
      body: "四次元ポケットのように、想像の彼方にあるものを現実に引き出す器。それがPocketの約束です。",
    },
  ],
  quote:
    "誰かが「実現できるわけがない」と笑う妄想に対し、\n私たちはアプリ開発とローカルDX——{{accent:二つの事業}}で、\n四次元ポケットから道具を取り出すように{{mauve:課題を実現}}する。",
  stats: [
    { value: "99.9%", label: "不可能を現実に変換する確率" },
    { value: "2", label: "事業—STUDIO / LOCAL" },
    { value: "0→1", label: "妄想から形への錬成" },
    { value: "100", label: "ポケットは常に開いている" },
  ],
};

export const business = {
  eyebrow: { num: "02", label: "— 二つの事業" },
  heading: "ポケットから取り出すのは、\n{{accent:アプリ}}と、{{mauve:街のDX}}。",
  tabs: [
    {
      label: "APP STUDIO",
      title: "アイデアを、アプリに",
      lead: "あなたの「あったらいいな」を、ポケットの中に。",
      body: "一般ユーザーや依頼者から「こんなアプリが欲しい」というアイデアを公募・受領。開発費は請求せず、Luna Pocketが開発・ストア公開を実施します。著作権および収益権はLuna Pocketに帰属し、発案者にはアプリ内スペシャルサンクス掲載・ベータテスト参加権・有料機能の無期限無料開放などの非金銭的インセンティブを提供します。",
      bullets: [
        "アイデア公募・受領",
        "開発費ゼロで開発",
        "ストア公開・運営",
        "発案者へのインセンティブ",
      ],
    },
    {
      label: "LOCAL DX",
      title: "街のお店を、デジタルに",
      lead: "街のお店のITサポーター。難しいことは、まるごと任せてください。",
      body: "ネットショップの開設からキャッシュレス決済の導入、Googleマップ・SNSでの集客支援まで。「詳しい人が身近にいない」を埋める、地域密着のデジタル支援を行います。初回のご相談は無料。まずは今困っていることをそのままお聞かせください。",
      bullets: [
        "EC・ネットショップ開設",
        "キャッシュレス決済導入",
        "Web・マップ集客支援",
        "デジタルよろず相談",
      ],
    },
  ],
};

export const process = {
  eyebrow: { num: "03", label: "— 錬成プロセス" },
  heading: "妄想から、{{accent:現実}}までの\n四つの工程。",
  steps: [
    {
      num: "01",
      code: "ABSTRACT DELUSION",
      title: "妄想の召喚",
      desc: "「実現できるわけがない」と笑われるアイデアを、そのまま持ち込む。枠も、ここでは無効。",
    },
    {
      num: "02",
      code: "DOMAIN DECONSTRUCTION",
      title: "領域の解体",
      desc: "アプリ開発スタジオとローカルDX——二つの事業のどちらで、どの層をハックすべきかを特定する。",
    },
    {
      num: "03",
      code: "POCKET PROTOTYPING",
      title: "ポケットの展開",
      desc: "四次元ポケットから道具を取り出すように、プロトタイプを同時並行で錬成する。",
    },
    {
      num: "04",
      code: "MARKET-READY REALITY",
      title: "現実への錬成",
      desc: "ぼやけた妄想は、鮮明で触れられる現実へ。動くもの、使えるものとして世に取り出す。",
    },
  ],
};

export const appsSection = {
  eyebrow: { num: "05", label: "— 開発アプリ紹介" },
  heading: "ポケットから、\n{{accent:現実}}を取り出した。",
};

export const summon = {
  eyebrow: { num: "04", label: "— 召喚" },
  heading:
    "あなたの{{mauve:「こんな感じ」}}を、\nそのまま{{accent:お任せ}}ください。",
  lead: "アイデアをアプリにしたい方にも、街のお店をデジタルにしたい方にも。ざっくりしたイメージだけで結構です。相談内容をもとに、こちらで作成から公開まで一式管理します。",
  note: "※ お問い合わせフォームは外部サービス（Google Forms）を利用しています",
  pillars: [
    {
      label: "PILLAR 01 — APP STUDIO",
      title: "アプリ開発スタジオ",
      desc: "あなたの「あったらいいな」を、ポケットの中に。開発費ゼロで、Luna Pocketが開発からストア公開までを実施します。※ 開発には審査があります。詳しくはご相談ください。",
      cards: [
        {
          label: "IDEA",
          title: "アイデアを形に",
          desc: "「こんなアプリがあったらいいな」を、企画から公開まで一式お任せください。",
        },
        {
          label: "ZERO COST",
          title: "開発費ゼロ",
          desc: "開発費は請求しません。合意の上でLuna Pocketが開発・ストア公開を実施します。",
        },
        {
          label: "REWARD",
          title: "発案者メリット",
          desc: "アプリ内スペシャルサンクス掲載・ベータテスト参加権・有料機能の無期限無料開放。",
        },
        {
          label: "ANYTHING",
          title: "その他もろもろ",
          desc: "個人の方の「やってみたい」も歓迎。ざっくりしたイメージだけで結構です。",
        },
      ],
      cta: {
        label: "アイデアを投げる",
        href: links.appIdeaForm,
        variant: "solid" as const,
      },
    },
    {
      label: "PILLAR 02 — LOCAL DX",
      title: "ローカルDXサポート",
      desc: "街のお店のITサポーター。EC開設・決済導入・集客支援まで、相談に乗ります。",
      cards: [
        {
          label: "EC SETUP",
          title: "EC・ネットショップ開設",
          desc: "BASE、STORES、メルカリShops等の導入・初期設定・商品登録代行。",
        },
        {
          label: "PAYMENT",
          title: "キャッシュレス決済導入",
          desc: "Airペイ、Square等の導入申請代行・初期設定・操作レクチャー。※他社決済サービスを利用します。",
        },
        {
          label: "MEO / WEB",
          title: "Web・マップ集客支援",
          desc: "Googleビジネスプロフィール登録、Instagram初期設定、QRコードメニュー・チラシのデジタル化。",
        },
        {
          label: "ANYTHING",
          title: "デジタルよろず相談",
          desc: "Wi-Fi設置、レジ周り設定、スマホ・PCのトラブル対応。何でもご相談ください。",
        },
      ],
      cta: {
        label: "お問い合わせフォームへ",
        href: links.localDxForm,
        variant: "outline" as const,
      },
    },
  ],
};

export const footer = {
  contact: [
    { key: "代表", value: "河手 信仁 / Masato Kawate" },
    { key: "TEL", value: "080-6347-6486 / 0242-85-6933" },
    { key: "MAIL", value: "support@luna-pocket.jp", href: "mailto:support@luna-pocket.jp" },
  ],
  manifesto: [
    "// 猫のような好奇心で",
    "// ポケットから道具を取り出す",
    "// 不可能を、現実に。",
  ],
  /** フッターの問い合わせボタン。不要なら null にすれば非表示になります */
  contactCta: {
    label: "お問い合わせ",
    href: links.appIdeaForm,
  },
  copyright: "© 2026 Luna Pocket",
  legalLinks: [
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "事業者情報", href: "/legal" },
  ],
};
