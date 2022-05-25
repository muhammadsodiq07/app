import React from "react";
import "./Buttons.scss";

function Buttons(props) {
  const typeHandler = (e) => {
    let btnValue = e.target.textContent
    if (btnValue === "All") {
      props.setNewArr(props.UserObj)
    } else if (e.target.id === "uzbek") {
      props.setNewArr(
        props.UserObj.filter((item) => {
          return item.genre === e.target.id;
        })
      );
    } else if (e.target.id === "Diniy") {
      props.setNewArr(
        props.UserObj.filter((item) => {
          return item.genre === e.target.id;
        })
      );
    } else if (e.target.id === "jahon") {
      props.setNewArr(
        props.UserObj.filter((item) => {
          return item.genre === e.target.id;
        })
      );
    }
  };

  return (
    <li className="category__item">
      <button className="button__btn" onClick={typeHandler} id={props.id}>
        {props.item}
      </button>
    </li>
  );
}

export default Buttons;
