import style from "./Portfolio.module.css";
import PageHeader from "./../PageHeader/PageHeader";

const Portfolio = () => {
  return (
    <div className={style.Portfolio}>
      <PageHeader title={"Portfolio"} />
      <p>Portfolio Cards Go Here</p>
      <div className={style.Container}></div>
    </div>
  );
};
export default Portfolio;
