import { Link } from "react-router-dom";
import { data } from "../../data/cards.js";
import { getStatusColor } from "../../utils/statusUtils.js";

export const Card = () => {
  return (
    <div className="flex gap-4 p-6">
      {Object.entries(data).map(([status, cards]) => (
        <div
          key={status}
          className="flex-1 min-w-[280px] p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-md min-h-0"
        >
          <div className="flex gap-5">
            <div className={`w-1 h-6 ${getStatusColor(status)} mb-4 `}></div>
            <h2 className="text-lg font-bold mb-4 text-black flex items-center gap-5">
              {status === "Open" ? (
                <>
                  {status} <p className="text-gray-400 text-xs">(approve to eam)</p>
                </>
              ) : (
                status
              )}
            </h2>
            <span className="ml-2 text-gray-500 text-xs items-center bg-gray-200 p-1 w-7 h-7 flex justify-center">
              {cards.length}
            </span>
          </div>

          <div className="space-y-4">
            {cards.map((card) => (
              <Link
                to={`/not-found`}
                key={card.id}
                className="flex flex-col items-center bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src="/" 
                  alt={card.title} 
                  className="w-full h-40 bg-gray-200 rounded-md mb-4"
                />
                <div className="text-center">
                  <h3 className="text-base font-semibold text-gray-800">
                    {card.title}
                  </h3>
                  <div className="flex items-center justify-center gap-5">

                  <p className="text-sm text-gray-500">{card.points} pts</p>
                  <p className="text-sm text-gray-500">Time: {card.time} pts</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
