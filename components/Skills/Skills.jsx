import Icon from "../comps/Icon";

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
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="card" key={data.title}>
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">
              <ul>{skillList(data.info)}</ul>
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
    <div className="skills">
      <div className="container">
        <div className="row">
          <h1 className="display-5">Skills</h1>
          {cardList(skills)}
        </div>
      </div>
    </div>
  );
}
