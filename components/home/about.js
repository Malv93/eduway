import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/home/about.module.css";
import FlipCard from "../cards/flipCard";
import Fade from "react-reveal/Fade";

const founders = [
  {
    id: 1,
    name: "Andrea Dasti",
    role: "Co-Founder",
    imageSource: "images/profiles/billy.jpg",
    imageAlt: "Foto profilo Andrea Dasti",
    bio: "Educatore professionale e progettista sociale.",
  },
  {
    id: 2,
    name: "Stefano Lepre",
    role: "Co-Founder",
    imageSource: "images/profiles/stefano.jpg",
    imageAlt: "Foto profilo Stefano Lepre",
    bio: "Educatore professionale.",
  },
];

const collaborators = [
  {
    id: 1,
    name: "Heidi Corti",
    role: "Responsabile Grafica",
    imageSource: "images/profiles/heidi.jpg",
    imageAlt: "Foto profilo Heidi Corti",
    bio: "Progetta e realizza i contenuti grafici di Eduway.",
  },
  {
    id: 2,
    name: "Marco Malvicini",
    role: "Responsabile IT",
    imageSource: "images/profiles/marco.jpg",
    imageAlt: "Foto profilo Marco Malvicini",
    bio: "Gestisce il sito internet di Eduway.",
  },
];

export default function About() {
  return (
    <Container fluid className={`section ${styles.section}`}>
      <Container fluid className="inner-section">
        <Fade bottom>
          <h2 className="section-title">Chi siamo</h2>
          <div id="about" className="position-link-id"></div>
          <div className={styles.eduwayBio}>
            <p>
              Eduway è un’impresa sociale attiva nel campo dei processi
              educativi e formativi. Lavoriamo a fianco delle comunità
              promuovendo percorsi di accompagnamento pedagogico e formazione,
              per aumentare la capacità delle persone di portare beneficio alla
              comunità stessa. Accanto all’attività di educatori e formatori,
              diffondiamo buone prassi, raccontando l’educazione con
              professionalità e leggerezza nel nostro podcast “Eduway the
              Podcast”.
            </p>
          </div>
        </Fade>
        <Row className={styles.foundersSection}>
          {founders.map((founder) => {
            return (
              <Col lg={6} key={founder.id}>
                <Fade bottom>
                  <div className={styles.profileBox}>
                    <FlipCard
                      name={founder.name}
                      role={founder.role}
                      imageSource={founder.imageSource}
                      imageAlt={founder.imageAlt}
                      bio={founder.bio}
                      founder
                    />
                    <h5>{founder.name}</h5>
                    <p>{founder.role}</p>
                  </div>
                </Fade>
              </Col>
            );
          })}
        </Row>
        <Fade bottom>
          <h3 className={styles.collaboratorsTitle}>Collaborano con noi</h3>
        </Fade>
        <Row className={styles.collaboratorsSection}>
          {collaborators.map((collaborator) => {
            return (
              <Col lg={6} key={collaborator.id}>
                <Fade bottom>
                  <div className={styles.profileBox}>
                    <FlipCard
                      name={collaborator.name}
                      role={collaborator.role}
                      imageSource={collaborator.imageSource}
                      imageAlt={collaborator.imageAlt}
                      bio={collaborator.bio}
                    />
                    <h5>{collaborator.name}</h5>
                    <p>{collaborator.role}</p>
                  </div>
                </Fade>
              </Col>
            );
          })}
        </Row>
      </Container>
      {/* Bottom tilted header */}
      <svg
        className="svg-tilted-header white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,98 100,0 100,100 0,100" />
      </svg>
    </Container>
  );
}
