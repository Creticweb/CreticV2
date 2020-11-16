import React from 'react';

const Slider= (props) => {

  return (
        <section className="crumina-module crumina-module-slider crumina-main-slider">
          {/*Prev next buttons*/}
          <div className="swiper-btn-next">
            <svg className="crumina-icon" width={40} height={30}>
              <use xlinkHref="#icon-nav-next" />
            </svg>
          </div>
          <div className="swiper-btn-prev">
            <svg className="crumina-icon" width={40} height={30}>
              <use xlinkHref="#icon-nav-prev" />
            </svg>
          </div>
          <div className="swiper-container" data-effect="fade" data-show-items={1} data-change-handler="thumbsParent" data-prev-next={1} data-autoplay={4000}>
            {/* Additional required wrapper */}
            <div className="swiper-wrapper">
              {/* Slides */}
              <div className="swiper-slide bg-grey-theme">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 align-center">
                      <div className="slider-content">
                        <h2 className="h1 slider-content-title" data-swiper-parallax={-100}>MSME Registration</h2>
                        <p className="slider-content-text" data-swiper-parallax={-200}>As a small enterprise, you can have access to priority sector lending, tax exemptions & capital investment and power tariff subsidies.</p>
                        <a href="/msme" className="crumina-button button--dark button--l">VIEW DETAILS</a>
                      </div>
                      <div className="slider-thumb" data-swiper-parallax={-400} data-swiper-parallax-duration={600}>
                        <img loading="lazy" src="img/demo-content/icons/01-slide.svg" width={980} alt="SEO" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide bg-primary-themes">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4 mb-md-0">
                      <div className="slider-content">
                        <h2 className="h1 slider-content-title" data-swiper-parallax={-100}>Trade
                          <span className="c-white">License</span></h2>
                        <p className="slider-content-text c-white" data-swiper-parallax={-200}>A Trade License is a certificate/document that permits an applicant to initiate a particular business or trade in a specific location/area. The applicant must have attained 18 years of age and his/her venture must be legally permissible.</p>
                        <div className="universal-btn-wrapper">
                          <a href="/trade-license" className="crumina-button button--dark button--l">View Details</a>
                          <a href="/trade-license?utm=applynow" className="crumina-button button--white button--bordered button--with-icon button--icon-right button--l">
                            Apply Now
                            <svg className="crumina-icon" width={12} height={10}>
                              <use xlinkHref="#icon-arrow-right" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="slider-thumb" data-swiper-parallax={-400} data-swiper-parallax-duration={600}>
                        <img loading="lazy" src="img/demo-content/icons/02-slide.svg" alt="Case" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide bg-red-themes">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4 mb-md-0">
                      <div className="slider-thumb" data-swiper-parallax={-400} data-swiper-parallax-duration={600}>
                        <img loading="lazy" src="img/demo-content/icons/03-slide.svg" alt="Case" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="slider-content">
                        <h2 className="h1 slider-content-title" data-swiper-parallax={-100}>FSSAI Registration - Get your food licence online easily</h2>
                        <p className="slider-content-text c-white" data-swiper-parallax={-200}>FSSAI stands for the Food Safety and Standards Authority of India. It is an autonomous body that comes under the Ministry of Health & Family Welfare. It works on food safety and regulations in India. All food business operators are required to obtain an FSSAI license to operate the business in India.</p>
                        <div className="universal-btn-wrapper">
                          <a href="/fssai" className="crumina-button button--dark button--l">VIEW DETAILS</a>
                          <a href="/fssai" className="crumina-button button--white button--bordered button--l">
                            CHECK PLANS
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide bg-yellow-themes">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 align-center">
                      <div className="slider-content">
                        <h2 className="h1 slider-content-title" data-swiper-parallax={-100}>GST Returns Filing</h2>
                        <p className="slider-content-text c-white" data-swiper-parallax={-200}>A GST Return showcases the details of your purchase, tax paid on purchases, sales, and tax collected on sales. As a seller or service provider, it is mandatory to register for the GST if your business has a turnover of above ₹ 40 lakhs (if you sell physical goods) or more than ₹ 20 lakhs (if you supply services).</p>
                        <div className="universal-btn-wrapper">
                          <a href="/gst-filing" className="crumina-button button--dark button--l">APPLY NOW</a>
                          <a href="/gst-filing" className="crumina-button button--dark button--bordered button--l">CHECK PLANS</a>
                        </div>
                      </div>
                      <div className="slider-thumb" data-swiper-parallax={-400} data-swiper-parallax-duration={600}>
                        <img loading="lazy" src="img/demo-content/icons/04-slide.svg" width={940} alt="SEO" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide bg-green-themes">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4 mb-md-0">
                      <div className="slider-content">
                        <h2 className="h1 slider-content-title" data-swiper-parallax={-100}>Importer-Exporter Code</h2>
                        <p className="slider-content-text c-white" data-swiper-parallax={-200}>An Import-Export code is a 10 digit mandatory license, for companies and businesses that deals with import-export activities in the Indian Territory. The Director-General of Foreign Trade (DGFT), under the Department of Commerce, Government of India issues this license.</p>
                        <div className="universal-btn-wrapper">
                          <a href="/iecode" className="crumina-button button--dark button--l">APPLY NOW</a>
                          <a href="/iecode" className="crumina-button button--white button--bordered button--l">VIEW PLANS</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="slider-thumb" data-swiper-parallax={-400} data-swiper-parallax-duration={600}>
                        <img loading="lazy" src="img/demo-content/icons/05-slide.svg" alt="Case" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Pagination tabs*/}
            <div className="slider-slides main-slider-slides">
              <div className="main-slider-slides-wrap">
                <div className="slides-item bg-grey-theme swiper-slide-active">
                  <div className="h5 slides-item-title">MSME Registration</div>
                  <div className="slides-item-text"></div>
                  <img loading="lazy" className="slides-item-icon" src="img/demo-content/icons/icon34.png" alt="icon" />
                </div>
                <div className="slides-item bg-primary-themes">
                  <div className="h5 slides-item-title">Trade License</div>
                  <div className="slides-item-text"></div>
                  <img loading="lazy" className="slides-item-icon" src="img/demo-content/icons/icon35.png" alt="icon" />
                </div>
                <div className="slides-item bg-red-themes">
                  <div className="h5 slides-item-title">FSSAI</div>
                  <div className="slides-item-text"></div>
                  <img loading="lazy" className="slides-item-icon" src="img/demo-content/icons/icon36.png" alt="icon" />
                </div>
                <div className="slides-item bg-yellow-themes">
                  <div className="h5 slides-item-title">GST Filing</div>
                  <div className="slides-item-text"></div>
                  <img loading="lazy" className="slides-item-icon" src="img/demo-content/icons/icon37.png" alt="icon" />
                </div>
                <div className="slides-item bg-green-themes">
                  <div className="h5 slides-item-title">IE CODE</div>
                  <div className="slides-item-text"></div>
                  <img loading="lazy" className="slides-item-icon" src="img/demo-content/icons/icon38.png" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default Slider;