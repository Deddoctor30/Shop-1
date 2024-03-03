import { Link } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false)

  return (
    <div className="container">
      <div className="header">
        <div className="header__logo logo">
          <div className="logo__inner"></div>
        </div>
        <nav className={burgerActive ? "header__nav-burger" : "header__nav"}>
          <ul className="header__items">
            <li className="header__item">
              <Link to="/">Услуги</Link>
            </li>
            <li className="header__item">
              <Link to="/cases">Кейсы</Link>
            </li>
            <li className="header__item">
              <Link to="/partners">Партнеры</Link>
            </li>
            <li className="header__item">
              <Link to="/about">О нас</Link>
            </li>
          </ul>
        </nav>
        <div className="header__rightBar rightBar">
          <div className="rightBar__inner"></div>
          <div className="nav-btn" onClick={() => setBurgerActive(item => !item)}>
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
