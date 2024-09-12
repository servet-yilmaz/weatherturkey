import React, { useState } from 'react';
import logo from '../images/logo.png';

export default function TopBarComponent() {
  // State to handle the visibility of the mobile navigation
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Toggle the state when the button is clicked
  const handleMenuToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="site-header">
      <div className="container">
        <a href="/" className="branding">
          <img src={logo} alt="WeatherTurkey" className="logo" />
          <div className="logo-type">
            <h1 className="site-title">WeatherTurkey</h1>
            <small className="site-description">Türkiye'nin Hava</small>
          </div>
        </a>

        <div className="main-navigation">
          <button type="button" className="menu-toggle" onClick={handleMenuToggle}>
            <i className="fa fa-bars"></i>
          </button>
          <ul className="menu">
            <li className="menu-item current-menu-item"><a href="/">Ana Sayfa</a></li>
            <li className="menu-item"><a href="news.html">Şehirler</a></li>
            <li className="menu-item"><a href="live-cameras.html">Oyunlar</a></li>
            <li className="menu-item"><a href="contact.html">İletişim</a></li>
          </ul>
        </div>

        <div className={`mobile-navigation ${isMobileNavOpen ? 'open' : ''}`}>
          <ul className="menu">
            <li className="menu-item current-menu-item"><a href="/">Ana Sayfa</a></li>
            <li className="menu-item"><a href="news.html">Şehirler</a></li>
            <li className="menu-item"><a href="live-cameras.html">Oyunlar</a></li>
            <li className="menu-item"><a href="contact.html">İletişim</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
