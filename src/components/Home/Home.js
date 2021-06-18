// importing css file to style locally
import style from "./Home.module.css";
// importing the filename of image from file path
import computer from "../../img/computer.png";
import code from "../../img/code.svg";

const Home = () => {
  return (
    <div class={style.Home}>
      <div class={style.Container}>
        <h1 class={style.Hello}>Nick Strong.</h1>
        <h1>Aiming For progress and growth</h1>
      </div>

      <img class={style.code} src={code} alt="element"></img>
      <img class={style.computer} src={computer} alt="computericon"></img>
    </div>
  );
};
export default Home;
