import Container from "react-bootstrap/Container";
import styles from "../../styles/home/mission.module.css";
import Fade from "react-reveal/Fade";

export default function Mission() {
  return (
    <Container fluid className={`section ${styles.section} ${styles.mission}`}>
      <Container fluid className="inner-section">
        <Fade bottom>
          <div className={styles.missionBox}>
            <h2 className="section-title">Mission</h2>
            <p>
              Portiamo sviluppo a persone e comunità attraverso progetti
              educativi che nascono dai loro bisogni e desideri.
            </p>
          </div>
        </Fade>
      </Container>
      {/* Bottom tilted header */}
      <svg
        className="svg-tilted-header greylightblue"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,98 100,0 100,100 0,100" />
      </svg>
    </Container>
  );
}
