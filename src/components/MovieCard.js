import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const posterURL = `https://image.tmdb.org/t/p/w92/${props.movie.poster}`;
  const [singleMovie, setSingleMovie] = useState(props.movie);
  const testfav = true;
  let statement = "";

  function isFavorite() {
    if (testfav === true) {
      statement = <FontAwesomeIcon icon={["fa", "heart"]} color="red" />;
    } else {
      statement = <FontAwesomeIcon icon={["far", "heart"]} />;
    }
    return statement;
  }

  return (
    <div className="grid grid-cols-7 gap-4 px-4 py-2 items-center bg-primaryGreen mb-1">
      <div className="h-40 col-span-1 flex justify-center">
        <img
          src={posterURL}
          className="h-full max-w-full"
          alt={`${props.movie.title} poster`}
        />
      </div>
      <div className="h-12 col-span-1 text-center">{props.movie.title}</div>
      <div className="h-12 col-span-1 text-center">
        {props.movie["release_date"].substr(0, 4)}
      </div>
      <div className="h-12 col-span-1 text-center">
        {props.movie.ratings.average}
      </div>
      <div className="h-12 col-span-1 text-center">
        {props.movie.ratings.popularity.toFixed(1)}
      </div>
      <div className="h-12 col-span-1 text-center">
        <button className="">{isFavorite()}</button>
      </div>
      <div className="col-span-1 text-center">
        <Link to="/movie" state={{ singleMovie: singleMovie }}>
          <button className="m-2 bg-primaryOrange border-secondaryGreen hover:border-primaryOrange border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded">
            Show
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
