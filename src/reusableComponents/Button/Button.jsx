import "./Button.scss";

import React from "react";

const Button = ({ bg = true, children }) => {
  return <button className={bg ? "yellow" : "purple"}>{children}</button>;
};

export default Button;
