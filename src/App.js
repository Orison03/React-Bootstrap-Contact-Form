import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Components/Contact";
import ContactsForm from "./Components/ContactsForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: [
        {
          name: "John Felix Cena",
          phoneNumber: "+343 - 532 - 656",
          location: "Massachusetts",
        },
        // {
        //   name: "Seth Rollins",
        //   phoneNumber: "+546 - 362 - 866",
        //   location: " Davenport",
        // },
      ],
    };
  }

  addContact = (user) => {
    this.setState({
      contact: [...this.state.contact, user]
    })
  }

  render() {
    return (
      <Container style={{ marginTop: "1rem", marginRight: "90px" }}>
        <Row>
          <Col md="4">
            <ContactsForm newContact={this.addContact}/>
          </Col>
          <Col>
            <Contact addContact={this.state.contact} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
