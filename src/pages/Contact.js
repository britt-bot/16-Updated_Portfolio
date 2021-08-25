import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ContactForm from "../components/ContactForm";
import BackgroundImage from "../components/images/codeph.jpg";

export default function Contact() {
  return (
    <div>
      <Hero backgroundImage={BackgroundImage}>
        <h1>Britt Bot</h1>
        <h2>Creative by nature, programmer by curiosity.</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Contact Me!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
