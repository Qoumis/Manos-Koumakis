import React from "react";
import styles from "./SkillStyles.module.css";
import SkillComponent from "./SkillComponent";

import awsIcon from "../../assets/icons/skills/icons8-aws.svg";
import linuxIcon from "../../assets/icons/skills/icons8-linux.png";
import bootstrapIcon from "../../assets/icons/skills/icons8-bootstrap.svg";
import electronIcon from "../../assets/icons/skills/icons8-electron.png";
import gitIcon from "../../assets/icons/skills/icons8-git.svg";
import javaIcon from "../../assets/icons/skills/icons8-java.svg";
import jsIcon from "../../assets/icons/skills/icons8-javascript.svg";
import nodeIcon from "../../assets/icons/skills/icons8-node-js.svg";
import jqueryIcon from "../../assets/icons/skills/icons8-jquery.svg";
import restIcon from "../../assets/icons/skills/icons8-rest-api.png";
import sqlIcon from "../../assets/icons/skills/icons8-sql.png";
import sqliteIcon from "../../assets/icons/skills/icons8-sqlite.svg";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h2 className="sectionTitle">Primary Skills</h2>
      <div className={styles.skillsContainer}>
        <SkillComponent name="JavaScript" icon={jsIcon} />
        <SkillComponent name="Node" icon={nodeIcon} />
        <SkillComponent name="jQuery" icon={jqueryIcon} />
        <SkillComponent name="Rest" icon={restIcon} />
        <SkillComponent name="SQL" icon={sqlIcon} />
        <SkillComponent name="SQLite" icon={sqliteIcon} />
        <SkillComponent name="Electron" icon={electronIcon} />
        <SkillComponent name="" icon={awsIcon} />
        <SkillComponent name="Java" icon={javaIcon} />
        <SkillComponent name="Linux" icon={linuxIcon} />
        <SkillComponent name="Git" icon={gitIcon} />
      </div>
    </section>
  );
}

export default Skills;
