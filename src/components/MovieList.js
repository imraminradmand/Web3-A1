import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieListHeader from "./MovieListHeader";

const MovieList = ({ moviesToShow, viewFav, viewFilter, favs, setFav }) => {
  const [movieList, setMovieList] = useState(moviesToShow);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setMovieList(moviesToShow);
    if (sortKey !== "") {
      const sortedMovies = movieList.sort((a, b) => {
        if (sortOrder === "asc") {
          if (sortKey === "ratings") {
            return a[sortKey]["average"] > b[sortKey]["average"] ? 1 : -1;
          } else if (sortKey === "popularity") {
            return a["ratings"]["popularity"] > b["ratings"]["popularity"]
              ? 1
              : -1;
          } else {
            return a[sortKey] > b[sortKey] ? 1 : -1;
          }
        } else {
          if (sortKey === "ratings") {
            return a[sortKey]["average"] < b[sortKey]["average"] ? 1 : -1;
          } else if (sortKey === "popularity") {
            return a["ratings"]["popularity"] < b["ratings"]["popularity"]
              ? 1
              : -1;
          } else {
            return a[sortKey] < b[sortKey] ? 1 : -1;
          }
        }
      });
      setMovieList(sortedMovies);
    }
  }, [sortKey, sortOrder, movieList, moviesToShow]);

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  if (viewFav === true && viewFilter === true) {
    return (
      <div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-1/2 rounded-md">
        <MovieListHeader sortHandler={handleSort} />
        <div className="bg-secondaryGreen h-5/6 overflow-auto rounded-md mt-3">
          {movieList.map((movie, i) => {
            return (
              <MovieCard key={i} movie={movie} setFav={setFav} favs={favs} />
            );
          })}
        </div>
      </div>
    );
  } else if (viewFav === false && viewFilter === true) {
    return (
      <div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-8/12 rounded-md">
        <div className="bg-secondaryGreen h-5/6 overflow-auto rounded-md mt-3">
          {movieList.map((movie, i) => {
            return <MovieCard key={i} movie={movie} />;
          })}
        </div>
      </div>
    );
  } else if (viewFav === true && viewFilter === false) {
    return (
      <div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-9/12 rounded-md">
        <div className="bg-secondaryGreen h-5/6 overflow-auto rounded-md mt-3">
          {movieList.map((movie, i) => {
            return <MovieCard key={i} movie={movie} />;
          })}
        </div>
      </div>
    );
  } else {
    moviesToShow.forEach((movie) => {
      return (
        <div className=" bg-secondaryGreen m-1 p-1 h-5/6 w-11/12 rounded-md">
          <div className="bg-secondaryGreen h-5/6 overflow-auto rounded-md mt-3">
            {movieList.map((movie, i) => {
              return <MovieCard key={i} movie={movie} />;
            })}
          </div>
        </div>
      );
    });
  }
};
export default MovieList;
