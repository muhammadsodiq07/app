import React from "react";
import "./Header.scss";
import logo from "../../assets/imgs/logo.svg";
import avatar from "../../assets/imgs/logoavatar.png";
import { NavLink } from "react-router-dom";

const navbar = ["Bosh sahifa", "Nasr", "Nazm", "Maqolalar", "Forum"];

function Header() {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="header__main">
            <div className="header__logo-div">
              <img src={logo} alt="logo" />
            </div>
            <div className="header__right-div">
              <ul className="header__list">
                {navbar.map((nav, i) => {
                  return (
                    <>
                      <li className="header__item" key={i}>
                        {nav === "Bosh sahifa" ? (
                          <NavLink to={"/"} className="header__link">
                            {nav}
                          </NavLink>
                        ) : (
                          <NavLink
                            to={nav}
                            className={`header__link item_${
                              nav === "Bosh sahifa" ? "one" : ""
                            }`}
                          >
                            {nav}
                          </NavLink>
                        )}
                      </li>
                    </>
                  );
                })}
              </ul>
              <div className="header__avater-div">
                <img className="header__avatar" src={avatar} alt="avatar" />
                <i className="bx bx-chevron-down header__down-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr className="header__hr" />
    </div>
  );
}

export default Header;
