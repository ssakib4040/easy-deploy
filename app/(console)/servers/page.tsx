import { Cpu, HardDrive, Network, Server } from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const nodes = [
  { name: "fra-primary-01", cpu: 63, memory: 58, network: "1.2 Gbps" },
  { name: "nyc-primary-02", cpu: 44, memory: 49, network: "850 Mbps" },
  { name: "sin-edge-01", cpu: 71, memory: 66, network: "1.5 Gbps" },
  { name: "sao-edge-02", cpu: 37, memory: 42, network: "760 Mbps" },
];

export default function ServersPage() {
  return (
    <>
      <PageHeader
        title="Servers"
        subtitle="Observe node health, utilization, and network saturation before incidents happen."
        primaryAction="Register Server"
      />

      <section className="space-y-3">
        {nodes.map((node) => (
          <Card key={node.name} className="border-border/70 bg-card/90">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Server className="h-4 w-4 text-primary" /> {node.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-3">
              <div>
                <p className="mb-1 text-xs text-muted-foreground">
                  <Cpu className="mr-1 inline h-3.5 w-3.5" /> CPU
                </p>
                <Progress value={node.cpu} className="h-2" />
              </div>
              <div>
                <p className="mb-1 text-xs text-muted-foreground">
                  <HardDrive className="mr-1 inline h-3.5 w-3.5" /> Memory
                </p>
                <Progress value={node.memory} className="h-2" />
              </div>
              <div>
                <p className="mb-1 text-xs text-muted-foreground">
                  <Network className="mr-1 inline h-3.5 w-3.5" /> Network
                </p>
                <p className="text-sm font-medium">{node.network}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
