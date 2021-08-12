import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "../../styles/Skills.module.scss";

import Card from "react-bootstrap/Card";

export default function Skills(props) {
  const { skills } = props;

  const skillList = (data) => {
    let list = data.map((item) => {
      return <tr> <i class={item.icon}/> {item.name} </tr>;
    });
    return list;
  };

  const card = (data) => {
    return (
      <Card key={data.title} style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            <Table>
              <tbody>
                {skillList(data.info)}
              </tbody>
            </Table>
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
