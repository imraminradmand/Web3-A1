import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/animation.css";
import Filters from "./Filters";

const MovieFilter = (props) => {
	if (props.viewFilter === true) {
		return (
			<div className="open bg-secondaryGreen w-1/4 m-1 h-5/6 rounded-md">
				<button
					onClick={props.hideFilHandler}
					className=" float-right h-full bg-primaryYellow hover:bg-lightGrey w-7 rounded-md"
				>
					<div className=" mr-0">
						<FontAwesomeIcon icon="arrow-left" />
					</div>
				</button>
				<Filters
					newFilterResults={props.newFilterResults}
					movies={props.movies}
					filterFunction={props.filtering}
				/>
			</div>
		);
	} else {
		return (
			<div className="closed bg-secondaryGreen w-0 m-1 mr-0 h-5/6 rounded-md">
				<button
					onClick={props.viewFilHandler}
					className=" float-right h-full bg-primaryYellow hover:bg-lightGrey w-7 rounded-md"
				>
					<div className="ml-0">
						<FontAwesomeIcon icon="arrow-right" />
					</div>
				</button>
			</div>
		);
	}
};
export default MovieFilter;
