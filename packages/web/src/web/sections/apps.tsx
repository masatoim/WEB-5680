import { AppCase } from "../components/app-case";
import { RichText } from "../components/rich-text";
import { apps } from "../content/apps";
import { appsSection } from "../content/site";

export function Apps() {
  return (
    <section className="section" id="apps">
      <div className="grid-hairline" />
      <div className="section__blob section__blob--right" />
      <div className="section__inner section__inner--wide">
        <div className="eyebrow">
          <span className="eyebrow__num">{appsSection.eyebrow.num}</span>
          <span className="eyebrow__label">{appsSection.eyebrow.label}</span>
        </div>
        <h2 className="heading heading--xl">
          <RichText text={appsSection.heading} />
        </h2>
        {apps.map((app) => (
          <AppCase app={app} key={app.slug} />
        ))}
      </div>
    </section>
  );
}
