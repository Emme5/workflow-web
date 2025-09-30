import { Blocks, LayoutDashboard, Logs } from "lucide-react";
import { GoGitBranch } from "react-icons/go";

export const sidebarNavLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: <Logs size={18} />,
  },
  {
    name: "Integrations",
    path: "/integrations",
    icon: <Blocks size={18} />,
  },
  {
    name: "Automation",
    path: "/automation",
    icon: <GoGitBranch size={18} />,
  },
];