import React from "react";
import SearchBox from "../components/SearchBox";

const Mainscreen = (props) => {
  return (
    <div className="bg-hero bg-contain bg-no-repeat bg-cover">
      <SearchBox search={props.search} />
    </div>
  );
};
export default Mainscreen;
