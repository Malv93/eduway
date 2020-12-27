import Container from "react-bootstrap/Container";
import styles from "../../styles/home.module.css";
import Fade from "react-reveal/Fade";

export default function Mission() {
  return (
    <Container
      fluid
      id="mission"
      className={`section ${styles.missionSection}`}
    >
      <Fade top>
        <h2 className="section-title">Mission</h2>
        <h4>Portare beneficio alle persone attraverso l’educazione</h4>
      </Fade>
    </Container>
  );
}
