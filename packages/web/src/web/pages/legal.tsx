import { LegalDocument } from "../components/legal-document";
import { PageMeta } from "../components/page-meta";
import { SiteLayout } from "../components/site-layout";
import { legal } from "../content/legal";
import { meta } from "../content/site";

function Legal() {
  return (
    <SiteLayout>
      <PageMeta
        title={`${legal.title} — ${meta.siteName}`}
        description="Luna Pocket の事業者情報および特定商取引法に基づく表記。"
      />
      <LegalDocument page={legal} />
    </SiteLayout>
  );
}

export default Legal;
