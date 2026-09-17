import { getFirebaseWebConfig } from "@/lib/firebase/config";

/**
 * Client Firebase SDK initialization belongs here in a later step.
 * Keep this module free of Admin credentials.
 */
export function getFirebaseClientConfig() {
  return getFirebaseWebConfig();
}
