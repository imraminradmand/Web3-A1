import React from "react";
import Searchbar from "../components/Searchbar";

const Mainscreen = () => {
  return (
    <div className="bg-hero bg-center h-screen">
      <div className="flex items-center justify-center flex-col">
        <div>
          <h1 className="font-sans text-7xl text-primaryOrange">
            Movie Browser
          </h1>
        </div>
        <Searchbar />
      </div>
    </div>
  );
};
export default Mainscreen;
