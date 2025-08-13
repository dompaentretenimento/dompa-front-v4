import type { NextConfig } from "next";

import fs from "fs";
import path from "path";

const env = process.env.NEXT_PUBLIC_ENV;
const isDevelopment = env === "development";

// Set correct robots.txt before build
const robotsSource = path.join(
  process.cwd(),
  "public",
  isDevelopment ? "robots.development.txt" : "robots.prod.txt"
);
const robotsDest = path.join(process.cwd(), "public", "robots.txt");

if (fs.existsSync(robotsSource)) {
  fs.copyFileSync(robotsSource, robotsDest);
  console.log(
    `✅ robots.txt set for ${
      isDevelopment ? "DEVELOPMENT (blocked)" : "PRODUCTION (open)"
    }`
  );
}

const nextConfig: NextConfig = {
  // experimental: {
  //   viewTransition: true,
  // },
};

export default nextConfig;
