import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SingleMovieRating = (props) => {
	const rating = props.movie.ratings.average;

	const MAX_RATING = 10;
	const STAR_ICON = <FontAwesomeIcon icon={["fa", "star"]} size="xs" />; // Full Star
	const HALF_STAR_ICON = <FontAwesomeIcon icon="star-half-alt" size="xs" />; // Half star
	const EMPTY_STAR_ICON = <FontAwesomeIcon icon={["far", "star"]} size="xs" />; // Empty star
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 <= 0.75 && rating % 1 >= 0.25;
	const emptyStars = MAX_RATING - fullStars - (hasHalfStar ? 1 : 0);

	const pop = props.movie.ratings.popularity;
	const popCut = pop.toFixed(2);

	const fullStarElements = Array.from({ length: fullStars }, (_, index) => (
		<span key={index} className="star">
			{STAR_ICON}
		</span>
	));

	if (hasHalfStar) {
		fullStarElements.push(
			<span key="half-star" className="star half-star">
				{HALF_STAR_ICON}
			</span>
		);
	}

	const emptyStarElements = Array.from({ length: emptyStars }, (_, index) => (
		<span key={index} className="star">
			{EMPTY_STAR_ICON}
		</span>
	));

	return (
		<div className=" bg-secondaryGreen m-3 p-1 h-1/6  flex flex-wrap">
			<div className=" w-full text-center text-2xl">Rating</div>

			<div className=" w-1/3">
				<div className=" text-lg text-center font-bold">Average</div>
				<div className=" align-middle justify-center justify-items-center flex ">
					{fullStarElements}
					{emptyStarElements}
				</div>
			</div>
			<div className=" w-1/3">
				<div className=" text-lg text-center font-bold">Popularity</div>
				<div className="text-center">{popCut}</div>
			</div>
			<div className=" w-1/3 float-right">
				<div className=" text-lg text-center font-bold">Count</div>
				<div className="text-center">{props.movie.ratings.count}</div>
			</div>
		</div>
	);
};
export default SingleMovieRating;
