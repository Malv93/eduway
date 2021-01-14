import Container from "react-bootstrap/Container";
import styles from "../../styles/homeSections/heading.module.css";
import Button from "react-bootstrap/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
      <div>
        <Button variant="warning" block className={styles.button}>
          Ascolta il Podcast
        </Button>
        <Button variant="info" block className={styles.button}>
          Contattaci
        </Button>
      </div>
      <ExpandMoreIcon style={{ fontSize: 100 }} className={styles.scrollDown} />
    </Container>
  );
}
