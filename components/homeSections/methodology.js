import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import styles from "../../styles/homeSections/methodology.module.css";
import Fade from "react-reveal";

const methodologySteps = [
  {
    id: 1,
    title: "Condividiamo nuovi obiettivi",
    description: "",
  },
  {
    id: 2,
    title: "Individuiamo problemi e punti di forza",
    description: "",
  },
  {
    id: 3,
    title: "Progettiamo l'accompagnamento",
    description: "",
  },
  {
    id: 4,
    title: "Lavoriamo per raggiungere gli obiettivi",
    description: "",
  },
  {
    id: 5,
    title: "Termine del progetto e definizione nuovi obiettivi",
    description: "",
  },
];

export default function Methodology() {
  return (
    <Container fluid className={`section ${styles.methodologySection}`}>
      <div id="methodology" className="position-link-id"></div>
      <h2 className="section-title">Il Metodo Eduway</h2>
      <ol>
        {methodologySteps.map((step) => {
          return (
            <li key={step.id} className={styles.methodologyStep}>
              <Fade top>
                <Card bg="warning" text="dark">
                  <Card.Header>{step.title}</Card.Header>
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed
                    do eiusmod
                  </Card.Body>
                </Card>
              </Fade>
            </li>
          );
        })}
      </ol>
    </Container>
  );
}
