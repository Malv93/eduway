import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/home/methodology.module.css";
import Fade from "react-reveal/Fade";

const steps = [
  {
    id: 1,
    imageSource: "images/steps/telescope.svg",
    imageAlt: "Telescopio",
    title: "Condividiamo nuovi obiettivi",
    description: "",
  },
  {
    id: 2,
    imageSource: "images/steps/lens.svg",
    imageAlt: "Lente di ingrandimento",
    title: "Individuiamo problemi e punti di forza",
    description: "",
  },
  {
    id: 3,
    imageSource: "images/steps/pencil.svg",
    imageAlt: "Matita",
    title: "Progettiamo l'accompagnamento",
    description: "",
  },
  {
    id: 4,
    imageSource: "images/steps/target.svg",
    imageAlt: "",
    title: "Lavoriamo per raggiungere gli obiettivi",
    description: "",
  },
  {
    id: 5,
    imageSource: "images/steps/muscle.svg",
    imageAlt: "",
    title: "Termine del progetto e definizione nuovi obiettivi",
    description: "",
  },
];

export default function Methodology() {
  return (
    <Container fluid className={`section ${styles.section}`}>
      <div id="methodology" className="position-link-id"></div>
      <Fade bottom>
        <h2 className="section-title">Il Metodo Eduway</h2>
      </Fade>
      <ol className={styles.methodologyList}>
        <Fade bottom>
          {steps.map((step) => {
            return (
              <li key={step.id} className={styles.stepItem}>
                <p className={styles.number}>Step. {step.id}</p>
                <Row classname={styles.stepBox}>
                  <Col xs={4}>
                    <img
                      src={step.imageSource}
                      alt={step.imageAlt}
                      className={styles.stepImage}
                    ></img>
                  </Col>
                  <Col xs={8}>
                    <h5>{step.title}</h5>
                  </Col>
                </Row>
              </li>
            );
          })}
        </Fade>
      </ol>
    </Container>
  );
}
