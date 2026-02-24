import { LogOut, Menu, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { logout, getCurrentUser } from "@/lib/auth";
import { cn } from "@/lib/utils";

export function TopBar({ title }: { title: string }) {
  const user = getCurrentUser();
  const navigate = useNavigate();
  const { isMobile, toggleSidebar } = useSidebar();

  const initials = (user?.nome || "Usuário")
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <header
      className={cn(
        "sticky top-0 z-20",
        "border-b border-border/70",
        "bg-background/80 backdrop-blur",
      )}
    >
      <div className="flex h-14 items-center gap-3 px-4 md:px-6">
        <div className="flex items-center gap-2">
          {isMobile ? (
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="h-9 w-9 rounded-full"
              onClick={toggleSidebar}
              aria-label="Abrir menu"
              title="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          ) : (
            <SidebarTrigger className="rounded-full" />
          )}

          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-foreground">
              {title}
            </div>
            <div className="hidden text-xs text-muted-foreground md:block">
              Visão geral e atalhos rápidos
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-10 gap-2 rounded-full border border-border/70 bg-background/60 px-2.5 hover:bg-accent"
              >
                <Avatar className="h-7 w-7">
                  <AvatarFallback className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-200">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden text-left leading-tight md:block">
                  <div className="text-sm font-medium">
                    {user?.nome || "Usuário"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {user?.role === "admin" ? "Administrador" : "Operador"}
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl">
              <DropdownMenuLabel className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Conta
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigate("/configuracoes")}
                className="rounded-xl"
              >
                Configurações
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="rounded-xl text-red-600 focus:text-red-600"
                onClick={() => {
                  logout();
                  navigate("/login", { replace: true });
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}