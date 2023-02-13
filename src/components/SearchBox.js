import React, { useState } from "react";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    console.log(JSON.parse(localStorage.getItem("movies")));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-xl w-2/5 bg-lightGrey">
        <input
          type="text"
          placeholder="Search..."
          defaultValue={searchTerm}
          onChange={handleChange}
          className="p-2 w-full border border-gray-400 rounded-lg"
        />
        <div className="flex justify-center mt-4">
          <button
            onClick={handleChange}
            className="bg-primaryOrange text-white py-2 px-4 rounded-lg hover:bg-blue-600 active:outline-none focus:outline-none"
          >
            Show Movie
          </button>
          <button className="ml-4 bg-primaryOrange text-white py-2 px-4 rounded-lg hover:bg-gray-600 active:outline-none focus:outline-none">
            Show All Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
