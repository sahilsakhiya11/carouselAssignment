import React from "react";
import PropTypes from "prop-types";

const MenuButton = ({ name }) => {
  return (
    <>
      <button>{name}</button>
    </>
  );
};

MenuButton.propTypes = {
  name: PropTypes.string,
};

export default MenuButton;
