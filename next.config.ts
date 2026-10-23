import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Lets the dev server respond properly when opened from a phone or
   * another device on the same WiFi via this computer's LAN address,
   * instead of silently blocking hot-reload/asset requests from it. */
  allowedDevOrigins: ["192.168.1.229"],
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}
