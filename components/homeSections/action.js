import Container from "react-bootstrap/Container";
import ActionButtons from "../actionButtons";
import styles from "../../styles/home.module.css";

export default function Action() {
  return (
    <Container fluid id="action" className={`section ${styles.actionSection}`}>
      <h2 className="section-title">Prova Eduway!</h2>
      <ActionButtons />
    </Container>
  );
}
