import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "../../styles/home/activities.module.css";
import FeatureCard from "../cards/featureCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import PodcastButtonsRow from "../buttons/podcastButtonsRow";

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
                  src="images/activities/podcast.jpg"
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
                <Link href="/podcast">
                  <Button
                    variant="warning"
                    className={`button-font ${styles.activityPodcastButton}`}
                  >
                    <svg className="icon icon-podcast">
                      <title>Play Podcast</title>
                      <use xlinkHref="/images/icons/sprite.svg#icon-podcast"></use>
                    </svg>
                    Ascolta il Podcast
                  </Button>
                </Link>
                <PodcastButtonsRow />
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
                  Formazione e Accompagnamento Pedagogico
                </h3>
                <p>
                  Attività di Accompagnamento Pedagogico presso comunità della
                  provincia di Cremona e collaborazione con F.O.C.r.
                </p>
                <Link href="/#contact-form">
                  <Button className="greylightblue-button">
                    <svg className="icon icon-email">
                      <title>Email Contact</title>
                      <use xlinkHref="/images/icons/sprite.svg#icon-email"></use>
                    </svg>{" "}
                    Contattaci
                  </Button>
                </Link>
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
                imageAlt="Podcast"
                title="Podcast"
                description="Raccontiamo l’educazione e diffondiamo buone prassi"
              />
            </Fade>
          </Col>
          <Col lg={4}>
            <Fade bottom>
              <FeatureCard
                imageSource="images/features/people.svg"
                imageAlt="Formazione"
                title="Formazione"
                description="Accompagniamo e formiamo realtà educative partendo dai bisogni delle persone"
              />
            </Fade>
          </Col>
          <Col lg={4}>
            <Fade bottom>
              <FeatureCard
                imageSource="images/features/web.svg"
                imageAlt="Network"
                title="Network"
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
