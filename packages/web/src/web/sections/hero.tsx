import { useEffect, useRef, useState } from "react";
import { RichText } from "../components/rich-text";
import { hero } from "../content/site";

export function Hero() {
  const pocketRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const node = pocketRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
      setTilt({ x: -dy * 8, y: dx * 8 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="grid-hairline grid-hairline--strong" />
      <div className="hero__fade" />
      <div className="hero__glow hero__glow--a" style={{ left: "37%" }} />
      <div className="hero__glow hero__glow--b" style={{ right: "8%" }} />
      <div className="hero__inner">
        <div>
          <h1 className="hero__title">
            {hero.titleLines.map((line, index) => (
              <span key={line}>
                <RichText text={line} />
                {index < hero.titleLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <div className="hero__copy">
            <p className="hero__lead">{hero.lead}</p>
            <p className="hero__sub">{hero.sub}</p>
          </div>
          <div className="hero__actions">
            <a className="btn btn--solid" href={hero.cta.href}>
              {hero.cta.label}
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div
            className="pocket"
            ref={pocketRef}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <div className="pocket__halo" />
            <div className="pocket__frame">
              <div className="pocket__veil" />
            </div>
            <div className="pocket__orbit">
              <div className="pocket__dot" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll" />
    </section>
  );
}
