import Container from "react-bootstrap/Container";
import styles from "../../styles/home/heading.module.css";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Pulse from "react-reveal/Pulse";

export default function Heading() {
  return (
    <Container fluid id="heading" className={styles.section}>
      <Pulse>
        <h1 className={styles.title}>
          <div>L'Educazione</div>è la Via<div></div>
        </h1>

        <h3 className={styles.subtitle}>
          Eduway offre la migliore esperienza Educativa: solide competenze,
          Podcast e l'empatia di un team giovane al servizio dei giovani.
        </h3>
        <div className={styles.buttonsBox}>
          <Link href="/podcast">
            <Button variant="warning" block className="button-font">
              <i class="fas fa-podcast"></i> Ascolta il Podcast
            </Button>
          </Link>
          <Link href="/#contact-form">
            <Button variant="info" block className="button-font">
              <i class="far fa-envelope"></i> Contattaci
            </Button>
          </Link>
        </div>
      </Pulse>
    </Container>
  );
}
