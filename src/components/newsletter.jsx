import React from 'react';


const Newsletter = (props) => {

  return (
     
      <section className="medium-padding-top section-image-bg-breez">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 mb-4">
              <h4 className="subscribe-title">Subscribe to our Newsletter</h4>
              <p className="subscribe-subtitle text-white">
                <span className="font-weight-bold">Join Our Newsletter</span> &amp; Marketing Communication. We'll send you news and offers.
              </p>
              <form className="subscribe-form">
                <div className="input-btn--inline">
                  <input className="input--white" type="email" placeholder="Your email address" />
                  <button type="button" className="crumina-button button--dark button--l">SUBSCRIBE</button>
                </div>
              </form>
            </div>
            <div className="col-lg-4 d-none d-lg-block mt-auto">
              <img loading="lazy" src="img/theme-content/icons/08-subscribe.svg" alt="subscibe" />
            </div>
          </div>
        </div>
      </section>
  );
}

export default Newsletter;