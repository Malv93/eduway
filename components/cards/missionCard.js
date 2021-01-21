import Container from "react-bootstrap/Container";
import styles from "../../styles/cards/missionCard.module.css";

export default function MissionCard(props) {
  return (
    <Container fluid className={` ${styles.section}`}>
      {props.children}
      <h2 className="section-title">{props.title}</h2>
      <h4>{props.description}</h4>
    </Container>
  );
}
