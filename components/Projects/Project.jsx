import styles from "../../styles/Project.module.scss";

import Card from "react-bootstrap/Card";

export default function Projects(props) {
  const { projects } = props;

  const card = (data) => {
    return (
      <Card key={data.title} style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.info}</Card.Text>
          <Card.Text>Stack: {data.stack}</Card.Text>
          <Card.Link href={data.link}>{data.link}</Card.Link>
        </Card.Body>
      </Card>
    );
  };

  const cardList = (data) => {
    const list = data.map((info) => {
      return card(info);
    });
    return list;
  };

  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.cardList}>{cardList(projects)}</div>
    </div>
  );
}
