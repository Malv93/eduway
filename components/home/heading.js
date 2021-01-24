import Container from "react-bootstrap/Container";
import styles from "../../styles/home/heading.module.css";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Pulse from "react-reveal/Pulse";

export default function Heading() {
  return (
    <Container fluid id="heading" className={`section ${styles.section}`}>
      <Container className={`inner-section ${styles.innerSection}`}>
        <Pulse>
          <h1 className="page-title">
            <div>L'Educazione</div>è la Via<div></div>
          </h1>

          <h3 className={styles.subtitle}>
            Eduway offre la migliore esperienza Educativa: solide competenze,
            Podcast e l'empatia di un team giovane al servizio dei giovani.
          </h3>
          <div className={styles.buttonsBox}>
            <Link href="/podcast">
              <Button
                variant="warning"
                className={`button-font ${styles.button}`}
              >
                <i class="fas fa-podcast"></i> Ascolta il Podcast
              </Button>
            </Link>
            <Link href="/#contact-form">
              <Button className={`greylightblue-button ${styles.button}`}>
                <i class="far fa-envelope"></i> Contattaci
              </Button>
            </Link>
          </div>
        </Pulse>
      </Container>
      {/* Bottom tilted header */}
      <svg
        className="svg-tilted-header white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,100 100,0 100,100" />
      </svg>
    </Container>
  );
}
