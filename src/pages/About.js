import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BackgroundImage from "../components/images/codeph.jpg"

export default function About() {
  return (
    <div>
      <Hero backgroundImage={BackgroundImage}>
        <h1>Britt Bot</h1>
        <h2>Positivity is contagious. Spread it.™</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>I am a Creative, by nature. Web Developer, by curiosity.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            That curiosity lead me to Full Stack Web Development. With my latest conquest being the SMU Full Stack Web Development Bootcamp, 
            and my next conquest to be the SMU Graphic Design Certification Program.
            <br />
            <br />
            The versatility I have from my background being in art and design, when added to the knowledge of programming, 
            makes me able to easily and beautifully, bring my clients' ideas and visions to life, which I adore!
            I also have experience in several industries other than Web Development including, but not limited to: Graphic Design, 
            Marketing, Photography, Makeup Artistry, Social Media, Legal and Logistics. 
            <br />
            <br />
            I have overcome several obstacles and fought several battles, in my quest to change the path of my life. 
            These have given me the drive and determination, to be and do the best, at everything I take on and to never give up. 
            They have also taught me compassion, empathy and the ability to see and think about things from different angles and views.
            <br />
            <br />
            I want to make a difference where possible, so I am always looking for ways to help people and organizations get online
            and have an even better chance to thrive. If you or your organization have any open source projects going on, lemme know! 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};