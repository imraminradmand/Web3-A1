import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieListHeader = () => {
	return (
		<div className="grid grid-cols-7 gap-4 px-4 py-2 border-b border-gray-200">
			<div className="col-span-1"></div>
			<div className="text-lg font-medium text-center">
				Title <FontAwesomeIcon icon="arrows-up-down" size="2xs" />
			</div>
			<div className="text-lg font-medium text-center">
				Year <FontAwesomeIcon icon="arrows-up-down" size="2xs" />
			</div>
			<div className="text-lg font-medium text-center">
				Rating <FontAwesomeIcon icon="arrows-up-down" size="2xs" />
			</div>
			<div className="text-lg font-medium text-center">
				Popularity <FontAwesomeIcon icon="arrows-up-down" size="2xs" />
			</div>
			<div className="col-span-2"></div>
		</div>
	);
};

export default MovieListHeader;
