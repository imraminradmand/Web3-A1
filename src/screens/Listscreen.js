import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavouriteList from "../components/FavouriteList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import MovieFilter from "../components/MovieFilter";
import MovieList from "../components/MovieList";

const Listscreen = (props) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies"))
  );
  const [requestMovie, setRequestedMovie] = useState([]);

  const [titleInput, setTitleInput] = useState("");
  const [yearInputLower, setYearInputLower] = useState("");
  const [yearInputUpper, setYearInputUpper] = useState("");
  const [ratingInputLower, setRatingInputLower] = useState("");
  const [ratingInputUpper, setRatingInputUpper] = useState("");
  const [genreInput, setGenreInput] = useState("");

  const [viewFavourite, setViewFavourite] = useState(true);
  const [viewFilter, setViewFilter] = useState(true);
  const [loading, setLoading] = useState(false);

  function newFilterResults(filteredList) {
    setRequestedMovie(filteredList);
  }

  useEffect(() => {
    setLoading(true);
    if (!props.searchedMovie) {
      navigate("/");
    }
    if (props.searchedMovie === " ") {
      const sortedMovies = movies
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title));
      setRequestedMovie(sortedMovies);
    } else {
      const filteredMovie = movies.filter((movie) =>
        movie.title.toLowerCase().includes(props.searchedMovie)
      );
      const sortedMovies = filteredMovie
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title));
      setRequestedMovie(sortedMovies);
    }

    setLoading(false);
  }, [props.searchedMovie, movies, navigate]);

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

  const handleFiltering = (
    title,
    genre,
    lowerYear,
    upperYear,
    lowerRating,
    upperRating
  ) => {
    setTitleInput(title);
    setYearInputLower(lowerYear);
    setYearInputUpper(upperYear);
    setRatingInputLower(lowerRating);
    setRatingInputUpper(upperRating);
    setGenreInput(genre);
  };

  if (loading) {
    // Loading happens too fast to ever see this
    return <Loading />;
  } else {
    if (viewFavourite === false && viewFilter === true) {
      return (
        <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
          <Header />
          <MovieFilter
            hideFilHandler={hideFilHandler}
            viewFilter={viewFilter}
            filtering={handleFiltering}
            movies={movies}
            newFilterResults={newFilterResults}
          />
          <MovieList
            viewFav={viewFavourite}
            viewFilter={viewFilter}
            moviesToShow={requestMovie}
            favs={props.favMovie}
            setFav={props.setFavs}
          />

          <FavouriteList
            viewHandler={viewHandler}
            viewFav={viewFavourite}
            favs={props.favMovie}
            setFav={props.setFavs}
          />
        </div>
      );
    } else if (viewFavourite === true && viewFilter === false) {
      return (
        <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
          <Header />
          <MovieFilter
            viewFilHandler={viewFilHandler}
            viewFilter={viewFilter}
            filtering={handleFiltering}
            movies={movies}
            newFilterResults={newFilterResults}
          />
          <MovieList
            viewFav={viewFavourite}
            viewFilter={viewFilter}
            moviesToShow={requestMovie}
            favs={props.favMovie}
            setFav={props.setFavs}
          />
          <FavouriteList
            hideHandler={hideHandler}
            viewFav={viewFavourite}
            favs={props.favMovie}
            setFav={props.setFavs}
          />
        </div>
      );
    } else if (viewFavourite === false && viewFilter === false) {
      return (
        <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
          <Header />
          <MovieFilter
            viewFilHandler={viewFilHandler}
            viewFilter={viewFilter}
            filtering={handleFiltering}
            movies={movies}
            newFilterResults={newFilterResults}
          />
          <MovieList
            viewFav={viewFavourite}
            viewFilter={viewFilter}
            moviesToShow={requestMovie}
            favs={props.favMovie}
            setFav={props.setFavs}
          />
          <FavouriteList
            viewHandler={viewHandler}
            viewFav={viewFavourite}
            favs={props.favMovie}
            setFav={props.setFavs}
          />
        </div>
      );
    } else {
      return (
        <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
          <Header />
          <MovieFilter
            hideFilHandler={hideFilHandler}
            viewFilter={viewFilter}
            filtering={handleFiltering}
            movies={movies}
            newFilterResults={newFilterResults}
          />
          <MovieList
            viewFav={viewFavourite}
            viewFilter={viewFilter}
            moviesToShow={requestMovie}
            favs={props.favMovie}
            setFav={props.setFavs}
          />
          <FavouriteList
            hideHandler={hideHandler}
            viewFav={viewFavourite}
            favs={props.favMovie}
            setFav={props.setFavs}
          />
        </div>
      );
    }
  }
};
export default Listscreen;
