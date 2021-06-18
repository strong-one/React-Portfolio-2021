import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
