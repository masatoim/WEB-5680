import type { ReactNode } from "react";
import { useHashScroll } from "../hooks/use-hash-scroll";
import { useReveal } from "../hooks/use-reveal";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteLayout({ children }: { children: ReactNode }) {
  useReveal();
  useHashScroll();

  return (
    <div className="site">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
