"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Moon, Search, Sun, User2 } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { navItems, titleFromPath } from "@/components/prototype/nav";

type ThemeMode = "system" | "light" | "dark";

type NotificationItem = {
  id: string;
  title: string;
  detail: string;
  time: string;
  unread: boolean;
};

const THEME_STORAGE_KEY = "easydeploy-theme";

function isThemeMode(value: string): value is ThemeMode {
  return value === "system" || value === "light" || value === "dark";
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = titleFromPath(pathname);
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [signedIn, setSignedIn] = useState(true);
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: "n1",
      title: "Deploy completed",
      detail: "storefront-web promoted to production",
      time: "2m ago",
      unread: true,
    },
    {
      id: "n2",
      title: "Preview environment ready",
      detail: "PR #184 can now be tested",
      time: "19m ago",
      unread: true,
    },
    {
      id: "n3",
      title: "Backup finished",
      detail: "postgres-primary snapshot is healthy",
      time: "1h ago",
      unread: false,
    },
  ]);

  const platform = navItems.filter((x) => x.group === "platform");
  const workspace = navItems.filter((x) => x.group === "workspace");
  const unreadCount = useMemo(
    () => notifications.filter((item) => item.unread).length,
    [notifications],
  );

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && isThemeMode(stored)) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const resolvedTheme =
        theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;
      root.classList.toggle("dark", resolvedTheme === "dark");
      root.style.colorScheme = resolvedTheme;
    };

    applyTheme();
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    mediaQuery.addEventListener("change", applyTheme);

    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, [theme]);

  function markNotificationRead(id: string) {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              unread: false,
            }
          : item,
      ),
    );
  }

  function markAllNotificationsRead() {
    setNotifications((prev) =>
      prev.map((item) => ({ ...item, unread: false })),
    );
  }

  return (
    <SidebarProvider>
      <Sidebar
        collapsible="icon"
        variant="inset"
        className="border-r border-sidebar-border/70"
      >
        <SidebarHeader>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg px-2 py-1.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-semibold text-primary-foreground">
              ED
            </span>
            <div className="grid flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-semibold">EasyDeploy</span>
              <span className="text-xs text-muted-foreground">
                Modern deployment control plane
              </span>
            </div>
          </Link>
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
              {platform.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      tooltip={item.label}
                    >
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarMenu>
              {workspace.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      tooltip={item.label}
                    >
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="rounded-lg border border-border/70 bg-muted/30 p-3 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
            <p className="font-medium text-foreground">Prototype Mode</p>
            <p className="mt-1">
              Frontend only. All values are sample placeholders.
            </p>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="bg-muted/25">
        <header className="sticky top-0 z-10 border-b border-border/70 bg-background/95 backdrop-blur">
          <div className="flex h-16 items-center gap-3 px-4 md:px-6">
            <SidebarTrigger className="md:hidden" />

            <Breadcrumb className="hidden sm:block">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <span className="text-muted-foreground">Console</span>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="ml-auto flex items-center gap-2">
              <div className="relative hidden md:block">
                <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search projects, logs, domains"
                  className="h-9 w-64 pl-8"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="relative h-9 w-9 border-border/70 text-muted-foreground hover:text-foreground"
                  >
                    <Bell className="h-4 w-4" />
                    {unreadCount > 0 ? (
                      <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                        {unreadCount}
                      </span>
                    ) : null}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel className="flex items-center justify-between">
                    Notifications
                    <Badge variant="outline" className="px-2">
                      {unreadCount} unread
                    </Badge>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {notifications.map((item) => (
                      <DropdownMenuItem
                        key={item.id}
                        onSelect={() => markNotificationRead(item.id)}
                        className="flex items-start gap-2 py-2"
                      >
                        <div
                          className="mt-1 h-2 w-2 rounded-full bg-primary/75 data-[read=true]:bg-transparent"
                          data-read={!item.unread}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-foreground">
                            {item.title}
                          </p>
                          <p className="truncate text-xs text-muted-foreground">
                            {item.detail}
                          </p>
                          <p className="text-xs text-muted-foreground/80">
                            {item.time}
                          </p>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={markAllNotificationsRead}>
                    Mark all as read
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Badge variant="outline" className="px-3">
                {signedIn ? "Demo User" : "Guest"}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 hover:bg-transparent"
                  >
                    <Avatar className="h-8 w-8 border border-border/70">
                      <AvatarFallback>{signedIn ? "SS" : "GU"}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <p className="text-sm font-medium">Sakib (Demo)</p>
                    <p className="text-xs text-muted-foreground">
                      owner@easydeploy.dev
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/settings">
                        <User2 className="mr-2 h-4 w-4" />
                        Account Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        {theme === "dark" ? (
                          <Moon className="mr-2 h-4 w-4" />
                        ) : (
                          <Sun className="mr-2 h-4 w-4" />
                        )}
                        Theme
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup
                          value={theme}
                          onValueChange={(value) => {
                            if (isThemeMode(value)) {
                              setTheme(value);
                            }
                          }}
                        >
                          <DropdownMenuRadioItem value="system">
                            System
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="light">
                            Light
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="dark">
                            Dark
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  {signedIn ? (
                    <DropdownMenuItem onSelect={() => setSignedIn(false)}>
                      Sign out (demo)
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem onSelect={() => setSignedIn(true)}>
                      Sign in (demo)
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <div className="rounded-2xl border border-border/70 bg-background/85 p-4 shadow-sm md:p-6">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
