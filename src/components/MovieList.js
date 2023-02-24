import React from "react";
import MovieCard from "./MovieCard";
import MovieListHeader from "./MovieListHeader";

const MovieList = (props) => {
  if (props.viewFav === true && props.viewFilter === true) {
    return (
      <div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-1/2 overflow-auto rounded-md">
        <MovieListHeader />
        {props.moviesToShow.map((movie, i) => {
          return <MovieCard key={i} movie={movie} />;
        })}
      </div>
    );
  } else if (props.viewFav === false && props.viewFilter === true) {
    return (
      <div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-8/12 rounded-md">
        here 2
      </div>
    );
  } else if (props.viewFav === true && props.viewFilter === false) {
    return (
      <div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-9/12 rounded-md">
        here3
      </div>
    );
  } else {
    props.moviesToShow.forEach((movie) => {
      return (
        <div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-11/12 rounded-md">
          here4
        </div>
      );
    });
  }
};
export default MovieList;
