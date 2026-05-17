// import { Card } from "../ui/card";
// import { motion } from "framer-motion";

// export default function AnalyticsCard({
//   title,
//   value,
//   change,
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
//     >
//       <p className="text-zinc-400 text-sm">
//         {title}
//       </p>

//       <h2 className="text-3xl font-bold mt-2">
//         {value}
//       </h2>

//       <p className="text-cyan-400 text-sm mt-2">
//         {change}
//       </p>
//     </motion.div>
//   );
// }
const AnalyticsCard = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
      <h2 className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-2 text-black dark:text-white">
        {value}
      </p>
    </div>
  );
};

export default AnalyticsCard;