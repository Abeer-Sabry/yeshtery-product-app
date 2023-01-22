import React from "react";

const IconsDev = ({ colorStyle = false, icon, title }) => {
  return (
    <>
      <img className="icon" src={icon} alt={title} />
      <span className={colorStyle ? "titleWhite" : "titleGray"}>{title}</span>
    </>
  );
};

export default IconsDev;
