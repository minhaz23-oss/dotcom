import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-sans text-lg font-semibold tracking-tight">
          dot<span className="text-accent">.</span>com
        </Link>
        <p className="text-sm text-muted">Technology publication</p>
      </Container>
    </header>
  );
}
