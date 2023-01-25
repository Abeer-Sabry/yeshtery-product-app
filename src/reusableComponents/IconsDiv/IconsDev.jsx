import React from "react";
import "./IconsDiv.scss";
const IconsDev = ({ colorStyle = false, icon, title, onClick }) => {
  return (
    <div onClick={onClick}>
      <img className="icon" src={icon} alt={title} />
      <span className={colorStyle ? "titleWhite" : "titleGray"}>{title}</span>
    </div>
  );
};

export default IconsDev;
