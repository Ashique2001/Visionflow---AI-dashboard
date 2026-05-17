import MainLayout from "../layouts/MainLayout";
import AnalyticsCard from "../components/dashboard/AnalyticsCard";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import TaskBoard from "../components/dashboard/TaskBoard";
import AIPanel from "../components/dashboard/AIPanel";
import ActivityFeed from "../components/dashboard/ActivityFeed";

import { dashboardStats } from "../data/dashboardData";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-6">

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardStats.map((item, index) => (
            <AnalyticsCard
              key={index}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>

        {/* Chart */}
        <AnalyticsChart />

        {/* Task Board */}
        <TaskBoard />

        {/* AI Panel */}
        <AIPanel />

        {/* Activity Feed */}
        <ActivityFeed />

      </div>
    </MainLayout>
  );
};

export default Dashboard;