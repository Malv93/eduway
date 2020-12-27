import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import styles from "../../styles/home.module.css";

export default function Team() {
  return (
    <Container fluid id="team" className={`section ${styles.teamSection}`}>
      <h2 className="section-title">Team</h2>
      <Card bg="primary" text="white" className={styles.teamCard}>
        <Card.Header>Andrea Dasti</Card.Header>
        <Card.Body>Co-Founder</Card.Body>
      </Card>
      <Card bg="primary" text="white" className={styles.teamCard}>
        <Card.Header>Stefano Lepre</Card.Header>
        <Card.Body>Co-Founder</Card.Body>
      </Card>
      <h3 className="title">Collaboratori</h3>
      <Card bg="light" text="dark" border="primary" className={styles.teamCard}>
        <Card.Header>Emanuele Bergami</Card.Header>
        <Card.Body>Formatore</Card.Body>
      </Card>
      <Card bg="light" text="dark" border="primary" className={styles.teamCard}>
        <Card.Header>Heidi Corti</Card.Header>
        <Card.Body>Responsabile Grafica</Card.Body>
      </Card>
      <Card bg="light" text="dark" border="primary" className={styles.teamCard}>
        <Card.Header>Marco Malvicini</Card.Header>
        <Card.Body>Responsabile IT</Card.Body>
      </Card>
    </Container>
  );
}
