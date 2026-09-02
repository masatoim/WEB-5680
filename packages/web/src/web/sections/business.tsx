import { useState } from "react";
import { RichText } from "../components/rich-text";
import { business } from "../content/site";

export function Business() {
  const [active, setActive] = useState(0);
  const panel = business.tabs[active];

  return (
    <section className="section" id="lab">
      <div className="grid-hairline" />
      <div className="section__inner">
        <div className="eyebrow">
          <span className="eyebrow__num">{business.eyebrow.num}</span>
          <span className="eyebrow__label">{business.eyebrow.label}</span>
        </div>
        <h2 className="heading heading--xl">
          <RichText text={business.heading} />
        </h2>

        <div className="tabs" role="tablist">
          {business.tabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={`tab${index === active ? " tab--active" : ""}`}
              onClick={() => setActive(index)}
            >
              <div className="tab__label">{tab.label}</div>
              <div className="tab__title">{tab.title}</div>
            </button>
          ))}
        </div>

        <div className="panel">
          <p className="panel__lead">{panel.lead}</p>
          <p className="panel__body">{panel.body}</p>
          <div className="bullets">
            {panel.bullets.map((bullet) => (
              <div className="bullet" key={bullet}>
                ▸ {bullet}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
