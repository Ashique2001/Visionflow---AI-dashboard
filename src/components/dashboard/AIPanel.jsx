import { motion } from "framer-motion";

export default function AIPanel() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
      <h2 className="text-xl font-semibold mb-4">
        AI Assistant
      </h2>

      <div className="space-y-4">
        <div className="bg-zinc-800 p-4 rounded-xl">
          <p className="text-sm text-zinc-300">
            Suggest improvements for dashboard UX
          </p>
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl">
          <p className="text-sm text-zinc-300">
            Generate weekly analytics report
          </p>
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl">
          <p className="text-sm text-zinc-300">
            Optimize project workflow
          </p>
        </div>
      </div>

     <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.95 }}
  className="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold py-3 rounded-xl"
>
  Ask AI
</motion.button>
    </div>
  );
}