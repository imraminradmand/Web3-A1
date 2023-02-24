import React from "react";

const MovieListHeader = () => {
  return (
    <div className="grid grid-cols-7 gap-4 px-4 py-2 border-b border-gray-200">
      <div className="col-span-1"></div>
      <div className="text-lg font-medium">title</div>
      <div className="text-lg font-medium">year</div>
      <div className="text-lg font-medium">rating</div>
      <div className="text-lg font-medium">popularity</div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default MovieListHeader;
