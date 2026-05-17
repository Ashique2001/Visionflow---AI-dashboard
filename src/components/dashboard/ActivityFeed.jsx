const activities = [
  {
    id: 1,
    text: "New task added to dashboard",
    time: "2 min ago",
  },
  {
    id: 2,
    text: "Analytics report generated",
    time: "10 min ago",
  },
  {
    id: 3,
    text: "Team member updated project",
    time: "30 min ago",
  },
  {
    id: 4,
    text: "AI suggested workflow optimization",
    time: "1 hour ago",
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
      <h2 className="text-xl font-semibold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start justify-between border-b border-zinc-800 pb-4"
          >
            <div>
              <p className="text-sm text-zinc-200">
                {activity.text}
              </p>
            </div>

            <span className="text-xs text-zinc-500">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}