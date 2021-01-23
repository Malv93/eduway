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
          styles.card +
          " " +
          (isFlipped
            ? props.founder
              ? styles.isFlippedFounder
              : styles.isFlippedCollaborator
            : undefined)
        }
        onClick={() => {
          setIsFlipped(!isFlipped);
          /* TODO: After # seconds flips back the card. Pay attention to multiple clicks and to remove additional timers. Also may be necessary to limit interaction at beginning of animation (or can't be clicked during animation).*/
        }}
      >
        <div className={`${styles.cardFace} ${styles.cardFaceFront}`}>
          <img
            src={props.imageSource}
            alt={props.imageAlt}
            className={styles.profileImage}
          ></img>
        </div>
        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
          <div
            className={
              styles.profileBio +
              " " +
              (props.founder ? styles.founder : styles.collaborator)
            }
          >
            <p>{props.bio}</p>
          </div>
        </div>
      </button>
    </div>
  );
}
