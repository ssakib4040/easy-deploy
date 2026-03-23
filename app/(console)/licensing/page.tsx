import {
  CircleDollarSign,
  KeyRound,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LicensingPage() {
  return (
    <>
      <PageHeader
        title="Licensing"
        subtitle="Simple commercial licensing for self-hosted teams with predictable monthly pricing."
        primaryAction="Activate License"
      />

      <section className="grid gap-3 xl:grid-cols-[1.4fr_1fr]">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle>Pro License</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-4xl font-semibold tracking-tight">
              $40
              <span className="text-base font-medium text-muted-foreground">
                {" "}
                / month
              </span>
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <Badge variant="outline" className="px-3">
                <Sparkles className="mr-1 h-3 w-3" /> Unlimited projects
              </Badge>
              <Badge variant="outline" className="px-3">
                <ShieldCheck className="mr-1 h-3 w-3" /> Priority patches
              </Badge>
              <Badge variant="outline" className="px-3">
                <CircleDollarSign className="mr-1 h-3 w-3" /> Flat pricing
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle>License Key Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p className="rounded-xl border border-border/70 bg-background p-3">
              Owner: easydeploy-team
            </p>
            <p className="rounded-xl border border-border/70 bg-background p-3">
              Current key: DEMO-XXXX-XXXX
            </p>
            <p className="rounded-xl border border-border/70 bg-background p-3">
              Renewal: Apr 24, 2026
            </p>
            <p className="rounded-xl border border-border/70 bg-background p-3">
              <KeyRound className="mr-1 inline h-4 w-4" /> Offline activation
              supported
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
