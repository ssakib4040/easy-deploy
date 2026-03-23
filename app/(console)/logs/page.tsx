import { AlertTriangle, FileTerminal, Filter, Search } from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const lines = [
  "[12:51:04] INFO Build started for storefront-web@main",
  "[12:51:15] INFO Pulling base image node:22-alpine",
  "[12:51:34] INFO Dependencies restored from cache",
  "[12:52:10] WARN Optional package sharp not installed, continuing",
  "[12:53:01] INFO Running next build --turbo",
  "[12:53:40] INFO Bundle generated successfully",
  "[12:54:03] INFO Health check passed on /api/health",
  "[12:54:08] INFO Deploy promoted to production",
  "[12:54:18] INFO Autoscaler set 5 replicas for eu-west",
];

export default function LogsPage() {
  return (
    <>
      <PageHeader
        title="Logs Explorer"
        subtitle="Inspect build and runtime streams with fast filters for incidents and regressions."
        primaryAction="Run Query"
      />

      <Card className="border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileTerminal className="h-4 w-4" /> Live Feed
            <Badge variant="outline" className="px-3">
              Demo stream
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-3 grid gap-2 md:grid-cols-[1fr_auto_auto]">
            <Input placeholder="Search logs" className="h-9" />
            <Badge
              variant="outline"
              className="h-9 items-center justify-center px-3"
            >
              <Search className="mr-1 h-3.5 w-3.5" /> Keyword
            </Badge>
            <Badge
              variant="outline"
              className="h-9 items-center justify-center px-3"
            >
              <Filter className="mr-1 h-3.5 w-3.5" /> Service filter
            </Badge>
          </div>

          <ScrollArea className="h-90 rounded-xl border border-border/70 bg-muted/45 p-3 font-mono text-xs text-foreground">
            <div className="space-y-2">
              {lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="flex items-center gap-1 text-destructive">
                <AlertTriangle className="h-3.5 w-3.5" /> Alert: response time
                spike detected at eu-west-2 edge.
              </p>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </>
  );
}
