import React from "react";

const SingleMovieInfo = (props) => {
	const release_date = props.movie.release_date;
	const release = release_date.slice(0, 4);
	const revenue = props.movie.revenue;
	const revenueComma = revenue.toLocaleString("en-US");
	const tmdb = "https://www.themoviedb.org/movie/";
	const imdb = " https://www.imdb.com/title/";
	const pop = props.movie.ratings.popularity;
	const popCut = pop.toFixed(2);

	return (
		<div className=" bg-secondaryGreen m-3 mt-6 p-1 h-3/4 overflow-auto ">
			<div className=" text-2xl text-center">About The Movie</div>
			<div className="flex flex-wrap">
				<div className="w-1/2  text-center">
					<div className="m-4">
						<div className=" font-bold">Release Date</div>
						<div>{release}</div>
					</div>
					<div className="m-4">
						<div className=" font-bold">Revenue</div>

						<div>${revenueComma} </div>
					</div>
				</div>
				<div className="w-1/2 text-center float-right">
					<div className="m-4">
						<div className=" font-bold">Runtime</div>

						<div>{props.movie.runtime}m</div>
					</div>
					<div className="m-4">
						<div className=" font-bold">Tagline</div>
						<div>{props.movie.tagline}</div>
					</div>
				</div>
				<div className="w-full text-center ">
					<div className=" font-bold mt-3">Overview</div>
					<div>{props.movie.details.overview}</div>
				</div>
				<div className="w-full">
					<div className=" font-bold mt-8">
						Genres:
						{props.movie.details.genres.map((genre) => {
							return (
								<span
									className=" bg-primaryOrange border-solid border-2 border-primaryYellow rounded-md m-1 p-1"
									key={genre.id}
								>
									{genre.name}
								</span>
							);
						})}
					</div>
				</div>
				<div className="w-1/2  text-center mt-8">
					<a target="_blank" href={tmdb + `${props.movie.tmdb_id}`}>
						<button className=" bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded">
							View on TMDB
						</button>
					</a>
				</div>
				<div className="w-1/2 text-center float-right mt-8">
					<a target="_blank" href={imdb + `${props.movie.imdb_id}`}>
						<button className="  bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded">
							View on IMDB
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};
export default SingleMovieInfo;
