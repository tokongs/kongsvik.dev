import { GetPosts } from "app/models/post.server";

export const loader = async () => {
  const baseUrl = "https://kongsvik.dev"
  const posts = await GetPosts()
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
  </url>
  ${posts.reduce((prev, post) => prev + `
  <url>
    <loc>${baseUrl}/blog/${post.slug.current}</loc>
    <lastmod>${post._updatedAt}</lastmod>
  </url>
  `, "")}
</urlset>
`
  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "text/xml",
    }
  });
};
