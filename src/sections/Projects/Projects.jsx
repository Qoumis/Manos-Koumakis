import React from "react";
import styles from "./ProjectStyles.module.css";
import ProjectComponent from "./ProjectComponent";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className="sectionTitle">Projects</h2>
      <div className={styles.projectsContainer}>
        <ProjectComponent
          title="Profit Track"
          description="Desktop application for managing the finances of a small bussiness"
        />
        <ProjectComponent
          title="Wage Manager"
          description="Desktop application for managing the working hours of employees"
        />
        <ProjectComponent
          title="GPT•LODS+"
          description="A web application aiming to enrich and validate ChatGPT Dialogues by offering: Annotation and Enrichment & Fact Checking and Triples Generation Services.
          
The Annotation and Enrichment Service is an information extraction service that exploits widely used Entity Recognition tools (WAT, Stanford CoreNLP and DBpedia Spotlight) for recognizing the entities of a given ChatGPT, and enriches the recognized entities by using 400 RDF datasets through LODsyndesis.

Fact Checking and Triple Generation is a service where a user sends a query to ChatGPT requesting it to provide the answer in RDF N-triples format, by using DBpedia ontology.
After receiving the response of ChatGPT (in RDF format), the user can export the triples and/or validate the facts by using one or more RDF datasets (such as DBpedia), SPARQL queries, word embeddings and sentence similarity methods."
          link="http://83.212.101.188:8081/GPToLODSplus/index.html"
        />
        <ProjectComponent
          title="GPT•LODS+ REST API"
          description="A Swagger UI for GPT•LODS+ REST API.

The web application provides all it's services through a REST API, including several available requests either for validating ChatGPT responses and/or generating triples (by also using Entity Recognition).
This UI allows developers to view the API endpoints, make requests, and see responses directly from the browser before using the service programmatically."
          link="http://83.212.101.193:8090/swagger-ui/index.html#/"
        />
        <ProjectComponent
          title="Alpha Compiler & VM."
          description="Alpha Compiler is a fully functional compiler and virtual machine (AVM) for the 'Alpha' programming language. The compiler translates Alpha source code into machine code, while the virtual machine provides a C based execution environment for running Alpha programs."
          link="https://github.com/Qoumis/AlphaCompiler"
        />
        <ProjectComponent
          title="AWS-Drone-Delivery-Project"
          description="Event-driven serverless application, developed by using Amazon Web Services (AWS) Educational Starter account, as a part of Academic an course.

This project aims to develop an efficient drone delivery service system involving retailers, drone delivery providers, and clients. Clients request last-mile delivery services from providers with a limited number of drones. We intent to create a scheduling algorithm to efficiently serve these requests. Time is divided into rounds, with a fixed number of requests received at the start of each round. An auction determines which requests are fulfilled and at what cost, with unfulfilled requests carried over to the next round."
          link="https://github.com/Qoumis/AWS-Drone-Delivery-Project"
        />
      </div>
    </section>
  );
}

export default Projects;
