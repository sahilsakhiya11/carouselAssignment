import React, { useState, useEffect } from "react";
import Carousel from '../components/Carousel/Carousel.component'
import MenuButton from "../components/Button/MenuButton.component";


export const DataContext = React.createContext({
    data: null,
    isFetching: false
})

const Home = () => {
  const [showShark, setShowShark] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [showImages, setShowImages] = useState({
    isFetching: false,
    data: null,
  });

  useEffect(() => {
    shwShark || showCat ? fetchData() : initialData();
  }, [showShark, showCat]);

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
      showShark && showCat ? "initial" : showShark ? "sharks" : "cats";

    setShowImages({
      isFetching: true,
      data: null,
    });

    fetch(`https://localhost:3000/api/${para}`)
      .then((result) => result.json())
      .then((data) => {
        setShowImages({
          data: data,
          isFetching: false,
        });
      })
      .catch((err) => {
        console.log(err);
        setShowImages({
          isFetching: false,
          ...showImages,
        });
      });
  };

  const initialData = () => {
    setShowImages({
      isFetching: false,
      data: null,
    });
  };
  return (
    <div className="container">
      <div className="buttonContainer">
        <MenuButton name="Cat" active={showCat} handleClick={catClick} />
        <MenuButton name="Shark" active={showShark} handleClick={sharkClick} />
      </div>
      <div>
          <DataContext.Provider value={setShowImages}>
              <Carousel />
          </DataContext.Provider>
      </div>
    </div>
  );
};

export default Home;
