import React from "react";
import styles from "../ComponentStyles.module.css";
import EducationComponent from "./EducationComponent";

function Education() {
  return (
    <section id="education" className={styles.container}>
      <h2 className="sectionTitle">Education</h2>
      <div className={styles.educationContainer}>
        <EducationComponent
          institute="University of Crete, Computer Science Department"
          degree="Bachelor of Science - BSc, Computer Science"
          period="July 2024"
          gpa="Grade: 7.82/10"
          thesis="Thesis: A Chat Application for Enriching and Validating ChatGPT Responses through Knowledge Graphs."
        />
      </div>
    </section>
  );
}

export default Education;
