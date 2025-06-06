import React from "react";
import styles from "../ComponentStyles.module.css";
import WorkComponent from "./WorkComponent";

function Work() {
  return (
    <section id="work" className={styles.container}>
      <h2 className="sectionTitle">Work Experience</h2>
      <div className={styles.workContainer}>
        <WorkComponent
          name="European Dynamics"
          link="https://www.eurodyn.com/"
          position="Junior Developer"
          period="June 2025 - Present"
          description="Currently onboarding as a Junior Developer, with a future focus on backend development using tools like Java, Quarkus, Docker, PostgreSQL, and REST APIs. I will also contribute to frontend projects using Angular. My responsibilities will include developing software applications, preparing technical documentation (e.g., architecture and design documents, user and installation manuals, Javadoc), and supporting the full development cycle of web applications—from analysis and design to testing."
        />
      </div>
    </section>
  );
}

export default Work;
