import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SingleMovieRating = (props) => {
	const rating = 4.25;

	const MAX_RATING = 10;
	const STAR_ICON = <FontAwesomeIcon icon={["fa", "star"]} size="xs" />; // Full Star
	const HALF_STAR_ICON = <FontAwesomeIcon icon="star-half-alt" size="xs" />; // Half star
	const EMPTY_STAR_ICON = <FontAwesomeIcon icon={["far", "star"]} size="xs" />; // Empty star
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 <= 0.75 && rating % 1 >= 0.25;
	const emptyStars = MAX_RATING - fullStars - (hasHalfStar ? 1 : 0);

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
				<div className="text-center">123456</div>
			</div>
			<div className=" w-1/3 float-right">
				<div className=" text-lg text-center font-bold">Count</div>
				<div className="text-center">123456</div>
			</div>
		</div>
	);

	// if statements depending on the rating

	// if (props.rating >= 0 && props.rating < 0.25) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 0.25 && props.rating < 0.75) {
	// 	<div>
	// 		<FontAwesomeIcon icon="star-half-alt" />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 0.75 && props.rating < 1.25) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 1.25 && props.rating < 1.75) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon="star-half-alt" />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 1.75 && props.rating < 2.25) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 2.25 && props.rating < 2.75) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon="star-half-alt" />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 2.75 && props.rating < 3.25) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 3.25 && props.rating < 3.75) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon="star-half-alt" />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 3.75 && props.rating < 4.25) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 4.25 && props.rating < 4.75) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon="star-half-alt" />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 4.75 && props.rating < 5.25) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 5.25 && props.rating < 5.75) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon="star-half-alt" />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 5.75 && props.rating < 6.25) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 6.25 && props.rating < 6.75) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon="star-half-alt" />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 6.75 && props.rating < 7.25) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 7.25 && props.rating < 7.75) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon="star-half-alt" />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 7.75 && props.rating < 8.25) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 8.25 && props.rating < 8.75) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon="star-half-alt" />
	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 8.75 && props.rating < 9.25) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon={["far", "star"]} />
	// 	</div>;
	// } else if (props.rating >= 9.25 && props.rating < 9.75) {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />

	// 		<FontAwesomeIcon icon="star-half-alt" />
	// 	</div>;
	// } else {
	// 	<div>
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 		<FontAwesomeIcon icon={["fa", "star"]} />
	// 	</div>;
	// }
};
export default SingleMovieRating;
