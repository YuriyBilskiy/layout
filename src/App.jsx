import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import PropTypes from "prop-types";
// const arrayOfSidebars = ['Analytics', 'Task List', 'My board', 'Notifications']

const App = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">My Board</h2>
        </div>
        {/* Tabs */}
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded">My Board</button>
          <button className="px-4 py-2 hover:bg-gray-200">Library</button>
          <button className="px-4 py-2 hover:bg-gray-200">To Do Only</button>
          <button className="px-4 py-2 hover:bg-gray-200">Archive</button>
        </div>

        {/* Columns */}
        <div className="mt-6 grid grid-cols-4 gap-6">
          {/* Open Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Open (approve to earn)
            </h3>
            <div className="space-y-4">
              <Card
                title="Task t4t - 13 November 2024"
                time="4h"
                points="450"
              />
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
            </div>
          </div>

          {/* Pending Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pending</h3>
            <div className="space-y-4">
              <Card
                title="Recording - 23 September 2024"
                time="3:45:42"
                points="1450"
              />
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
            </div>
          </div>

          {/* Rejected Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              Rejected
            </h3>
            <div className="space-y-4">
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
            </div>
          </div>

          {/* Accepted Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600">
              Accepted
            </h3>
            <div className="space-y-4">
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const Card = ({ title, time, points }) => (
  <div className="bg-white shadow-md rounded p-4">
    <h4 className="font-bold text-gray-800">{title}</h4>
    <p className="text-gray-600 text-sm">{time}</p>
    <p className="text-blue-500 font-semibold">{points} pts</p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
};

export default App;
