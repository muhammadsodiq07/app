import React from "react";
import Users from "../../../../Users";
import "./ButtonBooks.scss";

function ButtonBooks(props) {
  const typeHandler = (e) => {
    Users.forEach((item) => {
      item.bookObj.map((el) => {
        if (e.target.bookId === "All") {
          props.setNewArr(
            Users.filter((item) => {
              return item.genre === e.target.bookId;
            })
          );
        } else if (e.target.bookId === "uzbek") {
          props.setNewArr(
            Users.filter((item) => {
              return item.genre === e.target.bookId;
            })
          );
        } else if (e.target.bookId === "Diniy") {
          props.setNewArr(
            Users .filter((item) => {
              return item.genre === e.target.bookId;
            })
          );
        }
      });
    });
  };

  return (
    <li className="category__item">
      <button className="button__btn" onClick={typeHandler} bookId={props.bookId}>
        {props.item}
      </button>
    </li>
  );
}

export default ButtonBooks;
