import { useState } from "react";

function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOverlay, setIsOverlay] = useState(false);
  
    const handleNavToggle = () => {
      setIsVisible((prevState) => !prevState);
      setIsOverlay((prevState) => !prevState);
    };
    return (     <header className={`primary-header ${isOverlay ? 'overlay' : ''}`}>
    <div className="container">
      <div className="nav-wrapper">
        <a href="#"><img src="images/logo.svg" alt="Manage"/></a>
        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" onClick={handleNavToggle}>
          <img className="icon-hamburger" src="images/icon-hamburger.svg" alt="" aria-hidden="true"/>
          <img className="icon-close" src="images/icon-close.svg" alt="" aria-hidden="true"/>
          <span className="visually-hidden">Menu</span>
        </button>
        <nav className={`primary-navigation ${isVisible ? 'visible' : ''}`} id="primary-navigation">
          <ul aria-label="Primary" role="list" className="nav-list">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </nav>
        <button className="button | display-sm-none display-md-inline-flex">Get Started</button>
      </div>
    </div>
  </header> );
}

export default Header;