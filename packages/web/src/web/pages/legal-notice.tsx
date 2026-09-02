import { LegalDocument } from "../components/legal-document";
import { PageMeta } from "../components/page-meta";
import { SiteLayout } from "../components/site-layout";
import { legalNotice } from "../content/legal-notice";
import { meta } from "../content/site";

function LegalNoticePage() {
  return (
    <SiteLayout>
      <PageMeta
        title={`${legalNotice.title} — ${meta.siteName}`}
        description="Luna Pocket の特定商取引法に基づく表記。販売事業者情報、商品代金、返品・交換について記載しています。"
      />
      <LegalDocument page={legalNotice} />
    </SiteLayout>
  );
}

export default LegalNoticePage;
