import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import ReactGa from "react-ga";
import Navbar from "./components/navbar";
//import MovingText from 'react-moving-text'
import Whatsapp from "./components/whatsapp";
import Footer from "./components/footer";
//import Register from "./components/register";



import Home from "./components/home";
import NotFound from "./components/not-found";
import GST from "./components/gst";
import MSME from "./components/msme";
import CONTACT from "./components/contact";
import FSSAI from "./components/fssai";
import Privacy from "./components/policy";
import Return from "./components/gstfilling";

const schemaMarkup = {
  "@context": "http://schema.org/",
  "@type": "NGO",
  name:
    "We offers a suite of online services like company registration, trademark filing, income tax filing, GST registration, GST return filing",
  alternateName: "Cretic Solutions offers a suite of online services",
  url: "https://creticweb.com/",
};

function App() {
  const history = require("history").createBrowserHistory;

  useEffect(() => {
    ReactGa.initialize("UA-161766535-2");
    // UA-163288419-1
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <Router history={history}>
       <Navbar />
        <Whatsapp/>
        <marquee style={{ color: 'black', fontSize: '17px' }}><span className="covid19">COVID-19 Note :</span> Services will not be disrupted from our side. Please expect delays from government side in case of any registration. </marquee>
             
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gst-registration" component={GST} />
              <Route path="/msme" component={MSME} />
              <Route path="/contact" component={CONTACT} />
              <Route path="/fssai" component={FSSAI} />
              <Route path="/gst-filing" component={Return} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;