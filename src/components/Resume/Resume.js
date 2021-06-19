import style from "./Resume.module.css";
import PageHeader from "./../PageHeader/PageHeader";

const TechnicalSkills = [
  {
    name: "Git",
  },

  {
    name: "ReactJs",
  },
  {
    name: "CSS",
  },
  {
    name: "HTML5",
  },
  {
    name: "JavaScript ES6+",
  },
  {
    name: "MongoDB",
  },
  {
    name: "MySQL",
  },
  {
    name: "Node.js",
  },
];

const IndustryExperience = [
  {
    company: "Freelance Construction",
    title: " Self Employed",
    years: "2020 - Present",
    description:
      "Kitchen and basement remodels; Installation of windows and doors; Plumbing;  Bidding potential jobs;  - Denver, Co",
  },
  {
    company: "Custom Craft Consulting",
    title: "Business Devlopment Manager",
    years: "2020 - 2020",
    description:
      "Providing expert construction software consulting and services to construction professionals. - Denver, Co",
  },
  {
    company: "In and out Home Improvements",
    title: "Installation and operations manager",
    years: "2013 - 2020",
    description:
      "Quality control and the installation of doors and windows in residential homes throughout Colorado; supervision, onboarding and training of workers; scheduling jobs and warranty visits. Denver, Co",
  },

  {
    company: "American Furniture Warehouse",
    title: "Driver/Driver Helper",
    years: "2012 -2013",
    description: "Deliveries, Customer Service; Sales. -Denver, Co",
  },
  {
    company: "U.S. Air Force",
    title: "Vehicle Operations",
    years: "2010 - 2012",
    description:
      "Inspecting, servicing, scheduling, and dispatching vehicles; prepared, reviewed, and maintained vehicle records and related forms; operated vehicles including forty-four passenger buses, forklifts, tractor trailers, and wreckers. -Nellis AFB, Nevada",
  },
];

const Education = {
  title: "Denver University Coding Bootcamp - Certificate",
};

const Resume = () => {
  return (
    <div className={style.Resume}>
      <PageHeader title={"Resume"} />
      <p>Resume goes here!!</p>
      <div className={style.Container}>
        {/* <h3>{TechnicalSkills}</h3>
        <h3>{IndustryExperience}</h3>
        <h3>{Education}</h3> */}
      </div>
    </div>
  );
};
export default Resume;
