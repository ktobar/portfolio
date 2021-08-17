export default function Contact(props) {
  const { email, linkedin, emailIcon, linkedinIcon } = props;

  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <h1 className="display-5">Contact</h1>
          <div className="col-lg-3">{emailIcon}{email}</div>
          <div className="col-lg-3">{linkedinIcon}{linkedin}</div>
        </div>
      </div>
    </div>
  );
}
