import { Clock4, RotateCcw, Send, Webhook } from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const endpoints = [
  { name: "Ops Slack", url: "https://hooks.slack.com/...", events: "deploy.failed, alert.opened", status: "Healthy" },
  { name: "PagerDuty", url: "https://events.pagerduty.com/...", events: "incident.created, incident.updated", status: "Healthy" },
  { name: "Custom SIEM", url: "https://siem.internal/events", events: "audit.*, auth.*", status: "Retrying" },
];

export default function WebhooksPage() {
  return (
    <>
      <PageHeader
        title="Webhooks"
        subtitle="Route platform events to external systems with retries, signatures, and delivery tracing."
        primaryAction="Create Webhook"
      />

      <Card className="border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle>Webhook Endpoints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {endpoints.map((endpoint) => (
            <div key={endpoint.name} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/70 bg-background p-3 text-sm">
              <div className="min-w-0 flex-1">
                <p className="font-medium">{endpoint.name}</p>
                <p className="truncate text-xs text-muted-foreground">{endpoint.url}</p>
                <p className="text-xs text-muted-foreground">Events: {endpoint.events}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline" className="px-3"><Webhook className="mr-1 h-3 w-3" /> {endpoint.status}</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <MockActionDialog label="Test Delivery" entity={endpoint.name} variant="outline" />
                <MockActionDialog label="Rotate Secret" entity={endpoint.name} variant="ghost" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <section className="mt-4 grid gap-3 md:grid-cols-3">
        <Card className="border-border/70 bg-card/90">
          <CardHeader><CardTitle className="text-sm"><Send className="mr-1 inline h-4 w-4" /> Delivery Throughput</CardTitle></CardHeader>
          <CardContent className="text-2xl font-semibold">18.2k/day</CardContent>
        </Card>
        <Card className="border-border/70 bg-card/90">
          <CardHeader><CardTitle className="text-sm"><Clock4 className="mr-1 inline h-4 w-4" /> Retry Queue</CardTitle></CardHeader>
          <CardContent className="text-2xl font-semibold">43 events</CardContent>
        </Card>
        <Card className="border-border/70 bg-card/90">
          <CardHeader><CardTitle className="text-sm"><RotateCcw className="mr-1 inline h-4 w-4" /> Signature Failures</CardTitle></CardHeader>
          <CardContent className="text-2xl font-semibold">0.07%</CardContent>
        </Card>
      </section>

      <Card className="mt-4 border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle className="text-base">Replay and Backfill</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <MockActionDialog label="Replay Failed Events" entity="webhook retry queue" variant="outline" />
          <MockActionDialog label="Backfill Last 24h" entity="webhook delivery history" />
        </CardContent>
      </Card>
    </>
  );
}
