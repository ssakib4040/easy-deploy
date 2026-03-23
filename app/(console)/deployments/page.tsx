import Link from "next/link";
import { Clock, ExternalLink, GitCommitHorizontal, Rocket } from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const deployments = [
  {
    id: "dep_8f21",
    app: "storefront-web",
    commit: "a92f1d0",
    status: "Succeeded",
    duration: "2m 12s",
  },
  {
    id: "dep_8f22",
    app: "billing-api",
    commit: "f7d1901",
    status: "Succeeded",
    duration: "1m 43s",
  },
  {
    id: "dep_8f23",
    app: "worker-ingestion",
    commit: "42cc891",
    status: "Running",
    duration: "0m 48s",
  },
  {
    id: "dep_8f24",
    app: "docs-site",
    commit: "af17d21",
    status: "Queued",
    duration: "-",
  },
  {
    id: "dep_8f25",
    app: "webhook-gateway",
    commit: "ff9a2ad",
    status: "Failed",
    duration: "0m 38s",
  },
];

export default function DeploymentsPage() {
  return (
    <>
      <PageHeader
        title="Deployments"
        subtitle="Track every rollout, build artifact, and rollback-ready release with one timeline."
        primaryAction="Run Deployment"
      />
      <Card className="border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle>Recent Runs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {deployments.map((deployment) => (
            <div
              key={deployment.id}
              className="rounded-xl border border-border/70 bg-background p-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-medium">{deployment.app}</p>
                  <p className="text-xs text-muted-foreground">
                    {deployment.id}
                  </p>
                </div>
                <Badge variant="outline" className="px-3">
                  {deployment.status}
                </Badge>
              </div>
              <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <p className="flex items-center gap-1">
                  <GitCommitHorizontal className="h-3.5 w-3.5" />{" "}
                  {deployment.commit}
                </p>
                <p className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {deployment.duration}
                </p>
                <p className="flex items-center gap-1">
                  <Rocket className="h-3.5 w-3.5" /> Auto strategy
                </p>
                <Link
                  href="/logs"
                  className="flex items-center gap-1 hover:text-foreground"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Open logs
                </Link>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="mt-4 border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle className="text-base">Release Controls</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <MockActionDialog label="Rollback Latest Release" entity="deployment timeline" variant="outline" />
          <MockActionDialog label="Start Blue-Green Deploy" entity="deployment strategy" />
          <MockActionDialog label="Set Canary Steps" entity="deployment strategy" variant="ghost" />
          <MockActionDialog label="Enable Auto Abort" entity="deployment safety guard" variant="outline" />
        </CardContent>
      </Card>
    </>
  );
}
