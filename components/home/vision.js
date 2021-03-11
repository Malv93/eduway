import Container from "react-bootstrap/Container";
import styles from "../../styles/home/mission.module.css";
import Fade from "react-reveal/Fade";

export default function Vision() {
  return (
    <Container fluid className={`section ${styles.section} ${styles.vision}`}>
      <Container fluid className="inner-section">
        <Fade bottom>
          <div className={styles.missionBox}>
            <h2 className="section-title">Vision</h2>
            <p>
              Esserci per scomparire. <br />
              Perché l'obiettivo dell'educazione è generare autonomia.
            </p>
          </div>
        </Fade>
      </Container>
      {/* Bottom tilted header */}
      <svg
        className="svg-tilted-header bluenavy"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,98 100,0 100,100 0,100" />
      </svg>
    </Container>
  );
}
