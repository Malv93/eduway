import Container from "react-bootstrap/Container";
import styles from "../../styles/home/partners.module.css";
import Fade from "react-reveal/Fade";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Partners() {
  return (
    <Container fluid className={styles.section}>
      <Container className="inner-section">
        <Fade bottom>
          <h2 className={`section-title ${styles.partnersTitle}`}>Partners</h2>
        </Fade>
        <Row>
          <Col md>
            <Fade bottom>
              <div className={styles.partnersRow}>
                <a href="https://www.focr.it" target="_blank">
                  <img
                    src="images/partners/focr.svg"
                    alt="Fondazione Oratori Cremonesi Focr"
                    className={styles.logoFocr}
                  />
                </a>
              </div>
            </Fade>
          </Col>
          <Col md>
            <Fade bottom>
              <div className={styles.partnersRow}>
                <a href="https://www.red-and-blue.it/" target="_blank">
                  <img
                    src="images/partners/red&blue.png"
                    alt="Red & Blue, Sport, Education, Innovation"
                    className={styles.logoRB}
                  />
                </a>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
