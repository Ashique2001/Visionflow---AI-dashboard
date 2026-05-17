import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 700 },
  { name: "Wed", users: 500 },
  { name: "Thu", users: 900 },
  { name: "Fri", users: 1200 },
  { name: "Sat", users: 1000 },
  { name: "Sun", users: 1400 },
];

const RealChart = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mt-6">
      
      <div className="mb-6">
        <h2 className="text-white text-xl font-semibold">
          Weekly Users
        </h2>

        <p className="text-zinc-400 text-sm">
          User growth analytics
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          
          <LineChart data={data}>
            
            <XAxis dataKey="name" stroke="#888" />

            <YAxis stroke="#888" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              strokeWidth={3}
            />
          </LineChart>

        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RealChart;