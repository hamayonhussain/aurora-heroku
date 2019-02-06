import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Welcome from "./components/pages/Welcome";
import Nasaimages from "./components/pages/Nasaimages";
import NasaLive from "./components/pages/Nasalive";
import Articles from "./components/pages/Articles";
import Apod from "./components/pages/Apod";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/NasaImages" component={Nasaimages} />
        <Route exact path="/NasaLive" component={NasaLive} />
        <Route exact path="/Apod" component={Apod} />
        <Route path="/Articles" component={Articles} />
      </div>
    </Router>
  );
}

export default App;
