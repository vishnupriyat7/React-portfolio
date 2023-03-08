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
            <img
              src={require("../assets/software_img.jpg")}
              className="picture"
            />
          </Col>
          <Col>
            <h4>ABOUT ME</h4>
                       
            <h1>WHY HIRE ME FOR YOUR NEXT PROJECT</h1>
            
            Am a MERN, Full Stack Developer passionate and experienced in
            building web applications.
            <br />
            <Button variant="primary">DOWNLOAD CV</Button> <br />
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
