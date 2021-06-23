// bringing in the functions from each file -- need to import so i can call it

import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// for bootstrap refactor
// import {  } from "react-bootstrap";

// making calls to each function that were imported from above -- app is parent level component -- will render to html via root id
// can only return one function -- wrap in a <div></div> element to return more than one call can also use react fragments <> instead of divs </>
function App() {
  return (
    <Router basename="/">
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
