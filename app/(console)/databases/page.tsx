import { Database, HardDriveDownload, ShieldCheck, Sparkles } from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const dbs = [
  { name: "postgres-prod", engine: "PostgreSQL 16", usage: 62 },
  { name: "redis-cache", engine: "Redis 7", usage: 38 },
  { name: "analytics-clickhouse", engine: "ClickHouse", usage: 44 },
  { name: "mongo-preview", engine: "MongoDB", usage: 19 },
];

export default function DatabasesPage() {
  return (
    <>
      <PageHeader
        title="Databases"
        subtitle="Provision managed storage with backup, replication, and visibility built in."
        primaryAction="Provision Database"
      />

      <section className="grid gap-3 lg:grid-cols-2">
        {dbs.map((db) => (
          <Card key={db.name} className="border-border/70 bg-card/90">
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2 text-base">
                <span>{db.name}</span>
                <Badge variant="outline" className="rounded-full px-3">{db.engine}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="mb-2 text-xs text-muted-foreground">Storage usage</p>
                <Progress value={db.usage} className="h-2" />
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline" className="rounded-full px-3"><Database className="mr-1 h-3 w-3" /> Replication</Badge>
                <Badge variant="outline" className="rounded-full px-3"><HardDriveDownload className="mr-1 h-3 w-3" /> Daily backup</Badge>
                <Badge variant="outline" className="rounded-full px-3"><ShieldCheck className="mr-1 h-3 w-3" /> Encrypted</Badge>
                <Badge variant="outline" className="rounded-full px-3"><Sparkles className="mr-1 h-3 w-3" /> Auto-tune</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
