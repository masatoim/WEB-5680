import { Link } from "wouter";
import type { LegalPage } from "../content/types";
import { RichText } from "./rich-text";

function isUrl(value: string) {
  return value.startsWith("http") || value.startsWith("/");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function Value({ value }: { value: string }) {
  if (isEmail(value)) return <a href={`mailto:${value}`}>{value}</a>;
  if (isUrl(value)) {
    if (value.startsWith("/")) return <Link href={value}>{value}</Link>;
    return (
      <a href={value} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
    );
  }
  return <RichText text={value} />;
}

export function LegalDocument({ page }: { page: LegalPage }) {
  return (
    <section className="legal">
      <div className="legal__inner">
        <div className="legal__eyebrow">{page.eyebrow}</div>
        <h1 className="legal__title">{page.title}</h1>
        <p className="legal__meta">{page.updatedAt}</p>

        {page.intro ? <p className="legal__p legal__intro">{page.intro}</p> : null}

        {page.sections.map((section) => (
          <div className="legal__section" key={section.heading ?? section.blocks.length}>
            {section.heading ? (
              <h2 className="legal__heading">{section.heading}</h2>
            ) : null}
            {section.blocks.map((block, blockIndex) => {
              if (block.kind === "paragraph") {
                return (
                  <p className="legal__p" key={blockIndex}>
                    <RichText text={block.text} />
                  </p>
                );
              }
              if (block.kind === "list") {
                return (
                  <ul className="legal__list" key={blockIndex}>
                    {block.items.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <div className="legal__table" key={blockIndex}>
                  {block.rows.map((row) => (
                    <div className="legal__row" key={row.key}>
                      <div className="legal__key">{row.key}</div>
                      <div className="legal__value">
                        <Value value={row.value} />
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}

        <Link className="legal__back" href="/">
          ← トップへ戻る
        </Link>
      </div>
    </section>
  );
}
