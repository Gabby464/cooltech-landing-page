function Footer() {
    return (       <footer className="primary-footer | padding-block-700 bg-neutral-900 text-neutral-100">
    <div className="container">
      <div className="primary-footer-wrapper">
        <div className="primary-footer-logo-social">
          <a href="#" aria-label="home">
            <img className="logo" src="images/logo.svg" alt="" />
          </a>

          <ul className="social-list" role="list" aria-label="Social links">
            <li><a aria-label="facebook" href="#">
              <img className="social-icon" src="images/icon-facebook.svg" alt="facebook logo" />
            </a>
            </li>
            <li><a aria-label="youtube" href="#">
              <img className="social-icon" src="images/icon-youtube.svg" alt="youtube logo" />

            </a></li>
            <li><a aria-label="twitter" href="#">
              <img className="social-icon" src="images/icon-twitter.svg" alt="twitter logo" />
            </a></li>
            <li><a aria-label="pinterest" href="#">
              <img className="social-icon" src="images/icon-pinterest.svg" alt="pinterest logo" />
            </a></li>
            <li><a aria-label="instragram" href="#">
              <img className="social-icon" src="images/icon-instagram.svg" alt="instragram logo" />
            </a></li>
          </ul>
        </div>
        <div className="primary-footer-nav">
          <nav className="footer-nav">
            <ul className="flow" aria-label="Footer" role="list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </nav>
        </div>
        <div className="primary-footer-form">
          <form action="">
            <input type="email" />
            <button className="button" data-shadow="none">Go</button>
          </form>
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer> );
}

export default Footer;