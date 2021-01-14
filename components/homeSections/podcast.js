import { useEffect } from "react";
import Container from "react-bootstrap/Container";

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
    <Container fluid id="podcast" className="section">
      <h2 className="section-title">Eduway the Podcast</h2>
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
    </Container>
  );
}
