import React, { useState } from "react";
import { getAllGenres } from "../utility/utility";

const Filters = (props) => {
	const [searchType, setSearchType] = useState("Title");
	const [titleInput, setTitleInput] = useState("");
	const [yearInputLower, setYearInputLower] = useState("");
	const [yearInputUpper, setYearInputUpper] = useState("");
	const [ratingInputLower, setRatingInputLower] = useState("");
	const [ratingInputUpper, setRatingInputUpper] = useState("");
	const [selectedOption, setSelectedOption] = useState("");

	const genreList = getAllGenres();

	const handleRadioChange = (event) => {
		setSearchType(event.target.value);
		// set all states to empty
		setTitleInput("");
		setYearInputLower("");
		setYearInputUpper("");
		setRatingInputLower("");
		setRatingInputUpper("");
		setSelectedOption("");
	};

	const clearFilters = () => {
		setSearchType("");
		setTitleInput("");

		setYearInputLower("");
		setYearInputUpper("");
		setRatingInputLower("");
		setRatingInputUpper("");

		props.newFilterResults(props.movies);
	};

	const handleTitleInputChange = (event) => {
		setTitleInput(event.target.value);
		handleFilterClick();
	};

	const handleYearInputLowerChange = (event) => {
		setYearInputLower(event.target.value);
		handleFilterClick();
	};

	const handleYearInputUpperChange = (event) => {
		setYearInputUpper(event.target.value);
		handleFilterClick();
	};

	const handleRatingInputLowerChange = (event) => {
		setRatingInputLower(event.target.value);
		handleFilterClick();
	};

	const handleRatingInputUpperChange = (event) => {
		setRatingInputUpper(event.target.value);
		handleFilterClick();
	};

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
		handleFilterClick();
	};

	const handleFilterClick = () => {
		props.filterFunction(
			titleInput,
			yearInputLower,
			yearInputUpper,
			ratingInputLower,
			ratingInputUpper,
			selectedOption
		);
	};

	const filterMovies = () => {
		if (searchType === "Title") {
			const filteredMovies = props.movies.filter((movie) =>
				movie.title.toLowerCase().includes(titleInput.toLowerCase())
			);

			props.newFilterResults(filteredMovies);
		} else if (searchType === "Genre") {
			const filteredMovies = props.movies.filter((movie) =>
				movie.details.genres.some((genre) => genre.name === selectedOption)
			);
			props.newFilterResults(filteredMovies);
		} else if (searchType === "Year") {
			const filteredMovies = props.movies.filter(
				(movie) =>
					movie.release_date.slice(0, 4) >= yearInputLower &&
					movie.release_date.slice(0, 4) <= yearInputUpper
			);
			props.newFilterResults(filteredMovies);
		} else {
			const filteredMovies = props.movies.filter(
				(movie) =>
					movie.ratings.average >= ratingInputLower &&
					movie.ratings.average <= ratingInputUpper
			);

			props.newFilterResults(filteredMovies);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center rounded-md p-6">
			<h2 className="text-xl font-bold mb-4">Filter Movies</h2>
			<div className="flex items-center mb-4">
				<input
					type="radio"
					value="Title"
					checked={searchType === "Title"}
					onChange={handleRadioChange}
					id="title-radio"
					className="mr-2"
				/>
				<label className="font-bold mr-2">Title</label>
				<input
					type="text"
					value={titleInput}
					onChange={handleTitleInputChange}
					placeholder="Enter a movie title..."
					className="border rounded-md ml-4 p-1 w-3/4"
					disabled={searchType !== "Title"}
				/>
			</div>
			<div className="flex items-center mb-4">
				<input
					type="radio"
					value="Genre"
					checked={searchType === "Genre"}
					onChange={handleRadioChange}
					id="genre-radio"
					className="mr-2"
				/>
				<label className="font-bold">Genre</label>
				<select
					className="border rounded-md ml-4 p-1 w-48 mr-2"
					disabled={searchType !== "Genre"}
					value={selectedOption}
					onChange={handleSelectChange}
				>
					<option value="">Select a genre...</option>
					{genreList.map((genre, i) => (
						<option key={i} value={genre}>
							{genre}
						</option>
					))}
				</select>
			</div>
			<div className="flex items-center mb-4">
				<input
					type="radio"
					value="Year"
					checked={searchType === "Year"}
					onChange={handleRadioChange}
					id="year-radio"
					className="mr-2"
				/>
				<label className="font-bold pr-3">Year</label>
				<div className="flex ml-4">
					<input
						type="text"
						value={yearInputLower}
						onChange={handleYearInputLowerChange}
						placeholder="Enter lower bound..."
						className="border rounded-md p-1 w-24 mr-2"
						disabled={searchType !== "Year"}
					/>
					<input
						type="text"
						value={yearInputUpper}
						onChange={handleYearInputUpperChange}
						placeholder="Enter upper bound..."
						className="border rounded-md p-1 w-24"
						disabled={searchType !== "Year"}
					/>
				</div>
			</div>
			<div className="flex items-center">
				<input
					type="radio"
					value="Rating"
					checked={searchType === "Rating"}
					onChange={handleRadioChange}
					id="rating-radio"
					className="mr-2"
				/>
				<label className="font-bold -mr-2">Rating</label>
				<div className="flex ml-4">
					<input
						type="text"
						value={ratingInputLower}
						onChange={handleRatingInputLowerChange}
						placeholder="Enter lower bound..."
						className="border rounded-md p-1 w-24 mr-2"
						disabled={searchType !== "Rating"}
					/>
					<input
						type="text"
						value={ratingInputUpper}
						onChange={handleRatingInputUpperChange}
						placeholder="Enter upper bound..."
						className="border rounded-md p-1 w-24"
						disabled={searchType !== "Rating"}
					/>
				</div>
			</div>
			<div className="mt-4 flex flex-row items-center">
				<button
					onClick={filterMovies}
					className=" hover:border-primaryOrange hover:border-2 hover:bg-primaryYellow border-primaryOrange px-6 py-3 rounded-md bg-primaryOrange text-white font-semibold mr-4"
				>
					Filter
				</button>
				<div className="w-4"></div>
				<button
					onClick={clearFilters}
					className="  hover:border-primaryOrange hover:border-2 hover:bg-primaryYellow border-primaryOrange px-6 py-3 rounded-md bg-primaryOrange text-white font-semibold ml-4"
				>
					Clear Filters
				</button>
			</div>
		</div>
	);
};

export default Filters;
