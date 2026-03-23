import { Box, Bug, ShieldCheck, Trash } from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const repositories = [
  { name: "storefront-web", tags: 42, vuln: "2 medium", lastPush: "11m ago" },
  { name: "billing-api", tags: 29, vuln: "0 critical", lastPush: "37m ago" },
  { name: "worker-ingestion", tags: 18, vuln: "1 high", lastPush: "2h ago" },
];

export default function RegistryPage() {
  return (
    <>
      <PageHeader
        title="Container Registry"
        subtitle="Manage private images, vulnerability scans, and retention policies for VPS deployments."
        primaryAction="Connect Registry"
      />

      <Card className="border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle>Image Repositories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {repositories.map((repo) => (
            <div key={repo.name} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/70 bg-background p-3 text-sm">
              <div>
                <p className="font-medium">{repo.name}</p>
                <p className="text-xs text-muted-foreground">Last push: {repo.lastPush}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline" className="px-3"><Box className="mr-1 h-3 w-3" /> {repo.tags} tags</Badge>
                <Badge variant="outline" className="px-3"><Bug className="mr-1 h-3 w-3" /> {repo.vuln}</Badge>
                <Badge variant="outline" className="px-3"><ShieldCheck className="mr-1 h-3 w-3" /> Signed images</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <MockActionDialog label="Scan Now" entity={repo.name} variant="outline" />
                <MockActionDialog label="Pin Digest" entity={repo.name} variant="ghost" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <section className="mt-4 grid gap-3 md:grid-cols-2">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Retention & Cleanup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Automatically remove stale image tags while preserving release candidates and rollback snapshots.</p>
            <MockActionDialog label="Set Retention Rules" entity="registry retention" className="px-4" />
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base"><Trash className="mr-1 inline h-4 w-4" /> Garbage Collection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Reclaim storage from unreferenced layers and orphan tags to keep VPS disks healthy.</p>
            <MockActionDialog label="Run GC" entity="registry garbage collector" variant="outline" className="px-4" />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
