"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Loader2, PlayCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

type MockActionDialogProps = {
  label: string;
  entity?: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  className?: string;
};

export function MockActionDialog({
  label,
  entity = "resource",
  variant = "default",
  className,
}: MockActionDialogProps) {
  const [open, setOpen] = useState(false);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!running) {
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(100, prev + Math.floor(Math.random() * 18 + 8));
        if (next >= 100) {
          setRunning(false);
          setDone(true);
        }
        return next;
      });
    }, 260);

    return () => clearInterval(timer);
  }, [running]);

  const actionText = useMemo(() => label.toLowerCase(), [label]);

  function reset() {
    setProgress(0);
    setRunning(false);
    setDone(false);
  }

  function startAction() {
    setDone(false);
    setProgress(10);
    setRunning(true);
  }

  function closeDialog(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      reset();
    }
  }

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <PlayCircle className="h-4 w-4 text-primary" />
            Mock Action: {label}
          </DialogTitle>
          <DialogDescription>
            This prototype simulates {actionText} for this {entity}. No real
            infrastructure changes are executed.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 rounded-lg border border-border/70 bg-muted/20 p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Execution state</span>
            {done ? (
              <Badge variant="outline" className="rounded-full px-3">
                Completed
              </Badge>
            ) : running ? (
              <Badge variant="outline" className="rounded-full px-3">
                Running
              </Badge>
            ) : (
              <Badge variant="outline" className="rounded-full px-3">
                Waiting
              </Badge>
            )}
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {done
              ? "Simulation complete. The UI state has been updated for demo purposes."
              : running
                ? "Simulating action pipeline: validate > queue > build > rollout"
                : "Press confirm to run this mocked flow."}
          </p>
        </div>

        <DialogFooter>
          {!running && !done ? (
            <Button onClick={startAction}>Confirm and Run</Button>
          ) : null}

          {running ? (
            <Button variant="secondary" disabled>
              <Loader2 className="mr-1 h-4 w-4 animate-spin" /> Processing
            </Button>
          ) : null}

          {done ? (
            <Button variant="outline" onClick={() => setOpen(false)}>
              <CheckCircle2 className="mr-1 h-4 w-4" /> Done
            </Button>
          ) : null}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
