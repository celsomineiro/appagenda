import { Outlet, useLocation } from "react-router-dom";

import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

function titleFromPath(pathname: string) {
  if (pathname === "/") return "Dashboard";
  if (pathname.startsWith("/clientes")) return "Clientes";
  if (pathname.startsWith("/usuarios")) return "Usuários";
  if (pathname.startsWith("/agenda")) return "Agenda";
  if (pathname.startsWith("/configuracoes")) return "Configurações";
  return "Painel";
}

export function AppShell() {
  const location = useLocation();
  const title = titleFromPath(location.pathname);

  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset>
        <TopBar title={title} />
        <div className="min-h-[calc(100svh-3.5rem)] px-4 py-5 md:px-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
