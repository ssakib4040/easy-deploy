import { AlertTriangle, CalendarClock, Globe, HeartPulse } from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const components = [
  { name: "API Gateway", region: "Global", status: "Operational" },
  { name: "Deploy Pipeline", region: "eu-west", status: "Degraded" },
  { name: "Registry", region: "us-east", status: "Operational" },
  { name: "Managed Databases", region: "multi-region", status: "Operational" },
];

export default function StatusPage() {
  return (
    <>
      <PageHeader
        title="Status & Maintenance"
        subtitle="Publish service health, incidents, and planned maintenance windows for your users."
        primaryAction="Create Incident"
      />

      <Card className="border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle>Public Status Components</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {components.map((item) => (
            <div
              key={item.name}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/70 bg-background p-3 text-sm"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  Region: {item.region}
                </p>
              </div>
              <Badge variant="outline" className="px-3">
                {item.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <section className="mt-4 grid gap-3 md:grid-cols-3">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">
              <HeartPulse className="mr-1 inline h-4 w-4" /> SLA Last 30d
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">99.96%</CardContent>
        </Card>
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">
              <AlertTriangle className="mr-1 inline h-4 w-4" /> Open Incidents
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">1</CardContent>
        </Card>
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">
              <Globe className="mr-1 inline h-4 w-4" /> Subscribed Users
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">284</CardContent>
        </Card>
      </section>

      <Card className="mt-4 border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle className="text-base">
            <CalendarClock className="mr-1 inline h-4 w-4" /> Maintenance
            Windows
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <MockActionDialog
            label="Schedule Maintenance"
            entity="public status"
            className="px-4"
          />
          <MockActionDialog
            label="Notify Subscribers"
            entity="status subscribers"
            variant="outline"
          />
          <MockActionDialog
            label="Publish Postmortem"
            entity="incident timeline"
            variant="ghost"
          />
        </CardContent>
      </Card>
    </>
  );
}
