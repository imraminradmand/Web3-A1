import React from "react";

const MovieList = (props) => {

  if (props.viewFav === true && props.viewFilter === true) {
    return (
      <div className=" bg-secondaryGreen  m-1 p-1 h-5/6 w-1/2">
        MovieList
      </div>
    );
  } else if (props.viewFav === false && props.viewFilter === true) {
    return (
      <div className=" bg-secondaryGreen  m-1 p-1 h-5/6 w-8/12">
        MovieList
      </div>
    );
  }
  else if (props.viewFav === true && props.viewFilter === false) {
    return (
      <div className=" bg-secondaryGreen  m-1 p-1 h-5/6 w-9/12">
        MovieList
      </div>
    );
  } else {
    return (
      <div className=" bg-secondaryGreen  m-1 p-1 h-5/6 w-11/12">
        MovieList
      </div>
    );
  }

};
export default MovieList;
