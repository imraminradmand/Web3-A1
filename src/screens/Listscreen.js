import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavouriteList from "../components/FavouriteList";
import Header from "../components/Header";
import MovieFilter from "../components/MovieFilter";
import MovieList from "../components/MovieList";
import useLStorage from "../utility/useLStorage";

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
  const [favouritedMovies, setFavoriteMovies] = useLStorage("favMovies", []);

  useEffect(() => {
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
    title = null,
    genre = null,
    lowerYear = null,
    upperYear = null,
    lowerRating = null,
    upperRating = null
  ) => {
    setTitleInput(title);
    setYearInputLower(lowerYear);
    setYearInputUpper(upperYear);
    setRatingInputLower(lowerRating);
    setRatingInputUpper(upperRating);
    setGenreInput(genre);
  };

  if (viewFavourite === false && viewFilter === true) {
    return (
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
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
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
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
      <div className=" bg-primaryGreen h-screen flex flex-wrap justify-center">
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
        <MovieFilter
          hideFilHandler={hideFilHandler}
          viewFilter={viewFilter}
          filtering={handleFiltering}
        />
        <MovieList
          viewFav={viewFavourite}
          viewFilter={viewFilter}
          moviesToShow={requestMovie}
          setFav={setFavoriteMovies}
        />
        <FavouriteList
          hideHandler={hideHandler}
          viewFav={viewFavourite}
          favs={favouritedMovies}
        />
      </div>
    );
  }
};
export default Listscreen;
