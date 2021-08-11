export default function Intro(props) {

  const { name, avatar, role, summary } = props;

  return (
    <div className="intro">
      <h1>{name}</h1>
      <img src={avatar} />
      <h2>{role}</h2>
      <h3>
        {summary}
      </h3>
    </div>
    );
}