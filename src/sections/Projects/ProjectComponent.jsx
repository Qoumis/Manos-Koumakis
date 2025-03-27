import React from "react";
import styles from "./ProjectStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import linkIconDark from "../../assets/icons/icons8-external-link-dark.svg";
import linkIconLight from "../../assets/icons/icons8-external-link-light.svg";

function ProjectComponent({ title, description, link, skills, hasGap }) {
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
        <p className={styles.description}>{description}</p>

        <div
          className={`${styles.skillsContainer} ${
            hasGap ? styles.alignBottom : ""
          }`}
        >
          {skills &&
            skills.map((skill, index) => (
              <h5
                key={index}
                className={`${styles.skill} ${
                  theme === "dark" ? styles.invertTheme : ""
                }`}
              >
                {skill}
              </h5>
            ))}
        </div>
      </a>
    </div>
  );
}

export default ProjectComponent;
