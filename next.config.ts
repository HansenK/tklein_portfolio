import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const configWithVelite = async () => {
  const { build } = await import("velite");

  // Run velite build during Next.js build
  if (process.env.NODE_ENV === "production") {
    await build();
  } else {
    build({ watch: process.env.NODE_ENV === "development" });
  }

  return nextConfig;
};

export default configWithVelite;
