import ContactForm from "./ContactForm";

export default function Contact(props) {
  return (
    <div className="contact container">
      <div className="row">
        <h1 className="display-5">Contact</h1>
        <ContactForm/>
      </div>
    </div>
  );
}
