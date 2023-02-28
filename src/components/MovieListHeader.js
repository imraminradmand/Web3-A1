import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MovieListHeader = ({ sortHandler }) => {
  const handleSort = (key) => {
    sortHandler(key);
  };

  return (
    <div className="grid grid-cols-7 gap-4 px-4 py-2 border-b border-gray-200">
      <div className="col-span-1"></div>
      <div
        className="text-lg font-medium text-center cursor-pointer"
        onClick={() => handleSort("title")}
      >
        Title <FontAwesomeIcon icon={faSort} size="2xs" />
      </div>
      <div
        className="text-lg font-medium text-center cursor-pointer"
        onClick={() => handleSort("release_date")}
      >
        Year <FontAwesomeIcon icon={faSort} size="2xs" />
      </div>
      <div
        className="text-lg font-medium text-center cursor-pointer"
        onClick={() => handleSort("ratings")}
      >
        Rating <FontAwesomeIcon icon={faSort} size="2xs" />
      </div>
      <div
        className="text-lg font-medium text-center cursor-pointer"
        onClick={() => handleSort("popularity")}
      >
        Popular <FontAwesomeIcon icon={faSort} size="2xs" />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default MovieListHeader;
