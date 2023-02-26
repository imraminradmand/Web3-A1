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
import Loading from "./components/Loading";
import SingleMovie from "./components/SingleMovie";
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
  const [loading, setLoading] = useState(false);
  const [favs, setFavs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      // check if local storage is empty is so fetch data
      if (localStorage.getItem("movies") === null) {
        try {
          const url =
            "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=10";
          const response = await fetch(url);
          const data = await response.json();
          localStorage.setItem("movies", JSON.stringify(data));
        } catch (err) {
          console.error(err);
        }
      }
    };
    // invoke the async function
    getData();
    setLoading(false);
  }, []);

  const search = (value) => {
    setSearchTerm(value);
  };

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route exact path="/" element={<Mainscreen search={search} />} />
          <Route
            path="/list"
            element={
              <Listscreen
                searchedMovie={searchTerm}
                favMovie={favs}
                setFavs={setFavs}
              />
            }
          />
          <Route
            path="/movie"
            element={<SingleMovie favMovie={favs} setFavs={setFavs} />}
          />
        </Routes>
      )}
    </main>
  );
}

export default App;
