import React  from "react";
import "./Books.scss";
import "../../Categories/Yozuvchilar/Yozuvchilar.scss";
import ButtonBooks from "./ButtonBooks/ButtonBooks";
import { Link } from "react-router-dom";

function Books(props) {
  let categoryArr = [
    "All",
    "O'zbek",
    "Diniy",
    "Jahon",
  ];
  let typeArr = ["All", "uzbek", "Diniy", "Jahon"];


  return (
    <div>
      <div>
        <h2 className="button__title">Asosiy kategoriyalar</h2>
      </div>
      <ul className="category__list">
        {categoryArr.map((item, index) => {
          return (
            <ButtonBooks
              key={index}
              item={item}
              UserObj={props.UserObj}
              id={typeArr[index]}
              newBookArr={props.newBookArr}
              setBookNewArr={props.setBookNewArr}
            />
          );
        })}
      </ul>
      <ul id="categories" className="bookCotegories container">
        {props.newBookArr.map((item, i) => {
          return item.bookObj.map((item,i) => {
            
              return (
                <>
                  <Link className="newbooks" to={`/BookPage/${item.bookId}`}>
                    <li className="about__item-books bookking">
                      <div className="about__books--img-div">
                        <img className="about__books-img" src={item.bookImg} alt="" />
                      </div>
                      <h4 className="about__book-name">{item.bookName}</h4>
                      {/* <p className="about__author-name">{item.name}</p> */}
                      <p className="about__book-comments commeting">
                        <i className="bx bxs-star about__book-icon"></i>
                        4.3 • 300 ta fikrlar
                      </p>
                    </li>
                  </Link>
                </>
              );
          });
        })}
      </ul>
    </div>
  );
}

export default Books;
