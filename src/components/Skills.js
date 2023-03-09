import React from "react";
import "../styles/Skills.css";
import { Row, Container, CardGroup, Card, Col } from "react-bootstrap";

function Skills() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="skills-content">
      <Container>
        <h1 className="text-center">SKILLS</h1>
        <Row className="d-flex justify-content-center mt-5">
          <CardGroup className="text-center" variant="contained">
            <Col lg={4}>
              <Card style={{ width: "25rem", height: "20rem" }}>
                <Card.Body>
                  <Card.Title style={{ color: "green" }}>
                    GEEKSFORGEEKS
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    One Stop For all CS subjects
                  </Card.Subtitle>
                  <Card.Text>
                    GeeksforGeeks provides a platform for all the students to
                    study about all the subjects in CSE.
                  </Card.Text>
                  <Card.Link href="#"> For Students</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card style={{ width: "25rem", height: "20rem" }}>
                <Card.Body>
                  <Card.Title style={{ color: "green" }}>
                    GEEKSFORGEEKS
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    One Stop For all CS subjects
                  </Card.Subtitle>
                  <Card.Text>
                    GeeksforGeeks provides a platform for all the students to
                    study about all the subjects in CSE.
                  </Card.Text>
                  <Card.Link href="#"> For Students</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card style={{ width: "25rem", height: "20rem" }}>
                <Card.Body>
                  <Card.Title style={{ color: "green" }}>
                    GEEKSFORGEEKS
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    One Stop For all CS subjects
                  </Card.Subtitle>
                  <Card.Text>
                    GeeksforGeeks provides a platform for all the students to
                    study about all the subjects in CSE.
                  </Card.Text>
                  <Card.Link href="#"> For Students</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
