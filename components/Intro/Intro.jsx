import styles from "./Intro.module.css";

export default function Intro({ name, avatar, role, summary }) {
  return (
    <>
      <div class="container-fluid mt-4 intro" className={styles.intro}>
        <div class="row">
          <div class="col-md-3 col-sm-12">
            <img src={avatar} className="img-fluid rounded-circle avatar" />
          </div>
          <div class="col-md-9 col-sm-12">
            <h1 className="display-1">{name}</h1>
            <h2 className="display-6">{role}</h2>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </>
  );
}
