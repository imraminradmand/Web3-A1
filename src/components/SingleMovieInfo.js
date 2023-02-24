import React from "react";

const SingleMovieInfo = () => {
	return (
		<div className=" bg-secondaryGreen m-3 mt-6 p-1 h-3/4 overflow-auto ">
			<div className=" text-2xl text-center">About The Movie</div>
			<div className="flex flex-wrap">
				<div className="w-1/2  text-center">
					<div className="m-4">
						<div className=" font-bold">Release Date</div>
						<div>March 2020</div>
					</div>
					<div className="m-4">
						<div className=" font-bold">Revenue</div>

						<div>
							$1,200,0000000000000000 hello how are you it just keeps going eh
						</div>
					</div>
				</div>
				<div className="w-1/2 text-center float-right">
					<div className="m-4">
						<div className=" font-bold">Runtime</div>

						<div>1h 4m</div>
					</div>
					<div className="m-4">
						<div className=" font-bold">Tagline</div>
						<div>
							I am the Largest tagline you will ever see in your entire life, it
							just keeps going on and on and on and on and on adn keeps goigng
							foreverrrr
						</div>
					</div>
				</div>
				<div className="w-full text-center ">
					<div className=" font-bold mt-3">Overview</div>
					<div>
						This is the area that the overview will go, it is typcially a longer
						paragraph so i thought I would make the width wider than the other
						categoires because it makes sense, yep it sure does
					</div>
				</div>
				<div className="w-full">
					<div className=" font-bold mt-5">
						Genres:
						<span className=" bg-primaryOrange border-solid border-2 border-primaryYellow rounded-md m-1 p-1">
							Here
						</span>
						<span className=" bg-primaryOrange border-solid border-2 border-primaryYellow rounded-md m-1 p-1">
							Is
						</span>
						<span className=" bg-primaryOrange border-solid border-2 border-primaryYellow rounded-md m-1 p-1">
							Where
						</span>
						<span className=" bg-primaryOrange border-solid border-2 border-primaryYellow rounded-md m-1 p-1">
							Genres
						</span>
						<span className=" bg-primaryOrange border-solid border-2 border-primaryYellow rounded-md m-1 p-1">
							Will
						</span>
						<span className=" bg-primaryOrange border-solid border-2 border-primaryYellow rounded-md m-1 p-1">
							Go
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SingleMovieInfo;
