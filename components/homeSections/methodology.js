import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import styles from "../../styles/home.module.css";

const methodologySteps = [
  {
    id: 1,
    title: "Condividiamo nuovi obiettivi",
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod",
  },
  {
    id: 2,
    title: "Individuiamo problemi e punti di forza",
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod",
  },
  {
    id: 3,
    title: "Progettiamo l'accompagnamento",
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod",
  },
  {
    id: 4,
    title: "Lavoriamo per raggiungere gli obiettivi",
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod",
  },
  {
    id: 5,
    title: "Termine del progetto e definizione nuovi obiettivi",
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod",
  },
];

export default function Methodology() {
  return (
    <Container
      fluid
      id="methodology"
      className={`section ${styles.methodologySection}`}
    >
      <h2 className="section-title">Il Metodo Eduway</h2>
      <ol>
        {methodologySteps.map((step) => {
          return (
            <li key={step.id} className={styles.methodologyStep}>
              <Card bg="warning" text="dark">
                <Card.Header>{step.title}</Card.Header>
                <Card.Body>{step.description}</Card.Body>
              </Card>
            </li>
          );
        })}
      </ol>
    </Container>
  );
}
