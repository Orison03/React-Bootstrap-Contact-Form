import React, { Component } from 'react'
import {Form,Button} from "react-bootstrap"

class ContactsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      location: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.newContact(this.state)
    this.setState({
      name: "",
      phoneNumber: "",
      location: ""
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your fullname"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Phone Number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="danger" type="submit">Submit</Button>{" "}
        </Form>
      </div>
    );
  }
}

export default ContactsForm