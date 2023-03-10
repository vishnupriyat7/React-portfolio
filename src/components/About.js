import React from "react";
import "../styles/About.css";
import { Button, Row, Container, Col } from "react-bootstrap";

function About() {
  return (
    <div className="about-content">
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            {" "}
            <img src={require("../assets/about-img.png")} className="picture" />
          </Col>
          <Col>
            <h6>ABOUT ME</h6>
            <br />
            <h2>WHY HIRE ME FOR YOUR NEXT PROJECT</h2>
            <br />
            Am a Full Stack Developer (MERN), quick learning and passionate in
            building web applications. I can adapt onto any technology rapidly
            making myself flexible upon any tech stack. A passionate, diligent
            person who wants to learn continuously.
            <br />
            <br />
            <Button variant="primary"  size="lg">DOWNLOAD CV</Button> <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
