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
export { getFavMovies, addToFav, removeFromFav };
