import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Collapse } from "react-collapse";

const Projects = () => {
  const projectsList = [
    {
      title: "Projekt 1",
      id: "1",
      desc: " Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      title: "Projekt 2",
      id: "2",
      desc: " Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      title: "Projekt 3",
      id: "3",
      desc: " Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit amet consectetur adipiscing elit",
    },
  ];

  return (
    <div className="projects-div" id="projects">
      <Container>
        <Row>
          {projectsList.map((e) => (
            <Col key={e.title}>
              <div className="project">
                <div className="project-name">
                  <h3>{e.title}</h3>
                  <hr></hr>
                </div>
                <div className="project-content" id="project-content">
                  {e.desc}
                </div>
                <button className="main-btn">
                  <div className="project-btn">
                    <i class="pr bi-box-arrow-up-right"></i>
                  </div>
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Projects;
