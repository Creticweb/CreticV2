import React from 'react';
import safe from "../img/shield.png";
import home from "../img/house.png";
import docu from "../img/dossier.png";
import Newsletter from "./newsletter";
import {Helmet} from "react-helmet";
const FSSAI = (props) => {

  return (
  <React.Fragment>
     
    <Helmet>
     <title>FSSAI LICENSE | Cretic Solutions</title>
     <meta name="keywords" content="FSSAI Registration Online, FSSAI Food License, Food License Online"/>
    </Helmet>
      <div class="main-content-wrapper">
      	<section class="crumina-stunning-header section-image-bg-blue-dark">
      	
		<div class="container">
			<div class="stunning-header-content align-center">
				<h1 class="page-title text-white">FSSAI LICENSE</h1>

				<div class="crumina-breadcrumbs">

					<ul class="breadcrumbs">

						<li class="breadcrumbs-item">
							<a href="/">Home</a>
						</li>
						<li class="breadcrumbs-item trail-end">
							<span class="crumina-icon">»</span>
							<span>FSSAI License</span>
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
 	            <h2 class="heading-title">Benefits of FSSAI FoSCos Certificate</h2>
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
            <h5>TRUST OF THE CUSTOMERS.</h5>
          </div>
          <div class="col-md-4"> <img class="img-icon" src={home} alt="home" /><br/>
          <div class="heading-decoration"></div>
            <h5>PERMIT OF FOOD BUSINESS.</h5>
          </div>
          <div class="col-md-4"> <img class="img-icon" src={docu} alt="compliances" /> <br/>
          <div class="heading-decoration"></div>
            <h5>USE OF FSSAI LOGO.</h5>
          </div>
        </div>
      </div>
    </div>
      <section class="large-padding-top">
        <div class="wrapper light-wrapper">
      <div class="container inner">
         <header class="crumina-module crumina-heading mb-5">
 	            <div class="title-text-wrap">
 	            <h2 class="heading-title">FSSAI License Eligibility</h2>
 	            </div>
 	           <div class="heading-decoration"></div>
 	         </header>
        <div class="row">
          <div class="col-md-8 offset-md-2 table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">License Type</th>
                  <th scope="col">Eligibility</th>
                  <th scope="col">Fee</th>
                  <th scope="col">Validity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FSSAI FoSCos Basic License</td>
                  <td>Annual turnover of the business is less than 12 lakhs</td>
                  <td>Rs. 1399/-
                  Including Govt. Fee
                  Excluding
                  GST(for the 1st year only) No Hidden Charge</td>
                  <td>1 To 5 Years</td>
                </tr>
                
                <tr>
                  <td>FSSAI FoSCos State License</td>
                  <td>Annual turnover of the business is between 12 lakhs to 20 crores</td>
                  <td>Rs. 2399/-
                  Excluding Govt. Fee Excluding GST
                  One Time No Hidden Charge</td>
                  <td>1 To 5 Years</td>
                </tr>
                <tr>
                  <td>FSSAI FoSCos Central License</td>
                  <td>Annual turnover of the business is above 20 crores</td>
                  <td>Rs. 3399/- Excluding Govt. Fee Excluding GST One Time No Hidden Charge</td>
                  <td>1 To 5 Years</td>
                </tr>
             
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
    </div>
   </section>
   <Newsletter/>
      </div>
      
  </React.Fragment>
 
  );
}

export default FSSAI;