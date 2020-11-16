import React from 'react';
import facebook from '../img/theme-content/social-icons/facebook.svg';
import twitter from '../img/theme-content/social-icons/twitter.svg';
import google from '../img/theme-content/social-icons/google.svg';
import youtube from '../img/theme-content/social-icons/youtube.svg';
import rss from '../img/theme-content/social-icons/rss.svg';


const Footer = (props) => {

  return (
  <footer id="site-footer" className="footer dark-section">
        <div className="container">
          {/* FOOTER CONTENT */}
          <div className="footer-content">
            <div className="row justify-content-between">
              <div className="col-lg-7 col-md-6 col-sm-12 mb-md-0">
                {/* WIDGET INFO */}
                <div className="widget w-info widget--footer mb-4">
                  <h4 className="widget-title">Cretic Solutions</h4>
                  <p className="widget-text">Cretic Solutions & Cretic Web Solutions is a part of SRV Impex International<br/>
                  GSTIN: 19DWNPD3571B1ZK
                  </p>
                  <div className="socials">
                    <a className="social-item" href="https://fb.me">
                      <img loading="lazy" width={32} height={32} className="crumina-icon" src={facebook} alt="facebook" />
                    </a>
                    <a className="social-item" href="https://twitter.com/">
                      <img loading="lazy" width={32} height={32} className="crumina-icon" src={twitter} alt="twitter" />
                    </a>
                    <a className="social-item" href="https://google.com">
                      <img loading="lazy" width={32} height={32} className="crumina-icon" src={google} alt="google" />
                    </a>
                    <a className="social-item" href="https://youtube.com">
                      <img loading="lazy" width={32} height={32} className="crumina-icon" src={youtube} alt="youtube" />
                    </a>
                    <a className="social-item" href="/sitemap
                    xml">
                      <img loading="lazy" width={32} height={32} className="crumina-icon" src={rss} alt="rss" />
                    </a>
                  </div>
                </div>
                {/* /WIDGET INFO */}
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 mb-4 mb-md-0">
                {/* WIDGET LINKS */}
                <div className="widget widget_links widget--footer">
                  <h4 className="widget-title">Services</h4>
                  <ul>
                    <li>
                      <a href="/gst-registration">
                        <svg className="crumina-icon" width={4} height={6}>
                          <use xlinkHref="#icon-arrow-triangle-left" />
                        </svg>
                        GST Registration
                      </a>
                    </li>
                    <li>
                      <a href="/gst-filing">
                        <svg className="crumina-icon" width={4} height={6}>
                          <use xlinkHref="#icon-arrow-triangle-left" />
                        </svg>
                        GST Filling
                      </a>
                    </li>
                    <li>
                      <a href="/fssai">
                        <svg className="crumina-icon" width={4} height={6}>
                          <use xlinkHref="#icon-arrow-triangle-left" />
                        </svg>
                        FSSAI License
                      </a>
                    </li>
                    <li>
                      <a href="/trade-license">
                        <svg className="crumina-icon" width={4} height={6}>
                          <use xlinkHref="#icon-arrow-triangle-left" />
                        </svg>
                        Trade License
                      </a>
                    </li>
                    <li>
                      <a href="/msme">
                        <svg className="crumina-icon" width={4} height={6}>
                          <use xlinkHref="#icon-arrow-triangle-left" />
                        </svg>
                        MSME Registration
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /WIDGET LINKS */}
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 mb-4 mb-md-0">
                {/* WIDGET LINKS */}
                <div className="widget widget_links widget--footer">
                  <h4 className="widget-title">Business Setup</h4>
                  <ul>
                    <li>
                      <a href="/iso">
                        <svg className="crumina-icon" width={4} height={6}>
                          <use xlinkHref="#icon-arrow-triangle-left" />
                        </svg>
                        ISO Certification
                      </a>
                    </li>
                    <li>
                      <a href="/iecode">
                        <svg className="crumina-icon" width={4} height={6}>
                          <use xlinkHref="#icon-arrow-triangle-left" />
                        </svg>
                        IEC [Import/Export Code]
                      </a>
                    </li>
                    <li>
                      <a href="/digital-signature">
                        <svg className="crumina-icon" width={4} height={6}>
                          <use xlinkHref="#icon-arrow-triangle-left" />
                        </svg>
                        Digital Signature Certificate
                      </a>
                    </li>
                    <li>
                      <a href="/niddhi">
                        <svg className="crumina-icon" width={4} height={6}>
                          <use xlinkHref="#icon-arrow-triangle-left" />
                        </svg>
                        Nidhi Company
                      </a>
                    </li>
                    <li>
                      <a href="/apeda">
                        <svg className="crumina-icon" width={4} height={6}>
                          <use xlinkHref="#icon-arrow-triangle-left" />
                        </svg>
                        APEDA-RCMC Registration
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /WIDGET LINKS */}
              </div>
            </div>
          </div>
          {/* /FOOTER CONTENT */}
          {/* FOOTER CONTACTS */}
          <div className="contacts">
            {/* FOOTER CONTACTS ITEM */}
            <div className="contacts-item">
              <div className="crumina-module js-animate-icon">
                <svg className="crumina-icon c-yellow-themes" width={70} height={70} enableBackground="new 0 0 64 64" version="1.1" viewBox="0 0 64 64" xmlSpace="preserve" xmlns="../../external.html?link=http://www.w3.org/2000/svg"><path d="  M45.1,44.2C42.9,42,39.6,40,37,42.6c-1.8,1.8-2.6,3.9-2.6,3.9s-4.3,2.3-11.7-5.2s-5.2-11.7-5.2-11.7s2.1-0.8,3.9-2.6  c2.6-2.6,0.6-5.9-1.7-8.1c-2.7-2.7-6.2-4.9-8.2-2.9c-3.7,3.7-4.4,8.4-4.4,8.4S9,35.5,18.7,45.3s20.9,11.6,20.9,11.6s4.7-0.7,8.4-4.4  C50,50.4,47.8,46.9,45.1,44.2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                  <path d="  M18.4,12.2C22.2,9.5,26.9,8,32,8c13.3,0,24,10.8,24,24c0,4-1.3,9-4.4,12.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                  <path d="  M27.3,55.6c-9.8-1.9-17.5-9.8-19.1-19.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                  <path d="  M30,21c0,0,4.4,0,5.2,0c1.2,0,1.8,0.2,1.8,1.1s0,0.7,0,1.3c0,0.6,0,1.4-1.6,2.5c-2.3,1.6-5.6,3.8-5.6,5.1c0,1.6,0.7,2,1.8,2  s5.3,0,5.3,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                  <path d="  M40,21c0,0,0,2.8,0,3.8S39.9,27,41.5,27c1.6,0,4.5,0,4.5,0v-6.1V33" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} /></svg>
              </div>
              <div className="content">
                <div className="title c-white">+91 964 754 00 52</div>
                <p className="sub-title">Mon-Sat 10am-7pm</p>
              </div>
            </div>
            {/* /FOOTER CONTACTS ITEM */}
            {/* FOOTER CONTACTS ITEM */}
            <div className="contacts-item">
              <div className="crumina-module js-animate-icon">
                <svg className="crumina-icon c-red-themes" width={70} height={70} enableBackground="new 0 0 64 64" version="1.1" viewBox="0 0 64 64" xmlSpace="preserve" xmlns="../../external.html?link=http://www.w3.org/2000/svg"><polyline fill="none" points="  54,17 32,36 10,17 " stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} x1="10.9" x2={26} y1={48} y2={36} />
                  <path d="  M32.7,49H13c-2.2,0-4-1.8-4-4V19c0-2.2,1.8-4,4-4h38c2.2,0,4,1.8,4,4v15.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                  <circle cx="44.9" cy="43.1" fill="none" r="10.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                  <path d="  M44,41.4c0,0-1.3,3.4-0.9,5.1c0.4,1.7,2.6,2.1,3.7,1.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
                  <g><circle cx="45.4" cy="38.3" fill="none" stroke="currentColor" r="0.9" />
                    <path d="M45.4,37.3c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9C46.4,37.8,46,37.3,45.4,37.3   L45.4,37.3z" fill="none" stroke="currentColor" /></g>
                </svg>
              </div>
              <div className="content">
                <a href="mailto: creticweb@gmail.com" className="title c-white">creticweb@gmail.com</a>
                <p className="sub-title">online support</p>
              </div>
            </div>
            {/* /FOOTER CONTACTS ITEM */}
            {/* FOOTER CONTACTS ITEM */}
            <div className="contacts-item">
              <div className="crumina-module js-animate-icon">
                <svg className="crumina-icon c-green-themes" width={70} height={70} enableBackground="new 0 0 64 64" version="1.1" viewBox="0 0 64 64" xmlSpace="preserve" xmlns="../../external.html?link=http://www.w3.org/2000/svg"><polygon fill="none" points="  38.7,36.4 56,32 38.7,27.6 42,22 36.4,25.3 32,8 27.6,25.3 22,22 25.3,27.6 8,32 25.3,36.4 22,42 27.6,38.7 32,56 36.4,38.7 42,42   " stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} /><circle cx={32} cy={32} fill="none" r={4} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} /><path d="  M26.1,53.2c-7.9-2.2-13.9-8.6-15.6-16.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} /><path d="  M53.5,36.9c-1.8,8.1-8.2,14.6-16.3,16.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} /><path d="  M36.9,10.5c8.2,1.9,14.7,8.3,16.6,16.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} /><path d="  M10.5,27.1c1.9-8.2,8.3-14.6,16.4-16.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} /></svg>
              </div>
              <div className="content">
                <div className="title c-white">SN DEY ROAD, HABRA</div>
                <p className="sub-title">West Bengal India 743263</p>
              </div>
            </div>
            {/* /FOOTER CONTACTS ITEM */}
          </div>
          {/* /FOOTER CONTACTS */}
        </div>
        {/* SUB FOOTER */}
        <div className="sub-footer">
         Copyright © 2020 SRV Impex International. All rights reserved.
        </div>
        {/* /SUB FOOTER */}
      </footer>
  );
}

export default Footer;