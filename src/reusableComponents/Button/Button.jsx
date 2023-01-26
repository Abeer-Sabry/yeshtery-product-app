import "./Button.scss";

import React from "react";

const Button = ({ bg = true, children, onClick }) => {
  return (
    <button onClick={onClick} className={bg ? "yellow" : "purple"}>
      {children}
    </button>
  );
};

export default Button;
