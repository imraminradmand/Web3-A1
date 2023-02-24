import React, { useState } from "react";

const Filters = () => {
  const [searchType, setSearchType] = useState("Title");
  const [titleInput, setTitleInput] = useState("");
  const [yearInputLower, setYearInputLower] = useState("");
  const [yearInputUpper, setYearInputUpper] = useState("");
  const [ratingInputLower, setRatingInputLower] = useState("");
  const [ratingInputUpper, setRatingInputUpper] = useState("");

  const handleRadioChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleTitleInputChange = (event) => {
    setTitleInput(event.target.value);
  };

  const handleYearInputLowerChange = (event) => {
    setYearInputLower(event.target.value);
  };

  const handleYearInputUpperChange = (event) => {
    setYearInputUpper(event.target.value);
  };

  const handleRatingInputLowerChange = (event) => {
    setRatingInputLower(event.target.value);
  };

  const handleRatingInputUpperChange = (event) => {
    setRatingInputUpper(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center border border-gray-300 rounded-md p-6">
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
        <label className="font-bold">Title</label>
        <input
          type="text"
          value={titleInput}
          onChange={handleTitleInputChange}
          placeholder="Enter a movie title..."
          className="border border-gray-300 rounded-md ml-4 p-1 w-64"
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
          className="border border-gray-300 rounded-md ml-4 p-1 w-64"
          disabled={searchType !== "Genre"}
        >
          <option value="">Select a genre...</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
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
        <label className="font-bold">Year</label>
        <div className="flex ml-4">
          <input
            type="text"
            value={yearInputLower}
            onChange={handleYearInputLowerChange}
            placeholder="Enter lower bound..."
            className="border border-gray-300 rounded-md p-1 w-24 mr-2"
            disabled={searchType !== "Year"}
          />
          <input
            type="text"
            value={yearInputUpper}
            onChange={handleYearInputUpperChange}
            placeholder="Enter upper bound..."
            className="border border-gray-300 rounded-md p-1 w-24"
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
        <label className="font-bold">Rating</label>
        <div className="flex ml-4">
          <input
            type="text"
            value={ratingInputLower}
            onChange={handleRatingInputLowerChange}
            placeholder="Enter lower bound..."
            className="border border-gray-300 rounded-md p-1 w-24 mr-2"
            disabled={searchType !== "Rating"}
          />
          <input
            type="text"
            value={ratingInputUpper}
            onChange={handleRatingInputUpperChange}
            placeholder="Enter upper bound..."
            className="border border-gray-300 rounded-md p-1 w-24"
            disabled={searchType !== "Rating"}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-row items-center">
        <button className="px-6 py-3 rounded-md bg-primaryOrange text-white font-semibold mr-4">
          Filter
        </button>
        <div className="w-4"></div>
        <button className="px-6 py-3 rounded-md bg-primaryOrange text-white font-semibold ml-4">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
