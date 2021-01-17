import { useState } from "react";
import styles from "../../styles/cards/flipCard.module.css";

export default function FlipCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className={
        styles.scene +
        " " +
        (props.founder ? styles.founder : styles.collaborator)
      }
    >
      <button
        className={
          styles.card + " " + (isFlipped ? styles.isFlipped : undefined)
        }
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`${styles.cardFace} ${styles.cardFaceFront}`}>
          <img
            src={props.imageSource}
            alt={props.imageAlt}
            className={styles.profileImage}
          ></img>
        </div>
        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
          <div className={styles.profileBio}>
            <p>{props.bio}</p>
          </div>
        </div>
      </button>
    </div>
  );
}
