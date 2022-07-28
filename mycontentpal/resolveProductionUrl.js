// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const SANITY_PREVIEW_SECRET = "JZSLlav7SIse2qG";

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://mcp-rust.vercel.app/`;
const localUrl = `http://localhost:3000/post`;

export default function resolveProductionUrl(doc) {
  switch (doc._type) {
    case "post":
      return `http://mcp-rust.vercel.app/api/preview?secret=${SANITY_PREVIEW_SECRET}&slug=post/${doc.slug.current}`;
  }
  switch (doc._type) {
    case "policy":
      return `http://mcp-rust.vercel.app/api/preview?secret=${SANITY_PREVIEW_SECRET}&slug=policy/${doc.slug.current}`;
  }
}

// `/post/${doc?.slug?.current}`;
// const baseUrl = remoteUrl;
// // window.location.hostname === "localhost" ? localUrl : remoteUrl;

// const previewUrl = new URL(baseUrl);

// previewUrl.pathname = `/api/preview`;
// previewUrl.searchParams.append(`secret`, SANITY_PREVIEW_SECRET);
// previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

// return previewUrl.toString();
