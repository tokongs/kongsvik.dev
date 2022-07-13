export const loader = () => {
    const robotText = `
    User-agent: *
    Allow: /

    Sitemap: https://kongsvik.dev/sitemap.xml
    `
    return new Response(robotText,{
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      }
    });
};
