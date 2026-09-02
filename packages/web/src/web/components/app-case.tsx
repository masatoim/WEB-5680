import { Link } from "wouter";
import type { AppEntry } from "../content/types";
import { RichText } from "./rich-text";

/** トップページの「開発アプリ紹介」に並ぶ 1 件分のブロック */
export function AppCase({ app }: { app: AppEntry }) {
  return (
    <article className="case reveal">
      <div className="case__media">
        <img className="case__img" alt={app.name} src={app.image} />
        <div className="case__veil" />
        <div className="case__meta">
          <div className="case__label">{app.caseLabel}</div>
          <div className="case__name">{app.name}</div>
          <div className="case__spec">{app.spec}</div>
        </div>
      </div>
      <div className="case__body">
        <h3 className="case__title">
          <RichText text={app.tagline} />
        </h3>
        <p className="case__desc">{app.description}</p>
        <div className="features">
          {app.features.map((feature) => (
            <div className="feature" key={feature.title}>
              <div className="feature__title">▸ {feature.title}</div>
              <p className="feature__desc">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="case__foot">
          <Link className="btn btn--solid" href={`/apps/${app.slug}`}>
            詳しく見る →
          </Link>
          {app.externalUrl ? (
            <a
              className="btn btn--outline"
              href={app.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              公式サイト →
            </a>
          ) : null}
          <div className="badges">
            {app.badges.map((badge) => (
              <span
                className={`badge${badge.accent ? " badge--accent" : ""}`}
                key={badge.label}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
