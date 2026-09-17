import { getPublicEnv } from "@/lib/env";

export type FirebaseWebConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

export function getFirebaseWebConfig(): FirebaseWebConfig | null {
  const apiKey = getPublicEnv("NEXT_PUBLIC_FIREBASE_API_KEY");
  const authDomain = getPublicEnv("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN");
  const projectId = getPublicEnv("NEXT_PUBLIC_FIREBASE_PROJECT_ID");
  const storageBucket = getPublicEnv("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET");
  const messagingSenderId = getPublicEnv(
    "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  );
  const appId = getPublicEnv("NEXT_PUBLIC_FIREBASE_APP_ID");

  if (
    !apiKey ||
    !authDomain ||
    !projectId ||
    !storageBucket ||
    !messagingSenderId ||
    !appId
  ) {
    return null;
  }

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  };
}
