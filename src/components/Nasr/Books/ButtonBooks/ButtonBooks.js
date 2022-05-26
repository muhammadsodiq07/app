import React from "react";
import Users from "../../../../Users";
import "./ButtonBooks.scss";

function ButtonBooks(props) {
  const typeHandler = (e) => {
   
        if (e.target.id === "All") {
          props.setBookNewArr(
            Users.map((item) => {
              return item;
            })
          );
        } else if (e.target.id === "uzbek") {
          props.setBookNewArr(
            Users.filter((item) => {
              return item.genre.toLocaleLowerCase() === e.target.id.toLocaleLowerCase();
            })
          );
        } else if (e.target.id === "Diniy") {
          props.setBookNewArr(
            Users.filter((item) => {
              return item.genre.toLocaleLowerCase() === e.target.id.toLocaleLowerCase();
            })
          );
        } else if (e.target.id === "Jahon") {
          props.setBookNewArr(
            Users.filter((item) => {
              return item.genre.toLocaleLowerCase() === e.target.id.toLocaleLowerCase();
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

export default ButtonBooks;
