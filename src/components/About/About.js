import style from "./About.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import me from "../../img/me.JPG";
const Aboutme = () => {
  return (
    <div className={style.AboutMe}>
      <PageHeader title={"About Me"} />
      <div className={style.Container}>
        <div className={style.Text}>
          <h2>Hello! I'm Nick</h2>
          <p>
            A full stack web developer earning a Denver University bootcamp
            certificate. With my talents in JavaScript, NoSQL, React.js, Node.js
            and creating polished responsive websites all using agile iterative
            methodology, I will take my background of problem solving,
            communication and leadership to a front or back end role. I have led
            the projects as scrum master, making sure the process ran
            efficiently by designating tasks, making sure that the team
            collaborated together to complete tasks, ensuring a professional
            final result. I bring excitement and desire to be the best at what I
            do along with taking extreme pride in my work to any position or
            task that I am given to ensure that my company meets all goals that
            are set.
          </p>
        </div>
        <div className={style.Photo}>
          <img className={style.Me} src={me} alt="me"></img>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
