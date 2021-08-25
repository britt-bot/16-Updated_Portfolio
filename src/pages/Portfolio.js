import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Project from "../components/Project";
import Skills from "../components/Skills";
import BackgroundImage from "../components/images/codeph.jpg"

export default function Portfolio() {
  return (
    <div>
      <Hero backgroundImage={BackgroundImage}>
        <h1>Britt Bot</h1>
        <h2>Creative by nature, programmer by curiosity.</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row className="projects">
          {/* <Col size="md-3"> */}
            <Project title="Some" body="description" tech={["JS", "HTML", "CSS"]} 
              github="https://github.com/" deployed="https://devcenter.heroku.com/" 
            /> 
            <Project title="Some" body="description" tech={["JS", "HTML", "CSS"]} 
              github="https://github.com/" deployed="https://devcenter.heroku.com/" 
            />
          {/* </Col>
          <Col size="md-3"> */}
            <Project title="Some" body="description" tech={["JS", "HTML", "CSS"]} 
              github="https://github.com/" deployed="https://devcenter.heroku.com/" 
            /> 
            <Project title="Some" body="description" tech={["JS", "HTML", "CSS"]} 
              github="https://github.com/" deployed="https://devcenter.heroku.com/" 
            /> 
          {/* </Col>
          <Col size="md-3"> */}
            <Project title="Some" body="description" tech={["JS", "HTML", "CSS"]} 
              github="https://github.com/" deployed="https://devcenter.heroku.com/" 
            />
            <Project title="Some" body="description" tech={["JS", "HTML", "CSS"]} 
              github="https://github.com/" deployed="https://devcenter.heroku.com/" 
            /> 
          {/* </Col> */}
        </Row>
        <Row>
          <Col size="md-12">
            <h1 className="heading">Skills</h1>
          </Col>
        </Row>
        <Row className="skills">
          <Skills></Skills>
        </Row>
      </Container>
    </div>
  );
};