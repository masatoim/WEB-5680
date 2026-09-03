import { Hono } from "hono";

export const robotsRouter = new Hono();

/**
 * Generates and serves robots.txt
 * Directs search engines to the sitemap and disallows admin paths
 */
robotsRouter.get("/robots.txt", (c) => {
  const baseUrl = process.env.BASE_URL || "https://luna-pocket.jp";

  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Disallow private/admin areas (if any)
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml
`;

  c.header("Content-Type", "text/plain");
  c.header("Cache-Control", "public, max-age=604800");
  return c.text(robotsTxt);
});
