import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout/layout";
import Container from "react-bootstrap/Container";
import styles from "../styles/podcast.module.css";
import Pulse from "react-reveal/Pulse";
import PodcastButtonsRow from "../components/buttons/podcastButtonsRow";

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
        className={`section ${styles.section} ${styles.heading}`}
      >
        <Container className="inner-section">
          <Pulse>
            <h1 className="page-title">
              <div>Eduway</div>
              <div>The Podcast</div>
            </h1>
          </Pulse>
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
      <Container
        fluid
        className={`section ${styles.section} ${styles.podcast}`}
      >
        <Container className="inner-section">
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
          <PodcastButtonsRow />
        </Container>
      </Container>
    </Layout>
  );
}
