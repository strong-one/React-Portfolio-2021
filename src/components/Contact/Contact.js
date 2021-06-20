import style from "./Contact.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import { Button } from "react-bootstrap";

const Contact = () => {
  return (
    // <div className={style.Contact}>
    //   <PageHeader title={"Let's Connect"} />
    //   <p>Contact information and form go here</p>
    //   <div className={style.Container}></div>
    // </div>
    <div className={style.Contact} id="contact">
      <PageHeader title={"Let's Connect"} />
      <div className={style.EntireForm}>
        <div className={style.Body}>
          <div id="fcf-form">
            <form
              id="fcf-form-id"
              className={style.FormClass1}
              method="post"
              action="contact-form-process.php"
            >
              <div className={style.Group1}>
                <label for="Name" class={style.Cred}>
                  Your name:
                </label>
                <div className={style.NameInput}>
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    className={style.InputContainer}
                    required
                  ></input>
                </div>
              </div>

              <div className={style.Group2}>
                <label for="Email" className={style.Cred}>
                  Your email address:
                </label>
                <div className={style.EmailInput}>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    className={style.InputContainer}
                    required
                  ></input>
                </div>
              </div>

              <div className={style.Group3}>
                <label for="Message" className={style.Cred}>
                  Your message:
                </label>
                <div className={style.MessageInput}>
                  <textarea
                    id="Message"
                    name="Message"
                    className={style.InputContainer}
                    rows="6"
                    maxlength="3000"
                    required
                  ></textarea>
                </div>
              </div>

              <div className={style.group4}>
                {/* <button
                  type="submit"
                  id="fcf-button"
                  // class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
                  className={style.Button}
                >
                  Send Message
                </button> */}
                <Button
                  type="submit"
                  id="fcf-button"
                  className={style.Button}
                  variant="primary"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
