// importing css file within folder within first div
import style from "./NavBar.module.css";
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#about">About Me</a>
          </li>
          <li>
            <a href="/#resume">Resume</a>
          </li>
          <li>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/#contact">Let's Connect</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
