import React from "react";
import styles from "../ComponentStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import linkIconDark from "../../assets/icons/icons8-external-link-dark.svg";
import linkIconLight from "../../assets/icons/icons8-external-link-light.svg";

function PublicationsComponent({ authors, title, conference, year, link }) {
  const { theme } = useTheme();
  const linkIcon = theme === "light" ? linkIconLight : linkIconDark;

  return (
    <div className={styles.publicationComponent}>
      <span className={styles.inlineContainer}>
        <h5 className={styles.authorNames}>{authors}</h5>
        <p className={styles.period}>{year}</p>
      </span>
      <h4 className={styles.publicationTitle}>
        <a href={link} target="_blank">
          {title}
          <img src={linkIcon} alt="link icon" className="linkIcon" />
        </a>
      </h4>
      <p>{conference}</p>
    </div>
  );
}

export default PublicationsComponent;
