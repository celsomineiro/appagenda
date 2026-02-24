import { ArrowUpRight, FileUp, ShieldCheck, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="space-y-5">
      <section className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card
            className={cn(
              "relative overflow-hidden rounded-3xl border-border/70 p-5",
              "bg-card",
            )}
          >
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-sky-500/10 blur-2xl" />

            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Visão geral
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight">
                  Dashboard interno
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Base pronta com menu fixo, topbar e páginas de gestão.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  className="h-10 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700"
                  type="button"
                  onClick={() => navigate("/configuracoes")}
                >
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Ir para configurações
                </Button>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <MetricCard
                label="Clientes"
                value="0"
                delta="Cadastre e organize seu pipeline"
                icon={Users}
                tone="emerald"
              />
              <MetricCard
                label="Uploads"
                value="0"
                delta="Arquivos e documentos (em breve)"
                icon={FileUp}
                tone="sky"
              />
              <MetricCard
                label="Permissões"
                value="Admin"
                delta="Controle de acessos ativo"
                icon={ShieldCheck}
                tone="amber"
              />
            </div>
          </Card>
        </div>

        <Card className="rounded-3xl border-border/70 p-5">
          <div className="text-sm font-medium">Upload rápido (stub)</div>
          <p className="mt-1 text-sm text-muted-foreground">
            Já deixei a área preparada. Na próxima etapa, adicionamos upload de
            arquivos/imagens com listagem.
          </p>

          <div className="mt-4 space-y-2">
            <Input
              type="file"
              className="h-11 cursor-pointer rounded-2xl file:mr-4 file:rounded-full file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-emerald-700"
            />
            <Button
              type="button"
              className="h-10 w-full rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700"
              disabled
            >
              Enviar (em breve)
            </Button>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="rounded-3xl border-border/70 p-5 lg:col-span-2">
          <div className="text-sm font-medium">Atividade recente</div>
          <p className="mt-1 text-sm text-muted-foreground">
            Aqui entraremos com logs, auditoria e histórico de envios.
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              {
                title: "Integrações",
                desc: "WhatsApp + E-mail serão configurados nas Configurações.",
              },
              {
                title: "Agenda",
                desc: "O módulo já está no menu e pronto para evoluir.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border/70 bg-card px-4 py-3"
              >
                <div className="text-sm font-medium">{c.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-3xl border-border/70 p-5">
          <div className="text-sm font-medium">Próximos passos</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>• Upload de arquivos/imagens com histórico</li>
            <li>• CRUD completo de clientes e usuários</li>
            <li>• Agendamentos e fila de envios</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}