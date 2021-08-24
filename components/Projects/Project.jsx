import Icon from "../comps/Icon";

import styles from "../../styles/Project.module.scss";

export default function Projects({ projects }) {
  const stackList = (data) => {
    const list = data.map((item) => {
      return (
        <li>
          <Icon name={item} />
        </li>
      );
    });

    return list;
  };

  const card = (data) => {
    return (
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="card" key={data.title}>
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <img className={`img-fluid ${styles.img}`} src={data.image[0]} />
            <p className="card-text">{data.info}</p>
            <p className="card-text">
              Stack:
              <ul>{stackList(data.stack)}</ul>
            </p>
            <a href={data.link}>{data.link}</a>
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
    <div className="projects">
      <div className="container">
        <div className="row">
          <h1 className="display-5">Projects</h1>
          {cardList(projects)}
        </div>
      </div>
    </div>
  );
}
