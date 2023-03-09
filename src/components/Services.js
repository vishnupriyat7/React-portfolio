import React from "react";
import "../styles/Services.css";
import { Row, Container, CardGroup, Card, Col } from "react-bootstrap";

function Services() {
  return (
    <div className="services-content">
      <Container>
        <h1 className="text-center">WHAT SERVICE I OFFER YOU</h1>
        <Row className="m-auto align-self-center mt-5">
          <CardGroup className="text-center">
            <Col lg={4}>
              <Card style={{ width: "25rem" ,height: "20rem"}}   >
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
              <Card style={{ width: "25rem" , height: "20rem"}}>
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
              <Card style={{ width: "25rem", height: "20rem"}}>
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

export default Services;
