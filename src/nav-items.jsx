import { HomeIcon, Sun, Clock } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "暑假值不值",
    to: "/",
    icon: <Sun className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "倒计时",
    to: "/countdown",
    icon: <Clock className="h-4 w-4" />,
    page: <Index />,
  },
];
