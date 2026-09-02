import { Link, useRoute } from "wouter";
import { PageMeta } from "../components/page-meta";
import { RichText } from "../components/rich-text";
import { SiteLayout } from "../components/site-layout";
import { findApp } from "../content/apps";
import { meta } from "../content/site";

function NotFound() {
  return (
    <section className="legal">
      <div className="legal__inner">
        <div className="legal__eyebrow">404</div>
        <h1 className="legal__title">アプリが見つかりません</h1>
        <p className="legal__p">
          お探しのページは移動または削除された可能性があります。
        </p>
        <Link className="legal__back" href="/#apps">
          ← 開発アプリ一覧へ戻る
        </Link>
      </div>
    </section>
  );
}

function AppDetail() {
  const [, params] = useRoute("/apps/:slug");
  const app = params?.slug ? findApp(params.slug) : undefined;

  if (!app) {
    return (
      <SiteLayout>
        <PageMeta title={`ページが見つかりません — ${meta.siteName}`} />
        <NotFound />
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageMeta
        title={`${app.name} — ${meta.siteName}`}
        description={app.description}
      />

      <section className="app-hero">
        <div className="grid-hairline grid-hairline--strong" />
        <div className="section__blob section__blob--top" />
        <div className="section__inner app-hero__inner">
          <div className="legal__eyebrow">{app.caseLabel}</div>
          <h1 className="app-hero__title">{app.name}</h1>
          <p className="app-hero__tagline">
            <RichText text={app.tagline} />
          </p>
          <p className="app-hero__spec">{app.spec}</p>
          <div className="badges app-hero__badges">
            {app.badges.map((badge) => (
              <span
                className={`badge${badge.accent ? " badge--accent" : ""}`}
                key={badge.label}
              >
                {badge.label}
              </span>
            ))}
          </div>
          {app.externalUrl ? (
            <div className="hero__actions">
              <a
                className="btn btn--solid"
                href={app.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                アプリを見る →
              </a>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="grid-hairline" />
        <div className="section__inner section__inner--wide">
          <div className="app-detail">
            <div className="app-detail__media">
              <img className="app-detail__img" alt={app.name} src={app.image} />
            </div>
            <div className="app-detail__body">
              <p className="case__desc app-detail__lead">
                {app.detail?.overview ?? app.description}
              </p>
              {app.detail?.sections.map((section) => (
                <div className="app-detail__section" key={section.heading}>
                  <h2 className="app-detail__heading">{section.heading}</h2>
                  <p className="app-detail__text">{section.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="app-detail__features">
            <h2 className="heading">主な機能</h2>
            <div className="features">
              {app.features.map((feature) => (
                <div className="feature" key={feature.title}>
                  <div className="feature__title">▸ {feature.title}</div>
                  <p className="feature__desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Link className="legal__back" href="/#apps">
            ← 開発アプリ一覧へ戻る
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

export default AppDetail;
