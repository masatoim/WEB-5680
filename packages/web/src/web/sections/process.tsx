import { RichText } from "../components/rich-text";
import { process } from "../content/site";

export function Process() {
  return (
    <section className="section section--soft" id="process">
      <div className="grid-hairline" />
      <div className="section__inner">
        <div className="eyebrow">
          <span className="eyebrow__num">{process.eyebrow.num}</span>
          <span className="eyebrow__label">{process.eyebrow.label}</span>
        </div>
        <h2 className="heading heading--xl">
          <RichText text={process.heading} />
        </h2>
        <div className="process">
          {process.steps.map((step) => (
            <div className="step reveal" key={step.num}>
              <div className="step__num">{step.num}</div>
              <div className="step__code">{step.code}</div>
              <div className="step__title">{step.title}</div>
              <p className="step__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
