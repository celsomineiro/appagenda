import { Building2, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Clientes() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Clientes</h2>
          <p className="text-sm text-muted-foreground">
            Cadastro e gerenciamento de clientes.
          </p>
        </div>
        <Button className="h-10 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" />
          Novo cliente
        </Button>
      </div>

      <Card className="rounded-3xl border-border/70 p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative w-full md:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome, e-mail ou documento..."
              className="h-11 rounded-2xl pl-10"
            />
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            0 clientes cadastrados
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-dashed border-border/70 p-6">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-200">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-medium">Pronto para começar</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Aqui ficará a lista de clientes com filtros, edição e histórico.
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
