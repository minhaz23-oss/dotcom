import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex h-16 items-center justify-between text-sm text-muted">
        <p>{siteConfig.name}</p>
        <p>Web, programming, tools, and AI.</p>
      </Container>
    </footer>
  );
}
