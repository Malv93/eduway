import Container from "react-bootstrap/Container";
import styles from "../../styles/layout/footer.module.css";

export default function Footer() {
  return (
    <Container fluid className={styles.box}>
      <h4>Contatti</h4>
      <p>
        <i class="far fa-envelope"></i> info@eduwayimpresasociale.com
      </p>
      <p>
        <i class="fas fa-phone"></i> 0123456789
      </p>
      <hr className={styles.horizontalRow} />
      <div className={styles.socialRow}>
        <a href="https://twitter.com/Eduway_" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/eduway-the-podcast"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.facebook.com/Eduway.educationistheway"
          target="_blank"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/eduway_impresasociale/"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCNHRs8xJFiI31SpQlo7iiZA/"
          target="_blank"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <p
        className={styles.copyright}
      >{`© Copyright ${new Date().getFullYear()} Eduway`}</p>
    </Container>
  );
}
