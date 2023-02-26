import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import FavListMovie from "./FavListMovie";

const FavouriteList = (props) => {
  const [favs, setFavs] = useState(props.favs);

  useEffect(() => {
    setFavs(props.favs);
  }, [props.favs]);

  if (props.viewFav === true) {
    return (
      <div className=" bg-secondaryGreen m-1 h-5/6 w-1/6 float-right rounded-md overflow-auto">
        <button
          onClick={props.hideHandler}
          className=" float-left h-full bg-primaryYellow hover:bg-lightGrey w-7 rounded-md"
        >
          <div className=" ml-0">
            <FontAwesomeIcon icon="arrow-right" />
          </div>
        </button>
        <div className=" text-center mt-2 font-bold">Favourites</div>
        <div className="mt-5 flex flex-col items-center">
          {favs.map((movie, i) => (
            <FavListMovie movie={movie} key={i} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className=" ml-0 m-1 h-5/6 w-0 float-right rounded-md">
        <button
          onClick={props.viewHandler}
          className=" h-full bg-primaryYellow hover:bg-lightGrey w-7 rounded-md"
        >
          <div className=" ml-0">
            {" "}
            <FontAwesomeIcon icon="arrow-left" />
          </div>
        </button>
      </div>
    );
  }
};
export default FavouriteList;
