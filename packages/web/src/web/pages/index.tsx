import { PageMeta } from "../components/page-meta";
import { SiteLayout } from "../components/site-layout";
import { meta } from "../content/site";
import { Apps } from "../sections/apps";
import { Business } from "../sections/business";
import { Hero } from "../sections/hero";
import { Philosophy } from "../sections/philosophy";
import { Process } from "../sections/process";
import { Summon } from "../sections/summon";

function Index() {
  return (
    <SiteLayout>
      <PageMeta title={meta.title} />
      <Hero />
      <Philosophy />
      <Business />
      <Process />
      <Apps />
      <Summon />
    </SiteLayout>
  );
}

export default Index;
