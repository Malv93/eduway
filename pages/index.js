import Head from "next/head";
import Layout from "../components/layout/layout";
import Container from "react-bootstrap/Container";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Eduway</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid className={styles.heading}>
        <h1 className={styles.title}>
          <div>L'Educazione</div>è la Via<div></div>
        </h1>
        <h2 className={styles.subtitle}>
          Eduway offre la migliore esperienza Educativa. Solide competenze,
          Podcast, e l'empatia di un team giovane al servizio dei giovani.
        </h2>
      </Container>
    </Layout>
  );
}
