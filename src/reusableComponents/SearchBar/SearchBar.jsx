import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ placeholder, absolute, className }) => {
  return (
    <div className="SearchInput">
      <input placeholder={placeholder} type="text" />
      <div className={`${className} absoluteDiv`}>{absolute}</div>
    </div>
  );
};

export default SearchBar;
