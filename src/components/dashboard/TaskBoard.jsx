import { useState } from "react";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    "Design Dashboard UI",
    "Build Analytics API",
    "Fix Authentication",
  ]);

  const [newTask, setNewTask] = useState("");

  const [showModal, setShowModal] = useState(false);

  // Add Task
  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks([...tasks, newTask]);

    setNewTask("");

    setShowModal(false);
  };

  // Delete Task
  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== taskIndex
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow mt-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          Task Board
        </h2>

        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg"
        >
          + Add Task
        </button>
      </div>

      {/* Tasks */}
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white flex items-center justify-between"
          >
            <span>{task}</span>

            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-[350px] shadow-xl">
            
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
              Add New Task
            </h2>

            <input
              type="text"
              placeholder="Enter task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none"
            />

            <div className="flex justify-end gap-3 mt-4">
              
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-black dark:text-white"
              >
                Cancel
              </button>

              <button
                onClick={addTask}
                className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg"
              >
                Add
              </button>

            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default TaskBoard;