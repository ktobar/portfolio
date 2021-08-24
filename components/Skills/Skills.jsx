import Icon from "../comps/Icon";

import styles from "./Skills.module.css";

export default function Skills({ skills }) {
  const skillList = (data) => {
    const list = data.map((item) => {
      return (
        <li>
          <Icon name={item} aria-hidden="true" />
        </li>
      );
    });
    return list;
  };

  const card = (data) => {
    return (
      <div
        className={`col-sm-12 col-md-6 col-lg-3 cardList ${styles.cardList}`}
      >
        <div className="card" key={data.title}>
          <div className="card-body">
            <h5 className="card-title pb-1">{data.title}</h5>
            <p className="card-text">
              <ul className={styles.ul}>{skillList(data.info)}</ul>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const cardList = (data) => {
    const list = data.map((info) => {
      return card(info);
    });
    return list;
  };

  return (
    <div className={`skills ${styles.skills}`}>
      <div className="container">
        <div className="row">
          <h1 className="display-5 pb-1">Skills</h1>

          {cardList(skills)}
        </div>
      </div>
    </div>
  );
}
