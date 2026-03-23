import {
  ArchiveRestore,
  CalendarCheck,
  DatabaseBackup,
  Download,
} from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const snapshots = [
  {
    name: "postgres-prod",
    when: "Today 02:00 UTC",
    size: "2.1 GB",
    integrity: "Verified",
  },
  {
    name: "redis-cache",
    when: "Today 01:30 UTC",
    size: "320 MB",
    integrity: "Verified",
  },
  {
    name: "mongo-preview",
    when: "Yesterday 23:10 UTC",
    size: "780 MB",
    integrity: "Warning",
  },
];

export default function BackupsPage() {
  return (
    <>
      <PageHeader
        title="Backups"
        subtitle="Automate snapshots, verify integrity, and restore fast across regions."
        primaryAction="Run Backup"
      />

      <Card className="border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle>Snapshot Catalog</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {snapshots.map((item) => (
            <div
              key={`${item.name}-${item.when}`}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/70 bg-background p-3"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.when}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline" className="px-3">
                  <DatabaseBackup className="mr-1 h-3 w-3" /> {item.size}
                </Badge>
                <Badge variant="outline" className="px-3">
                  <ArchiveRestore className="mr-1 h-3 w-3" /> Restore ready
                </Badge>
                <Badge variant="outline" className="px-3">
                  <CalendarCheck className="mr-1 h-3 w-3" /> {item.integrity}
                </Badge>
                <Badge variant="outline" className="px-3">
                  <Download className="mr-1 h-3 w-3" /> Export
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <section className="mt-4 grid gap-3 md:grid-cols-2">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">
              Disaster Recovery Drills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Run timed failover simulations and verify RTO/RPO targets for
              production databases.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              <p className="rounded-lg border border-border/70 bg-background p-2.5">
                Target RTO: 15 minutes
              </p>
              <p className="rounded-lg border border-border/70 bg-background p-2.5">
                Target RPO: 5 minutes
              </p>
              <p className="rounded-lg border border-border/70 bg-background p-2.5">
                Last drill: 11 days ago
              </p>
              <p className="rounded-lg border border-border/70 bg-background p-2.5">
                Next drill: Friday 03:00 UTC
              </p>
            </div>
            <MockActionDialog
              label="Run DR Drill"
              entity="backup failover"
              className="px-4"
            />
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">
              Retention and Replication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Apply retention windows and cross-region replication for backup
              durability.
            </p>
            <div className="flex flex-wrap gap-2">
              <MockActionDialog
                label="Set Retention Policy"
                entity="backup lifecycle"
                variant="outline"
              />
              <MockActionDialog
                label="Enable Cross-Region Copy"
                entity="backup replication"
              />
              <MockActionDialog
                label="Verify Restore Plan"
                entity="backup integrity"
                variant="ghost"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
