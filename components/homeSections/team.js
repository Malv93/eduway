import Container from "react-bootstrap/Container";
import styles from "../../styles/homeSections/team.module.css";
import FlipCard from "../cards/flipCard";

const founders = [
  {
    id: 1,
    name: "Andrea Dasti",
    role: "Co-Founder",
  },
  {
    id: 2,
    name: "Stefano Lepre",
    role: "Co-Founder",
  },
];

const collaborators = [
  {
    id: 1,
    name: "Emanuele Bergami",
    role: "Formatore",
  },
  {
    id: 2,
    name: "Heidi Corti",
    role: "Responsabile Grafica",
  },
  {
    id: 3,
    name: "Marco Malvicini",
    role: "Responsabile IT",
  },
];

export default function Team() {
  return (
    <Container fluid id="team" className={`section ${styles.teamSection}`}>
      <h2 className="section-title">Team</h2>
      {founders.map((founder) => {
        return (
          <FlipCard
            key={founder.id}
            founder
            name={founder.name}
            role={founder.role}
          />
        );
      })}

      <h3 className="title">Collaboratori</h3>
      {collaborators.map((collaborator) => {
        return (
          <FlipCard
            key={collaborator.id}
            name={collaborator.name}
            role={collaborator.role}
          />
        );
      })}
    </Container>
  );
}
