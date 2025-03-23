import React from "react";
import styles from "./WorkStyles.module.css";

function WorkComponent({ name, link, position, period, description }) {
  return (
    <div className={styles.workComponent}>
      <span className={styles.inlineContainer}>
        <h4 className={styles.companyName}>
          <a href={link} target="_blank">
            {name}
          </a>
        </h4>
        <p className={styles.period}>{period}</p>
      </span>
      <h5 className={styles.position}>{position}</h5>
      <p>{description}</p>
    </div>
  );
}

export default WorkComponent;
