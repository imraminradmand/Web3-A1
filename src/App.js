import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mainscreen from "./screens/Mainscreen";
library.add(faCheckSquare, faCoffee, faHeart);

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

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Mainscreen />} />
      </Routes>
    </main>
  );
}

export default App;
