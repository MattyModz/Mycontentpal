// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const SANITY_PREVIEW_SECRET = "JZSLlav7SIse2qG";

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://mcp-rust.vercel.app/`;
const localUrl = `http://localhost:3000/post`;

export default function resolveProductionUrl(doc) {
  const baseUrl = remoteUrl;
  // window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, SANITY_PREVIEW_SECRET);
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

  return previewUrl.toString();
}

// `/post/${doc?.slug?.current}`;
