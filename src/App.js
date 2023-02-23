import React, { useEffect } from "react";
import "./App.css";
import SingleMovie from "./components/SingleMovie";
import Mainscreen from "./screens/Mainscreen";
import Listscreen from "./screens/Listscreen";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
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

	return <SingleMovie />;
}

export default App;
