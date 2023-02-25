import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SingleMovieTitleImage = (props) => {
  const URL = `https://image.tmdb.org/t/p/w500/${props.movie.poster}`;
  const title = props.movie.title;
  const testfav = true;
  let statement = "";

  function isFavorite() {
    if (testfav === true) {
      statement = (
        <button className=" float-right bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded">
          <FontAwesomeIcon icon={["fa", "heart"]} color="red" />
        </button>
      );
    } else {
      statement = (
        <button className=" float-right bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded">
          <FontAwesomeIcon icon={["far", "heart"]} />
        </button>
      );
    }
    return statement;
  }

  if (props.viewFav === true) {
    return (
      <div className=" bg-secondaryGreen m-3 p-1 h-fit ">
        <div>
          <button
            onClick={props.goBack}
            className=" bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded"
          >
            Return To Search
          </button>
          {isFavorite()}
        </div>
        <div className=" text-center font-bold text-4xl p-5">{title}</div>
        <div className="p-2 bg-primaryYellow">
          <img src={URL} alt="movie poster" />
        </div>
        <div className=" text-center">Add Your Rating</div>
      </div>
    );
  } else {
    return (
      <div className=" bg-secondaryGreen  m-3 p-1">
        <div>
          <button className=" m-2 bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded ">
            Return To Search
          </button>
          {isFavorite()}
        </div>
        <div className=" text-center font-bold text-4xl p-5">{title}</div>
        <div className="p-2 bg-primaryYellow">
          <img src={URL} alt="movie poster" />
        </div>
        <button className=" bg-primaryOrange">
          <div>
            <div className=" text-center">Add Your Rating</div>
          </div>
        </button>
      </div>
    );
  }
};
export default SingleMovieTitleImage;
