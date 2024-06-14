import { Helmet } from 'react-helmet-async';
import Logo from '../assets/logo/KleanKingLogo.webp';
import { pageTypes } from '../common/interfaces';
import { useContext } from 'react';
import { GlobalStateContext } from '../App';

function Header() {
  const global = useContext(GlobalStateContext);
  const showMenu = () => {
    const menu = document.getElementById('mobileMenuContent');
    const hero = document.getElementsByClassName('heroContainer');
    console.log(menu, hero)
    if(!menu || hero.length === 0) return;
    if ((menu as HTMLElement)?.style.display === 'none') {
      (menu as HTMLElement).style.display = 'flex';
      (menu as HTMLElement).style.opacity = '1';
      (menu as HTMLElement).style.transition = '3s ease-in-out';
      (hero[0] as HTMLElement).style.position = 'fixed';
    } else {
      (menu as HTMLElement).style.display = 'none';
      (menu as HTMLElement).style.opacity = '0';
      (hero[0] as HTMLElement).style.position = 'static';
    }
  };

  return (
    <div className="headerContainer">
      <Helmet>
        {/* <title>Klean King - {pageTypes.AIR}</title> */}
        <meta name="description" content="Welcome to Klean King - Your trusted cleaning service provider. We offer a wide range of cleaning services for residential and commercial properties. Contact us today for a free estimate!" />
        <meta name="keywords" content="cleaning service, residential cleaning, commercial cleaning, professional cleaners" />
      </Helmet>
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
