import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout/layout";
import Container from "react-bootstrap/Container";
import styles from "../styles/podcast.module.css";
import Button from "react-bootstrap/Button";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

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
      <Container
        fluid
        className={`section ${styles.section} ${styles.season2}`}
      >
        <Container className="inner-section">
          <Pulse>
            <h1 className="page-title">
              <div>Eduway</div>
              <div>The Podcast</div>
            </h1>
          </Pulse>
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
        {/* Bottom tilted header */}
        <svg
          className="svg-tilted-header white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,100 100,0 100,100" />
        </svg>
      </Container>
      <Container
        fluid
        className={`section ${styles.section} ${styles.season1}`}
      >
        <Container className="inner-section">
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
              <Button className="bluenavy-button-outline">
                <i class="fab fa-spotify"></i>
              </Button>
            </a>
            <a
              href="https://www.spreaker.com/show/eduway-the-podcast"
              target="_blank"
            >
              <Button className="bluenavy-button-outline">Spr</Button>
            </a>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDYxNzcwMC9lcGlzb2Rlcy9mZWVk"
              target="_blank"
            >
              <Button className="bluenavy-button-outline">
                <i class="fab fa-google"></i>
              </Button>
            </a>
            <a href="https://music.apple.com/it/browse" target="_blank">
              <Button className="bluenavy-button-outline">
                <i class="fab fa-itunes-note"></i>
              </Button>
            </a>
          </div>
        </Container>
      </Container>
    </Layout>
  );
}
