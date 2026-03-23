import {
  Activity,
  AppWindow,
  ArchiveRestore,
  CircleDollarSign,
  Database,
  FileCode2,
  Globe,
  LayoutDashboard,
  Logs,
  PlugZap,
  ScanSearch,
  SquareStack,
  Rocket,
  Server,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  group: "platform" | "workspace";
};

export const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: LayoutDashboard,
    group: "platform",
  },
  {
    href: "/projects",
    label: "Applications",
    icon: AppWindow,
    group: "platform",
  },
  { href: "/sources", label: "Sources", icon: PlugZap, group: "platform" },
  {
    href: "/deployments",
    label: "Deployments",
    icon: Rocket,
    group: "platform",
  },
  {
    href: "/preview-environments",
    label: "Previews",
    icon: SquareStack,
    group: "platform",
  },
  { href: "/domains", label: "Domains", icon: Globe, group: "platform" },
  { href: "/databases", label: "Databases", icon: Database, group: "platform" },
  {
    href: "/backups",
    label: "Backups",
    icon: ArchiveRestore,
    group: "platform",
  },
  { href: "/logs", label: "Logs", icon: Logs, group: "platform" },
  {
    href: "/monitoring",
    label: "Monitoring",
    icon: Activity,
    group: "platform",
  },
  { href: "/servers", label: "Servers", icon: Server, group: "platform" },
  {
    href: "/templates",
    label: "Templates",
    icon: FileCode2,
    group: "platform",
  },
  { href: "/team", label: "Team", icon: Users, group: "workspace" },
  {
    href: "/licensing",
    label: "Licensing",
    icon: CircleDollarSign,
    group: "workspace",
  },
  { href: "/audit", label: "Audit", icon: ScanSearch, group: "workspace" },
  { href: "/settings", label: "Settings", icon: Settings, group: "workspace" },
];

export function titleFromPath(pathname: string): string {
  if (pathname.startsWith("/projects/")) {
    return "Project Details";
  }

  const item = navItems.find((x) => x.href === pathname);
  if (item) {
    return item.label;
  }

  if (pathname === "/") {
    return "Overview";
  }

  const last = pathname.split("/").filter(Boolean).at(-1) ?? "overview";
  return last
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
