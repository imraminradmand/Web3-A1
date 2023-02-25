import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart as farHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowsUpDown,
  faArrowUp,
  faHeart,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Listscreen from "./screens/Listscreen";
import Mainscreen from "./screens/Mainscreen";
library.add(
  faHeart,
  farHeart,
  faStar,
  farStar,
  faStarHalfStroke,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowDown,
  faArrowsUpDown
);

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const url =
          "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=10";
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

  const search = (value) => {
    setSearchTerm(value);
  };

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Mainscreen search={search} />} />
        <Route
          path="/list"
          element={<Listscreen searchedMovie={searchTerm} />}
        />
      </Routes>
    </main>
  );
}

export default App;
