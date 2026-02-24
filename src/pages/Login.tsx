import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/auth";
import { showError } from "@/utils/toast";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const from = (location?.state?.from as string | undefined) || "/";

  const [email, setEmail] = React.useState("admin@local");
  const [password, setPassword] = React.useState("admin");
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto grid min-h-svh w-full max-w-md place-items-center px-4 py-10">
        <div className="w-full">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Acesso ao painel
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              Entrar
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Use <span className="font-medium">admin@local</span> /{" "}
              <span className="font-medium">admin</span> para começar.
            </p>
          </div>

          <Card className="rounded-3xl border-border/70 p-5 shadow-sm">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                try {
                  login(email, password);
                  navigate(from, { replace: true });
                } catch (err) {
                  showError(err instanceof Error ? err.message : "Erro ao entrar");

                } finally {
                  setLoading(false);
                }
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    autoComplete="email"
                    inputMode="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 rounded-2xl pl-10"
                    placeholder="voce@empresa.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 rounded-2xl pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="h-11 w-full rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Não tem conta?{" "}
                <Link
                  to="/cadastro"
                  className="font-medium text-emerald-700 hover:underline dark:text-emerald-300"
                >
                  Criar cadastro
                </Link>
              </div>
            </form>
          </Card>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Ambiente interno • Tema verde • Layout responsivo
          </p>
        </div>
      </div>
    </div>
  );
}
