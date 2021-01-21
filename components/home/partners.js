import Container from "react-bootstrap/Container";
import styles from "../../styles/home/partners.module.css";

export default function Partners() {
  return (
    <Container fluid className={styles.section}>
      <h2 className="section-title">Partners</h2>
      <div className={styles.partnersRow}>
        <img
          src="images/partners/focr.svg"
          alt="Fondazione Oratori Cremonesi Focr logo"
          className={styles.logo}
        />
      </div>
    </Container>
  );
}
