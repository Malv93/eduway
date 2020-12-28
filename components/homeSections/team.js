import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import styles from "../../styles/home.module.css";
import Fade from "react-reveal";

const founders = [
  {
    id: 1,
    name: "Andrea Dasti",
  },
  {
    id: 2,
    name: "Stefano Lepre",
  },
];

const collaborators = [
  {
    id: 1,
    name: "Emanuele Bergami",
    role: "Formatore",
  },
  {
    id: 2,
    name: "Heidi Corti",
    role: "Responsabile Grafica",
  },
  {
    id: 3,
    name: "Marco Malvicini",
    role: "Responsabile IT",
  },
];

export default function Team() {
  return (
    <Container fluid id="team" className={`section ${styles.teamSection}`}>
      <h2 className="section-title">Team</h2>
      {founders.map((founder) => {
        return (
          <Fade top key={founder.id}>
            <Card bg="primary" text="white" className={styles.teamCard}>
              <Card.Header>{founder.name}</Card.Header>
              <Card.Body>Co-Founder</Card.Body>
            </Card>
          </Fade>
        );
      })}

      <h3 className="title">Collaboratori</h3>
      {collaborators.map((collaborator) => {
        return (
          <Fade top key={collaborator.id}>
            <Card
              bg="light"
              text="dark"
              border="primary"
              className={styles.teamCard}
            >
              <Card.Header>{collaborator.name}</Card.Header>
              <Card.Body>{collaborator.role}</Card.Body>
            </Card>
          </Fade>
        );
      })}
    </Container>
  );
}
