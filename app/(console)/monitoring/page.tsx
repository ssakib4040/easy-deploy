import { Activity, AlertTriangle, Gauge, Timer } from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
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

      <section className="mt-4 grid gap-3 md:grid-cols-2">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Custom Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Track business and infrastructure metrics such as checkout
              throughput, queue lag, and cache hit ratio.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              <p className="rounded-lg border border-border/70 bg-background p-2.5">
                checkout.rps
              </p>
              <p className="rounded-lg border border-border/70 bg-background p-2.5">
                worker.queue_lag
              </p>
              <p className="rounded-lg border border-border/70 bg-background p-2.5">
                cache.hit_ratio
              </p>
              <p className="rounded-lg border border-border/70 bg-background p-2.5">
                db.connection_pool_wait
              </p>
            </div>
            <MockActionDialog
              label="Create Metric"
              entity="custom monitoring metric"
              className="px-4"
            />
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Escalation Policies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Define incident severity routing to on-call responders, Slack, and
              PagerDuty based on alert class.
            </p>
            <div className="flex flex-wrap gap-2">
              <MockActionDialog
                label="Create Escalation Chain"
                entity="incident routing"
                variant="outline"
              />
              <MockActionDialog
                label="Test On-Call Route"
                entity="incident routing"
              />
              <MockActionDialog
                label="Attach Runbook"
                entity="alert policy"
                variant="ghost"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
