export default function Contact(props) {

  const {email, linkedin} = props;

  return (
    <div className="contact">
      <h1>Contact</h1>
      {email}
      {linkedin}
    </div>
    );
}