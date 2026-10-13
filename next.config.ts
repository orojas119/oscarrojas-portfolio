import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Partner demo pages are plain HTML in public/demos/<partner>/ (their own branding, none of this
  // site's layout). Serve them at a clean address and keep them out of search engines: partners
  // share the link with prospects directly.
  async rewrites() {
    return [{ source: "/demos/cybersphere", destination: "/demos/cybersphere/index.html" }];
  },
  async headers() {
    return [{ source: "/demos/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;
