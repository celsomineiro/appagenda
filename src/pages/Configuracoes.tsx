import { Cog, Mail, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Configuracoes() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Configurações</h2>
        <p className="text-sm text-muted-foreground">
          Painel administrativo (configuramos integrações depois).
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="rounded-3xl border-border/70 p-5">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-200">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="w-full">
              <div className="text-sm font-medium">WhatsApp (API)</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Vamos conectar uma API (ex.: Z-API, Twilio, 360dialog) na próxima
                etapa.
              </p>

              <div className="mt-4 grid gap-3">
                <div className="space-y-2">
                  <Label>Token</Label>
                  <Input className="h-11 rounded-2xl" placeholder="••••••••••" />
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border/70 px-3 py-2">
                  <div className="text-sm">Ativar integração</div>
                  <Switch />
                </div>
              </div>

              <Button
                className="mt-4 h-10 w-full rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700"
                type="button"
              >
                Salvar
              </Button>
            </div>
          </div>
        </Card>

        <Card className="rounded-3xl border-border/70 p-5">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-200">
              <Mail className="h-5 w-5" />
            </div>
            <div className="w-full">
              <div className="text-sm font-medium">E-mail (Script)</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Vamos ligar um script/SMTP e registrar logs de envio.
              </p>

              <div className="mt-4 grid gap-3">
                <div className="space-y-2">
                  <Label>Remetente padrão</Label>
                  <Input
                    className="h-11 rounded-2xl"
                    placeholder="no-reply@empresa.com"
                  />
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border/70 px-3 py-2">
                  <div className="text-sm">Ativar envios</div>
                  <Switch />
                </div>
              </div>

              <Button
                className="mt-4 h-10 w-full rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700"
                type="button"
              >
                Salvar
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <Card className="rounded-3xl border-border/70 p-5">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-200">
            <Cog className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-medium">Preferências do painel</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Configurações gerais (logs, auditoria, permissões) entram aqui.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
