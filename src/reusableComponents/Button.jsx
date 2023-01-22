import React from "react";

const Button = ({ bg = true, children }) => {
  return <button className={bg ? "btn Yellow" : "btn Purple"}>{children}</button>;
};

export default Button;
