import React, { useState } from "react";
import "./BookPage.scss";
import "../Books.scss";
import { Link, useLocation } from "react-router-dom";
import Users from "../../../../Users"

function BookPage(props) {
  let location = useLocation();
  let [arr, setArr] = useState(Users);

  let bookHandler = (elId) => {
    let temp = [];
    arr.map((item, index) => {
      return item.bookObj.map((el, idx) => {
        if(el.bookId === elId){
          temp.push(el);
          return el;
        }
      })
    })
    props.setSaved([...props.saved, temp]);
  }

  return (
    <div>
      {Users.map((item) => {
        return item.bookObj.map((bookObj) => {
          if(bookObj.bookId === location.pathname.split("/").at(-1)) {
            console.log(bookObj);
            return (
              <>
              <div className="container">
                <div className="newbook">
                  <div className="newbook__left">
                    <div className="newbook__img-div">
                      <img
                        className="newbook__img"
                        src={bookObj.bookImg}
                        alt={bookObj.bookName}
                      />
                    </div>
                  </div>
  
                  <div className="newbook__right">
                    <h2 className="newbook__title">{bookObj.bookName}</h2>
                   
                    <div className="newbook__name-div">
                    <Link to={`/Yozuvchilar/${item.id}`}>
                      <h4 className="newbook__author-name">{item.name}  {item.lastName}</h4>
                    </Link>
                      <p className="newbook__icon-div">
                        |<i class="bx bxs-star newbook__icon"></i>
                        4.1
                      </p>
                    </div>
                    <div className="newbook__sahifalar">
                      <p className="newbook__sahifaName">Sahifalar soni:</p>
                      <span className="newbook__span-public">
                        {bookObj.bookPage}
                      </span>
                    </div>
                    <div className="newbook__sahifalar">
                      <p className="newbook__sahifaName">Chop etilgan:</p>
                      <span className="newbook__span-public">
                        {bookObj.published}
                      </span>
                    </div>
                    <div className="newbook__sahifalar">
                      <p className="newbook__sahifaName">Janri:</p>
                      <span className="newbook__span-public newbook__type">
                        {bookObj.bookSenario}
                      </span>
                    </div>
                    <div className="newbook__sahifalar">
                      <p className="newbook__sahifaName">Nashriyot :</p>
                      <span className="newbook__span-public newbook__type">
                        Nihol nashr
                      </span>
                    </div>
                    <div className="newbook__toliq">
                      <p className="newbook__toliq-title">To’liq ma’lumot</p>
                      <i class="bx bx-down-arrow-alt newbook__icon-toliq"></i>
                    </div>
                    <hr className="newbook__hr" />
                    <p className="newbook__desc desc1">{bookObj.bookInfo}</p>
                    <p className="newbook__desc">{bookObj.bookInfoTwo}</p>
                    <p className="newbook__mavjud">Mavjud formatlar</p>
  
                    <div className="newbook__mains">
                      <div className="newbook__mavjud-div">
                        <div className="newbook__mavjud-book">
                          <i className="bx bxs-book-alt newbook__icon-mavjud"></i>
                          <p className="newbook__qogoz">Qog’oz kitob</p>
                          <span className="newbook__span-price">
                            {bookObj.bookPrice} so'm
                          </span>
                        </div>
                      </div>
                      <div className="newbook__mavjud-div2">
                        <div className="newbook__mavjud-book">
                          <i className="bx bx-headphone newbook__icon-mavjud2"></i>
                          <p className="newbook__qogoz">Audiokitob</p>
                          <span className="newbook__span-price">
                            {bookObj.audioTime}
                          </span>
                        </div>
                      </div>
                      <div className="newbook__mavjud-div3">
                        <div className="newbook__mavjud-book">
                          <i className="bx bx-mobile newbook__icon-mavjud3"></i>
                          <p className="newbook__qogoz">Elektron</p>
                          <span className="newbook__span-price">{bookObj.electron}</span>
                        </div>
                      </div>
                      <div>
                        <button className="newbook__btn"
                        onClick={() => bookHandler(bookObj.bookId)}
                        >
                          Javonga qo’shish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="newbook__mualif-div">
                    <p className="newbook__m1">Muallif haqida</p>
                    <p className="newbook__m1 m2">Kitobdan iqtiboslar</p>
                    <p className="newbook__m1">Kitobxonlar taqrizi</p>
                  </div>
                  <div className="newbook__inson-divmain">
                    <div className="newbook__inson">
                      <img
                        className="newbook__imgss"
                        src="https://imgur.com/Hkqb1mw.png"
                        alt=""
                      />
                      <p className="newbook__inson-desc">
                        Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z
                        g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr
                        bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga
                        yetolarmidi? Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib
                        tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni
                        egarlaganlargina ertangi kunga yetib keladi.
                      </p>
                      <div className="newbook__icons-div">
                        <i class="bx bxs-heart newbook__icon-inson"></i>
                        <i class="bx bxs-share-alt newbook__icon-inson"></i>
                      </div>
                    </div>
                    <div className="newbook__inson2">
                      <img
                        className="newbook__imgss incons2"
                        src="https://imgur.com/Hkqb1mw.png"
                        alt=""
                      />
                      <p className="newbook__inson-desc desc2">
                        Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra,
                        tuproq tagida yotganlar ko‘p. Yer qatlami odam
                        suyaklariga to‘lib ketgan.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="newbook__yoqish">
                  <h4 className="newbook__yoqish-title">
                    Sizga yoqishi mumkin
                  </h4>
                  <p className="newbook__yoqish-text">Barchasini ko’rish</p>
                </div> */}
                {/* <ul className="newbookarr container">
                  {item.newBookArray.map((newBook) => {
                    return (
                      <>
                        <li className="about__item-books bookking">
                          <div className="about__books--img-div">
                            <img
                              className="about__books-img"
                              src={newBook.imgs}
                              alt=""
                            />
                          </div>
                          <h4 className="about__book-name">{newBook.bookName}</h4>
                          <p className="about__author-name">{newBook.name}</p>
                          <p className="about__book-comments commeting">
                            <i className="bx bxs-star about__book-icon"></i>
                            {newBook.comments}
                          </p>
                        </li>
                      </>
                    );
                  })}
                </ul> */}
              </div>
            </>
          
            )
          }
        })
      })}
    </div>
  );
}

export default BookPage;
