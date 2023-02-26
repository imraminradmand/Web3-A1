const getFavMovies = () => {
  const favMovies = localStorage.getItem("favMovies");
  return favMovies ? JSON.parse(favMovies) : [];
};

const addToFav = (movie) => {
  const favMovies = getFavMovies();
  favMovies.push(movie);
  localStorage.setItem("favMovies", JSON.stringify(favMovies));
};

export { getFavMovies, addToFav };
