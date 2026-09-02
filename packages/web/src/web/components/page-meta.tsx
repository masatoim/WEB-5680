import { useEffect } from "react";
import { meta } from "../content/site";

type Props = {
  title: string;
  description?: string;
};

function setMetaTag(attr: "name" | "property", key: string, value: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
}

/** ページごとの <title> と OGP を設定します */
export function PageMeta({ title, description = meta.description }: Props) {
  useEffect(() => {
    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", meta.ogImage);
  }, [title, description]);

  return null;
}
