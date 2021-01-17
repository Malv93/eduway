import Container from "react-bootstrap/Container";
import styles from "../../styles/home/mission.module.css";
import Fade from "react-reveal";

export default function Mission(props) {
  return (
    <Fade bottom>
      <Container fluid className={` ${styles.section}`}>
        {props.children}
        <h2 className="section-title">Mission</h2>
        <h4>Portare beneficio alle persone attraverso l’educazione</h4>
      </Container>
    </Fade>
  );
}
