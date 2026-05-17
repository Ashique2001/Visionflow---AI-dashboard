const Settings = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">
        Settings
      </h1>

      <p className="text-zinc-400 mt-2 mb-8">
        Manage your account settings
      </p>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Profile */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          
          <h2 className="text-xl text-white font-semibold mb-5">
            Profile Settings
          </h2>

          <div className="space-y-4">
            
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 transition-all px-5 py-3 rounded-xl text-white">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          
          <h2 className="text-xl text-white font-semibold mb-5">
            Notifications
          </h2>

          <div className="space-y-5">

            <div className="flex items-center justify-between">
              <p className="text-zinc-300">
                Email Notifications
              </p>

              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-zinc-300">
                Push Notifications
              </p>

              <input type="checkbox" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-zinc-300">
                Weekly Reports
              </p>

              <input type="checkbox" defaultChecked />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          
          <h2 className="text-xl text-white font-semibold mb-5">
            Security
          </h2>

          <div className="space-y-4">

            <input
              type="password"
              placeholder="Current Password"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none"
            />

            <button className="bg-red-600 hover:bg-red-700 transition-all px-5 py-3 rounded-xl text-white">
              Update Password
            </button>
          </div>
        </div>

        {/* Workspace */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          
          <h2 className="text-xl text-white font-semibold mb-5">
            Workspace
          </h2>

          <div className="space-y-4">

            <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none">
              <option>Dark Theme</option>
              <option>Light Theme</option>
            </select>

            <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none">
              <option>English</option>
              <option>Hindi</option>
            </select>

            <button className="bg-green-600 hover:bg-green-700 transition-all px-5 py-3 rounded-xl text-white">
              Save Preferences
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;