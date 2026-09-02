import { RichText } from "../components/rich-text";
import { summon } from "../content/site";

export function Summon() {
  return (
    <section className="section section--soft" id="summon">
      <div className="grid-hairline" />
      <div className="section__blob section__blob--top" />
      <div className="section__inner">
        <div className="eyebrow">
          <span className="eyebrow__num">{summon.eyebrow.num}</span>
          <span className="eyebrow__label">{summon.eyebrow.label}</span>
        </div>
        <h2 className="heading heading--xl">
          <RichText text={summon.heading} />
        </h2>
        <p className="section__lead">{summon.lead}</p>

        {summon.pillars.map((pillar) => (
          <div className="pillar" key={pillar.label}>
            <div className="pillar__head">
              <div className="pillar__label">{pillar.label}</div>
              <div className="pillar__rule" />
              <div className="pillar__title">{pillar.title}</div>
            </div>
            <p className="pillar__desc">{pillar.desc}</p>
            <div className="cards">
              {pillar.cards.map((card) => (
                <div className="card reveal" key={card.title}>
                  <div className="card__label">{card.label}</div>
                  <div className="card__title">{card.title}</div>
                  <p className="card__desc">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="cta-row">
              <a
                className={`btn btn--wide btn--${pillar.cta.variant}`}
                href={pillar.cta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pillar.cta.label}
                <span className="btn__arrow">→</span>
              </a>
              <p className="cta-row__url">{pillar.cta.href}</p>
            </div>
          </div>
        ))}

        <p className="note">{summon.note}</p>
      </div>
    </section>
  );
}
