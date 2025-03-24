import React from "react";
import styles from "../ComponentStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import linkIconDark from "../../assets/icons/icons8-external-link-dark.svg";
import linkIconLight from "../../assets/icons/icons8-external-link-light.svg";

function EducationComponent({ institute, degree, period, gpa, thesis }) {
  const { theme } = useTheme();
  const linkIcon = theme === "light" ? linkIconLight : linkIconDark;

  return (
    <div className={styles.educationComponent}>
      <span className={styles.inlineContainer}>
        <h4 className={styles.institutionName}>
          <a
            href="https://www.csd.uoc.gr/CSD/index.jsp?lang=en"
            target="_blank"
          >
            {institute}
            <img src={linkIcon} alt="link icon" className="linkIcon" />
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
