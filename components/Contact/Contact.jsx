import ContactForm from "./ContactForm";

import styles from "./Contact.module.css";

export default function Contact(props) {
  return (
    <div className={`contact ${styles.contact}`}>
      <div className="container">
        <div className="row">
          <h1 className="display-5">Contact</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
