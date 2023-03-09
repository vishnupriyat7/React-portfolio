import React from "react";
import "../styles/Home.css";
import { Button, Row, Container, Col } from "react-bootstrap";
import TypeWriterEffect from "react-typewriter-effect";
import { GitHub, Facebook, LinkedIn } from "@mui/icons-material";

function Home() {
  return (
    <div className="home-content">
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <h1>FULL STACK DEVELOPER</h1>
            <br />
            <h1>Hey !</h1>
            <span className="info-name">
              <TypeWriterEffect
                text="I am Vishnu Priya T"
                typeSpeed={100}
                hideCursorAfterText={true}
              />
            </span>
            <br />
            Am a MERN, Full Stack Developer passionate and experienced in
            building web applications.
            <br />
            <Button variant="primary">Hire Me</Button> <br />
            Follow Me:
            <div>
              <GitHub />
              <LinkedIn />
              <Facebook />
            </div>
          </Col>
          <Col>
            {" "}
            <img
              src={require("../assets/software_img.jpg")}
              className="picture"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
