import React from 'react';
import safe from "../img/shield.png";
import home from "../img/house.png";
import docu from "../img/dossier.png";
import FAQ from "./gstfaq";
import Newsletter from "./newsletter";
import {Helmet} from "react-helmet";

const GST = (props) => {

  return (
  <React.Fragment>
   <Helmet>
     <title>GST Registration | Cretic Solutions</title>
    </Helmet>
      <div class="main-content-wrapper">
      	<section class="crumina-stunning-header section-image-bg-black">
      	
		<div class="container">
			<div class="stunning-header-content align-center">
				<h1 class="page-title text-white">GST REGISTRATION</h1>

				<div class="crumina-breadcrumbs">

					<ul class="breadcrumbs">

						<li class="breadcrumbs-item">
							<a href="/">Home</a>
						</li>
						<li class="breadcrumbs-item trail-end">
							<span class="crumina-icon">»</span>
							<span>GST Registration</span>
						</li>

					</ul>

				</div>

			</div>
		</div>

	</section>
 	<section class="large-padding-top">
 	     <div class="container">
 	        <div class="row">
 	          <div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 m-auto align-center">
 	           <header class="crumina-module crumina-heading mb-5">
 	            <div class="title-text-wrap">
 	            <h2 class="heading-title">How Does GST Registration Work For You?</h2>
 	            </div>
 	           <div class="heading-decoration"></div>
 	         </header>
					</div>
				</div>
			</div>
	 </section>
     <div class="wrapper light-wrapper">
      <div class="container inner">
        <div class="row gutter-60 gutter-md-30 process-wrapper arrow text-center">
          <div class="col-md-4">
             <img class="img-icon" src={safe} alt="safety" /><br/>
             <div class="heading-decoration"></div>
            <h5>We help you get a Secure GST Identification Number.</h5>
          </div>
          <div class="col-md-4"> <img class="img-icon" src={home} alt="home" /><br/>
          <div class="heading-decoration"></div>
            <h5>We make it easy for you to get your GST from the comfort of your own home.</h5>
          </div>
          <div class="col-md-4"> <img class="img-icon" src={docu} alt="compliances" /> <br/>
          <div class="heading-decoration"></div>
            <h5>We will file your returns and complete all other compliances as and when required.</h5>
          </div>
        </div>
      </div>
    </div>
        <section className="large-padding bg-grey-theme">
          <div className="container">
            <div className="row pricing-tables-wrap-colored no-gutters">
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4 mb-lg-0">
                <div className="crumina-module crumina-pricing-tables-item pricing-tables-item-standard c-primary-themes">
                  <div className="main-pricing-content">
                    <div className="pricing-thumb">
                      <img loading="lazy" className="crumina-icon" src="img/demo-content/icons/pricing1.svg" alt="Personal" />
                    </div>
                    <h5 className="pricing-title">BASIC</h5>
                    <ul className="pricing-tables-position">
                      <li className="position-item">
                        <span className="font-weight-bold">GST Registration</span>
                      </li>
                      <li className="position-item">
                        <span className="font-weight-bold">Business Bank Account Opening</span>
                      </li>
                      <li className="position-item">
                        <span className="font-weight-bold"> Online GST Software</span>
                      </li>
                      <li className="position-item">
                        -
                      </li>
                      <li className="position-item">
                        <span className="font-weight-bold">1 Month Free GST Filing</span>
                      </li>
                    </ul>
                    <h2 className="rate">₹<span className="pricing-price">399</span></h2>
                    <a href="https://rzp.io/l/2Ij5LmObg" className="crumina-button button--primary button--l">ORDER NOW!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4 mb-lg-0">
                <div className="crumina-module crumina-pricing-tables-item pricing-tables-item-standard c-red-themes">
                  <div className="main-pricing-content">
                    <div className="pricing-thumb">
                      <img loading="lazy" className="crumina-icon" src="img/demo-content/icons/pricing2.svg" alt="Webmaster" />
                    </div>
                    <h5 className="pricing-title">STANDARD</h5>
                    <ul className="pricing-tables-position">
                      <li className="position-item">
                        <span className="font-weight-bold">GST Registration</span>
                      </li>
                      <li className="position-item">
                        <span className="font-weight-bold">Udyam Registration</span>
                    </li>
                      <li className="position-item">
                        <span className="font-weight-bold">Business Bank Account Opening</span>
                      </li>
                      <li className="position-item">
                        <span className="included">Online GST Software</span>
                      </li>
                      <li className="position-item">
                        <span className="font-weight-bold">3 Months Free GST Filing</span>
                      </li>
                    </ul>
                    <h2 className="rate">₹<span className="pricing-price">799</span></h2>
                    <a href="https://rzp.io/l/HYXqmSLe" className="crumina-button button--red button--l">ORDER NOW!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="crumina-module crumina-pricing-tables-item pricing-tables-item-standard c-yellow-themes">
                  <div className="main-pricing-content">
                    <div className="pricing-thumb">
                      <img loading="lazy" className="crumina-icon" src="img/demo-content/icons/pricing3.svg" alt="Webmaster" />
                    </div>
                    <h5 className="pricing-title">PREMIUM</h5>
                    <ul className="pricing-tables-position">
                      <li className="position-item">
                        <span className="font-weight-bold">GST Registration</span>
                      </li>
                      <li className="position-item">
                        <span className="font-weight-bold">Udyam Registration</span>
                        </li>
                      <li className="position-item">
                        <span className="font-weight-bold">6 Months Free GST Filing</span>
                      </li>
                      <li className="position-item">
                        <span className="included">Business Bank Account Opening</span>
                      </li>
                      <li className="position-item">
                        <span className="font-weight-bold">Online GST Software</span> 
                      </li>
                    </ul>
                    <h2 className="rate">₹<span className="pricing-price">1499</span></h2>
                    <a href="https://rzp.io/l/GIL4Dcs" className="crumina-button button--yellow button--l">ORDER NOW!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FAQ/>
        <Newsletter/>
      </div>
  </React.Fragment>
 
  );
}

export default GST;