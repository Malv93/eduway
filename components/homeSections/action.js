import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ContactForm from "../forms/contactForm";
import styles from "../../styles/homeSections/action.module.css";

export default function Action() {
  return (
    <Container fluid id="action" className={`section ${styles.section}`}>
      <h2 className="section-title">Prova Eduway!</h2>
      <Button variant="warning" block className="button-font">
        Ascolta il Podcast
      </Button>

      <Container className={styles.formBox}>
        <h3>Compila il Form per contattarci</h3>
        <ContactForm />
      </Container>
    </Container>
  );
}
