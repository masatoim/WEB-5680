/* ==================================================================
   プライバシーポリシー
   → 条項の追加は sections 配列に 1 つオブジェクトを足すだけ
   ================================================================== */

import type { LegalPage } from "./types";

export const privacy: LegalPage = {
  eyebrow: "PRIVACY POLICY",
  title: "プライバシーポリシー",
  updatedAt: "最終更新： 2026年8月7日",
  sections: [
    {
      heading: "1. 事業者情報",
      blocks: [
        {
          kind: "table",
          rows: [
            { key: "サービス名", value: "Luna Pocket" },
            { key: "運営者", value: "Luna Pocket（代表：河手 信仁）" },
            {
              key: "所在地",
              value: "請求があった場合に遅滞なく開示します",
            },
            {
              key: "連絡先",
              value: "support@luna-pocket.jp",
            },
          ],
        },
      ],
    },
    {
      heading: "2. 取得する情報",
      blocks: [
        {
          kind: "paragraph",
          text: "当方が提供するウェブサイトおよびアプリケーション（以下「本サービス」）では、以下の情報を取得する場合があります。",
        },
        {
          kind: "list",
          items: [
            "アカウント情報：メールアドレス、表示名、プロフィール画像（Google ログイン・LINE ログイン・メールアドレス認証を利用した場合）",
            "利用情報：本サービスの操作履歴、閲覧したページ、滞在時間、エラーログ",
            "端末情報：OS の種類とバージョン、端末モデル、言語設定、画面サイズ",
            "広告識別子：広告 ID（Android 広告 ID / AAID / IDFA）",
            "お問い合わせ内容：フォームからご入力いただいた内容",
          ],
        },
        {
          kind: "paragraph",
          text: "※クレジットカード番号、銀行口座番号などの決済情報を当方が直接取得・保管することはありません。",
        },
      ],
    },
    {
      heading: "3. 利用目的",
      blocks: [
        {
          kind: "list",
          items: [
            "本サービスの提供、維持、保護および改善のため",
            "ユーザー認証およびアカウント管理のため",
            "お問い合わせへの回答のため",
            "不正利用の検知および防止のため",
            "広告の配信および効果測定のため",
            "利用状況の統計的な分析のため",
          ],
        },
      ],
    },
    {
      heading: "4. 広告について",
      blocks: [
        {
          kind: "paragraph",
          text: "本サービスでは、第三者配信の広告サービスとして Google AdMob および Google AdSense を利用する場合があります。これらは、ユーザーの興味に応じた広告を表示するために Cookie および広告 ID を使用することがあります。パーソナライズ広告は、端末の設定やブラウザ設定から無効にすることができます。",
        },
        {
          kind: "list",
          items: [
            "Google の広告におけるデータ利用について： https://policies.google.com/technologies/partner-sites",
            "広告設定： https://adssettings.google.com/",
          ],
        },
      ],
    },
    {
      heading: "5. EU・英国のユーザーの方へ",
      blocks: [
        {
          kind: "paragraph",
          text: "EU 一般データ保護規則（GDPR）および英国 GDPR の適用を受けるユーザーに対しては、広告の配信および Cookie の使用に先立ち、同意管理プラットフォーム（Google UMP SDK 等）を通じて同意を取得します。同意はいつでも本サービス内の設定から変更できます。",
        },
        {
          kind: "paragraph",
          text: "ユーザーは、自己の個人データについて、アクセス、訂正、削除、処理の制限、データポータビリティ、および処理に対する異議申立ての権利を有します。",
        },
      ],
    },
    {
      heading: "6. 第三者提供",
      blocks: [
        {
          kind: "paragraph",
          text: "当方は、以下の場合を除き、取得した個人情報を本人の同意なく第三者に提供しません。",
        },
        {
          kind: "list",
          items: [
            "法令に基づく場合",
            "人の生命、身体または財産の保護のために必要であり、本人の同意を得ることが困難な場合",
            "利用目的の達成に必要な範囲で業務を委託する場合（下記の外部サービスを含む）",
          ],
        },
      ],
    },
    {
      heading: "7. 利用している外部サービス",
      blocks: [
        {
          kind: "paragraph",
          text: "本サービスでは、以下の外部サービスを利用しています。",
        },
        {
          kind: "list",
          items: [
            "Firebase Authentication：ユーザー認証（Google LLC）",
            "Cloud Firestore：データ保管（Google LLC）",
            "Google AdMob / Google AdSense：広告配信（Google LLC）",
            "Stripe：決済処理（Stripe, Inc.）",
            "LINE ログイン：ユーザー認証（LINEヤフー株式会社）",
            "GitHub Pages / Vercel：ウェブサイトの配信",
            "Google フォーム：お問い合わせの受付（Google LLC）",
          ],
        },
        {
          kind: "paragraph",
          text: "これらのサービスの一部は日本国外のサーバーでデータを処理します。各サービスのプライバシーポリシーもあわせてご確認ください。",
        },
      ],
    },
    {
      heading: "8. お子様のプライバシー",
      blocks: [
        {
          kind: "paragraph",
          text: "本サービスは13歳未満の方を対象としていません。13歳未満の方から意図せず個人情報を取得したことが判明した場合、当方は速やかに当該情報を削除します。",
        },
      ],
    },
    {
      heading: "9. 保管期間と安全管理",
      blocks: [
        {
          kind: "paragraph",
          text: "取得した個人情報は、利用目的の達成に必要な期間に限り保管し、期間経過後は速やかに削除または匿名化します。アカウントを削除された場合、これに紐づくデータは合理的な期間内に削除されます。",
        },
        {
          kind: "paragraph",
          text: "個人情報の漏えい、滅失または毀損の防止のため、通信の暗号化（HTTPS）、アクセス権限の制限、認証情報の適切な管理などの安全管理措置を講じます。",
        },
      ],
    },
    {
      heading: "10. データの開示・削除の請求",
      blocks: [
        {
          kind: "paragraph",
          text: "ご自身の個人情報の開示、訂正、利用停止、削除をご希望の場合は、下記の窓口までご連絡ください。本人確認を行ったうえで、法令に従い合理的な期間内に対応します。",
        },
      ],
    },
    {
      heading: "11. 本ポリシーの変更",
      blocks: [
        {
          kind: "paragraph",
          text: "本ポリシーは、法令の改正やサービス内容の変更に応じて改定することがあります。重要な変更を行う場合は、本サービス上で告知します。",
        },
      ],
    },
    {
      heading: "12. お問い合わせ窓口",
      blocks: [
        {
          kind: "table",
          rows: [
            { key: "担当", value: "Luna Pocket カスタマーサポート" },
            { key: "メール", value: "support@luna-pocket.jp" },
            {
              key: "お問い合わせフォーム",
              value: "https://forms.gle/tkWkd66YSAQLbzPBA",
            },
          ],
        },
      ],
    },
  ],
};
