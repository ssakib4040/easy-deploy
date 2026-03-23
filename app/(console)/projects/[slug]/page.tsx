import { Globe, ShieldCheck, Timer } from "lucide-react";

import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const projectVars = [
  { key: "DATABASE_URL", scope: "Production", visibility: "Secret" },
  { key: "REDIS_URL", scope: "All", visibility: "Secret" },
  { key: "NEXT_PUBLIC_API_URL", scope: "All", visibility: "Public" },
  { key: "SENTRY_DSN", scope: "Staging", visibility: "Secret" },
];

type ProjectDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;

  return (
    <>
      <PageHeader
        title={`Project: ${slug}`}
        subtitle="Track deployment confidence, environment posture, and release quality metrics."
        primaryAction="Trigger Deploy"
      />

      <section className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle>Release Quality Signals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="mb-2 text-sm text-muted-foreground">
                Build success ratio
              </p>
              <Progress value={93} className="h-2" />
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">
                Canary error budget
              </p>
              <Progress value={78} className="h-2" />
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">
                Coverage confidence
              </p>
              <Progress value={88} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle>Routing and Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" /> Edge acceleration
              enabled
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> TLS and policy
              active
            </p>
            <p className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-primary" /> Last deploy 11 minutes
              ago
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 grid gap-3 md:grid-cols-3">
        {["Production", "Preview", "Staging"].map((env) => (
          <Card key={env} className="border-border/70 bg-card/90">
            <CardHeader>
              <CardTitle className="text-base">{env}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">eu-west / us-east</span>
              <Badge variant="outline" className="px-3">
                Healthy
              </Badge>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-4">
        <Card className="border-border/70 bg-card/90">
          <CardHeader className="flex flex-row items-center justify-between gap-3">
            <CardTitle>Environment and Secrets (Project Scoped)</CardTitle>
            <MockActionDialog
              label="Add Variable"
              entity={slug}
              className="px-4"
            />
          </CardHeader>
          <CardContent className="space-y-2">
            {projectVars.map((variable) => (
              <div
                key={variable.key}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/70 bg-background p-3 text-sm"
              >
                <div>
                  <p className="font-medium">{variable.key}</p>
                  <p className="text-xs text-muted-foreground">
                    Scope: {variable.scope}
                  </p>
                </div>
                <Badge variant="outline" className="px-3">
                  {variable.visibility}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 grid gap-3 xl:grid-cols-2">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle>Deployment Strategies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="rounded-xl border border-border/70 bg-background p-3">
              <p className="font-medium text-foreground">Canary Rollout</p>
              <p className="mt-1">
                Progressive traffic shifting: 5% → 25% → 50% → 100% with
                automatic error budget checks.
              </p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background p-3">
              <p className="font-medium text-foreground">
                Blue-Green Promotion
              </p>
              <p className="mt-1">
                Maintain a hot standby release and switch traffic only after
                synthetic probes pass.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <MockActionDialog
                label="Start Canary"
                entity={slug}
                variant="outline"
              />
              <MockActionDialog label="Promote Blue-Green" entity={slug} />
              <MockActionDialog
                label="Rollback to Last Stable"
                entity={slug}
                variant="ghost"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle>Secret Rotation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Rotate database credentials, API tokens, and webhook signing keys
              without full downtime.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-border/70 bg-background p-2.5">
                Database password rotation: every 30 days
              </div>
              <div className="rounded-lg border border-border/70 bg-background p-2.5">
                Service token rotation: every 14 days
              </div>
              <div className="rounded-lg border border-border/70 bg-background p-2.5">
                Last emergency rotation: 9 days ago
              </div>
              <div className="rounded-lg border border-border/70 bg-background p-2.5">
                Verification probes: enabled
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <MockActionDialog
                label="Rotate All Secrets"
                entity={slug}
                className="px-4"
              />
              <MockActionDialog
                label="Test Secret Sync"
                entity={slug}
                variant="outline"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
