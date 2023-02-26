import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../styles/fade.css";

const FavListMovie = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleRemoveFav = () => {
    const temp = [...props.favs];
    const newArr = temp.filter((movie) => movie !== props.movie);
    props.setFavs(newArr);
    setIsClicked(true);
  };

  return (
    <button
      className={`hover:opacity-70 bg-primaryOrange w-full ml-1 mr-1 p-1 rounded-md flex items-center mb-2 relative`}
      onClick={() => {
        handleRemoveFav();
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster}`}
        alt={props.movie.title}
        className="w-20 h-25"
      />
      <div className="ml-2">{props.movie.title}</div>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 ${
          isClicked ? "opacity-100" : ""
        }`}
      >
        <div
          className={`bg-black rounded-full h-8 w-8 flex items-center justify-center transition-opacity duration-500 ${
            isClicked ? "opacity-0" : "opacity-100"
          }`}
        >
          <FontAwesomeIcon icon={faTimes} className="text-white text-lg" />
        </div>
      </div>
    </button>
  );
};

export default FavListMovie;
