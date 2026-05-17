import {
  LayoutDashboard,
  BarChart3,
  CheckSquare,
  Bot,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <BarChart3 size={20} />,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: <CheckSquare size={20} />,
  },
  {
    name: "AI Assistant",
    path: "/ai",
    icon: <Bot size={20} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings size={20} />,
  },
];

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-5">
      
      <h1 className="text-2xl font-bold text-white mb-10">
        VisionFlow
      </h1>

      <div className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`
            }
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;