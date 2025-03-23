import React from "react";
import styles from "../ComponentStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import linkIconDark from "../../assets/icons/icons8-external-link-dark.svg";
import linkIconLight from "../../assets/icons/icons8-external-link-light.svg";

function WorkComponent({ name, link, position, period, description }) {
  const { theme } = useTheme();

  const linkIcon = theme === "light" ? linkIconLight : linkIconDark;

  return (
    <div className={styles.workComponent}>
      <span className={styles.inlineContainer}>
        <h4 className={styles.companyName}>
          <a href={link} target="_blank">
            {name}
            <img src={linkIcon} alt="link icon" className="linkIcon" />
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
