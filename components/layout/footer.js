import Container from "react-bootstrap/Container";
import styles from "../../styles/layout/footer.module.css";

export default function Footer() {
  return (
    <Container fluid className={styles.box}>
      <p>Social links</p>
      <p>{`© Copyright ${new Date().getFullYear()} Eduway`}</p>
    </Container>
  );
}
