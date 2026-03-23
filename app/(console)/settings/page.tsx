import { Bell, Lock, Palette, SlidersHorizontal } from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { MockActionDialog } from "@/components/prototype/mock-action-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Workspace Settings"
        subtitle="Configure alerts, security controls, and team defaults for your platform operations."
        primaryAction="Save Changes"
      />

      <section className="grid gap-3 xl:grid-cols-2">
        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">
              <SlidersHorizontal className="mr-1 inline h-4 w-4" /> General
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Workspace display name" className="h-9" />
            <Textarea placeholder="Workspace description" />
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">
              <Bell className="mr-1 inline h-4 w-4" /> Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <label className="flex items-center justify-between rounded-lg border border-border/70 bg-background p-2.5">
              Failed deployments <Switch defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded-lg border border-border/70 bg-background p-2.5">
              Cost threshold warnings <Switch defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded-lg border border-border/70 bg-background p-2.5">
              Weekly usage summary <Switch />
            </label>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">
              <Lock className="mr-1 inline h-4 w-4" /> Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p className="rounded-lg border border-border/70 bg-background p-2.5">
              SSO enforcement: Optional (demo)
            </p>
            <p className="rounded-lg border border-border/70 bg-background p-2.5">
              2FA requirement: Enabled for owner role
            </p>
            <p className="rounded-lg border border-border/70 bg-background p-2.5">
              Session timeout: 12 hours
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">
              <Palette className="mr-1 inline h-4 w-4" /> Branding
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p className="rounded-lg border border-border/70 bg-background p-2.5">
              Logo upload placeholder
            </p>
            <p className="rounded-lg border border-border/70 bg-background p-2.5">
              Primary accent: controlled by custom stylesheet
            </p>
            <p className="rounded-lg border border-border/70 bg-background p-2.5">
              Custom dashboard domain: Coming soon
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Resource Quotas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <label className="flex items-center justify-between rounded-lg border border-border/70 bg-background p-2.5">
              Enforce per-project CPU caps <Switch defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded-lg border border-border/70 bg-background p-2.5">
              Enforce per-project memory caps <Switch defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded-lg border border-border/70 bg-background p-2.5">
              Block deployments when quota exceeded <Switch defaultChecked />
            </label>
            <MockActionDialog label="Edit Quota Defaults" entity="workspace quota policy" className="px-4" />
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Runtime Security Hardening</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <label className="flex items-center justify-between rounded-lg border border-border/70 bg-background p-2.5">
              Enforce container rootless mode <Switch defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded-lg border border-border/70 bg-background p-2.5">
              Block privileged containers <Switch defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded-lg border border-border/70 bg-background p-2.5">
              Require signed image digests <Switch />
            </label>
            <MockActionDialog label="Apply Security Baseline" entity="runtime policy" variant="outline" className="px-4" />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
