import { SendHorizonal } from "lucide-react";

const messages = [
  {
    id: 1,
    type: "ai",
    text: "Hello Ashique 👋 How can I help you today?",
  },
  {
    id: 2,
    type: "user",
    text: "Show this week's analytics summary.",
  },
  {
    id: 3,
    type: "ai",
    text: "Your productivity increased by 18% this week.",
  },
];

const AI = () => {
  return (
    <div className="h-[calc(100vh-120px)] flex flex-col">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">
          AI Assistant
        </h1>

        <p className="text-zinc-400 mt-2">
          Your intelligent workflow assistant
        </p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 overflow-y-auto space-y-4">

        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-xl p-4 rounded-2xl ${
              message.type === "ai"
                ? "bg-zinc-800 text-white"
                : "bg-blue-600 text-white ml-auto"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="mt-5 flex gap-3">
        
        <input
          type="text"
          placeholder="Ask AI anything..."
          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white outline-none"
        />

        <button className="bg-blue-600 hover:bg-blue-700 transition-all px-5 rounded-xl text-white flex items-center justify-center">
          <SendHorizonal size={20} />
        </button>
      </div>
    </div>
  );
};

export default AI;