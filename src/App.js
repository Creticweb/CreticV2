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
import Footer from "./components/footer";
//import Register from "./components/register";



import Home from "./components/home";
import NotFound from "./components/not-found";
import GST from "./components/gst";
import MSME from "./components/msme";
import CONTACT from "./components/contact";

const schemaMarkup = {
  "@context": "http://schema.org/",
  "@type": "NGO",
  name:
    "Track the spread of Coronavirus (COVID-19) in India (district level to state level) and World",
  alternateName: "COVID INDIA STATISTICS",
  url: "https://pandemic2020.in/",
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
        
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gst-registration" component={GST} />
              <Route path="/msme" component={MSME} />
              <Route path="/contact" component={CONTACT} />
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