import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Page/Home";
import SingleImage from "../SingleImage/SingleImage.component";
import './Carousel.styles.css'

const Carousel = () => {
  const {data, isFetching} = useContext(DataContext.Consumer);
  console.log(data)
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    setSlide(0);
  }, [isFetching]);

  const nextButton = () => {
    if(data && slide < data.length - 1){
      setSlide(slide+1)
    }
  };

  const prevButton = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  return (
    <div className="carouselContainer">
      <button
        onClick={prevButton}
        className="prevButtons"
        disabled={slide === 0}
      >&#8656;</button>
      <div classsName="imageContainer">
        <SingleImage src={data ? data[slide] : null} loading={isFetching} />
      </div>
      <button
        onClick={nextButton}
        className="nextButtons"
        disabled={data ? slide === data.length - 1 : slide === 0}
      >&#8658;</button>
    </div>
  );
};

export default Carousel;
