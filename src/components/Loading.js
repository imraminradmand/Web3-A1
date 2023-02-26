// Credit: https://javascript.plainenglish.io/how-to-create-a-page-load-animated-loader-in-react-793d42411fd5

import React from "react";
import "../styles/loader.css";
const Loading = () => {
  return (
    <div id="root">
      <div class="loader-wrapper">
        <div class="loader"></div>
      </div>
    </div>
  );
};

export default Loading;
