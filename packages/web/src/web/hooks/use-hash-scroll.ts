import { useEffect } from "react";
import { useLocation } from "wouter";

/** ページ遷移時に先頭へ、`#id` 付きのURLならその位置へスクロールします */
export function useHashScroll() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const target = document.getElementById(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);
}
