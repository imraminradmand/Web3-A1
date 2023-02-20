import React from "react";

const FavouriteList = (props) => {

  if (props.viewFav === true) {

    return (
      <div className=" bg-secondaryGreen m-1 h-5/6 w-1/6 float-right">
        <button onClick={props.hideHandler} className=" float-left h-full bg-primaryYellow hover:bg-lightGrey w-7">
          <div className=" ml-0"> ^ </div>
        </button>
        Favourite List
      </div>
    );
  } else {
    return (
      <div className=" ml-0 m-1 h-5/6 w-0 float-right">
        <button onClick={props.viewHandler} className=" h-full bg-primaryYellow hover:bg-lightGrey w-7">
          <div className=" ml-0"> v </div>
        </button>
        
      </div>
    );
  }
}; 
export default FavouriteList;
