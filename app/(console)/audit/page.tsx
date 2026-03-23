import { Clock3, ScanSearch, ShieldCheck, UserRound } from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    actor: "sakib@easydeploy.dev",
    action: "Updated env variable",
    target: "billing-api / STRIPE_SECRET_KEY",
    when: "5m ago",
  },
  {
    actor: "aisha@easydeploy.dev",
    action: "Triggered deployment",
    target: "storefront-web",
    when: "21m ago",
  },
  {
    actor: "mason@easydeploy.dev",
    action: "Changed domain policy",
    target: "api.easydeploy.dev",
    when: "1h ago",
  },
];

export default function AuditPage() {
  return (
    <>
      <PageHeader
        title="Audit"
        subtitle="Track all sensitive actions, deployment triggers, and configuration changes."
        primaryAction="Export Audit Log"
      />

      <Card className="border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle>Security Event Timeline</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {events.map((event) => (
            <div
              key={`${event.actor}-${event.when}`}
              className="rounded-xl border border-border/70 bg-background p-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium">{event.action}</p>
                <Badge variant="outline" className="px-3">
                  <Clock3 className="mr-1 h-3 w-3" /> {event.when}
                </Badge>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {event.target}
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <UserRound className="h-3.5 w-3.5" /> {event.actor}
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <ScanSearch className="h-3.5 w-3.5" /> Trace id attached
              </p>
            </div>
          ))}

          <div className="rounded-xl border border-dashed border-border/80 bg-muted/20 p-3 text-xs text-muted-foreground">
            <p className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />{" "}
              Tamper-evident log storage is simulated in demo mode.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
