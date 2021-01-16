import { useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "../../styles/cards/flipCard.module.css";

export default function FlipCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className={styles.scene}>
      <button
        className={
          styles.card + " " + (isFlipped ? styles.isFlipped : undefined)
        }
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Card
          bg={props.founder ? "primary" : "light"}
          text={props.founder ? "white" : "dark"}
          border={props.founder ? undefined : "primary"}
          className={`${styles.cardFace} ${styles.cardFaceFront}`}
        >
          <Card.Header>FRONT: {props.name}</Card.Header>
          <Card.Body>
            CLICK ME <p>{props.role}</p>
          </Card.Body>
        </Card>
        <Card
          bg={props.founder ? "danger" : "light"}
          text={props.founder ? "white" : "dark"}
          border={props.founder ? undefined : "danger"}
          className={`${styles.cardFace} ${styles.cardFaceBack}`}
        >
          <Card.Header>BACK: {props.name}</Card.Header>
          <Card.Body>
            CLICK ME<p>{props.name} CV</p>
          </Card.Body>
        </Card>
      </button>
    </div>
  );
}
