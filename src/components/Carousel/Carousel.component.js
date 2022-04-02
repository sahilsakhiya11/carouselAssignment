import React, { useContext, useState, useEffect } from "react";
import { DataContext } from '../../Page/Home';

const Carousel = () => {
    const {data, isFetching} = useContext{DataContext};
    const[slide, setSlide] = useState(0);

    useEffect(()=> {
        setSlide(0)
    }, [isFetching])


    const nextButton = () => {
        if(slide > 0){
            setSlide(slide+1)
        }
    }

    const prevButton = () => {
        if(slide > 0){
            setSlide(slide-1)
        }
    }


    return(
        <div className="carouselContainer">
            <button onClick={prevButton} className="prevButton" disabled={slide === 0} />
            <button onClick={nextButton} className="nextButton" disabled={data ? slide === data.length -1 : slide === 0} />
        </div>
    )
}

export default Carousel;