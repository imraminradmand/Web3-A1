import React from "react";
import Header from "./Header";

const SingleMovieTitleImage = (props) => {

    if (props.viewFav === true) {
    
        return (
            <div className=" bg-secondaryGreen m-3 p-1 ">
                <div className=" text-center font-bold text-3xl p-5">
                    BloodShot
                </div>
                <div className="p-2 bg-primaryYellow">
                    <img src="https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg" alt="movie poster" />
                </div>
                <button className=" bg-primaryOrange">Add To Favourites </button>
            </div>
        )
            
    } else {

        return (
            <div className=" bg-secondaryGreen  m-3 p-1">
                <div className=" text-center font-bold text-3xl p-5">
                    BloodShot
                </div>
                <div className="p-2 bg-primaryYellow">
                    <img src="https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg" alt="movie poster" />
                </div>
                <button className=" bg-primaryOrange">Add To Favourites </button>
            </div>
        );
    }
            
  
};
export default SingleMovieTitleImage;