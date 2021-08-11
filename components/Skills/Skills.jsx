import Table from "react-bootstrap/Table";

import styles from "../../styles/Skills.module.scss";

import Card from "react-bootstrap/Card";

export default function Skills(props) {
  const { skills } = props;

  const skillList = (data) => {
    let list = data.map((item) => {
      return <tr>{item}</tr>;
    });
    return list;
  };

  const card = (data) => {
    return (
      <Card key={data.title} style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            <Table>{skillList(data.info)}</Table>
          </Card.Text>
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
    <div className={styles.skills}>
      <h1>Skills</h1>
      <div className={styles.cardList}>{cardList(skills)}</div>
    </div>
  );
}
