import style from "./Footer.module.css";
import {
  FaLinkedin,
  FaGithub,
  FaMailBulk,
  FaFacebookSquare,
} from "react-icons/fa";

// const linkedInUrl = (url) => {
//   return () event => window.open
// }

const Footer = () => {
  return (
    <div className={style.Footer}>
      <a
        href="https://www.linkedin.com/in/nick-strong-71a58159/"
        target="_blank"
      >
        <FaLinkedin color="white" size="100px" style={{ padding: "1%" }} />
      </a>
      <a href="https://github.com/strong-one" target="_blank">
        <FaGithub color="white" size="100px" style={{ padding: "1%" }} />
      </a>

      <a href="https://www.facebook.com/nick.strong.18" target="_blank">
        <FaFacebookSquare
          color="white"
          size="100px"
          style={{ padding: "1%" }}
        />
      </a>
      <a href="mailto:nstrong92@yahoo.com">
        <FaMailBulk color="white" size="100px" style={{ padding: "1%" }} />
      </a>
    </div>
  );
};
export default Footer;
