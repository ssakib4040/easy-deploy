import { CalendarClock, Gauge, Rocket, TimerReset } from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const policies = [
  {
    app: "storefront-web",
    metric: "CPU > 65%",
    min: 3,
    max: 12,
    current: 5,
    cooldown: "90s",
  },
  {
    app: "billing-api",
    metric: "RPS > 220",
    min: 2,
    max: 8,
    current: 3,
    cooldown: "120s",
  },
  {
    app: "worker-ingestion",
    metric: "Queue lag > 500",
    min: 1,
    max: 16,
    current: 6,
    cooldown: "60s",
  },
];

export default function AutoscalingPage() {
  return (
    <>
      <PageHeader
        title="Autoscaling"
        subtitle="Define responsive scaling rules for each service with safety rails and cooldown windows."
        primaryAction="Create Scaling Policy"
      />

      <section className="space-y-3">
        {policies.map((policy) => (
          <Card key={policy.app} className="border-border/70 bg-card/90">
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2 text-base">
                <span>{policy.app}</span>
                <Badge variant="outline" className="px-3">
                  {policy.metric}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="mb-2 text-xs text-muted-foreground">
                  Replica utilization ({policy.current}/{policy.max})
                </p>
                <Progress value={(policy.current / policy.max) * 100} className="h-2" />
              </div>
              <div className="grid gap-2 text-xs text-muted-foreground sm:grid-cols-3">
                <p className="rounded-lg border border-border/70 bg-background p-2">
                  <Gauge className="mr-1 inline h-3.5 w-3.5" /> Min: {policy.min}
                </p>
                <p className="rounded-lg border border-border/70 bg-background p-2">
                  <Rocket className="mr-1 inline h-3.5 w-3.5" /> Max: {policy.max}
                </p>
                <p className="rounded-lg border border-border/70 bg-background p-2">
                  <TimerReset className="mr-1 inline h-3.5 w-3.5" /> Cooldown: {policy.cooldown}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <MockActionDialog label="Scale Now" entity={policy.app} variant="outline" />
                <MockActionDialog label="Edit Rule" entity={policy.app} variant="ghost" />
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-4 grid gap-3 md:grid-cols-2">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Scheduled Scaling</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Scale up during known traffic windows and reduce idle capacity overnight.</p>
            <p className="rounded-lg border border-border/70 bg-background p-2.5">
              <CalendarClock className="mr-1 inline h-4 w-4 text-primary" /> Weekday schedule active for 4 services
            </p>
            <MockActionDialog label="Add Schedule" entity="autoscaling schedule" className="px-4" />
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Scale-to-Zero Profiles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Reduce non-production cost by hibernating preview and sandbox services automatically.</p>
            <p className="rounded-lg border border-border/70 bg-background p-2.5">
              Enabled for 9 preview workloads with 30-minute idle threshold
            </p>
            <MockActionDialog label="Configure Idle Policy" entity="scale-to-zero" variant="outline" className="px-4" />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
