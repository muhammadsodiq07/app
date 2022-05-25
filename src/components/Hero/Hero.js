import React, { useState } from "react";
import "./Hero.scss";
import hero from "../../assets/imgs/hero.png";
import Search from "./Search/Search";

function Hero(props) {
  const [secondSlide, setsecondSlide] = useState("first");

  const moveToFirst = () => {
    setsecondSlide("first");
  };
  const moveToSecond = () => {
    setsecondSlide("second");
  };
  const moveToThird = () => {
    setsecondSlide("third");
  };
  const moveToFourth = () => {
    setsecondSlide("four");
  };
  return (
    <div>
      <div className="hero">
        <div className="hero-container container">
          <div className="top-img-container">
            <div
              className={`${
                secondSlide === "first"
                  ? "img-slide to-firstSlide"
                  : secondSlide === "second"
                  ? "img-slide to-secondSlide"
                  : secondSlide === "third"
                  ? "img-slide to-thirdSlide"
                  : secondSlide === "four"
                  ? "img-slide to-fourSlide"
                  : "img-slide"
              }`}
            >
              <img src={hero} alt="img" />
              <img src={hero} alt="img" />
              <img src={hero} alt="img" />
              <img src={hero} alt="img" />
            </div>
          </div>
          <div className="bottom-im-slider">
            <button
              onClick={moveToFirst}
              className={`hero__btn ${
                secondSlide === "first" ? "active2" : ""
              }`}
            >
              <div className="hero__btn-icon"></div>
            </button>
            <button
              onClick={moveToSecond}
              className={`hero__btn ${
                secondSlide === "second" ? "active2" : ""
              }`}
            >
              <div className="hero__btn-icon"></div>
            </button>
            <button
              onClick={moveToThird}
              className={`hero__btn ${
                secondSlide === "third" ? "active2" : ""
              }`}
            >
              <div className="hero__btn-icon"></div>
            </button>
            <button
              onClick={moveToFourth}
              className={`hero__btn ${secondSlide === "four" ? "active2" : ""}`}
            >
              <div className="hero__btn-icon"></div>
            </button>
          </div>
        </div>
      </div>
      <Search newArr={props.newArr} setNewArr={props.setNewArr} />
    </div>
  );
}

export default Hero;
