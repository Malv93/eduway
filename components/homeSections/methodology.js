import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import styles from "../../styles/home.module.css";

export default function Methodology() {
  return (
    <Container
      fluid
      id="methodology"
      className={`section ${styles.methodologySection}`}
    >
      <h2 className="section-title">Il Metodo Eduway</h2>
      <ol>
        <li className={styles.methodologyStep}>
          <Card bg="warning" text="dark">
            <Card.Header>Condividiamo nuovi obiettivi</Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Card.Body>
          </Card>
        </li>
        <li className={styles.methodologyStep}>
          <Card bg="warning" text="dark">
            <Card.Header>Individuiamo problemi e punti di forza</Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Card.Body>
          </Card>
        </li>
        <li className={styles.methodologyStep}>
          <Card bg="warning" text="dark">
            <Card.Header>Progettiamo l'accompagnamento</Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Card.Body>
          </Card>
        </li>
        <li className={styles.methodologyStep}>
          <Card bg="warning" text="dark">
            <Card.Header>Lavoriamo per raggiungere gli obiettivi</Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Card.Body>
          </Card>
        </li>
        <li className={styles.methodologyStep}>
          <Card bg="warning" text="dark">
            <Card.Header>
              Termine del progetto e definizione nuovi obiettivi
            </Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Card.Body>
          </Card>
        </li>
      </ol>
    </Container>
  );
}
