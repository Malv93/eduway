import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "../../styles/home/activities.module.css";
import FeatureCard from "../cards/featureCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import SpreakerButton from "../buttons/spreakerButton";

export default function Activities() {
  return (
    <Container fluid className={`section ${styles.section}`}>
      <Container fluid className="inner-section">
        {/* Main activities sub-section */}
        <Row>
          <Col lg={6}>
            <Fade bottom>
              <div className={styles.activityCard}>
                <div id="activities" className="position-link-id"></div>
                <img
                  src="images/activities/podcast.png"
                  alt="Eduway The Podcast logo episodio"
                  className={`${styles.activityImage} ${styles.podcastImage}`}
                />
                <h3 className={styles.activityTitle}>Eduway The Podcast</h3>
                <p>
                  Raccontiamo l'EDUCAZIONE con professionalità e leggerezza!
                  Nuovi episodi ogni lunedì, mercoledì e venerdì con 3 formati
                  diversi.
                </p>
                <p>
                  Puoi ascoltare il podcast sul nostro sito o sulla tua
                  piattaforma preferita.
                </p>
                <a href="/podcast">
                  <Button
                    variant="warning"
                    className={`button-font ${styles.activityPodcastButton}`}
                  >
                    <i class="fas fa-podcast"></i> Ascolta il Podcast
                  </Button>
                </a>
                <div className={styles.podcastPlatformsRow}>
                  <a
                    href="https://open.spotify.com/show/0YVXCXiDZL6X5eJfff2Pdi?si=REXuIRcAQ0WFPLoQiRuyLw"
                    target="_blank"
                  >
                    <Button className="bluenavy-button-outline">
                      <i class="fab fa-spotify"></i>
                    </Button>
                  </a>
                  <SpreakerButton bluenavy />
                  <a
                    href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDYxNzcwMC9lcGlzb2Rlcy9mZWVk"
                    target="_blank"
                  >
                    <Button className="bluenavy-button-outline">
                      <i class="fab fa-google"></i>
                    </Button>
                  </a>
                  <a
                    href="https://podcasts.apple.com/us/podcast/eduway-the-podcast/id1542016656?uo=4"
                    target="_blank"
                  >
                    <Button className="bluenavy-button-outline">
                      <i class="fab fa-itunes-note"></i>
                    </Button>
                  </a>
                </div>
              </div>
            </Fade>
          </Col>
          <Col lg={6}>
            <Fade bottom>
              <div className={styles.activityCard}>
                <img
                  src="images/activities/metodo.svg"
                  alt="Accompagnamento Pedagogico Eduway"
                  className={styles.activityImage}
                />
                <h3 className={styles.activityTitle}>
                  Accompagnamento Pedagogico
                </h3>
                <p>
                  Attività di Accompagnamento Pedagogico presso comunità della
                  provincia di Cremona e collaborazione con F.O.C.r.
                </p>
                <a href="/#contact-form">
                  <Button className="greylightblue-button">
                    <i class="far fa-envelope"></i> Contattaci
                  </Button>
                </a>
              </div>
            </Fade>
          </Col>
        </Row>

        {/* Features sub-section */}
        <Row className={styles.featuresBox}>
          <Col lg={4}>
            <Fade bottom>
              <FeatureCard
                imageSource="images/features/microphone.svg"
                imageAlt="Microfono"
                title="Microfono"
                description="Diffondiamo buone prassi educative con leggerezza e professionalità"
              />
            </Fade>
          </Col>
          <Col lg={4}>
            <Fade bottom>
              <FeatureCard
                imageSource="images/features/people.svg"
                imageAlt="Persone"
                title="Persone"
                description="Accompagniamo realtà educative partendo dai bisogni delle persone"
              />
            </Fade>
          </Col>
          <Col lg={4}>
            <Fade bottom>
              <FeatureCard
                imageSource="images/features/web.svg"
                imageAlt="Rete"
                title="Rete"
                description="Facciamo rete per aumentare il beneficio che portiamo nella realtà"
              />
            </Fade>
          </Col>
        </Row>
      </Container>
      {/* Bottom tilted header */}
      <svg
        className="svg-tilted-header yellow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,98 100,0 100,100 0,100" />
      </svg>
    </Container>
  );
}
