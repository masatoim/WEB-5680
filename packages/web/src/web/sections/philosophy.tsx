import { RichText } from "../components/rich-text";
import { philosophy } from "../content/site";

export function Philosophy() {
  return (
    <section className="section" id="philosophy">
      <div className="grid-hairline" />
      <div className="section__inner">
        <div className="eyebrow">
          <span className="eyebrow__num">{philosophy.eyebrow.num}</span>
          <span className="eyebrow__label">{philosophy.eyebrow.label}</span>
        </div>

        <div className="philosophy__cols">
          {philosophy.origins.map((origin) => (
            <div className="reveal" key={origin.body}>
              <h2 className="origin__title">
                <RichText text={origin.title} />
              </h2>
              <p className="origin__body">{origin.body}</p>
            </div>
          ))}
        </div>

        <div className="philosophy__quote reveal">
          <p>
            <RichText text={philosophy.quote} />
          </p>
        </div>

        <div className="stats reveal">
          {philosophy.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
