import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ContactForm from "../forms/contactForm";
import styles from "../../styles/home/action.module.css";
import Pulse from "react-reveal/Pulse";
import Link from "next/link";

export default function Action() {
  return (
    <Container fluid id="action" className={`section ${styles.section}`}>
      <Container fluid className="inner-section">
        <Pulse>
          <Link href="/podcast">
            <Button variant="warning" block className={styles.podcastButton}>
              <svg className="icon icon-podcast">
                <title>Play Podcast</title>
                <use xlinkHref="/images/icons/sprite.svg#icon-podcast"></use>
              </svg>
              Ascolta il Podcast
            </Button>
          </Link>

          <Container className={styles.formBox}>
            <div id="contact-form" className={styles.linkFromButton}></div>
            <div id="contacts" className="position-link-id"></div>
            <h3>Compila il Form per contattarci</h3>
            <ContactForm />
          </Container>
        </Pulse>
      </Container>
    </Container>
  );
}
