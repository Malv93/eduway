import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "../../styles/homeSections/action.module.css";

export default function Action() {
  return (
    <Container fluid id="action" className={`section ${styles.section}`}>
      <h2 className="section-title">Prova Eduway!</h2>
      <div className={styles.actionButtons}>
        <Button variant="primary" block>
          Play Podcast
        </Button>
        <Button variant="info" block>
          Contattaci
        </Button>
      </div>
    </Container>
  );
}
