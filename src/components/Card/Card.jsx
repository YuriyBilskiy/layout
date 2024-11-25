import PropTypes from "prop-types";


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
    points: PropTypes.string.isRequired,
  };