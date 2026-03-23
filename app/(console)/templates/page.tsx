import { Sparkles } from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const templates = [
  { name: "Next.js Fullstack", desc: "SSR app with API routes and background worker profile", tag: "Popular" },
  { name: "Node API + Postgres", desc: "Fastify service with managed database wiring", tag: "Backend" },
  { name: "Python Worker", desc: "Queue consumer with retries and dead-letter routing", tag: "Worker" },
  { name: "Static Site CDN", desc: "Static publish with global edge caching", tag: "Static" },
];

export default function TemplatesPage() {
  return (
    <>
      <PageHeader
        title="Templates"
        subtitle="Start new services from opinionated deployment blueprints that scale."
        primaryAction="Create Template"
      />

      <section className="grid gap-3 md:grid-cols-2">
        {templates.map((template) => (
          <Card key={template.name} className="border-border/70 bg-card/90">
            <CardHeader>
              <CardTitle className="flex items-start justify-between gap-2 text-base">
                {template.name}
                <Badge variant="outline" className="rounded-full px-3">{template.tag}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{template.desc}</p>
              <div className="mt-3 flex gap-2">
                <MockActionDialog label="Use Template" entity={template.name} className="rounded-full px-4" />
                <MockActionDialog label="Inspect" entity={template.name} variant="outline" className="rounded-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="mt-4 rounded-2xl border border-dashed border-border/80 bg-muted/20 p-4 text-sm text-muted-foreground">
        <p className="flex items-center gap-2 font-medium text-foreground"><Sparkles className="h-4 w-4 text-primary" /> AI Template Assistant</p>
        <p className="mt-1">Describe your architecture and generate a first-pass deployment baseline.</p>
      </div>
    </>
  );
}
