import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavouriteList from "./FavouriteList";
import Header from "./Header";
import SingleMovieInfo from "./SingleMovieInfo";
import SingleMovieRating from "./SingleMovieRating";
import SingleMovieTitleImage from "./SingleMovieTitleImage";

const SingleMovie = () => {
  const navigate = useNavigate();
  const [viewFavourite, setViewFavourite] = useState(true);

  const viewHandler = () => {
    setViewFavourite(true);
  };

  const hideHandler = () => {
    setViewFavourite(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  if (viewFavourite) {
    return (
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
        <Header />
        <div className=" w-9/12 bg-primaryOrange m-1 flex flex-wrap h-5/6">
          <div className=" w-1/3 h-full">
            <SingleMovieTitleImage viewFav={viewFavourite} goBack={goBack} />
          </div>
          <div className="w-2/3">
            <SingleMovieRating />
            <SingleMovieInfo />
          </div>
        </div>

        {/* Needs to be able to toggle in and out of the page */}

        <FavouriteList hideHandler={hideHandler} viewFav={viewFavourite} />
      </div>
    );
  } else {
    return (
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
        <Header />
        <div className=" w-11/12 bg-primaryOrange m-1 flex flex-wrap h-5/6">
          <div className=" w-1/3">
            <SingleMovieTitleImage viewFav={viewFavourite} />
          </div>
          <div className="w-2/3">
            <SingleMovieRating />
            <SingleMovieInfo />
          </div>
        </div>

        {/* Needs to be able to toggle in and out of the page */}

        <FavouriteList viewHandler={viewHandler} viewFav={viewFavourite} />
      </div>
    );
  }
};
export default SingleMovie;
