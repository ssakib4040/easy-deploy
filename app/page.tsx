import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  Globe,
  Layers3,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-10 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex items-center justify-between border-b border-border/70 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Prototype
            </p>
            <h1 className="text-lg font-semibold">EasyDeploy</h1>
          </div>
          <Button asChild className="rounded-full px-4">
            <Link href="/dashboard">Open Console</Link>
          </Button>
        </header>

        <main className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <Card className="border-border/70 bg-card/90 shadow-sm">
            <CardHeader>
              <Badge variant="outline" className="w-fit rounded-full px-3">
                Frontend Prototype Demo
              </Badge>
              <CardTitle className="mt-2 text-4xl leading-tight tracking-tight md:text-6xl">
                A beautiful control plane that makes deployment operations feel
                effortless.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                A full frontend-only product surface built for demo and
                prototyping with professional UX flows, predictable information
                architecture, and clean operational screens.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full px-4">
                  <Link href="/dashboard">
                    Enter dashboard <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="rounded-full">
                  <Link href="/projects">Explore pages</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/90 shadow-sm">
            <CardHeader>
              <CardTitle>Included in this prototype</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Layers3 className="h-4 w-4 text-primary" /> Full multi-page
                  product flow
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-primary" /> Deployments, logs,
                  infra, team, billing
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />{" "}
                  Secure-by-default UX patterns
                </li>
                <li className="flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-primary" /> Metrics-first
                  operations dashboard
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" /> Domains and edge
                  delivery screens
                </li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
