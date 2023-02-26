import React from "react";

const FavListMovie = (props) => {
  return (
    <button className=" hover:opacity-70 bg-primaryOrange w-full ml-1 mr-1 p-1 rounded-md  flex items-center mb-2">
      <img
        src="https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg"
        alt="Movie1"
        className="w-20 h-25"
      />
      <div className="ml-2">Movie1</div>
    </button>
  );
};
export default FavListMovie;
