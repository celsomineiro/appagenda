import { NavLink } from "react-router-dom";
import {
  CalendarClock,
  LayoutDashboard,
  Settings,
  Users,
  UserRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/clientes", label: "Clientes", icon: Users },
  { to: "/usuarios", label: "Usuários", icon: UserRound },
  { to: "/agenda", label: "Agenda", icon: CalendarClock },
];

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className={cn(
        "border-r border-white/10",
        // Sidebar sempre em darkmode (independente do tema global)
        "text-emerald-50",
      )}
    >
      <div
        className={cn(
          "h-full",
          "bg-[hsl(164_55%_10%)]",
          "[--sidebar-border:rgba(255,255,255,.12)]",
        )}
      >
        <SidebarHeader className="p-3">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-300/20">
              <div className="h-5 w-5 rounded-md bg-emerald-300/70" />
            </div>
            <div className="min-w-0 leading-tight group-data-[collapsible=icon]:hidden">
              <div className="truncate text-sm font-semibold tracking-tight">
                Verde Admin
              </div>
              <div className="truncate text-xs text-emerald-100/70">
                Controle interno
              </div>
            </div>
          </div>
        </SidebarHeader>

        <SidebarSeparator className="bg-white/10" />

        <SidebarContent className="px-2 py-2">
          <SidebarGroup>
            <SidebarGroupLabel className="text-emerald-100/70">
              Navegação
            </SidebarGroupLabel>
            <SidebarMenu>
              {nav.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild tooltip={item.label}>
                    <NavLink
                      to={item.to}
                      end={item.end as any}
                      onClick={() => {
                        if (isMobile) setOpenMobile(false);
                      }}
                      className={({ isActive }) =>
                        cn(
                          "rounded-xl",
                          "transition-colors",
                          "text-emerald-50/90 hover:text-emerald-50",
                          "hover:bg-white/7",
                          isActive &&
                            "bg-emerald-400/15 text-emerald-50 ring-1 ring-emerald-300/20",
                        )
                      }
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-2">
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Configurações">
                  <NavLink
                    to="/configuracoes"
                    onClick={() => {
                      if (isMobile) setOpenMobile(false);
                    }}
                    className={({ isActive }) =>
                      cn(
                        "rounded-xl",
                        "transition-colors",
                        "text-emerald-50/90 hover:text-emerald-50",
                        "hover:bg-white/7",
                        isActive &&
                          "bg-emerald-400/15 text-emerald-50 ring-1 ring-emerald-300/20",
                      )
                    }
                  >
                    <Settings />
                    <span>Configurações</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}