import { useState } from "react";
import styles from "../../styles/buttons/spreakerButton.module.css";
import Button from "react-bootstrap/Button";

export default function SpreakerButton(props) {
  const [isActive, setIsActive] = useState(false);

  const activate = (event) => {
    setIsActive(true);
    console.log(event.type);
  };
  const deactivate = (event) => {
    setIsActive(false);
    console.log(event.type);
  };

  return (
    <a href="https://www.spreaker.com/show/eduway-the-podcast" target="_blank">
      <Button
        onMouseEnter={activate}
        onMouseLeave={deactivate}
        onFocus={activate}
        onBlur={deactivate}
        variant="outline-light" /*it is overridden by className if bluenavy is true */
        className={props.bluenavy && "bluenavy-button-outline"}
      >
        <svg
          className={
            styles.spreakerLogo +
            " " +
            (props.bluenavy ? styles.bluenavy : styles.light) +
            " " +
            (isActive && styles.active)
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 96 100"
        >
          <polygon points="36,51 0,81 36,73 60,100 63,64 96,50 63,35 59,0 36,27 0,20  " />
        </svg>
      </Button>
    </a>
  );
}
