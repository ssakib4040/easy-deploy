import { Globe, Link2, Shield, Zap } from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const domains = [
  {
    name: "app.easydeploy.dev",
    app: "storefront-web",
    ssl: "Active",
    cdn: "On",
  },
  { name: "api.easydeploy.dev", app: "billing-api", ssl: "Active", cdn: "On" },
  {
    name: "docs.easydeploy.dev",
    app: "docs-site",
    ssl: "Provisioning",
    cdn: "Off",
  },
  {
    name: "hooks.easydeploy.dev",
    app: "webhook-gateway",
    ssl: "Active",
    cdn: "On",
  },
];

export default function DomainsPage() {
  return (
    <>
      <PageHeader
        title="Domains"
        subtitle="Map hostnames, enforce TLS, and route traffic globally with confidence."
        primaryAction="Add Domain"
      />

      <section className="grid gap-3 md:grid-cols-3">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">TLS Coverage</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">96%</CardContent>
        </Card>
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">DNS Health</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">11 / 11</CardContent>
        </Card>
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-sm">Edge Cache Hit</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">82%</CardContent>
        </Card>
      </section>

      <section className="mt-4 space-y-2">
        {domains.map((domain) => (
          <Card key={domain.name} className="border-border/70 bg-card/90">
            <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
              <div>
                <p className="font-medium">{domain.name}</p>
                <p className="text-xs text-muted-foreground">
                  Linked to {domain.app}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline" className="px-3">
                  <Globe className="mr-1 h-3 w-3" /> Public
                </Badge>
                <Badge variant="outline" className="px-3">
                  <Shield className="mr-1 h-3 w-3" /> SSL: {domain.ssl}
                </Badge>
                <Badge variant="outline" className="px-3">
                  <Zap className="mr-1 h-3 w-3" /> CDN: {domain.cdn}
                </Badge>
                <Badge variant="outline" className="px-3">
                  <Link2 className="mr-1 h-3 w-3" /> DNS Verified
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
