import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel/Carousel.component";
import MenuButton from "../components/Button/MenuButton.component";
import './Home.styles.css'

// Creating a context to store data 
export const DataContext = React.createContext({
  data: null,
  isFetching: false,
});

const Home = () => {
  // UseState
  const [showShark, setShowShark] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [showImages, setShowImages] = useState({
    isFetching: false,
    data: null,
  });

  useEffect(() => {
    showShark || showCat ? fetchData() : initialData();
  }, [showShark, showCat]);


  const initialData = () => {
    setShowImages({
      isFetching: false,
      data: null,
    });
  };

  
  const sharkClick = (e) => {
    e.preventDefault();
    setShowShark(!showShark);
  };

  const catClick = (e) => {
    e.preventDefault();
    setShowCat(!showCat);
  };

  const fetchData = () => {
    const para =
      showShark && showCat ? "both" : (showShark ? "sharks" : "cats");

    setShowImages({
      isFetching: true,
      data: null,
    });

    fetch(`http://localhost:3000/api/${para}`)
      .then((result) => result.json())
      .then((response) => {
        setShowImages({
          isFetching: false,
          data: response,
        });
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
        setShowImages({
          isFetching: false,
          ...showImages,
        });
      });
  };

  
  console.log(showImages)
  return (
    <div className="container">
      <div className="buttonContainer">
        <MenuButton name="Cat" active={showCat} handleClick={catClick} />
        <MenuButton name="Shark" active={showShark} handleClick={sharkClick} />
      </div>
        <DataContext.Provider value={showImages}>
          <Carousel />
        </DataContext.Provider>
    </div>
  );
};

export default Home;
