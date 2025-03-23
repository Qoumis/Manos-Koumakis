import React from "react";
import styles from "./WorkStyles.module.css";
import WorkComponent from "./WorkComponent";

function Work() {
  return (
    <section id="work" className={styles.container}>
      <h2 className="sectionTitle">Work Experience</h2>
      <div className={styles.workContainer}>
        <WorkComponent
          name="Google"
          link="https://deadlock.wiki/Level"
          position="Backend Developer"
          period="January 2024 - Present"
          description="I am a backend developer at Deadlock. I am responsible for developing and maintaining the backend of the Level project. I am also responsible for the deployment of the project on AWS. 
          I have gained experience in working with AWS services such as EC2, S3, and RDS. I have also worked with Docker and Docker Compose to containerize the application."
        />
        <WorkComponent
          name="Samsung"
          link="https://deadlock.wiki/Level"
          position="Software Engineer"
          period="Febrauary 2024 - March 2026"
          description="I am a backend developer at Deadlock. I am responsible for developing and maintaining the backend of the Level project."
        />
      </div>
    </section>
  );
}

export default Work;
