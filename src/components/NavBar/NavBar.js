// importing css file within folder within first div
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
// import Resume from "../Resume/Resume";
// import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    // <Navbar className={style.NavBar} bg="dark" variant="dark">
    //   <Container className={style.Container}>
    //     <Navbar.Brand href="#home">Nick Strong</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="/#about">About Me</Nav.Link>
    //       <Nav.Link href="/#resume">Resume</Nav.Link>
    //       <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
    //       <Nav.Link href="/#contact">Let's Connect</Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>

    <div className={style.NavBar}>
      <h1>Nick Strong</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Let's Connect</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
