import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavouriteList from "../components/FavouriteList";
import Header from "../components/Header";
import MovieFilter from "../components/MovieFilter";
import MovieList from "../components/MovieList";

const Listscreen = (props) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies"))
  );
  const [requestMovie, setRequestedMovie] = useState([]);

  useEffect(() => {
    if (!props.searchedMovie) {
      navigate("/");
    }
    if (props.searchedMovie === " ") {
      setRequestedMovie(movies);
    } else {
      const filteredMovie = movies.filter((movie) =>
        movie.title.toLowerCase().includes("a")
      );

      setRequestedMovie(filteredMovie);
    }
  }, [props.searchedMovie, movies, navigate]);

  const [viewFavourite, setViewFavourite] = useState(true);
  const [viewFilter, setViewFilter] = useState(true);

  const viewHandler = () => {
    setViewFavourite(true);
  };

  const hideHandler = () => {
    setViewFavourite(false);
  };

  const viewFilHandler = () => {
    setViewFilter(true);
  };

  const hideFilHandler = () => {
    setViewFilter(false);
  };

  if (viewFavourite === false && viewFilter === true) {
    return (
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center rounded-md">
        <Header />
        <MovieFilter hideFilHandler={hideFilHandler} viewFilter={viewFilter} />
        <MovieList
          viewFav={viewFavourite}
          viewFilter={viewFilter}
          moviesToShow={requestMovie}
        />
        <FavouriteList viewHandler={viewHandler} viewFav={viewFavourite} />
      </div>
    );
  } else if (viewFavourite === true && viewFilter === false) {
    return (
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center rounded-md">
        <Header />
        <MovieFilter viewFilHandler={viewFilHandler} viewFilter={viewFilter} />
        <MovieList
          viewFav={viewFavourite}
          viewFilter={viewFilter}
          moviesToShow={requestMovie}
        />
        <FavouriteList hideHandler={hideHandler} viewFav={viewFavourite} />
      </div>
    );
  } else if (viewFavourite === false && viewFilter === false) {
    return (
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center rounded-md">
        <Header />
        <MovieFilter viewFilHandler={viewFilHandler} viewFilter={viewFilter} />
        <MovieList
          viewFav={viewFavourite}
          viewFilter={viewFilter}
          moviesToShow={requestMovie}
        />
        <FavouriteList viewHandler={viewHandler} viewFav={viewFavourite} />
      </div>
    );
  } else {
    return (
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
        <Header />
        <MovieFilter hideFilHandler={hideFilHandler} viewFilter={viewFilter} />
        <MovieList
          viewFav={viewFavourite}
          viewFilter={viewFilter}
          moviesToShow={requestMovie}
        />
        <FavouriteList hideHandler={hideHandler} viewFav={viewFavourite} />
      </div>
    );
  }
};
export default Listscreen;
