import { useEffect, useState } from "react";
import { Link } from "wouter";
import { meta, nav } from "../content/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <nav className="nav">
        <div className="nav__links">
          {nav.items.map((item) => (
            <a className="nav__link" key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav__cta" href={nav.cta.href}>
            {nav.cta.label}
          </a>
        </div>
        <a className="nav__mobile" href={nav.mobileCta.href}>
          {nav.mobileCta.label}
        </a>
      </nav>
    </header>
  );
}
