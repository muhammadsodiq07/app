import React from "react";
import "./Search.scss";
import Users from "../../../Users"

function Search(props) {
  let temp = [];
  const searchHandler = (e) => {
    Users.forEach((item, index) => {
      if (
        item.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      ) {
        temp.push(item);
      }
    });
    props.setNewArr(temp);
  };
  return (
    <div>
      <div className="search container">
        <div className="search__title-div">
          <h3 className="search__title">Qidirish</h3>
        </div>
        <div className="search__input-div">
          <input
            onChange={searchHandler}
            className="search__input"
            type="text"
            placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
          />
          <button className="search__btn">
            <div className="search__icon-div">
              <i className="bx bx-search-alt search__input-icon"></i>
              Izlash
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
