import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">BOBARIA</div>
      <nav className="header-nav">
        <a href="#shop-all" className="nav-link">Shop all</a>
        <a href="#bundle" className="nav-link">Munchies bundle</a>
        <a href="#nutty" className="nav-link">Nutty</a>
        <a href="#cookies-club" className="nav-link">Cookies Club</a>
      </nav>
      <div className="header-right">
        <div className="currency">US [$]</div>
        <div className="cart">
          <span className="cart-count">0</span>
          <img src="cart-icon.png" alt="Cart" className="cart-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
