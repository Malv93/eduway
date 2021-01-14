import Container from "react-bootstrap/Container";
import styles from "../../styles/homeSections/mission.module.css";
import Fade from "react-reveal/Fade";

export default function Mission() {
  return (
    <Container fluid className={`section ${styles.missionSection}`}>
      <div id="mission" className="position-link-id"></div>
      <h2 className="section-title">Mission</h2>
      <Fade top>
        <h4>Portare beneficio alle persone attraverso l’educazione</h4>
      </Fade>
    </Container>
  );
}
