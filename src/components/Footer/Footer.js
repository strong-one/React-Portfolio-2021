import style from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

// const linkedInUrl = (url) => {
//   return () event => window.open
// }

const Footer = () => {
  return (
    <div className={style.Footer}>
      <a href="https://www.linkedin.com/in/nick-strong-71a58159/">
        <FaLinkedin color="white" size="100px" style={{ padding: "1%" }} />
      </a>
      <a href="https://github.com/strong-one">
        <FaGithub color="white" size="100px" style={{ padding: "1%" }} />
      </a>
      <a href="mailto:nstrong92@yahoo.com">
        <FaMailBulk color="white" size="100px" style={{ padding: "1%" }} />
      </a>
    </div>
  );
};
export default Footer;
