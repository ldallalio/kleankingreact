import React from 'react';
import Logo from '../assets/logo/KleanKingLogo.png';

function Header() {
  const showMenu = () => {
    const menu = document.getElementById('mobileMenuContent');
    const hero = document.getElementsByClassName('heroContainer');
    if (menu.style.display === 'none') {
      menu.style.display = 'flex';
      menu.style.opacity = '1';
      menu.style.transition = '3s ease-in-out';
      hero[0].style.position = 'fixed';
    } else {
      menu.style.display = 'none';
      menu.style.opacity = '0';
      hero[0].style.position = 'static';
    }
  };

  return (
    <div className="headerContainer">
      <div className="logo">
        <img loading='lazy' src={Logo} alt="Klean King Logo" />
      </div>
      <div className="navMenu">
        <ul>
          <li className="menuItem active">
            <a href="/">Home</a>
          </li>
          <li className="menuItem">
            <a href="/#about">About</a>
          </li>
          <li className="menuItem">
            <a href="/#services">Our Services</a>
          </li>
          <li className="menuItem">
            <a href="/#portfolio">Our Work</a>
          </li>
          <li className="menuItem">
            <a href="/#contactus">Contact</a>
          </li>
        </ul>
      </div>
      <div onClick={showMenu} className="mobileMenuIcon">
        | | |
      </div>
      <div className="mobileMenu">
        <div className="mobileMenuContent" id="mobileMenuContent">
          <ul>
            <li className="menuItem">
              <a href="/">Home</a>
            </li>
            <li className="menuItem">
              <a href="/#about">About</a>
            </li>
            <li className="menuItem">
              <a href="/#services">Our Services</a>
            </li>
            <li className="menuItem">
              <a href="/#portfolio">Our Work</a>
            </li>
            <li className="menuItem getQuote">
              <a href="tel:318-323-8722">Get Quote</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="getQuote">
        <a href="tel:318-323-8722">Get a Quote</a>
      </div>
    </div>
  );
}

export default Header;
