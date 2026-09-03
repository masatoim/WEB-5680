import { Hono } from "hono";
import { apps } from "../../web/content/apps";

export const sitemapRouter = new Hono();

/**
 * Generates and serves sitemap.xml
 * Includes static pages and dynamically generated app detail pages
 */
sitemapRouter.get("/sitemap.xml", (c) => {
  const baseUrl = process.env.BASE_URL || "https://luna-pocket.jp";

  // Static pages
  const staticPages = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/privacy", priority: "0.7", changefreq: "monthly" },
    { path: "/legal", priority: "0.7", changefreq: "monthly" },
    { path: "/legal-notice", priority: "0.7", changefreq: "monthly" },
  ];

  // Dynamic app detail pages
  const appPages = apps.map((app) => ({
    path: `/apps/${app.slug}`,
    priority: "0.8",
    changefreq: "monthly" as const,
  }));

  const allPages = [...staticPages, ...appPages];
  const lastmod = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  c.header("Content-Type", "application/xml");
  c.header("Cache-Control", "public, max-age=86400");
  return c.text(sitemap);
});
