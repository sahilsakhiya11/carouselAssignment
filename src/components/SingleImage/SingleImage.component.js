import React from "react";
import PropTypes from "prop-types";
import porfolio from './portfolio.png'
import './SingleImage.styles.css';

import Loading from "../Loading/Loading.component";

const SingleImage = ({ src, loading }) => {
  let Image = (
    <a href="http://sahil-code.herokuapp.com/" target="_blank"  rel="noreferrer">
      <img src={porfolio} alt="Portfolio Image" className="portfolioImage" />
  </a>
  );

  if(loading){
    Image = (
      <div className="loadingContainer">
        <Loading />
      </div>
    );
  } else if(src){
    Image = (
      <div>
        <img src={src} className="singleImage" />
      </div>
    )
  } 
  

  return (
    <div>
      {Image}
    </div>
  );
};

SingleImage.propTypes = {
  src: PropTypes.string,
  loading: PropTypes.bool,
};
export default SingleImage;
