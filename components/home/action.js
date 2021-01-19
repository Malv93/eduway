import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ContactForm from "../forms/contactForm";
import styles from "../../styles/home/action.module.css";
import Link from "next/link";

export default function Action() {
  return (
    <Container fluid id="action" className={`section ${styles.section}`}>
      <h2 className="section-title">Prova Eduway!</h2>
      <Link href="/podcast">
        <Button variant="warning" block className="button-font">
          <i class="fas fa-podcast"></i> Ascolta il Podcast
        </Button>
      </Link>

      <Container className={styles.formBox}>
        <div id="contact-form" className={styles.linkFromButton}></div>
        <div id="contacts" className="position-link-id"></div>
        <h3>Compila il Form per contattarci</h3>
        <ContactForm />
      </Container>
    </Container>
  );
}
