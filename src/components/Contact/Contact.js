import style from "./Contact.module.css";
import PageHeader from "./../PageHeader/PageHeader";

const Contact = () => {
  return (
    // <div className={style.Contact}>
    //   <PageHeader title={"Let's Connect"} />
    //   <p>Contact information and form go here</p>
    //   <div className={style.Container}></div>
    // </div>
    <div className={style.Contact} id="contact">
      <PageHeader title={"Let's Connect"} />
      <div className="fcf-body">
        <div id="fcf-form">
          <form
            id="fcf-form-id"
            className="fcf-form-class"
            method="post"
            action="contact-form-process.php"
          >
            <div className="fcf-form-group">
              <label for="Name" class="fcf-label">
                Your name
              </label>
              <div className="fcf-input-group">
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  class="fcf-form-control"
                  required
                ></input>
              </div>
            </div>

            <div className="fcf-form-group">
              <label for="Email" class="fcf-label">
                Your email address
              </label>
              <div className="fcf-input-group">
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  class="fcf-form-control"
                  required
                ></input>
              </div>
            </div>

            <div className="fcf-form-group">
              <label for="Message" class="fcf-label">
                Your message
              </label>
              <div className="fcf-input-group">
                <textarea
                  id="Message"
                  name="Message"
                  className="fcf-form-control"
                  rows="6"
                  maxlength="3000"
                  required
                ></textarea>
              </div>
            </div>

            <div className="fcf-form-group">
              <button
                type="submit"
                id="fcf-button"
                class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
