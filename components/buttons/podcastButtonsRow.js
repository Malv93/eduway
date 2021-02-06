import Button from "react-bootstrap/Button";
import styles from "../../styles/buttons/podcastButtonsRow.module.css";

export default function PodcastButtonsRow() {
  return (
    <div className={styles.podcastButtonsRow}>
      <a
        href="https://open.spotify.com/show/0YVXCXiDZL6X5eJfff2Pdi?si=REXuIRcAQ0WFPLoQiRuyLw"
        target="_blank"
      >
        <Button className="bluenavy-button-outline">
          <svg className="icon icon-spotify">
            <title>Spotify Podcast</title>
            <use xlinkHref="/images/icons/sprite.svg#icon-spotify"></use>
          </svg>
        </Button>
      </a>
      <a
        href="https://www.spreaker.com/show/eduway-the-podcast"
        target="_blank"
      >
        <Button className="bluenavy-button-outline">
          <svg className="icon icon-spreaker">
            <title>Spreaker Podcast</title>
            <use xlinkHref="/images/icons/sprite.svg#icon-spreaker"></use>
          </svg>
        </Button>
      </a>

      <a
        href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDYxNzcwMC9lcGlzb2Rlcy9mZWVk"
        target="_blank"
      >
        <Button className="bluenavy-button-outline">
          <svg className="icon icon-googlepodcast">
            <title>Google Podcast</title>
            <use xlinkHref="/images/icons/sprite.svg#icon-googlepodcast"></use>
          </svg>
        </Button>
      </a>
      <a
        href="https://podcasts.apple.com/us/podcast/eduway-the-podcast/id1542016656?uo=4"
        target="_blank"
      >
        <Button className="bluenavy-button-outline">
          <svg className="icon icon-itunes">
            <title>Apple Podcast</title>
            <use xlinkHref="/images/icons/sprite.svg#icon-itunes"></use>
          </svg>
        </Button>
      </a>
    </div>
  );
}
