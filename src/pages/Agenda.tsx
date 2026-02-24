import { CalendarClock, Info } from "lucide-react";

import { Card } from "@/components/ui/card";

export default function Agenda() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Agenda</h2>
        <p className="text-sm text-muted-foreground">
          Em breve: agendamento de envio de documentos.
        </p>
      </div>

      <Card className="rounded-3xl border-border/70 p-5">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-200">
            <CalendarClock className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-medium">Página preparada</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Vamos evoluir este módulo para criar regras, horários, destinatários e
              disparos (WhatsApp/E-mail).
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-border/70 bg-card px-3 py-2 text-xs text-muted-foreground">
              <Info className="h-4 w-4" />
              Próximo passo: modelagem do agendamento + fila de envios.
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
