import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

export const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 shadow-md bg-gray-100">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">TraceAI</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="py-2 px-4 hover:bg-gray-200">
            <NavLink
              to="/analytics"
              className={`text-gray-700 ${activeTab === "analytics" ? "bg-blue-100 text-blue-700" : ""}`}
              onClick={() => setActiveTab("analytics")}
            >
              Analytics
            </NavLink>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200">
            <NavLink
              to="/task-list"
              className={`text-gray-700 ${activeTab === "task-list" ? "bg-blue-100 text-blue-700" : ""}`}
              onClick={() => setActiveTab("task-list")}
            >
              Task List
            </NavLink>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200">
            <NavLink
              to="/my-board"
              className={`text-gray-700 ${activeTab === "my-board" ? "bg-blue-100 text-blue-700" : ""}`}
              onClick={() => setActiveTab("My Board")}
            >
              My Board
            </NavLink>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200">
            <NavLink
              to="/notifications"
              className={`text-gray-700 ${activeTab === "notifications" ? "bg-blue-100 text-blue-700" : ""}`}
              onClick={() => setActiveTab("notifications")}
            >
              Notifications
            </NavLink>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200">
            <NavLink
              to="/tutorials"
              className={`text-gray-700 ${activeTab === "tutorials" ? "bg-blue-100 text-blue-700" : ""}`}
              onClick={() => setActiveTab("tutorials")}
            >
              Watch Tutorials
            </NavLink>
          </li>
          <li className="py-2 px-4 hover:bg-gray-200">
            <NavLink
              to="/settings"
              className={`text-gray-700 ${activeTab === "settings" ? "bg-blue-100 text-blue-700" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
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

        <p className="mb-1 , text-gray-400 text-sm">Support</p>
        <p className="text-gray-400 text-sm mb-5">Documentation</p>

        <div className="flex">
          <img src="/" alt="/" className="mr-5"/>
          <div>
            <h2 className="text-sm font-medium">Amrit Singh</h2>
            <div className="flex items-center">
              <p className="text-gray-400">Silver</p>

              <Link className="scroll-ml-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-20"
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};
