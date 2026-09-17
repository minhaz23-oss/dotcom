import { getPublicEnv } from "@/lib/env";

export const siteConfig = {
  name: getPublicEnv("NEXT_PUBLIC_SITE_NAME") ?? "dot.com",
  description:
    "A technology publication for web development, programming, developer tools, and AI.",
  url: getPublicEnv("NEXT_PUBLIC_SITE_URL") ?? "http://localhost:3000",
} as const;
