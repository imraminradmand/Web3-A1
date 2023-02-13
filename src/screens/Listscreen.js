import React from "react";
import MovieFilter from "../components/MovieFilter";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import FavouriteList from "../components/FavouriteList";

const Listscreen = () => {
  return (
    <div className="bg-blue-100 h-screen flex flex-wrap justify-center">
      <Header />
      <MovieFilter />
      <MovieList />
      <FavouriteList />
          
    </div>
  );
};
export default Listscreen;
