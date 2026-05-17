import { Bell, Menu, Search } from "lucide-react";

export default function Navbar({ setSidebarOpen }) {
  return (
    <div className="h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>

        <h1 className="text-2xl font-bold text-white">
          VisionFlow
        </h1>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center bg-zinc-800 px-4 py-2 rounded-xl w-[350px]">
        <Search size={18} className="text-zinc-400" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-3 text-sm w-full text-white"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <button className="relative bg-zinc-800 p-2 rounded-xl hover:bg-zinc-700 transition">
          <Bell size={20} />

          <span className="absolute -top-1 -right-1 bg-cyan-500 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        <div className="flex items-center gap-3 bg-zinc-800 px-3 py-2 rounded-xl">
          <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
            A
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold">
              Ashique
            </p>

            <p className="text-xs text-zinc-400">
              Developer
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}