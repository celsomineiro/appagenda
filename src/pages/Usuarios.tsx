import { Plus, ShieldCheck, Users2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const seedUsers = [
  { nome: "Admin", email: "admin@local", role: "admin" as const },
];

export default function Usuarios() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Usuários</h2>
          <p className="text-sm text-muted-foreground">
            Controle de acessos e permissões.
          </p>
        </div>
        <Button className="h-10 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" />
          Convidar usuário
        </Button>
      </div>

      <Card className="rounded-3xl border-border/70 p-4">
        <div className="grid gap-3 md:grid-cols-2">
          {seedUsers.map((u) => (
            <div
              key={u.email}
              className="flex items-center justify-between rounded-2xl border border-border/70 bg-card px-4 py-3"
            >
              <div className="min-w-0">
                <div className="truncate text-sm font-medium">{u.nome}</div>
                <div className="truncate text-xs text-muted-foreground">
                  {u.email}
                </div>
              </div>
              <Badge
                className={
                  u.role === "admin"
                    ? "rounded-full bg-emerald-600 text-white hover:bg-emerald-600"
                    : "rounded-full"
                }
              >
                {u.role === "admin" ? (
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" /> Admin
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1">
                    <Users2 className="h-3.5 w-3.5" /> Operador
                  </span>
                )}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
