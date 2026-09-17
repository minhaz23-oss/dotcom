import "server-only";

import { getServerEnv } from "@/lib/env";

/**
 * Firebase Admin SDK initialization belongs here in a later step.
 * Importing this file from a Client Component will fail the build.
 */
export function isFirebaseAdminConfigured(): boolean {
  return Boolean(
    getServerEnv("FIREBASE_ADMIN_PROJECT_ID") &&
      getServerEnv("FIREBASE_ADMIN_CLIENT_EMAIL") &&
      getServerEnv("FIREBASE_ADMIN_PRIVATE_KEY"),
  );
}
