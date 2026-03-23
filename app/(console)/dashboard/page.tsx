import { Activity, ArrowUpRight, Clock3, Rocket } from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { StatCard } from "@/components/prototype/stat-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  { app: "storefront-web", status: "Deployed", time: "2m ago" },
  { app: "billing-api", status: "Healthy", time: "8m ago" },
  { app: "worker-ingestion", status: "Building", time: "11m ago" },
  { app: "docs-site", status: "Queued", time: "23m ago" },
];

const chartDays = [
  ["Mon", 72],
  ["Tue", 80],
  ["Wed", 75],
  ["Thu", 93],
  ["Fri", 101],
  ["Sat", 57],
  ["Sun", 66],
] as const;

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Control Center"
        subtitle="A live operational view across deployments, service health, and runtime confidence."
        primaryAction="Create Project"
      />

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Applications Live" value="18" hint="+3 this week" />
        <StatCard title="Deploy Success" value="99.3%" hint="Last 30 days" />
        <StatCard title="Avg Build Time" value="2m 41s" hint="-18s trend" />
        <StatCard
          title="Requests / min"
          value="142k"
          hint="Across all services"
        />
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[2fr_1fr]">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle>Deployment Momentum</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
              {chartDays.map(([day, value]) => (
                <div
                  key={day}
                  className="rounded-xl border border-border/70 bg-muted/30 p-3"
                >
                  <p className="text-xs text-muted-foreground">{day}</p>
                  <p className="text-lg font-semibold">{value}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-muted">
                    <div
                      className="h-1.5 rounded-full bg-primary"
                      style={{ width: `${Math.min(100, value)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle>Runtime Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="flex items-center gap-2 text-primary">
              <Activity className="h-4 w-4" /> 12 regions online
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Clock3 className="h-4 w-4" /> p95 latency 138ms
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Rocket className="h-4 w-4" /> 4 deploys in progress
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle>Latest Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {events.map((event) => (
              <div
                key={`${event.app}-${event.time}`}
                className="flex items-center justify-between rounded-xl border border-border/70 bg-background p-3"
              >
                <div>
                  <p className="font-medium">{event.app}</p>
                  <p className="text-xs text-muted-foreground">{event.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="rounded-full px-3">
                    {event.status}
                  </Badge>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </>
  );
}
