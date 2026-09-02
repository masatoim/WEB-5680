import { useEffect } from "react";

/** `.reveal` を付けた要素をスクロールに合わせてフェードインさせます */
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal:not(.reveal--in)",
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  });
}
