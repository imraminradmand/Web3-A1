import React from "react";

const MovieList = (props) => {
  if (props.viewFav === true && props.viewFilter === true) {
    return (
      <div className=" bg-secondaryGreen  m-1 p-1 h-5/6 w-1/2">
        {props.moviesToShow.map((movie, i) => {
          return <div key={i}>{movie.title}</div>;
        })}
      </div>
    );
  } else if (props.viewFav === false && props.viewFilter === true) {
    return (
      <div className=" bg-secondaryGreen  m-1 p-1 h-5/6 w-8/12">here 2</div>
    );
  } else if (props.viewFav === true && props.viewFilter === false) {
    return (
      <div className=" bg-secondaryGreen  m-1 p-1 h-5/6 w-9/12">here3</div>
    );
  } else {
    props.moviesToShow.forEach((movie) => {
      return (
        <div className=" bg-secondaryGreen  m-1 p-1 h-5/6 w-11/12">here4</div>
      );
    });
  }
};
export default MovieList;
