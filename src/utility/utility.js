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
export { getAllGenres };
