import { GitBranch, GitFork, ShieldCheck, Workflow } from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sources = [
  {
    name: "org/platform-monorepo",
    provider: "GitHub",
    branches: 42,
    status: "Connected",
  },
  {
    name: "team/billing-api",
    provider: "GitLab",
    branches: 16,
    status: "Connected",
  },
  {
    name: "infra/edge-worker",
    provider: "Gitea",
    branches: 9,
    status: "Pending Token",
  },
];

export default function SourcesPage() {
  return (
    <>
      <PageHeader
        title="Sources"
        subtitle="Connect git providers and define branch policies for automated deployments."
        primaryAction="Connect Source"
      />

      <section className="grid gap-3 md:grid-cols-3">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">Connected Sources</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">12</CardContent>
        </Card>
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">Auto Deploy Rules</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">31</CardContent>
        </Card>
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">Protected Branches</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">7</CardContent>
        </Card>
      </section>

      <section className="mt-4 space-y-2">
        {sources.map((src) => (
          <Card key={src.name} className="border-border/70 bg-card/90">
            <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
              <div>
                <p className="font-medium">{src.name}</p>
                <p className="text-xs text-muted-foreground">
                  Provider: {src.provider}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline" className="px-3">
                  <GitFork className="mr-1 h-3 w-3" /> Repo
                </Badge>
                <Badge variant="outline" className="px-3">
                  <GitBranch className="mr-1 h-3 w-3" /> {src.branches} branches
                </Badge>
                <Badge variant="outline" className="px-3">
                  <Workflow className="mr-1 h-3 w-3" /> CI sync
                </Badge>
                <Badge variant="outline" className="px-3">
                  <ShieldCheck className="mr-1 h-3 w-3" /> {src.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-4 grid gap-3 md:grid-cols-2">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Webhook Reliability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Protect source-triggered deployments with signed webhooks,
              retries, and replay support.
            </p>
            <div className="flex flex-wrap gap-2">
              <MockActionDialog
                label="Rotate Webhook Secret"
                entity="source webhook"
                variant="outline"
              />
              <MockActionDialog
                label="Replay Last Event"
                entity="source webhook"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Build Security Gates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Require image scans, signed commits, and policy checks before
              production deployment.
            </p>
            <div className="flex flex-wrap gap-2">
              <MockActionDialog
                label="Enable Signed Commits"
                entity="source policy"
                className="px-4"
              />
              <MockActionDialog
                label="Require Security Scan"
                entity="build policy"
                variant="ghost"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
