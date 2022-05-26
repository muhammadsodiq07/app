import React from "react";
import "./SaveBooks.scss";
import "../Nasr/Books/BookPage/BookPage.scss"

function SaveBooks({ save }) {
  return (
    <ul className="save container">
      {save.map((item) => {
        return (
          <>
            <li className="save__item">
              <div className="about__books--img-div">
                <img className="about__books-img" src={item.bookImg} alt="" />
              </div>
              <h4 className="about__book-name">{item.bookName}</h4>
              <p className="about__book-comments commeting">
                <i className="bx bxs-star about__book-icon"></i>
                4.1 • 3400 ta fikrlar
              </p>
            </li>
          </>
        );
      })}
    </ul>
  );
}

export default SaveBooks;
