import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="w-64 shadow-md bg-gray-100">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">TraceAI</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="py-2 px-4 hover:bg-gray-200">
            <NavLink to="/not-found" className="text-gray-700">
              Analytics
            </NavLink>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200">
            <NavLink to="/not-found" className="text-gray-700">
              Task List
            </NavLink>
          </li>
          <li className="py-2 px-4 bg-blue-100 text-blue-700 rounded">
            <NavLink to="/not-found">My Board</NavLink>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200">
            <NavLink to="/not-found" className="text-gray-700">
              Notifications
            </NavLink>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200">
            <NavLink to="/not-found" className="text-gray-700">
              Watch Tutorials
            </NavLink>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200">
            <NavLink to="/not-found" className="text-gray-700">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr className="mt-4 border-gray-300 mb-5" />
      <div className="p-4">
        <div className="mb-32 rounded-2xl bg-white p-4 mb-15 flex items-center">
          <img src="/" alt="/" className="flex w-12 h-12" />
          <div>
            <h2 className="text-lg">Start passive mode</h2>
            <p className="text-xs text-gray-400">
              Earn while doing anything on your computer
            </p>
          </div>
        </div>

        <p className="mb-1 , text-gray-700 text-sm">Support</p>
        <p className="text-gray-700 text-sm">Documentation</p>

        <div className="flex">
          <img src="/" alt="/" />
          <div>
            <h2>Amrit Singh</h2>
            <div className="flex items-center">
              <p>silver</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
