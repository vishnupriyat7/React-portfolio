import React from "react";
import "../styles/Contact.css";
import { Button, Row, Container, Col } from "react-bootstrap";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";

function Contact() {
  return (
    <div className="contact-content">
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <div className="contact-icons">
              <PhoneInTalkRoundedIcon /> <p>Call Me:</p>
              <EmailRoundedIcon />
              <p>Email Me:</p>
              <PlaceRoundedIcon />
              <p>Location:</p>
            </div>
          </Col>
          <Col>
            <h4>I Want To Hear From You</h4>
            <h1>Contact Me</h1>
            <div className="mt-1">
              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea className="form-control" id="message" required />
                </div>
              </form>
            </div>
            <Button variant="primary">SUBMIT</Button> <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
