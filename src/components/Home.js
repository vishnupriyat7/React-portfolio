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
            <h6>FULL STACK DEVELOPER</h6>
            <h1>Hey !</h1>
            
            <h2>
              <TypeWriterEffect
                text="I am Vishnu Priya T"
                typeSpeed={100}
                hideCursorAfterText={true}
              />
            </h2>
            <br />
            <span className="developer">
              Am a Full Stack Developer passionate in building web applications.
            </span>
            <br />
            <br />
            <Button size="lg" variant="primary">Hire Me</Button> 
            <br />
            <br />
            <span className="follow">Follow Me:</span>
            <br />
            <br />
            <div className="social-media">
              <GitHub fontSize="large" color="primary" />
              <LinkedIn fontSize="large" color="primary" />
              <Facebook fontSize="large" color="primary" />
            </div>
          </Col>
          <Col>
            {" "}<img
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
