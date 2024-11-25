import { useNavigate } from "react-router-dom";

export const Tabs = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/not-found");
  };

  return (
    <div className="mt-4 w-3/5 flex bg-gray-200 p-1 rounded-xl">
      <button
        onClick={() => handleClick()}
        className="px-4 py-2  rounded-lg hover:bg-white"
      >
        My Board
      </button>
      <button
        onClick={() => handleClick()}
        className="px-4 py-2 rounded-lg hover:bg-white"
      >
        Library
      </button>
      <button
        onClick={() => handleClick()}
        className="px-4 py-2  rounded-lg hover:bg-white"
      >
        To Do Only
      </button>
      <button
        onClick={() => handleClick()}
        className="px-4 py-2 rounded-lg hover:bg-white"
      >
        Archive
      </button>
    </div>
  );
};
