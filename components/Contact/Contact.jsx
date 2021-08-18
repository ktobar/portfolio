import Icon from "../comps/Icon";

export default function Contact({ email, linkedin }) {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <h1 className="display-5">Contact</h1>
          <div className="col-lg-3">
            <Icon name="Email" />
            {email}
          </div>
          <div className="col-lg-3">
            <Icon name="Linkedin" />
            {linkedin}
          </div>
        </div>
      </div>
    </div>
  );
}
