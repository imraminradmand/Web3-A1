import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SingleMovieTitleImage = (props) => {
  if (props.viewFav === true) {
    return (
      <div className=" bg-secondaryGreen m-3 p-1 ">
        <div>
          <button className=" bg-primaryGreen hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded ">
            Return To Search
          </button>
        </div>
        <div className=" text-center font-bold text-4xl p-5">BloodShot</div>
        <div className="p-2 bg-primaryYellow">
          <img
            src="https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg"
            alt="movie poster"
          />
        </div>
        <FontAwesomeIcon icon="check-square" />
        <button>Add</button>
      </div>
    );
  } else {
    return (
      <div className=" bg-secondaryGreen  m-3 p-1">
        <div>
          <button className=" m-2 bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded ">
            Return To Search
          </button>
        </div>
        <div className=" text-center font-bold text-4xl p-5">BloodShot</div>
        <div className="p-2 bg-primaryYellow">
          <img
            src="https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg"
            alt="movie poster"
          />
        </div>
        <button className=" bg-primaryOrange">
          <div>
            <FontAwesomeIcon icon="check-square" />
            <button>Add</button>
          </div>
        </button>
      </div>
    );
  }
};
export default SingleMovieTitleImage;
