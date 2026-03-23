import { Crown, Mail, Shield, Users } from "lucide-react";

import { PageHeader } from "@/components/prototype/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const members = [
  { name: "Sakib", role: "Owner", email: "sakib@easydeploy.dev" },
  { name: "Aisha", role: "Developer", email: "aisha@easydeploy.dev" },
  { name: "Mason", role: "Ops", email: "mason@easydeploy.dev" },
  { name: "Rin", role: "Support", email: "rin@easydeploy.dev" },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Team"
        subtitle="Invite contributors, manage permissions, and keep production access secure."
        primaryAction="Invite Member"
      />

      <Card className="border-border/70 bg-card/90">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-4 w-4" /> Workspace Members
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {members.map((member) => (
            <div
              key={member.email}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/70 bg-background p-3"
            >
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Mail className="h-3.5 w-3.5" /> {member.email}
                </p>
              </div>
              <Badge variant="outline" className="rounded-full px-3">
                {member.role === "Owner" ? (
                  <Crown className="mr-1 h-3 w-3" />
                ) : (
                  <Shield className="mr-1 h-3 w-3" />
                )}{" "}
                {member.role}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
