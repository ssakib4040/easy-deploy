import { KeyRound, Shield, Timer, Trash2 } from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const keys = [
  {
    name: "ci-deploy-bot",
    scopes: "deploy:write, logs:read",
    expires: "2026-07-01",
    lastUsed: "14m ago",
  },
  {
    name: "incident-automation",
    scopes: "alerts:write, projects:read",
    expires: "Never",
    lastUsed: "2h ago",
  },
  {
    name: "analytics-exporter",
    scopes: "metrics:read",
    expires: "2026-05-10",
    lastUsed: "1d ago",
  },
];

export default function ApiKeysPage() {
  return (
    <>
      <PageHeader
        title="API Keys"
        subtitle="Generate scoped access tokens for CI, automation, and external platform integrations."
        primaryAction="Create API Key"
      />

      <Card className="border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle>Access Tokens</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {keys.map((key) => (
            <div key={key.name} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/70 bg-background p-3 text-sm">
              <div>
                <p className="font-medium">{key.name}</p>
                <p className="text-xs text-muted-foreground">Scopes: {key.scopes}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline" className="px-3"><Timer className="mr-1 h-3 w-3" /> Expires: {key.expires}</Badge>
                <Badge variant="outline" className="px-3"><Shield className="mr-1 h-3 w-3" /> Last used: {key.lastUsed}</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <MockActionDialog label="Rotate" entity={key.name} variant="outline" />
                <MockActionDialog label="Revoke" entity={key.name} variant="ghost" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <section className="mt-4 grid gap-3 md:grid-cols-2">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base"><KeyRound className="mr-1 inline h-4 w-4" /> Service Account Keys</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Create non-human credentials for build agents, observability exporters, and maintenance jobs.</p>
            <MockActionDialog label="Create Service Account" entity="service account" className="px-4" />
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base"><Trash2 className="mr-1 inline h-4 w-4" /> Expiry Enforcement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Enforce token TTL and auto-revoke stale keys that have no recent usage.</p>
            <MockActionDialog label="Set TTL Policy" entity="key lifecycle policy" variant="outline" className="px-4" />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
