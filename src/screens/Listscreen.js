import React from "react";
import MovieFilter from "../components/MovieFilter";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import FavouriteList from "../components/FavouriteList";
import { useState } from "react";

const Listscreen = () => {

  const [viewFavourite, setViewFavourite] = useState(true);
  const [viewFilter, setViewFilter] = useState(true);
    
  const viewHandler = () => {
    setViewFavourite(true);
  }

  const hideHandler = () => {
    setViewFavourite(false);
  }

  const viewFilHandler = () => {
    setViewFilter(true);
  }

  const hideFilHandler = () => {
    setViewFilter(false);
  }


  if (viewFavourite === false && viewFilter === true) {
    return (
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
        <Header />
        <MovieFilter hideFilHandler={hideFilHandler} viewFilter={viewFilter} />
        <MovieList viewFav={viewFavourite} viewFilter={viewFilter} />
        <FavouriteList viewHandler={viewHandler} viewFav={viewFavourite} />
          
      </div>
    );
  } else if (viewFavourite === true && viewFilter === false) {
    return (
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
        <Header />
        <MovieFilter viewFilHandler={viewFilHandler} viewFilter={viewFilter} />
        <MovieList viewFav={viewFavourite} viewFilter={viewFilter} />
        
        <FavouriteList hideHandler={hideHandler} viewFav={viewFavourite} />
        
      </div>
    );
  } else if (viewFavourite === false && viewFilter === false) {
    return (
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
        <Header />
        <MovieFilter viewFilHandler={viewFilHandler} viewFilter={viewFilter}  />
        <MovieList viewFav={viewFavourite} viewFilter={viewFilter} />
        <FavouriteList viewHandler={viewHandler} viewFav={viewFavourite} />
      </div>
    );
  } else {
    return (
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
        <Header />
        <MovieFilter hideFilHandler={hideFilHandler} viewFilter={viewFilter} />
        <MovieList viewFav={viewFavourite} viewFilter={viewFilter} />
        <FavouriteList hideHandler={hideHandler} viewFav={viewFavourite} />
      </div>
    );
  }
}
export default Listscreen;
