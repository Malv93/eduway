import Container from "react-bootstrap/Container";
import styles from "../../styles/home/heading.module.css";
import Button from "react-bootstrap/Button";

export default function Heading() {
  return (
    <Container fluid id="heading" className={`section ${styles.section}`}>
      <h1 className={styles.title}>
        <div>L'Educazione</div>è la Via<div></div>
      </h1>

      <h3 className={styles.subtitle}>
        Eduway offre la migliore esperienza Educativa: solide competenze,
        Podcast e l'empatia di un team giovane al servizio dei giovani.
      </h3>
      <div className={styles.buttonsBox}>
        <Button variant="warning" block className="button-font">
          Ascolta il Podcast
        </Button>
        <Button variant="info" block className="button-font">
          Contattaci
        </Button>
      </div>
    </Container>
  );
}
