import React from 'react';


const Count = (props) => {

  return (
      <div className="medium-padding section-image-bg-lime section-anime-js">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4 mb-lg-0 element-anime-fadeInUp-js">
              <div className="crumina-module crumina-counter-item">
                <div className="counter-numbers counter c-white">
                  <span className="counter-value" data-count={96} data-duration={1500} />
                  <div className="units"> %</div>
                </div>
                <span className="counter-title">Client Retention</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4 mb-lg-0 element-anime-fadeInUp-js">
              <div className="crumina-module crumina-counter-item">
                <div className="counter-numbers counter c-white">
                  <span className="counter-value" data-count={1.5} data-duration={1000} />
                </div>
                <span className="counter-title">Years of Service</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4 mb-lg-0 element-anime-fadeInUp-js">
              <div className="crumina-module crumina-counter-item">
                <div className="counter-numbers counter c-white">
                  <span className="counter-value" data-count={85} data-duration={1500} />
                  <div className="units">+</div>
                </div>
                <span className="counter-title">Professionals</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 element-anime-fadeInUp-js">
              <div className="crumina-module crumina-counter-item">
                <div className="counter-numbers counter c-white">
                  <span className="counter-value" data-count={1154} />
                </div>
                <span className="counter-title">Satisfied Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Count;