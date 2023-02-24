import React from "react";

function MovieCard(props) {
  const posterURL = `https://image.tmdb.org/t/p/w92/${props.movie.poster}`;
  return (
    <div className="grid grid-cols-7 gap-4 px-4 py-2">
      <div className="h-40 col-span-1 flex justify-center">
        <img
          src={posterURL}
          className="h-full max-w-full"
          alt={`${props.movie.title} poster`}
        />
      </div>
      <div className="h-12 col-span-1">{props.movie.title}</div>
      <div className="h-12 col-span-1">
        {props.movie["release_date"].substr(0, 4)}
      </div>
      <div className="h-12 col-span-1">{props.movie.ratings.average}</div>
      <div className="h-12 col-span-1">
        {props.movie.ratings.popularity.toFixed(1)}
      </div>
      <div className="h-12 col-span-1">
        <button className="">fav</button>
      </div>
      <div className="h-12 col-span-1">
        <button>Show</button>
      </div>
    </div>
  );
}

export default MovieCard;
