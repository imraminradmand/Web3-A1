import React from "react";
import MovieCard from "./MovieCard";
import MovieListHeader from "./MovieListHeader";

const MovieList = (props) => {
	if (props.viewFav === true && props.viewFilter === true) {
		return (
			<div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-1/2 rounded-md">
				<MovieListHeader />
				<div className="bg-secondaryGreen h-5/6 overflow-auto rounded-md mt-3">
					{props.moviesToShow.map((movie, i) => {
						return <MovieCard key={i} movie={movie} />;
					})}
				</div>
			</div>
		);
	} else if (props.viewFav === false && props.viewFilter === true) {
		return (
			<div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-8/12 rounded-md">
				<MovieListHeader />
				<div className="bg-secondaryGreen h-5/6 overflow-auto rounded-md mt-3">
					{props.moviesToShow.map((movie, i) => {
						return <MovieCard key={i} movie={movie} />;
					})}
				</div>
			</div>
		);
	} else if (props.viewFav === true && props.viewFilter === false) {
		return (
			<div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-3/4 rounded-md">
				<MovieListHeader />
				<div className="bg-secondaryGreen h-5/6 overflow-auto rounded-md mt-3">
					{props.moviesToShow.map((movie, i) => {
						return <MovieCard key={i} movie={movie} />;
					})}
				</div>
			</div>
		);
	} else {
		return (
			<div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-11/12 rounded-md">
				<MovieListHeader />
				<div className="bg-secondaryGreen h-5/6 overflow-auto rounded-md mt-3">
					{props.moviesToShow.map((movie, i) => {
						return <MovieCard key={i} movie={movie} />;
					})}
				</div>
			</div>
		);
	}
};
export default MovieList;
