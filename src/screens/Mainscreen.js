import React from "react";
import SearchBox from "../components/SearchBox";

const Mainscreen = (props) => {
  return (
    <div className="bg-hero bg-contain bg-no-repeat bg-cover">
      <div className="pb-4">
        <SearchBox search={props.search} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center text-white">
        <a href="https://unsplash.com/@thomasw">
          <p className="text-md">Credit: Thomas William</p>
        </a>
      </div>
    </div>
  );
};
export default Mainscreen;
