import Head from "next/head";
import Layout from "../components/layout/layout";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Eduway</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        fluid
        id="heading"
        className={`section ${styles.headingSection}`}
      >
        <h1 className={styles.headingTitle}>
          <div>L'Educazione</div>è la Via<div></div>
        </h1>
        <h3 className={styles.headingSubtitle}>
          Eduway offre la migliore esperienza Educativa: solide competenze,
          Podcast e l'empatia di un team giovane al servizio dei giovani.
        </h3>
        <Button variant="primary" block>
          Play Podcast
        </Button>
        <Button variant="info" block>
          Contattaci
        </Button>
      </Container>
      <Container
        id="activities"
        className={`section ${styles.activitiesSection}`}
      >
        <h2 className="section-title">Attività Principali</h2>
        <Card bg="primary" text="white" className={styles.activity}>
          <Card.Header>Podcast</Card.Header>
          <Card.Body>
            <Card.Title>Eduway The Podcast</Card.Title>
            <Card.Text>
              <p>Breve descrizione ed immagine del podcast.</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="info" text="white" className={styles.activity}>
          <Card.Header>Accompagnamento Pedagogico</Card.Header>
          <Card.Body>
            <Card.Title>Collaborazione F.o.c.r.</Card.Title>
            <Card.Text>
              <p>Breve descrizione ed immagine F.o.c.r.</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <div className={styles.featuresBox}>
          <h3 className="title">Features</h3>

          <Card bg="secondary" text="white" className={styles.feature}>
            <Card.Header>Feature 1</Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Card.Body>
          </Card>
          <Card bg="secondary" text="white" className={styles.feature}>
            <Card.Header>Feature 2</Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Card.Body>
          </Card>
          <Card bg="secondary" text="white" className={styles.feature}>
            <Card.Header>Feature 3</Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Container
        id="eduway-methodology"
        className={`section ${styles.methodologySection}`}
      >
        <h2 className="section-title">Il Percorso Eduway</h2>
        <ol>
          <li className={styles.methodologyStep}>
            <Card bg="warning" text="dark">
              <Card.Header>Condividiamo nuovi obiettivi</Card.Header>
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </Card.Body>
            </Card>
          </li>
          <li className={styles.methodologyStep}>
            <Card bg="warning" text="dark">
              <Card.Header>Individuiamo problemi e punti di forza</Card.Header>
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </Card.Body>
            </Card>
          </li>
          <li className={styles.methodologyStep}>
            <Card bg="warning" text="dark">
              <Card.Header>Progettiamo l'accompagnamento</Card.Header>
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </Card.Body>
            </Card>
          </li>
          <li className={styles.methodologyStep}>
            <Card bg="warning" text="dark">
              <Card.Header>Lavoriamo per raggiungere gli obiettivi</Card.Header>
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </Card.Body>
            </Card>
          </li>
          <li className={styles.methodologyStep}>
            <Card bg="warning" text="dark">
              <Card.Header>
                Termine del progetto e definizione nuovi obiettivi
              </Card.Header>
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </Card.Body>
            </Card>
          </li>
        </ol>
      </Container>
      <Container id="mission" className={`section ${styles.missionSection}`}>
        <h2 className="section-title">Mission</h2>
        <h4>Portare beneficio alle persone attraverso l’educazione</h4>
      </Container>
      <Container id="team" className={`section ${styles.teamSection}`}>
        <h2 className="section-title">Team</h2>
        <Card bg="primary" text="white" className={styles.teamCard}>
          <Card.Header>Andrea Dasti</Card.Header>
          <Card.Body>Co-Founder</Card.Body>
        </Card>
        <Card bg="primary" text="white" className={styles.teamCard}>
          <Card.Header>Stefano Lepre</Card.Header>
          <Card.Body>Co-Founder</Card.Body>
        </Card>
        <h3 className="title">Collaboratori</h3>
        <Card
          bg="light"
          text="dark"
          border="primary"
          className={styles.teamCard}
        >
          <Card.Header>Emanuele Bergami</Card.Header>
          <Card.Body>Formatore</Card.Body>
        </Card>
        <Card
          bg="light"
          text="dark"
          border="primary"
          className={styles.teamCard}
        >
          <Card.Header>Heidi Corti</Card.Header>
          <Card.Body>Responsabile Grafica</Card.Body>
        </Card>
        <Card
          bg="light"
          text="dark"
          border="primary"
          className={styles.teamCard}
        >
          <Card.Header>Marco Malvicini</Card.Header>
          <Card.Body>Responsabile IT</Card.Body>
        </Card>
      </Container>
      <Container id="action" className={`section ${styles.actionSection}`}>
        <h2 className="section-title">Prova Eduway!</h2>
        <Button variant="primary" block>
          Play Podcast
        </Button>
        <Button variant="info" block>
          Contattaci
        </Button>
      </Container>
    </Layout>
  );
}
