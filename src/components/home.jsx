import React from 'react';
import Slider from './banner';
import Service from './service';
import Register from './register';
//import Count from './counter';
import High from './high';
const Home = (props) => {

  return (
  <React.Fragment>
  <div className="main-content-wrapper">
    <Slider/>
     <Service/>
     <Register/>
      <High/>
   </div>
  </React.Fragment>
 
  );
}

export default Home;