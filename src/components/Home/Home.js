// importing css file to style locally
import style from "./Home.module.css";
// importing the filename of image from file path
import computer from "../../img/computer.png";
import code from "../../img/code.svg";

const Home = () => {
  return (
    // style.Home is adding the local style to the Home class.
    <div className={style.Home}>
      <div className={style.Container}>
        <h1 className={style.Hello}>Nick Strong.</h1>
        <h1>Aiming For progress and growth</h1>
      </div>

      <img className={style.code} src={code} alt="element"></img>
      <img className={style.computer} src={computer} alt="computericon"></img>
    </div>
  );
};
export default Home;
