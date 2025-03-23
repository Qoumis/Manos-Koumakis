import React from "react";
import styles from "../ComponentStyles.module.css";

function EducationComponent({ institute, degree, period, gpa, thesis }) {
  return (
    <div className={styles.educationComponent}>
      <span className={styles.inlineContainer}>
        <h4 className={styles.institutionName}>
          <a
            href="https://www.csd.uoc.gr/CSD/index.jsp?lang=en"
            target="_blank"
          >
            {institute}
          </a>
        </h4>
        <p className={styles.period}>{period}</p>
      </span>
      <span className={styles.columnContainer}>
        <p>{degree}</p>
        <p>{gpa}</p>
        <p>{thesis}</p>
      </span>
    </div>
  );
}

export default EducationComponent;
