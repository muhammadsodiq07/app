import React from "react";
import "./Yozuvchilar.scss";
import { Link,useLocation } from "react-router-dom";
// import obj from "../../../Object";
import Users from "../../../Users";


function Yozuvchilar() {
  let location = useLocation();

  return (
    <div>
      {Users.map((item, i) => {
        if (item.id === location.pathname.split("/").at(-1)) {
          return (
            <>
              <div className="about">
                <div className="about__left">
                  <div className="about__img-div">
                    <img
                      key={i}
                      className="about__img"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="about__both-div">
                    <div className="about__both-year">
                      <p className="about__both-title">Tavallud sanasi</p>
                      <span className="about__year">
                        {item.bornDate}-{item.bornMonth} {item.born}
                      </span>
                      <p className="about__city">Toshkent, Uzbekistan</p>
                    </div>
                    <span className="about__minus">-</span>
                    <div className="about__both-year2">
                      <p className="about__both-title">Tavallud sanasi</p>
                      <span className="about__year">
                        {item.diedDate}-{item.diedMonth} {item.died}
                      </span>
                      <p className="about__city">Toshkent, Uzbekistan</p>
                    </div>
                  </div>
                </div>
                <div className="about__right container">
                  <h2 key={i} className="about__name">
                    {item.name} {item.lastName}
                  </h2>
                  <p key={i} className="about__desc">
                    {item.desc}
                  </p>
                  <div className="about__ijodi">
                    <i className="bx bxs-bookmark-star about__icon"></i>
                    <p className="about__ijodi-title">Ijodi</p>
                  </div>
                  <p className="about__ijodi-text">
                    Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida
                    ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga
                    muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
                    qaytmaydi“ qissasi boʻldi
                  </p>
                  <div className="about__books">
                    <div className="about__asalari">
                      <h3 className="about__asalari-name">Asarlari</h3>
                      <p className="about__asalari-text">Barchasini ko’rish</p>
                    </div>
                    <div className="about__book-div">
                      <ul className="about__items-book">
                        {item.bookObj.map((books, i) => {
                          return (
                            <>
                            <Link to={`/BookPage/${books.bookId}`}>
                              <li className="about__item-books">
                                <div className="about__books--img-div">
                                  <img
                                    className="about__books-img"
                                    src={books.bookImg}
                                    alt=""
                                  />
                                </div>
                                <h4 className="about__book-name">
                                  {books.bookName}
                                </h4>
                                <p className="about__book-comments">
                                  <i className="bx bxs-star about__book-icon"></i>
                                  4.1 • 3400 ta fikrlar
                                </p>
                              </li>
                            </Link>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}

export default Yozuvchilar;
