import { Badge } from "@/components/ui/badge";
import { MockActionDialog } from "@/components/prototype/mock-action-dialog";

export function PageHeader({
  title,
  subtitle,
  primaryAction,
}: {
  title: string;
  subtitle: string;
  primaryAction?: string;
}) {
  return (
    <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground md:text-base">
          {subtitle}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="rounded-full px-3">
          Demo Data
        </Badge>
        {primaryAction ? (
          <MockActionDialog
            label={primaryAction}
            entity="page scope"
            className="rounded-full px-4"
          />
        ) : null}
      </div>
    </header>
  );
}
