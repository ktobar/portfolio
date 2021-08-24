import styles from "./Contact.module.css"

export default function ContactForm(props) {
  return (
    <div className={`contactForm ${styles.contactForm}`}>
      <form
        className="row g-3"
        action="https://formsubmit.co/d3172cbee0111dc49f047658007b5453"
        method="POST"
      >
        <div className="col-md-4 col-sm-12">
          <label for="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInfo"
            name="Name"
            required
          />
        </div>
        <div className="col-md-8 col-sm-12">
          <label for="" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInfo"
            name="Email"
            required
          />
        </div>
        <div className="col-md-12">
          <label for="" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subjectInfo"
            name="Subject"
            required
          />
        </div>
        <div className="col-lg-12 col-sm-12">
          <label for="" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="comments"
            rows="3"
            name="Message"
            required
          />
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
