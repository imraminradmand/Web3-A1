import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "./Header";

const SingleMovieRating = () => {
	return (
		<div className=" bg-secondaryGreen m-3 p-1 h-1/6">
			<div className=" text-2xl text-center">
				Rating
				<div>
					<FontAwesomeIcon icon="heart" />
				</div>
			</div>
		</div>
	);
};
export default SingleMovieRating;
