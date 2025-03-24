import React from "react";
import styles from "../ComponentStyles.module.css";
import PublicationsComponent from "./PublicationsComponent";

function Publications() {
  return (
    <section id="publications" className={styles.container}>
      <h2 className="sectionTitle">Publications</h2>
      <div className={styles.publicationsContainer}>
        <PublicationsComponent
          authors="M. Mountantonakis, M. Koumakis and Y. Tzitzikas"
          title="Combining LLMs and Hundreds of Knowledge Graphs for
                Data Enrichment, Validation and Integration
                Case Study: Cultural Heritage Domain
                "
          conference="Museum Big Data 2024"
          year="2024"
          link="https://users.ics.forth.gr/~tzitzik/publications/Tzitzikas_2024-MBD.pdf"
        />
      </div>
    </section>
  );
}

export default Publications;
