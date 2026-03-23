import { Eye, GitPullRequest, Hourglass, Rocket } from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const previews = [
  { pr: "#482", app: "storefront-web", url: "pr-482.storefront.easydeploy.dev", state: "Ready" },
  { pr: "#137", app: "billing-api", url: "pr-137.billing.easydeploy.dev", state: "Building" },
  { pr: "#98", app: "docs-site", url: "pr-98.docs.easydeploy.dev", state: "Expired" },
];

export default function PreviewEnvironmentsPage() {
  return (
    <>
      <PageHeader
        title="Preview Environments"
        subtitle="Spin up branch-isolated environments automatically for reviews and QA."
        primaryAction="Create Preview"
      />

      <Card className="border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle>Active Preview Runs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {previews.map((preview) => (
            <div key={preview.pr} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/70 bg-background p-3">
              <div>
                <p className="font-medium">{preview.app}</p>
                <p className="text-xs text-muted-foreground">{preview.url}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline" className="rounded-full px-3"><GitPullRequest className="mr-1 h-3 w-3" /> {preview.pr}</Badge>
                <Badge variant="outline" className="rounded-full px-3"><Eye className="mr-1 h-3 w-3" /> Review URL</Badge>
                <Badge variant="outline" className="rounded-full px-3">
                  {preview.state === "Building" ? <Hourglass className="mr-1 h-3 w-3" /> : <Rocket className="mr-1 h-3 w-3" />} {preview.state}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
