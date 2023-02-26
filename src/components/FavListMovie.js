import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/fade.css";

const FavListMovie = (props) => {
  const navigate = useNavigate();

  const [singleMovie, setSingleMovie] = useState(props.movie);

  const [isClicked, setIsClicked] = useState(false);

  const handleRemoveFav = () => {
    const temp = [...props.favs];
    const newArr = temp.filter((movie) => movie !== props.movie);
    props.setFavs(newArr);
    setIsClicked(true);
  };

  return (
    <div
      className={` bg-primaryOrange w-full ml-1 mr-1 p-1 rounded-md flex items-center mb-2 relative`}
    >
      <Link to="/movie" state={{ singleMovie: singleMovie }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster}`}
          alt={props.movie.title}
          className="w-20 max-w-20 h-20 "
        />
      </Link>
      <div className="ml-2">{props.movie.title}</div>
      <button
        onClick={() => {
          handleRemoveFav();
        }}
        className={`  absolute top-0 pl-10 pb-10  right-0 flex items-center justify-center opacity-0 hover:opacity-100 ${
          isClicked ? "opacity-100" : ""
        }`}
      >
        <div
          className={`bg-black rounded-full  h-8 w-8 flex items-center justify-center transition-opacity duration-500 hover:opacity-100 ${
            isClicked ? "opacity-0" : "opacity-100"
          }`}
        >
          <FontAwesomeIcon icon={faTimes} className="text-white text-lg" />
        </div>
      </button>
    </div>
  );
};

export default FavListMovie;
