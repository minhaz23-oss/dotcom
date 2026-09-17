import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <Container className="py-24">
      <p className="text-sm font-medium tracking-wide text-accent uppercase">
        Foundation
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance">
        {siteConfig.name} is a technology publication for developers.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
        Web development, programming, developer tools, AI, and curated
        resources. This is the project foundation — routes and content come
        next.
      </p>
    </Container>
  );
}
