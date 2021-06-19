import style from "./About.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import me from "../../img/me.JPG";
const Aboutme = () => {
  return (
    <div className={style.Aboutme}>
      <PageHeader title={"About Me"} />
      <div className={style.Container}>
        <div className={style.Text}>
          <h2>Hello! I'm Nick</h2>
          <p>A full stack web devloper based in Colorado.</p>
        </div>
        <div className={style.Photo}>
          <img className={style.Me} src={me} alt="me"></img>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
