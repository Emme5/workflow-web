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

export const pathInfo = {
  dashboard: {
    path: "Dashboard",
    subtitle: "Analytics of tender"
  },
  orders: {
    path: "Orders",
    subtitle: "Database of tender"
  },
  integrations: {
    path: "Integrations",
    subtitle: "Connection of you favorites tools and their power"
  },
};

export const orderStatuses = [
  { value: "on-time", label: "On-time" },
  { value: "delay", label: "Delay" },
  { value: "delivered", label: "Delivered" },
]

export const orderTableColumns = [
  { key: "id", label: "Order Id" },
  { key: "destination", label: "Destination" },
  { key: "cargo", label: "Cargo" },
  { key: "price", label: "Price" },
  { key: "deliveryDate", label: "Delivery Date" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Actions" },
];

export const orderTableData = [
  {
    id: "INV001",
    destination: "Bangkok",
    cargo: "Electronics",
    price: "$520.00",
    deliveryDate: "2025-10-15",
    status: "On-time",
  },
  {
    id: "INV002",
    destination: "Chiang Mai",
    cargo: "Furniture",
    price: "$1,200.00",
    deliveryDate: "2025-10-20",
    status: "Delay",
  },
  {
    id: "INV003",
    destination: "Phuket",
    cargo: "Clothes",
    price: "$300.00",
    deliveryDate: "2025-10-25",
    status: "Delivered",
  },
];