import { NavLink } from "react-router-dom";

export const Tabs = () => {
  return (
    <div className="mt-4 w-[45%] flex bg-gray-200 p-1 rounded-xl">
      <NavLink
        to="/my-board"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 rounded-lg hover:bg-white bg-white"
            : "px-4 py-2 rounded-lg hover:bg-white"
        }
      >
        My Board
      </NavLink>
      <NavLink
        to="/not-found"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 rounded-lg hover:bg-white bg-blue-100 text-blue-700"
            : "px-4 py-2 rounded-lg hover:bg-white"
        }
      >
        Library
      </NavLink>
      <NavLink
        to="/not-found"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 rounded-lg hover:bg-white bg-blue-100 text-blue-700"
            : "px-4 py-2 rounded-lg hover:bg-white"
        }
      >
        To Do Only
      </NavLink>
      <NavLink
        to="/not-found"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 rounded-lg hover:bg-white bg-blue-100 text-blue-700"
            : "px-4 py-2 rounded-lg hover:bg-white"
        }
      >
        Archive
      </NavLink>
    </div>
  );
};
