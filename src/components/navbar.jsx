import React from 'react';

const Menu = (props) => {

  return (
      <div>
        <nav id="site-header" className="site-header navigation navigation-justified sticky-top">
          <div className="top-bar top-bar-dark">
            <div className="container">
              <div className="top-bar-content">
                <div className="top-bar-item">
                  <div className="dropdown crumina-language-switcher">
                    <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img loading="lazy" src="img/theme-content/languages/english.png" alt="English" />English
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#"><img loading="lazy" src="img/theme-content/languages/french.png" alt="French" />French</a>
                      <a className="dropdown-item" href="#"><img loading="lazy" src="img/theme-content/languages/german.png" alt="German" />German</a>
                      <a className="dropdown-item" href="#"><img loading="lazy" src="img/theme-content/languages/ukrainian.png" alt="Ukrainian" />Ukrainian</a>
                      <a className="dropdown-item" href="#"><img loading="lazy" src="img/theme-content/languages/english.png" alt="English" />English</a>
                    </div>
                  </div>
                </div>
                <div className="top-bar-item">
                  8 800 567.890.11
                </div>
                <div className="top-bar-item">
                  <a href="#">info@topten.com</a>
                </div>
                <div className="top-bar-item">
                  <span>Mon. - Fri.</span> 10:00 - 21:00
                </div>
                <div className="top-bar-item follow_us">
                  <span>Follow us:</span>
                  <div className="socials">
                    <a className="social-item" href="#">
                      <img loading="lazy" width={16} height={16} className="crumina-icon" src="img/theme-content/social-icons/facebook.svg" alt="facebook" />
                    </a>
                    <a className="social-item" href="#">
                      <img loading="lazy" width={16} height={16} className="crumina-icon" src="img/theme-content/social-icons/twitter.svg" alt="twitter" />
                    </a>
                    <a className="social-item" href="#">
                      <img loading="lazy" width={16} height={16} className="crumina-icon" src="img/theme-content/social-icons/google.svg" alt="google" />
                    </a>
                  </div>
                </div>
                <div className="top-bar-item login-block">
                  <svg className="crumina-icon" width={20} height={16}>
                    <use xlinkHref="#icon-users" />
                  </svg>
                  <a className="js-window-popup" href="#">SIGN UP</a>
                </div>
              </div>
              <a href="#" className="top-bar-close" id="top-bar-close-js">
                <span />
                <span />
              </a>
            </div>
          </div>
          {/* MAIN HEADER CONTAINER */}
          <div className="container">
            {/* MAIN HEADER RESPONSIVE */}
            <div className="navigation-header">
              {/* MAIN HEADER RESPONSIVE LOGO */}
              <div className="navigation-logo">
                {/* MAIN HEADER RESPONSIVE LOGO LINK*/}
                <a className="site-logo" href="/">
                  {/* MAIN HEADER RESPONSIVE LOGO IMAGE*/}
                  <img loading="lazy" src="img/demo-content/logo/logo-dark.svg" alt="logo" width={70} />
                  {/* /MAIN HEADER RESPONSIVE LOGO IMAGE*/}
                  <div className="logo-text">
                    <div className="logo-title"><span className="weight-black">Cretic</span>Solutions</div>
                    <div className="logo-sub-title">SRV IMPEX INTERNATIONAL</div>
                  </div>
                </a>
                {/* /MAIN HEADER RESPONSIVE LOGO LINK*/}
              </div>
              {/* /MAIN HEADER RESPONSIVE LOGO */}
              {/* TOP BAR RESPONSIVE BUTTON-OPEN */}
              <div id="top-bar-js" className="top-bar-link">
                <svg className="crumina-icon" width={20} height={16}>
                  <use xlinkHref="#icon-users" />
                </svg>
              </div>
              {/* /TOP BAR RESPONSIVE BUTTON-OPEN */}
              {/* MAIN HEADER RESPONSIVE BUTTON-OPEN */}
              <div className="navigation-button-toggler">
                {/* MAIN HEADER RESPONSIVE BUTTON-OPEN ICON */}
                <i className="hamburger-icon" />
                {/* /MAIN HEADER RESPONSIVE BUTTON-OPEN ICON */}
              </div>
              {/* /MAIN HEADER RESPONSIVE BUTTON-OPEN */}
            </div>
            {/* /MAIN HEADER RESPONSIVE */}
            {/* MAIN HEADER BODY */}
            <div className="navigation-body">
              {/* MAIN HEADER BODY HEADER */}
              <div className="navigation-body-header">
                {/* MAIN HEADER LOGO */}
                <div className="navigation-logo">
                  {/* MAIN HEADER LOGO LINK */}
                  <a className="site-logo" href="index-2.html">
                    {/* MAIN HEADER RESPONSIVE LOGO IMAGE*/}
                    <img loading="lazy" src="img/demo-content/logo/logo-dark.svg" alt="logo" width={70} />
                    {/* /MAIN HEADER RESPONSIVE LOGO IMAGE*/}
                    <div className="logo-text">
                      <div className="logo-title"><span className="weight-black">Cretic</span>Solutions</div>
                      <div className="logo-sub-title">SRV IMPEX INTERNATIONAL</div>
                    </div>
                  </a>
                  {/* /MAIN HEADER LOGO LINK */}
                </div>
                {/* /MAIN HEADER LOGO */}
                {/* MAIN HEADER RESPONSIVE BUTTON-CLOSE ICON */}
                <span className="navigation-body-close-button">✕</span>
                {/* /MAIN HEADER RESPONSIVE BUTTON-CLOSE ICON */}
              </div>
              {/* /MAIN HEADER BODY HEADER */}
              {/* MAIN HEADER MENU */}
              <ul className="navigation-menu">
                {/* MAIN HEADER MENU ITEM */}
                <li className="navigation-item">
                  {/* MAIN HEADER MENU ITEM LINK */}
                  <a className="navigation-link" href="02_about_us.html">About</a>
                  {/* /MAIN HEADER MENU ITEM LINK */}
                </li>
                {/* /MAIN HEADER MENU ITEM */}
                {/* MAIN HEADER MENU ITEM */}
                <li className="navigation-item">
                  {/* MAIN HEADER MENU ITEM LINK */}
                  <a className="navigation-link" href="#">Services</a>
                  {/* /MAIN HEADER MENU ITEM LINK */}
                  {/* MAIN HEADER MENU DROPDOWN */}
                  <ul className="navigation-dropdown">
                    {/* MAIN HEADER MENU DROPDOWN ITEM */}
                    <li className="navigation-dropdown-item menu-item-info">
                      {/* MAIN HEADER MENU DROPDOWN ITEM TITLE */}
                      <h5 className="menu-item-info-title">List of Services</h5>
                      {/* /MAIN HEADER MENU DROPDOWN ITEM TITLE */}
                      {/* MAIN HEADER MENU DROPDOWN ITEM TEXT */}
                      <p className="menu-item-info-text">Choose a Service</p>
                      {/* /MAIN HEADER MENU DROPDOWN ITEM TEXT */}
                    </li>
                    {/* /MAIN HEADER MENU DROPDOWN ITEM */}
                    {/* MAIN HEADER MENU DROPDOWN ITEM */}
                    <li className="navigation-dropdown-item">
                      {/* MAIN HEADER MENU DROPDOWN ITEM LINK */}
                      <a className="navigation-dropdown-link" href="/gst-registration">
                        <svg className="crumina-icon" width={30} height={30}>
                          <use xlinkHref="#icon-local-seo" />
                        </svg>
                        GST Registration</a>
                      {/* /MAIN HEADER MENU DROPDOWN ITEM LINK */}
                    </li>
                    {/* /MAIN HEADER MENU DROPDOWN ITEM */}
                    {/* MAIN HEADER MENU DROPDOWN ITEM */}
                    <li className="navigation-dropdown-item">
                      {/* MAIN HEADER MENU DROPDOWN ITEM LINK */}
                      <a className="navigation-dropdown-link" href="/gst-filing">
                        <svg className="crumina-icon" width={30} height={30}>
                          <use xlinkHref="#icon-email" />
                        </svg>
                        GST Filling</a>
                      {/* /MAIN HEADER MENU DROPDOWN ITEM LINK */}
                    </li>
                    {/* /MAIN HEADER MENU DROPDOWN ITEM */}
                    {/* MAIN HEADER MENU DROPDOWN ITEM */}
                    <li className="navigation-dropdown-item">
                      {/* MAIN HEADER MENU DROPDOWN ITEM LINK */}
                      <a className="navigation-dropdown-link" href="/msme">
                        <svg className="crumina-icon" width={30} height={30}>
                          <use xlinkHref="#icon-social-media" />
                        </svg>
                        MSME Registration</a>
                      {/* /MAIN HEADER MENU DROPDOWN ITEM LINK */}
                    </li>
                    {/* /MAIN HEADER MENU DROPDOWN ITEM */}
                    {/* MAIN HEADER MENU DROPDOWN ITEM */}
                    <li className="navigation-dropdown-item">
                      {/* MAIN HEADER MENU DROPDOWN ITEM LINK */}
                      <a className="navigation-dropdown-link" href="/fssai">
                        <svg className="crumina-icon" width={30} height={30}>
                          <use xlinkHref="#icon-search-engine" />
                        </svg>
                        FSSAI Registration</a>
                      {/* /MAIN HEADER MENU DROPDOWN ITEM LINK */}
                    </li>
                    {/* /MAIN HEADER MENU DROPDOWN ITEM */}
                    {/* MAIN HEADER MENU DROPDOWN ITEM */}
                    <li className="navigation-dropdown-item">
                      {/* MAIN HEADER MENU DROPDOWN ITEM LINK */}
                      <a className="navigation-dropdown-link" href="/ptax">
                        <svg className="crumina-icon" width={30} height={30}>
                          <use xlinkHref="#icon-pay-click" />
                        </svg>
                        Professional Tax</a>
                      {/* /MAIN HEADER MENU DROPDOWN ITEM LINK */}
                    </li>
                    {/* /MAIN HEADER MENU DROPDOWN ITEM */}
                    {/* MAIN HEADER MENU DROPDOWN ITEM */}
                    <li className="navigation-dropdown-item">
                      {/* MAIN HEADER MENU DROPDOWN ITEM LINK */}
                      <a className="navigation-dropdown-link" href="/trade-license">
                        <svg className="crumina-icon" width={30} height={30}>
                          <use xlinkHref="#icon-services" />
                        </svg>
                        Trade License</a>
                      {/* /MAIN HEADER MENU DROPDOWN ITEM LINK */}
                    </li>
                    {/* /MAIN HEADER MENU DROPDOWN ITEM */}
                  </ul>
                  {/* /MAIN HEADER MENU DROPDOWN */}
                </li>
                {/* /MAIN HEADER MENU ITEM */}
                {/* MAIN HEADER MENU ITEM */}
                <li className="navigation-item">
                  {/* MAIN HEADER MENU ITEM LINK */}
                  <a className="navigation-link" href="#">Labour Compliance</a>
                  {/* /MAIN HEADER MENU ITEM LINK */}
                  {/* MAIN HEADER MENU DROPDOWN */}
                  <ul className="navigation-dropdown">
                    {/* MAIN HEADER MENU DROPDOWN ITEM */}
                    <li className="navigation-dropdown-item">
                      {/* MAIN HEADER MENU DROPDOWN ITEM LINK */}
                      <a className="navigation-dropdown-link" href="/she">Shops and Establishments License
                        <svg className="crumina-icon arrow-right" width={12} height={10}>
                          <use xlinkHref="#icon-arrow-right" />
                        </svg>
                      </a>
                      {/* /MAIN HEADER MENU DROPDOWN ITEM LINK */}
                    </li>
                    {/* /MAIN HEADER MENU DROPDOWN ITEM */}
                    {/* MAIN HEADER MENU DROPDOWN ITEM */}
                    <li className="navigation-dropdown-item">
                      {/* MAIN HEADER MENU DROPDOWN ITEM LINK */}
                      <a className="navigation-dropdown-link" href="/esop">Employee Stock Option Plan [ESOP]
                        <svg className="crumina-icon arrow-right" width={12} height={10}>
                          <use xlinkHref="#icon-arrow-right" />
                        </svg>
                      </a>
                      {/* /MAIN HEADER MENU DROPDOWN ITEM LINK */}
                    </li>
                    {/* /MAIN HEADER MENU DROPDOWN ITEM */}
                    {/* MAIN HEADER MENU DROPDOWN ITEM */}
                    <li className="navigation-dropdown-item">
                      {/* MAIN HEADER MENU DROPDOWN ITEM LINK */}
                      <a className="navigation-dropdown-link" href="/esi">ESI Registration
                        <svg className="crumina-icon arrow-right" width={12} height={10}>
                          <use xlinkHref="#icon-arrow-right" />
                        </svg>
                      </a>
                      {/* /MAIN HEADER MENU DROPDOWN ITEM LINK */}
                    </li>
                    {/* /MAIN HEADER MENU DROPDOWN ITEM */}
                  </ul>
                  {/* /MAIN HEADER MENU DROPDOWN */}
                </li>
                {/* /MAIN HEADER MENU ITEM */}
                {/* MAIN HEADER MENU ITEM */}

                <li className="navigation-item">
                  {/* MAIN HEADER MENU ITEM LINK */}
                  <a className="navigation-link" href="/contact">Contact Us</a>
                  {/* /MAIN HEADER MENU ITEM LINK */}
                </li>
                {/* /MAIN HEADER MENU ITEM */}
              </ul>
              {/* /MAIN HEADER MENU */}
            </div>
            {/* MAIN HEADER BODY */}
          </div>
          {/* /MAIN HEADER CONTAINER */}
          <div className="user-menu">
            <a href="#" className="user-menu-content" data-toggle="modal" data-target="#right-menu">
              <span />
              <span />
              <span />
            </a>
          </div>
        </nav>
        {/* /MAIN HEADER */}
        {/* RIGHT MENU */}
        <div className="modal fade window-popup right-menu-popup" id="right-menu" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="right-menu">
                  <div className="user-menu-close" data-dismiss="modal">
                    <div className="user-menu-content">
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="widget w-info">
                    <a className="site-logo" href="/">
                      {/* MAIN HEADER RESPONSIVE LOGO IMAGE*/}
                      <img loading="lazy" src="img/demo-content/logo/logo-dark.svg" alt="logo" width={70} />
                      {/* /MAIN HEADER RESPONSIVE LOGO IMAGE*/}
                      <div className="logo-text">
                        <div className="logo-title"><span className="weight-black">Cretic</span>Solutions</div>
                        <div className="logo-sub-title">Cretic Web</div>
                      </div>
                    </a>
                    <p className="widget-text">My Account</p>
                  </div>
                  <div className="widget w-login">
                    <h4 className="widget-title">Sign In to Your Account</h4>
                    <form method="post">
                      <div className="form-item">
                        <input placeholder="Username or Email" type="text" />
                      </div>
                      <div className="form-item">
                        <input placeholder="Password" type="password" />
                      </div>
                      <div className="form-item">
                        <div className="remember-wrap">
                          <label className="crumina-module crumina-checkbox control--checkbox">Remember Me
                            <input type="checkbox" />
                            <span className="control__indicator" />
                          </label>
                          <a href="#">Lost your password?</a>
                        </div>
                      </div>
                      <div className="form-item">
                        <button className="crumina-button button--dark button--l w-100">AUTHORIZE</button>
                      </div>
                    </form>
                  </div>
                  <div className="widget w-contacts">
                    <h4 className="widget-title">Get In Touch</h4>
                    <p className="contacts-text">Cretic Solutions & Cretic Web Solutions is a part of SRV Impex International.</p>
                    <div className="contact-item">
                      <img loading="lazy" className="crumina-icon" src="img/demo-content/icons/icon1.png" alt="phone" />
                      <div className="content">
                        <a href="#" className="title">+91 9647540052</a>
                        <p className="sub-title">Mon-Fri 9am-6pm</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <img loading="lazy" className="crumina-icon" src="img/demo-content/icons/icon2.png" alt="mail" />
                      <div className="content">
                        <a href="maolto: creticweb@gmail.com" className="title">creticweb@gmail.com</a>
                        <p className="sub-title">online support</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <img loading="lazy" className="crumina-icon" src="img/demo-content/icons/icon3.png" alt="location" />
                      <div className="content">
                        <a href="#" className="title">SN DEY RD, HABRA</a>
                        <p className="sub-title">WEST BENGAL INDIA 743263</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /RIGHT MENU */}
      </div>
  );
}

export default Menu;