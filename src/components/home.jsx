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