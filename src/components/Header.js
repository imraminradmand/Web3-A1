import React from "react";

const Header = () => {
  return (
    <div className=" bg-primaryYellow m-3 p-1 w-full rounded-md">
      <div>We Give You Watch</div>
      <div className=" float-right mr-3">
        <button className=" m-2 bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded">
          About
        </button>
      </div>
    </div>
  );
};
export default Header;
