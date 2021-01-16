import styles from "../../styles/cards/featureCard.module.css";

function FeatureCard(props) {
  return (
    <div className={styles.featureCard}>
      <img
        src={props.imageSource}
        alt={props.imageAlt}
        className={styles.featureImage}
      ></img>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default FeatureCard;
