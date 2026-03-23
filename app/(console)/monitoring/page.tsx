import { Activity, AlertTriangle, Gauge, Timer } from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MonitoringPage() {
  return (
    <>
      <PageHeader
        title="Monitoring"
        subtitle="Unified health checks, latency tracking, and incident signals across all services."
        primaryAction="Create Alert Policy"
      />

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">Service Uptime</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">99.97%</CardContent>
        </Card>
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">p95 Latency</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">138ms</CardContent>
        </Card>
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">Error Rate</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">0.19%</CardContent>
        </Card>
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">Open Alerts</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">2</CardContent>
        </Card>
      </section>

      <Card className="mt-4 border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle>Runtime Signals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" /> Health checks passing
            in 11/12 regions
          </p>
          <p className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-primary" /> CPU saturation warning on
            sin-edge-01
          </p>
          <p className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-primary" /> Queue delay crossed 450ms
            for worker-ingestion
          </p>
          <p className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-destructive" /> Alert policy
            triggered: billing-api 5xx spike
          </p>
        </CardContent>
      </Card>
    </>
  );
}
