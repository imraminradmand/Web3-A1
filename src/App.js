
import React, { useEffect } from "react";
import "./App.css";
import Mainscreen from "./screens/Mainscreen";

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const url =
          "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=2";
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem("movies", JSON.stringify(data));
      } catch (err) {
        console.error(err);
      }
    };
    // invoke the async function
    getData();
  }, []);

  return <Mainscreen />;

}

export default App;
