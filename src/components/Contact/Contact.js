import style from "./Contact.module.css";
import PageHeader from "./../PageHeader/PageHeader";

const Contact = () => {
  return (
    <div className={style.Contact}>
      <PageHeader title={"Let's Connect"} />
      <p>Contact information and cards go here</p>
      <div className={style.Container}></div>
    </div>
  );
};
export default Contact;
