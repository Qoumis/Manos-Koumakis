import React from "react";
import styles from "./SkillStyles.module.css";
import { useTheme } from "../../common/ThemeContext";

function SkillComponent({ name, icon }) {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.skillComponent} ${
        theme === "dark" ? styles.invertTheme : ""
      }`}
    >
      <img src={icon} alt="icon" className={styles.skillIcon} />
      {name}
    </div>
  );
}

export default SkillComponent;
