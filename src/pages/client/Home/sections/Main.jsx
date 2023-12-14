import React from "react";
import "../../.././../pages/client/Home/sections/Main.css";
import Image from "../../../../../src/assets/working_with_computer.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main-wrapper">
          <div className="main-content">
            <h3>More than just shorter links</h3>
            <p className="p-content">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="main-button-wrapper">
            <button className="btn main-button">Get Started</button>
            </div>
          </div>
          <div className="main-image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
