import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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
