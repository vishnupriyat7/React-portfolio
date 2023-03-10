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
            <Button size="lg" variant="primary">HIRE Me</Button> 
            <br />
            <br />
            <span className="follow">Follow Me:</span>
            <br />
            <br />
            <div className="social-media">
              <GitHub href="https://github.com/vishnupriyat7/React-portfolio" target="_blank" fontSize="large" color="primary" />
              <LinkedIn href="https://www.linkedin.com/in/vishnupriyat/" target="_blank" fontSize="large" color="primary" />
              <Facebook href="#" fontSize="large" color="primary" />
            </div>
          </Col>
          <Col>
            {" "}<img style = {{width: '32rem', borderRadius: 20,  }}
              src={require("../assets/software_img.jpg")}
              
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
