const getFavMovies = () => {
  const favMovies = localStorage.getItem("favMovies");
  return favMovies ? JSON.parse(favMovies) : [];
};

const addToFav = (movie) => {
  const favMovies = [];
  favMovies.push(getFavMovies());
  favMovies.push(movie);
  localStorage.setItem("favMovies", JSON.stringify(favMovies));
};

const removeFromFav = (movie) => {
  const favMovies = getFavMovies();

  const newFavMovies = favMovies.filter((m) => m.id !== movie.id);
  localStorage.setItem("favMovies", JSON.stringify(newFavMovies));
};

const getAllGenres = () => {
  const movies = JSON.parse(localStorage.getItem("movies"));

  // look at all the movies pull the genres out and place in an array, no duplicates
  const uniqueGenres = Array.from(
    new Set(
      movies.flatMap((movie) =>
        movie.details?.genres?.map((genre) => genre.name)
      )
    )
  );

  return uniqueGenres;
};
export { getFavMovies, addToFav, removeFromFav, getAllGenres };
