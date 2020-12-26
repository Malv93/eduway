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
      <Container fluid id="heading" className={styles.headingSection}>
        <h1 className={styles.title}>
          <div>L'Educazione</div>è la Via<div></div>
        </h1>
        <h3 className={styles.subtitle}>
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
      <Container id="activities" className={styles.activitiesSection}>
        <h2 className={styles.sectionTitle}>Attività Principali</h2>
        <Card bg="primary" text="white" className={styles.activity}>
          <Card.Header>Podcast</Card.Header>
          <Card.Body>
            <Card.Title>Eduway The Podcast</Card.Title>
            <Card.Text>
              <p>Breve descrizione ed immagine del podcast.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="info" text="white" className={styles.activity}>
          <Card.Header>Accompagnamento Pedagogico</Card.Header>
          <Card.Body>
            <Card.Title>Collaborazione F.o.c.r.</Card.Title>
            <Card.Text>
              <p>Breve descrizione ed immagine F.o.c.r.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}
