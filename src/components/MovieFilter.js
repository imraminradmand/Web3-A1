import React from "react";
import Filters from "./Filters";

const MovieFilter = (props) => {
  if (props.viewFilter === true) {
    return (
      <div className=" bg-secondaryGreen w-1/4 m-1 h-5/6 rounded-md">
        <button
          onClick={props.hideFilHandler}
          className=" float-right h-full bg-primaryYellow hover:bg-lightGrey w-7 rounded-md"
        >
          <div className=" mr-0"> ^ </div>
        </button>
        <Filters />
      </div>
    );
  } else {
    return (
      <div className=" bg-secondaryGreen w-0 m-1 mr-0 h-5/6 rounded-md">
        <button
          onClick={props.viewFilHandler}
          className=" float-right h-full bg-primaryYellow hover:bg-lightGrey w-7 rounded-md"
        >
          <div className=" ml-0"> v </div>
        </button>
      </div>
    );
  }
};
export default MovieFilter;
