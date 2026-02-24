import { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function MetricCard({
  label,
  value,
  delta,
  icon: Icon,
  tone = "emerald",
}: {
  label: string;
  value: string;
  delta?: string;
  icon: LucideIcon;
  tone?: "emerald" | "sky" | "amber";
}) {
  const toneClasses =
    tone === "emerald"
      ? {
          icon: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-200",
          bar: "bg-emerald-500",
        }
      : tone === "sky"
        ? {
            icon: "bg-sky-500/10 text-sky-700 dark:text-sky-200",
            bar: "bg-sky-500",
          }
        : {
            icon: "bg-amber-500/10 text-amber-700 dark:text-amber-200",
            bar: "bg-amber-500",
          };

  return (
    <Card className="rounded-3xl border-border/70 p-4">
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "grid h-11 w-11 place-items-center rounded-2xl",
            toneClasses.icon,
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="text-xs text-muted-foreground">{label}</div>
          <div className="mt-1 truncate text-xl font-semibold tracking-tight">
            {value}
          </div>
          {delta ? (
            <div className="mt-2 text-xs text-muted-foreground">
              <span className={cn("mr-2 inline-block h-1.5 w-10 rounded-full", toneClasses.bar)} />
              {delta}
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
