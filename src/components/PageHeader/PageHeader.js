import style from "./PageHeader.module.css";

const PageHeader = (props) => {
  return (
    <div className={style.Container}>
      <hr />
      <h1>{props.title}</h1>
    </div>
  );
};

export default PageHeader;
