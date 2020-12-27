import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import styles from "../../styles/home.module.css";

export default function Activities() {
  return (
    <Container
      fluid
      id="activities"
      className={`section ${styles.activitiesSection}`}
    >
      <h2 className="section-title">Attività Principali</h2>
      <Card bg="primary" text="white" className={styles.activity}>
        <Card.Header>Podcast</Card.Header>
        <Card.Body>
          <Card.Title>Eduway The Podcast</Card.Title>
          <Card.Text>
            <p>Breve descrizione ed immagine del podcast.</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="info" text="white" className={styles.activity}>
        <Card.Header>Accompagnamento Pedagogico</Card.Header>
        <Card.Body>
          <Card.Title>Collaborazione F.o.c.r.</Card.Title>
          <Card.Text>
            <p>Breve descrizione ed immagine F.o.c.r.</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className={styles.featuresBox}>
        <h3 className="title">Features</h3>

        <Card bg="secondary" text="white" className={styles.feature}>
          <Card.Header>Feature 1</Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Card.Body>
        </Card>
        <Card bg="secondary" text="white" className={styles.feature}>
          <Card.Header>Feature 2</Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Card.Body>
        </Card>
        <Card bg="secondary" text="white" className={styles.feature}>
          <Card.Header>Feature 3</Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
