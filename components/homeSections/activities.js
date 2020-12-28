import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import styles from "../../styles/home.module.css";
import Fade from "react-reveal";

const activities = [
  {
    id: 1,
    heading: "Podcast",
    title: "Eduway The Podcast",
    description: "Breve descrizione ed immagine del podcast",
  },
  {
    id: 2,
    heading: "Accompagnamento Pedagogico",
    title: "Collaborazione F.o.c.r.",
    description: "Breve descrizione ed immagine F.o.c.r.",
  },
];

const features = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

export default function Activities() {
  return (
    <Container
      fluid
      id="activities"
      className={`section ${styles.activitiesSection}`}
    >
      <h2 className="section-title">Attività Principali</h2>

      {activities.map((activity) => {
        return (
          <Fade top key={activity.id}>
            <Card bg="primary" text="white" className={styles.activity}>
              <Card.Header>{activity.heading}</Card.Header>
              <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                <Card.Text>
                  <p>{activity.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Fade>
        );
      })}
      <div className={styles.featuresBox}>
        <h3 className="title">Features</h3>
        {features.map((feature) => {
          return (
            <Fade top key={feature.id}>
              <Card bg="secondary" text="white" className={styles.feature}>
                <Card.Header>Feature {feature.id}</Card.Header>
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </Card.Body>
              </Card>
            </Fade>
          );
        })}
      </div>
    </Container>
  );
}
