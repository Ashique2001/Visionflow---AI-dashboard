import { Routes, Route } from "react-router-dom";

import Dashboard from "@/pages/Dashboard";
import Analytics from "@/pages/Analytics";
import Tasks from "@/pages/Tasks";
import AI from "@/pages/AI";
import Settings from "@/pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/ai" element={<AI />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;