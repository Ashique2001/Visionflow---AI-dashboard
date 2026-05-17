import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card } from "../ui/card";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 700 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 900 },
  { name: "May", users: 1200 },
  { name: "Jun", users: 950 },
];

const AnalyticsChart = () => {
  return (
    <Card className="w-full h-[400px]">
      <h2 className="text-xl font-semibold mb-6">
        User Analytics
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default AnalyticsChart;
