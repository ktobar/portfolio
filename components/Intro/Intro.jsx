import styles from "./Intro.module.css";

export default function Intro({ name, avatar, role, summary }) {
  return (
    <>
      <div className={`container-fluid intro ${styles.intro}`}>
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <img src={avatar} className="img-fluid rounded-circle avatar" />
          </div>
          <div class="col-md-8 col-sm-12">
            <h1 className="display-1">{name}</h1>
            <h2 className="display-6">{role}</h2>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </>
  );
}
