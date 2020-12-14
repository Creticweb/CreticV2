import React from 'react';
import Slider from './banner';
import Service from './service';
import Register from './register';

import High from './high';
import {Helmet} from "react-helmet";
import Newsletter from "./newsletter";
const Home = (props) => {

  return (
  <React.Fragment>
  <Helmet>
     <title>Cretic Solutions - GST, Incorporation & MSME Registration</title>
      <meta
      name="description"
      content="We offer online services like company registration, trademark filing, income tax filing, GST registration, GST return filing"
    />
    <meta name="keywords" content="GST Registration, Enrollment for GST, New GST Registration, GST Portal Access,GST Registration Online, GST Registration Status, GST Registration Fees" />
    </Helmet>
  <div className="main-content-wrapper">
    <Slider/>
     <Service/>
     <Register/>
      <High/>
     <Newsletter/>
   </div>
  </React.Fragment>
 
  );
}

export default Home;