import { createCookie } from "@remix-run/node"; // or "@remix-run/cloudflare"

export const sanityPreviewToken = createCookie("sanity-preview-token", {
  maxAge: 604_800 * 4 * 12,
  sameSite: true,
  secure: true,
});