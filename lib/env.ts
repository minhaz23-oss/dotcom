type PublicEnvName =
  | "NEXT_PUBLIC_SITE_URL"
  | "NEXT_PUBLIC_SITE_NAME"
  | "NEXT_PUBLIC_FIREBASE_API_KEY"
  | "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
  | "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
  | "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
  | "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
  | "NEXT_PUBLIC_FIREBASE_APP_ID";

type ServerEnvName =
  | "FIREBASE_ADMIN_PROJECT_ID"
  | "FIREBASE_ADMIN_CLIENT_EMAIL"
  | "FIREBASE_ADMIN_PRIVATE_KEY";

function readEnv(name: string): string | undefined {
  const value = process.env[name];

  if (value === undefined || value.trim() === "") {
    return undefined;
  }

  return value;
}

export function getPublicEnv(name: PublicEnvName): string | undefined {
  return readEnv(name);
}

export function requirePublicEnv(name: PublicEnvName): string {
  const value = getPublicEnv(name);

  if (!value) {
    throw new Error(`Missing required public environment variable: ${name}`);
  }

  return value;
}

export function getServerEnv(name: ServerEnvName): string | undefined {
  return readEnv(name);
}

export function requireServerEnv(name: ServerEnvName): string {
  const value = getServerEnv(name);

  if (!value) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }

  return value;
}
