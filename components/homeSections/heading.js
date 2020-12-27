import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "../../styles/home.module.css";

export default function Heading() {
  return (
    <Container
      fluid
      id="heading"
      className={`section ${styles.headingSection}`}
    >
      <h1 className={styles.headingTitle}>
        <div>L'Educazione</div>è la Via<div></div>
      </h1>
      <h3 className={styles.headingSubtitle}>
        Eduway offre la migliore esperienza Educativa: solide competenze,
        Podcast e l'empatia di un team giovane al servizio dei giovani.
      </h3>
      <Button variant="primary" block>
        Play Podcast
      </Button>
      <Button variant="info" block>
        Contattaci
      </Button>
    </Container>
  );
}
