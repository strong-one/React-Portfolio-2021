// bringing in the functions from each file

import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

// for bootstrap refactor
// import {  } from "react-bootstrap";

// making calls to each function that were imported from above -- app is parent level component
// can only return one function -- wrap in a <div></div> element to return more than one call can also use react fragments <> instead of divs </>
function App() {
  return (
    // <>
    <div class="App">
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    // </>
  );
}

export default App;
