import { Link } from "wouter";
import { footer } from "../content/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="grid-hairline grid-hairline--faint" />
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <div className="footer__label">CONTACT</div>
            <div className="contact">
              {footer.contact.map((row) => (
                <div className="contact__row" key={row.key}>
                  <span className="contact__key">{row.key}</span>
                  <span className="contact__value">
                    {"href" in row && row.href ? (
                      <a href={row.href}>{row.value}</a>
                    ) : (
                      row.value
                    )}
                  </span>
                </div>
              ))}
            </div>
            {footer.contactCta ? (
              <a
                className="btn btn--solid footer__cta"
                href={footer.contactCta.href}
                target="_blank"
                rel="noreferrer"
              >
                {footer.contactCta.label}
                <span className="btn__arrow">→</span>
              </a>
            ) : null}
          </div>
          <div aria-hidden="true" />
          <div>
            <div className="footer__label footer__label--dim">MANIFESTO</div>
            <p className="manifesto">
              {footer.manifesto.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{footer.copyright}</span>
          <span className="footer__legal">
            {footer.legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
