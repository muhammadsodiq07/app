import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/imgs/logo.svg";
import { Link, NavLink } from "react-router-dom";

const navbar = ["Bosh sahifa", "Nasr", "Nazm", "Maqolalar", "Forum"];
function Header() {

  let [isClicked, setClick] = useState(false)
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
              <div className='header__modal__wrap'>
              <button onClick={() => setClick(!isClicked)} className='d-flex header__user__btn align-items-center'>
                <img className='header__avatar me-1' src="https://imgur.com/VjgEdz3.png" alt="userAvatar" />
                <i className='bx bx-chevron-down header__down-icon'></i>
              </button>
              <div style={{display: isClicked ? 'block' : 'none'}} className='header__modal'>
                <ul className='list-unstyled header__modal__list p-3 m-0'>
                 <Link className="heaederLink" to="Info">
                  <li className='header__modal__item'>
                    <p className='mb-3 d-flex align-items-center'><i class='bx header__user__icon me-2 bxs-user'></i>Profile</p>
                  </li>
                 </Link>
                <Link className="heaederLink" to="EditProfile">
                <li className='header__modal__item'>
                    <p className='mb-3 d-flex align-items-center'><i class='bx header__user__icon me-2 bxs-cog'></i>Edit profile</p>
                  </li>
                </Link>
                 <Link to="SaveBooks" className="heaederLink">
                 <li className='header__modal__item'>
                    <p className='mb-3 d-flex align-items-center'><i class='bx header__user__icon me-2 bxs-bookmark-star'></i>Wishlist</p>
                  </li>
                 </Link>
                </ul>
              </div>
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
