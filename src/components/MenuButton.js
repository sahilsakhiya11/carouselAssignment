import React from "react";
import PropTypes from "prop-types";

const MenuButton = ({ name, active, handleClick }) => {
  return (
    <>
      <button>{name}</button>
    </>
  );
};

MenuButton.propTypes = {
  name: PropTypes.string,
  active= PropTypes.bool,
  handleClick = PropTypes.func  

};

export default MenuButton;
