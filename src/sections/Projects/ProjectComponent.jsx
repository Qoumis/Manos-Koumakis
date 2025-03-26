import React from "react";
import styles from "./ProjectStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import linkIconDark from "../../assets/icons/icons8-external-link-dark.svg";
import linkIconLight from "../../assets/icons/icons8-external-link-light.svg";

function ProjectComponent({ title, description, link }) {
  const { theme } = useTheme();
  const linkIcon = theme === "light" ? linkIconLight : linkIconDark;

  return (
    <div className={styles.projectComponent}>
      <a href={link} target="_blank">
        <h4 className={styles.projectTitle}>
          {title}
          {/*if link is provided, display the link icon*/}
          {link && <img src={linkIcon} alt="link icon" className="linkIcon" />}
        </h4>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default ProjectComponent;
