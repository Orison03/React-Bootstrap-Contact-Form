import React, { Component } from "react";
import { Card, Button, Container, Row, Col} from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.addContact.map((item, index) => {
          return (
            <Container>
              <Row>
                <Col md="4">
                  <Card
                    style={{ width: "18rem", marginBottom: "20px"}}
                    key={index}
                  >
                    <Card.Body>
                      <Card.Title>WWE Wrestler</Card.Title>
                      <h6>Name: {item.name}</h6>
                      <h6>Phone Number: {item.phoneNumber}</h6>
                      <h6>Location: {item.location}</h6>
                      <Button variant="danger" style={{ marginRight: "6rem" }}>
                        EDIT
                      </Button>
                      <Button variant="danger">DELETE</Button>{" "}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    );
  }
}

export default Contact;
