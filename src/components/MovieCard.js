import React from "react";

function MovieCard(props) {
  return (
    <div className="grid grid-cols-7 gap-4 px-4 py-2">
      <div className="bg-gray-200 h-12 col-span-1">1</div>
      <div className="bg-gray-300 h-12 col-span-1">2</div>
      <div className="bg-gray-400 h-12 col-span-1">3</div>
      <div className="bg-gray-500 h-12 col-span-1">4</div>
      <div className="bg-gray-600 h-12 col-span-1">5</div>
      <div className="bg-gray-700 h-12 col-span-1">6</div>
      <div className="bg-gray-800 h-12 col-span-1">7</div>
    </div>
  );
}

export default MovieCard;
