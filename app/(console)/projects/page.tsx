import Link from "next/link";
import { ArrowUpRight, GitBranch, Layers3 } from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const apps = [
  {
    name: "storefront-web",
    stack: "Next.js 16",
    branch: "main",
    status: "Live",
    slug: "storefront-web",
  },
  {
    name: "billing-api",
    stack: "Node + Fastify",
    branch: "release",
    status: "Live",
    slug: "billing-api",
  },
  {
    name: "worker-ingestion",
    stack: "Python",
    branch: "staging",
    status: "Deploying",
    slug: "worker-ingestion",
  },
  {
    name: "docs-site",
    stack: "Astro",
    branch: "main",
    status: "Queued",
    slug: "docs-site",
  },
  {
    name: "support-backoffice",
    stack: "React",
    branch: "dev",
    status: "Paused",
    slug: "support-backoffice",
  },
  {
    name: "webhook-gateway",
    stack: "Go",
    branch: "main",
    status: "Live",
    slug: "webhook-gateway",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Applications"
        subtitle="Manage runtimes, release channels, and branch strategies from one clear view."
        primaryAction="New Application"
      />

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {apps.map((app) => (
          <Card
            key={app.name}
            className="border-border/70 bg-card/90 shadow-sm"
          >
            <CardHeader>
              <CardTitle className="flex items-start justify-between gap-2 text-base">
                {app.name}
                <Badge variant="outline" className="rounded-full px-3">
                  {app.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-muted-foreground">{app.stack}</p>
              <p className="flex items-center gap-1.5 text-muted-foreground">
                <GitBranch className="h-4 w-4" /> {app.branch}
              </p>
              <div className="flex items-center gap-2">
                <Button asChild className="rounded-full px-4">
                  <Link href={`/projects/${app.slug}`}>Open</Link>
                </Button>
                <MockActionDialog
                  label="Redeploy"
                  entity={app.name}
                  variant="outline"
                  className="rounded-full"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-4 rounded-2xl border border-dashed border-border/80 bg-muted/20 p-4">
        <h2 className="flex items-center gap-2 text-base font-semibold">
          <Layers3 className="h-4 w-4 text-primary" /> Template Recommendations
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Connect a monorepo and auto-suggest service templates with default env
          and health probes.
        </p>
        <div className="mt-2 inline-flex items-center gap-2">
          <MockActionDialog
            label="Generate Suggestions"
            entity="template engine"
            variant="ghost"
            className="px-0 text-primary hover:bg-transparent"
          />
          <ArrowUpRight className="h-4 w-4 text-primary" />
        </div>
      </section>
    </>
  );
}
