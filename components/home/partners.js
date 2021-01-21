import Container from "react-bootstrap/Container";
import styles from "../../styles/home/partners.module.css";
import Fade from "react-reveal/Fade";

export default function Partners() {
  return (
    <Container fluid className={styles.section}>
      <Container className="inner-section">
        <Fade bottom>
          <h2 className={`section-title ${styles.partnersTitle}`}>Partners</h2>
          <div className={styles.partnersRow}>
            <img
              src="images/partners/focr.svg"
              alt="Fondazione Oratori Cremonesi Focr logo"
              className={styles.logo}
            />
          </div>
        </Fade>
      </Container>
    </Container>
  );
}
