import Container from "react-bootstrap/Container";
import styles from "../../styles/layout/footer.module.css";

export default function Footer() {
  return (
    <Container fluid className={styles.box}>
      <Container fluid className="inner-section">
        <h4>Contatti</h4>
        <p>
          <svg className="icon icon-email">
            <title>Email Contact</title>
            <use xlinkHref="/images/icons/sprite.svg#icon-email"></use>
          </svg>{" "}
          info@eduwayimpresasociale.com
        </p>
        <p>
          <svg className="icon icon-call">
            <title>Phone Contact</title>
            <use xlinkHref="/images/icons/sprite.svg#icon-call"></use>
          </svg>{" "}
          0123456789
        </p>
        <hr className={styles.horizontalRow} />
        <div className={styles.socialRow}>
          <a href="https://twitter.com/Eduway_" target="_blank">
            <svg className="icon icon-social">
              <title>Twitter Link</title>
              <use xlinkHref="/images/icons/sprite.svg#icon-twitter"></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/eduway-the-podcast"
            target="_blank"
          >
            <svg className="icon icon-social">
              <title>Linkedin Link</title>
              <use xlinkHref="/images/icons/sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/Eduway.educationistheway"
            target="_blank"
          >
            <svg className="icon icon-social">
              <title>Facebook link</title>
              <use xlinkHref="/images/icons/sprite.svg#icon-facebook"></use>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/eduway_impresasociale/"
            target="_blank"
          >
            <svg className="icon icon-social">
              <title>Instagram Link</title>
              <use xlinkHref="/images/icons/sprite.svg#icon-instagram"></use>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCNHRs8xJFiI31SpQlo7iiZA/"
            target="_blank"
          >
            <svg className="icon icon-social">
              <title>Youtube Link</title>
              <use xlinkHref="/images/icons/sprite.svg#icon-youtube"></use>
            </svg>
          </a>
        </div>
        <p
          className={styles.copyright}
        >{`© Copyright ${new Date().getFullYear()} Eduway`}</p>
      </Container>
    </Container>
  );
}
