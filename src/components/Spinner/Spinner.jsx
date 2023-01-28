import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./Spinner.scss";
const Spinner = () => {
  return (
    <div className="spinnerWrapper">
      <PulseLoader color={"#542E90"} size={20} aria-label="Loading Spinner" data-testid="loader" />
    </div>
  );
};

export default Spinner;
