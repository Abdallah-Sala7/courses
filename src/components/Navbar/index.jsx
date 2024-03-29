import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

import {
  facebookLogo,
  twitterLog,
  instagramLogo,
  searchIcon,
  shoppingIcon,
  menuIcon,
  closeIcon,
  logoWhite,
  avatar,
} from "../../assets/images";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { count } = useSelector((state) => state.cart);

  menuOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const handelMenu = (e) => {
    setMenuOpen(!menuOpen);
    e.preventDefault();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-layout">
          <Link to={"/"} className="brand-name">
            <img src={logoWhite} alt="logo" />
          </Link>

          <div className={`nav-menu ${menuOpen && "oppenned"}`}>
            <div className="nav-header">
              <Link to="/profile" className="avatar">
                <img src={avatar} alt="avatar" loading="lazy" />
              </Link>

              <a
                href="#"
                onClick={(e) => handelMenu(e)}
                className="close-menu mobile-menu"
              >
                <img src={closeIcon} alt="menu" loading="lazy" />
              </a>
            </div>

            <ul className={"nav-links"}>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>

              <li>
                <NavLink to={"/courses"}>courses</NavLink>
              </li>

              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>

            <div className="nav-contact">
              <h1>call us</h1>

              <ul className="call-detail">
                <li>
                  <a href="+20 10 250 77437">+20 10 250 77437</a>
                </li>
                <li>
                  <p>329 Queensberry Street, North</p>
                </li>
                <li>
                  <p>Msnsoura , Egypt </p>
                </li>
                <li>
                  <a href="mailto:abdallahsalah138@gmail.com" className="email">
                    abdallahsalah138@gmail.com
                  </a>
                </li>
              </ul>

              <ul className="social-links">
                <li>
                  <a href="#">
                    <img src={facebookLogo} alt="facebook" loading="lazy" />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <img src={instagramLogo} alt="instagram" loading="lazy" />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <img src={twitterLog} alt="twitter" loading="lazy" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-detils">
            <a href="#">
              <img src={searchIcon} alt="serch" loading="lazy" />
            </a>

            <Link to="cart" className="bag">
              <img src={shoppingIcon} alt="serch" loading="lazy" />
              <span className="count">{count}</span>
            </Link>

            <Link to="/profile" className="avatar">
              <img src={avatar} alt="avatar" loading="lazy" />
            </Link>
          </div>

          <a href="#" onClick={(e) => handelMenu(e)} className="mobile-menu">
            <img src={menuIcon} alt="menuIcon" loading="lazy" />
          </a>
        </div>
      </div>

      <div
        onClick={handelMenu}
        role="button"
        className={`overlay ${menuOpen && "oppenned"}`}
      ></div>
    </nav>
  );
};

export default Navbar;
