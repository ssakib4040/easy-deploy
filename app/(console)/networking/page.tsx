import { Globe, Network, Shield, ShieldCheck } from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const firewallRules = [
  { port: "22", protocol: "TCP", source: "10.10.0.0/16", status: "Allow" },
  { port: "443", protocol: "TCP", source: "0.0.0.0/0", status: "Allow" },
  { port: "3306", protocol: "TCP", source: "Public", status: "Deny" },
  { port: "6379", protocol: "TCP", source: "Private VPC", status: "Allow" },
];

export default function NetworkingPage() {
  return (
    <>
      <PageHeader
        title="Networking & Firewall"
        subtitle="Control ingress, egress, and private routing across all VPS nodes and clusters."
        primaryAction="Add Firewall Rule"
      />

      <Card className="border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle>Ingress Policies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {firewallRules.map((rule) => (
            <div key={`${rule.port}-${rule.source}`} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/70 bg-background p-3 text-sm">
              <p className="font-medium">Port {rule.port} / {rule.protocol}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline" className="px-3">Source: {rule.source}</Badge>
                <Badge variant="outline" className="px-3">{rule.status}</Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <section className="mt-4 grid gap-3 md:grid-cols-3">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base"><Shield className="mr-1 inline h-4 w-4" /> Egress Control</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Restrict outbound traffic by destination to reduce data exfiltration risk.</p>
            <MockActionDialog label="Define Egress Policy" entity="egress policy" variant="outline" className="px-4" />
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base"><Network className="mr-1 inline h-4 w-4" /> Private Network Peering</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Create secure service-to-service lanes between regions and edge nodes.</p>
            <MockActionDialog label="Create Peer Link" entity="private network" className="px-4" />
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base"><ShieldCheck className="mr-1 inline h-4 w-4" /> Host Hardening</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Apply baseline hardening profiles including fail2ban, brute-force blocking, and SSH lock policies.</p>
            <MockActionDialog label="Apply Hardened Profile" entity="host security" variant="outline" className="px-4" />
          </CardContent>
        </Card>
      </section>

      <Card className="mt-4 border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle className="text-base"><Globe className="mr-1 inline h-4 w-4" /> Global Traffic Steering</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <MockActionDialog label="Enable Geo Routing" entity="global edge traffic" variant="outline" />
          <MockActionDialog label="Set Failover Region" entity="global edge traffic" />
          <MockActionDialog label="Run Network Probe" entity="network diagnostics" variant="ghost" />
        </CardContent>
      </Card>
    </>
  );
}
