import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../../styles/homeSections/activities.module.css";
import Fade from "react-reveal";

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
    <Container fluid className={`section ${styles.section}`}>
      <div id="activities" className="position-link-id"></div>
      {/* Main activities sub-section */}
      <h2 className="section-title">Attività Principali</h2>

      <div className={styles.activityCard}>
        <img
          src="images/activities/podcast.png"
          alt="Eduway The Podcast logo episodio"
          className={`${styles.activityImage} ${styles.podcastImage}`}
        />
        <h3 className={styles.activityTitle}>Eduway The Podcast</h3>
        <p>
          Raccontiamo l'EDUCAZIONE con professionalità e leggerezza! Nuovi
          episodi ogni lunedì, mercoledì e venerdì con 3 formati diversi.
        </p>
        <p>
          Puoi ascoltare il podcast sul nostro sito o sulla tua piattaforma
          preferita.
        </p>
        <Button
          variant="warning"
          className={`${styles.buttonFont} ${styles.activityPodcastButton}`}
        >
          Ascolta il Podcast
        </Button>
        <div className={styles.podcastPlatformsRow}>
          <Button variant="outline-primary">
            <i class="fab fa-spotify"></i>
          </Button>
          <Button variant="outline-primary">Spr</Button>
          <Button variant="outline-primary">
            <i class="fab fa-google"></i>
          </Button>
          <Button variant="outline-primary">
            <i class="fab fa-itunes-note"></i>
          </Button>
        </div>
      </div>
      <div className={styles.activityCard}>
        <img
          src="images/activities/focr.svg"
          alt="Fondazione Oratori Cremonesi Focr logo"
          className={styles.activityImage}
        />
        <h3>Accompagnamento Pedagogico</h3>
        <p>
          Attività di Accompagnamento Pedagogico presso comunità della provincia
          di Cremona e collaborazione con F.O.C.r.
        </p>
        <Button variant="info" className={styles.buttonFont}>
          Contattaci
        </Button>
      </div>

      {/* Features sub-section */}
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
