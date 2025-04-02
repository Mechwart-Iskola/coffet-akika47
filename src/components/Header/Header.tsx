import React, { useState, useEffect } from 'react';
import "./header.css";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <header className={`header ${hasShadow ? 'shadow-header' : ''}`}>
      <div className="nav__logo">
        <h1>My Website</h1>
      </div>
      <div className="nav__toggle" onClick={toggleMenu}>
        <i className={showMenu ? 'ri-close-large-line nav__close' : 'ri-apps-2-fill'}></i>
      </div>

      <nav className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
        <ul className="nav__list">
          <li><a href="#home" className="nav__link">HOME</a></li>
          <li><a href="#popular" className="nav__link">POPULAR</a></li>
          <li><a href="#about-us" className="nav__link">ABOUT US</a></li>
          <li><a href="#products" className="nav__link">PRODUCTS</a></li>
          <li><a href="#contact" className="nav__link">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;