import PageHeader from "./../PageHeader/PageHeader";
import { Card, Button } from "react-bootstrap";
import style from "./Portfolio.module.css";
import budgetTrackerImg from "../../img/budget-tracker-img.jpeg";
import hollyHub from "../../img/hollywodhub.png";
import weatherDash from "../../img/weatherdash.png";
import fitTrack from "../../img/fittrack.jpeg";
import eCommBackEnd from "../../img/ECBE.gif";
import FF2021 from "../../img/FF2021.jpg";

const Portfolio = () => {
  return (
    <div className={style.Portfolio} id="portfolio">
      <PageHeader title={"Portfolio"} />
      <div className={style.Container}>
        {/* card 1 */}
        <Card style={{ width: "18rem" }} className={style.Card}>
          <Card.Img variant="top" src={budgetTrackerImg} />
          <Card.Body>
            <Card.Title>Progressive Budget Tracker</Card.Title>
            <Card.Text>
              A Progressive web app. This app keeps track of your budget all
              while having both online and offline capabilities
            </Card.Text>
            <a href="https://github.com/strong-one/Budget-Tracker-Progressive">
              <Button variant="primary">See code</Button>
            </a>
            <a href="https://lit-badlands-23728.herokuapp.com/">
              <Button variant="primary">Deployed Site</Button>
            </a>
          </Card.Body>
        </Card>

        {/* card 2 */}
        <Card style={{ width: "18rem" }} className={style.Card}>
          <Card.Img variant="top" src={weatherDash} />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              Think of a location.... whatever it is. This app will find the
              wether for any place you think of
            </Card.Text>
            <a href="https://github.com/strong-one/Strong-Weather-Dashboard">
              <Button variant="primary">See Code</Button>
            </a>
            <a href="https://strong-one.github.io/Strong-Weather-Dashboard/">
              <Button variant="primary">Deployed Site</Button>
            </a>
          </Card.Body>
        </Card>

        {/* card 3 */}
        <Card style={{ width: "18rem" }} className={style.Card}>
          <Card.Img variant="top" src={hollyHub} />
          <Card.Body>
            <Card.Title>Hollywood Hub</Card.Title>
            <Card.Text>A blend of IMDB and Pintrest</Card.Text>
            <a href="https://github.com/strong-one/Hollywood-Hub">
              <Button variant="primary">See Code</Button>
            </a>
            <a href="https://strong-one.github.io/Hollywood-Hub/">
              <Button variant="primary">Deployed Site</Button>
            </a>
          </Card.Body>
        </Card>
        {/* card 4 */}
        <Card style={{ width: "18rem" }} className={style.Card}>
          <Card.Img variant="top" src={fitTrack} />
          <Card.Body>
            <Card.Title>Fitness Tracker</Card.Title>
            <Card.Text>
              At any level of fitness keeping track of training sessions and
              progress is important. This application will help with all
              tracking on your fitness journey.
            </Card.Text>
            <a href="https://github.com/strong-one/Fitness-Tracker">
              <Button variant="primary">See Code</Button>
            </a>
            <a href="https://guarded-scrubland-83578.herokuapp.com/?id=60c574f18c9bf00015247221">
              <Button variant="primary">Deployed Site</Button>
            </a>
          </Card.Body>
        </Card>

        {/* card 5 */}
        <Card style={{ width: "18rem" }} className={style.Card}>
          <Card.Img variant="top" src={eCommBackEnd} />
          <Card.Body>
            <Card.Title>E-Commerce Back End </Card.Title>
            <Card.Text>
              This is a mock up of data that would be stored in an E-Commerce
              back end. This projects shows functional CRUD opertations on all
              of the data.
            </Card.Text>
            <a href="https://github.com/strong-one/E-Commerce-Back-End_ORM">
              <Button variant="primary">See code</Button>
            </a>
            <a href="https://drive.google.com/file/d/11mW3G28r_EcaKUtRv_i0E5tfVqbZUUAt/view?usp=sharing">
              <Button variant="primary">See Video Demo</Button>
            </a>
          </Card.Body>
        </Card>
        {/* card 6 */}
        <Card style={{ width: "18rem" }} className={style.Card}>
          <Card.Img variant="top" src={FF2021} />
          <Card.Body>
            <Card.Title>2021 Ford Finder</Card.Title>
            <Card.Text>
              An app for ford lovers, utilizing login/logout methods as well as
              creating a user account, enctypting password and storing all user
              data in a database
            </Card.Text>
            <a href="https://github.com/strong-one/Ford-Finder-2021">
              <Button variant="primary">See Code </Button>
            </a>
            <a href="https://whispering-fortress-31426.herokuapp.com/">
              <Button variant="primary">Deployed Site</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Portfolio;
