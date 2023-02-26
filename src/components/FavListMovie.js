import React from "react";

const FavListMovie = (props) => {
  const handleRemoveFav = () => {
    const temp = [...props.favs];
    const newArr = temp.filter((movie) => movie !== props.movie);
    // console.log(props.setFavs);
    props.setFavs(newArr);
  };

  return (
    <button
      className="hover:opacity-70 bg-primaryOrange w-full ml-1 mr-1 p-1 rounded-md  flex items-center mb-2"
      onClick={() => {
        handleRemoveFav();
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster}`}
        alt={props.movie.title}
        className="w-20 h-25"
      />
      <div className="ml-2">{props.movie.title}</div>
    </button>
  );
};
export default FavListMovie;
