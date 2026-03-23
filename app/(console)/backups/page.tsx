import {
  ArchiveRestore,
  CalendarCheck,
  DatabaseBackup,
  Download,
} from "lucide-react";

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
                <Badge variant="outline" className="rounded-full px-3">
                  <DatabaseBackup className="mr-1 h-3 w-3" /> {item.size}
                </Badge>
                <Badge variant="outline" className="rounded-full px-3">
                  <ArchiveRestore className="mr-1 h-3 w-3" /> Restore ready
                </Badge>
                <Badge variant="outline" className="rounded-full px-3">
                  <CalendarCheck className="mr-1 h-3 w-3" /> {item.integrity}
                </Badge>
                <Badge variant="outline" className="rounded-full px-3">
                  <Download className="mr-1 h-3 w-3" /> Export
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
