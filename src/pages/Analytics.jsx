import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const lineData = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 700 },
  { name: "Wed", users: 500 },
  { name: "Thu", users: 900 },
  { name: "Fri", users: 1200 },
  { name: "Sat", users: 1000 },
  { name: "Sun", users: 1400 },
];

const barData = [
  { name: "Jan", revenue: 2400 },
  { name: "Feb", revenue: 1398 },
  { name: "Mar", revenue: 9800 },
  { name: "Apr", revenue: 3908 },
  { name: "May", revenue: 4800 },
];

const pieData = [
  { name: "Completed", value: 65 },
  { name: "Pending", value: 20 },
  { name: "In Progress", value: 15 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b"];

const Analytics = () => {
  return (
    <div>
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Analytics Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Detailed business insights and reports
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-8">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-400 text-sm">
            Total Users
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            12.4K
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-400 text-sm">
            Revenue
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            $48K
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-400 text-sm">
            Tasks Completed
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            1,240
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-400 text-sm">
            Productivity
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            89%
          </h2>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Line Chart */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          
          <h2 className="text-xl font-semibold text-white mb-5">
            User Growth
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              
              <LineChart data={lineData}>
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

        {/* Bar Chart */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          
          <h2 className="text-xl font-semibold text-white mb-5">
            Monthly Revenue
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />

                <Bar
                  dataKey="revenue"
                  fill="#22c55e"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>

            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 lg:col-span-2">
          
          <h2 className="text-xl font-semibold text-white mb-5">
            Task Distribution
          </h2>

          <div className="h-96 flex items-center justify-center">
            
            <ResponsiveContainer width="100%" height="100%">
              
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>

            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;