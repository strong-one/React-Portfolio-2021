// importing css file within folder within first div
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div class={style.NavBar}>
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
