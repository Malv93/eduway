import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout/layout";
import Container from "react-bootstrap/Container";
import styles from "../styles/podcast.module.css";
import Button from "react-bootstrap/Button";

export default function Podcast() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.spreaker.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <Layout>
      <Head>
        <title>Eduway the Podcast | Podcast, Educazione e Pedagogia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid className={`section ${styles.season2}`}>
        <h1 className={styles.podcastTitle}>Eduway The Podcast</h1>
        <h2 className={styles.seasonTitle}>Stagione 2</h2>
        <div className={styles.player}>
          <a
            class="spreaker-player"
            href="https://www.spreaker.com/show/eduway-the-podcast"
            data-resource="show_id=4617700"
            data-width="100%"
            data-height="400px"
            data-theme="light"
            data-playlist="show"
            data-playlist-continuous="true"
            data-autoplay="false"
            data-live-autoplay="false"
            data-chapters-image="false"
            data-episode-image-position="right"
            data-hide-logo="false"
            data-hide-likes="false"
            data-hide-comments="false"
            data-hide-sharing="false"
            data-hide-download="true"
          ></a>
        </div>
        <div className={styles.platformsRow}>
          <a
            href="https://open.spotify.com/show/0YVXCXiDZL6X5eJfff2Pdi?si=REXuIRcAQ0WFPLoQiRuyLw"
            target="_blank"
          >
            <Button variant="outline-light">
              <i class="fab fa-spotify"></i>
            </Button>
          </a>
          <a
            href="https://www.spreaker.com/show/eduway-the-podcast"
            target="_blank"
          >
            <Button variant="outline-light">Spr</Button>
          </a>
          <a
            href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDYxNzcwMC9lcGlzb2Rlcy9mZWVk"
            target="_blank"
          >
            <Button variant="outline-light">
              <i class="fab fa-google"></i>
            </Button>
          </a>
          <a href="https://music.apple.com/it/browse" target="_blank">
            <Button variant="outline-light">
              <i class="fab fa-itunes-note"></i>
            </Button>
          </a>
        </div>
      </Container>
      <Container fluid className={`section ${styles.season1}`}>
        <h2 className={styles.seasonTitle}>Stagione 1</h2>
        <div className={styles.player}>
          <a
            class="spreaker-player"
            href="https://www.spreaker.com/show/eduway-the-podcast"
            data-resource="show_id=4617700"
            data-width="100%"
            data-height="400px"
            data-theme="light"
            data-playlist="show"
            data-playlist-continuous="true"
            data-autoplay="false"
            data-live-autoplay="false"
            data-chapters-image="false"
            data-episode-image-position="right"
            data-hide-logo="false"
            data-hide-likes="false"
            data-hide-comments="false"
            data-hide-sharing="false"
            data-hide-download="true"
          ></a>
        </div>
        <div className={styles.platformsRow}>
          <a
            href="https://open.spotify.com/show/0YVXCXiDZL6X5eJfff2Pdi?si=REXuIRcAQ0WFPLoQiRuyLw"
            target="_blank"
          >
            <Button variant="outline-primary">
              <i class="fab fa-spotify"></i>
            </Button>
          </a>
          <a
            href="https://www.spreaker.com/show/eduway-the-podcast"
            target="_blank"
          >
            <Button variant="outline-primary">Spr</Button>
          </a>
          <a
            href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDYxNzcwMC9lcGlzb2Rlcy9mZWVk"
            target="_blank"
          >
            <Button variant="outline-primary">
              <i class="fab fa-google"></i>
            </Button>
          </a>
          <a href="https://music.apple.com/it/browse" target="_blank">
            <Button variant="outline-primary">
              <i class="fab fa-itunes-note"></i>
            </Button>
          </a>
        </div>
      </Container>
    </Layout>
  );
}
