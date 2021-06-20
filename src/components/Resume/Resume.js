import style from "./Resume.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import CodePage from "../../img/codepage.jpg";

const listTitleStyle = {
  fontWeight: 900,
  color: "#9B1FE8",
  marginBottom: "4px",
};

const technicalSkills = (
  <>
    <h4 className={style.H4} style={listTitleStyle}>
      Technical Skills
    </h4>
    <ul>
      <li>-- React.js</li>
      <li>-- JavaScript ES6+</li>
      <li>-- MongoDB</li>
      <li>-- MySQL</li>
      <li>-- Node.js</li>
    </ul>
  </>
);
const keySkills = (
  <>
    <h4 className={style.H4} style={listTitleStyle}>
      Key Skills
    </h4>
    <ul>
      <li>-- Problem Solving</li>
      <li>-- Team management</li>
      <li>-- Communication</li>
      <li>-- Time management</li>
    </ul>
  </>
);

const industryExperience = (
  <>
    <h4 className={style.H4} style={listTitleStyle}>
      Industry Experience
    </h4>
    <ul>
      <li>
        -- Freelance Construction: 2020 - Present; Kitchen and basement
        remodels; Installation of windows and doors; Plumbing; Bidding potential
        jobs; - Denver, Co{" "}
      </li>
      <li>
        -- Custom Craft Consulting, Business Devlopment Manager: 2020 - 2020;
        Providing expert construction software consulting and services to
        construction professionals. - Denver, Co{" "}
      </li>
      <li>
        -- In and out Home Improvements, Installation and operations manager:
        2013 - 2020; Quality control and the installation of doors and windows
        in residential homes throughout Colorado; supervision, onboarding and
        training of workers; scheduling jobs and warranty visits. Denver, Co
      </li>
      <li>
        -- American Furniture Warehouse, Driver/ Driver helper: 2012 - 2013;{" "}
      </li>
      <li>
        -- U.S. Air Force, Vehicle Operations: 2010 - 2012; Inspecting,
        servicing, scheduling, and dispatching vehicles; prepared, reviewed, and
        maintained vehicle records and related forms; operated vehicles
        including forty-four passenger buses, forklifts, tractor trailers, and
        wreckers. -Nellis AFB, Nevada.
      </li>
    </ul>
  </>
);

const education = (
  <>
    <h4 className={style.H4} style={listTitleStyle}>
      Education
    </h4>
    <ul>
      <li>
        -- Denver University Full Stack Web Devlopment Bootcamp - Certificate
      </li>
    </ul>
  </>
);

const resumeComplete = [
  technicalSkills,
  keySkills,
  industryExperience,
  education,
];

const Resume = () => {
  return (
    <div className={style.Resume} id="resume">
      <PageHeader title={"Resume"} />
      {/* <div className={style.Container}>{resumeComplete}</div> */}
      <div className={style.Container}>
        <img className={style.Img} src={CodePage} alt="code html file"></img>
        {resumeComplete.map((resume) => {
          return <div className={style.List}>{resume}</div>;
        })}
      </div>
    </div>
  );
};
export default Resume;
