import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons/Buttons";
import "./Categories.scss";
import Pagination from "./Pagniton/Pagrion";

function Categories(props) {
  const [currentPage, setCurrentPage] = useState(1);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)
  let categoryArr = [
    "All",
    "O'zbek",
    "Diniy",
    "Jahon",
  ];
  let typeArr = ["All", "uzbek", "Diniy", "jahon"];

  return (
    <div>
      <div>
        <div>
          <h2 className="button__title">Asosiy kategoriyalar</h2>
        </div>
        <ul className="category__list">
          {categoryArr.map((item, index) => {
            return (
              <Buttons
                key={index}
                item={item}
                UserObj={props.UserObj}
                id={typeArr[index]}
                newArr={props.newArr}
                setNewArr={props.setNewArr}
              />
            );
          })}
        </ul>
        <ul id="categories" className="categories container">
          {props.newArr.map((item, i) => {
            if(i < 12) {
              return (
                <>
                  <Link className="categories__links" to={`Yozuvchilar/${item.id}`}>
                    <li key={currentPage.id} className="categories__item">
                     <div className="categories__img-div">
                     <img className="categories__img" src={item.img} alt="avloniy" />
                     </div>
                      <h4 className="categories__name">{item.name}  {item.lastName}</h4>
                      <span className="categories__span">{item.born}{item.died}</span>
                      <div className="categories__icon-div">
                        <i className="bx bxs-book-alt categories__book"></i>
                        <span className="categories__book-span">34</span>
                        <i className="bx bx-headphone categories__music"></i>
                        <span className="categories__music-span">34</span>
                      </div>
                    </li>
                  </Link>
                </>
              );
            }
          })}
          <Pagination
            paginate={paginate}
          />
        </ul>
      </div>
    </div>
  );
}

export default Categories;
