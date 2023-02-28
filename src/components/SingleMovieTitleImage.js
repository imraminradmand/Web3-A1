import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "react-modal";

const SingleMovieTitleImage = (props) => {
  const URL = `https://image.tmdb.org/t/p/w500/${props.movie.poster}`;
  const title = props.movie.title;
  const testfav = true;
  let statement = "";
  const stars = 10;
  const [rating, setRating] = useState(0);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  Modal.setAppElement("#root");

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function handleStarClick(index) {
    if (rating === 0) {
      setRating(index + 1);
    }
  }

  const handleFavourting = () => {
    if (props.favs.some((movie) => movie.title === props.movie.title)) {
      // Remove the movie from favorites
      const temp = [...props.favs];
      const newArr = temp.filter((movie) => movie.title !== props.movie.title);
      props.setFav(newArr);
    } else {
      // Add the movie to favorites
      props.setFav([...props.favs, props.movie]);
    }
  };

  function isFavorite() {
    if (testfav === true) {
      statement = (
        <button
          onClick={() => handleFavourting()}
          className=" float-right bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded"
        >
          <FontAwesomeIcon icon={["fa", "heart"]} color="red" />
        </button>
      );
    } else {
      statement = (
        <button className=" float-right bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded">
          <FontAwesomeIcon icon={["far", "heart"]} />
        </button>
      );
    }
    return statement;
  }

  if (props.viewFav === true) {
    return (
      <div className=" bg-secondaryGreen m-3 p-1 h-fit ">
        <div>
          <button
            onClick={props.goBack}
            className=" bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded"
          >
            Return To Search
          </button>
          {isFavorite()}
        </div>
        <div className=" text-center font-bold text-4xl p-5">{title}</div>
        <div className="flex justify-center">
          <div onClick={toggleModal} className="p-2 bg-primaryYellow w-2/3 ">
            <img className=" h-full" src={URL} alt="movie poster " />
          </div>
          <Modal
            className=" overflow-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute  bg-primaryYellow border-primaryGreen border-solid border-4 rounded"
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            contentLabel="About Us Modal"
          >
            <img src={URL} alt="movie poster" />
          </Modal>
        </div>
        <div className=" text-center font-bold mt-5">
          Add Your Rating
          <div>
            <div>
              {[...Array(stars)].map((_, index) => (
                <span
                  key={index}
                  className={`cursor-${rating === 0 ? "pointer" : "default"} ${
                    index < rating ? " text-starYellow" : " text-starGrey"
                  }`}
                  onClick={() => handleStarClick(index)}
                >
                  <FontAwesomeIcon icon={["fa", "star"]} />{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" bg-secondaryGreen  m-3 p-1">
        <div>
          <button
            onClick={props.goBack}
            className=" bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded"
          >
            Return To Search
          </button>
          {isFavorite()}
        </div>
        <div className=" text-center font-bold text-4xl p-5">{title}</div>
        <div className="flex justify-center">
          <div onClick={toggleModal} className="p-2 bg-primaryYellow w-2/3 ">
            <img className=" h-full" src={URL} alt="movie poster " />
          </div>
          <Modal
            className=" overflow-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute  bg-primaryYellow border-primaryGreen border-solid border-4 rounded"
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            contentLabel="About Us Modal"
          >
            <img src={URL} alt="movie poster" />
          </Modal>
        </div>
        <div>
          <div className=" text-center font-bold mt-5">
            Add Your Rating
            <div>
              <div>
                {[...Array(stars)].map((_, index) => (
                  <span
                    key={index}
                    className={`cursor-${
                      rating === 0 ? "pointer" : "default"
                    } ${
                      index < rating ? " text-starYellow" : " text-starGrey"
                    }`}
                    onClick={() => handleStarClick(index)}
                  >
                    <FontAwesomeIcon icon={["fa", "star"]} size="lg" />{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default SingleMovieTitleImage;
