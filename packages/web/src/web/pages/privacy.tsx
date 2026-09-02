import { LegalDocument } from "../components/legal-document";
import { PageMeta } from "../components/page-meta";
import { SiteLayout } from "../components/site-layout";
import { privacy } from "../content/privacy";
import { meta } from "../content/site";

function Privacy() {
  return (
    <SiteLayout>
      <PageMeta
        title={`${privacy.title} — ${meta.siteName}`}
        description="Luna Pocket のプライバシーポリシー。取得する情報、利用目的、第三者提供、外部サービスの利用について記載しています。"
      />
      <LegalDocument page={privacy} />
    </SiteLayout>
  );
}

export default Privacy;
