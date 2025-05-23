"use client"

import { useState } from "react";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

type ContactFormProps = {
  prefersDark?: boolean,
}

const ContactForm = ({prefersDark}: ContactFormProps) => {
  const [emailField, setEmailField] = useState("");

  return (
    <Form data-bs-theme={prefersDark ? "dark" : "light"}>
      <Row>
        <Col md>
          <Row>
            <Col>
              <FormGroup className="mb-3" controlId="firstNameInput">
                <FormLabel>First Name</FormLabel>
                <FormControl type="text" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-3" controlId="lastNameInput">
                <FormLabel>Last Name</FormLabel>
                <FormControl type="text" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="mb-3" controlId="emailInput">
            <FormLabel>Email</FormLabel>
            <FormControl type="email" placeholder="someone@example.com" onChange={
              (event) => {
                if (event.target.checkValidity()) {
                  setEmailField(event.target.value);
                } else {
                  setEmailField("");
                }
              }
            } />
          </FormGroup>
          <FormGroup controlId="confirmEmailInput" className={((emailField === "") ? "invisible" : "visble") + " mb-3"}>
            <FormLabel>Confirm Email</FormLabel>
            <FormControl type="email" />
          </FormGroup>
        </Col>
        <Col md>
          <FormGroup className="mb-3">
            <FormLabel>Your idea</FormLabel>
            <FormControl as="textarea" placeholder="Describe your project" rows={5}/>
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Ideally done by</FormLabel>
            <FormControl type="date" />
          </FormGroup>
        </Col>
      </Row>
      <div className="w-auto d-flex justify-content-end">
        <Button variant="primary" type="submit">Submit</Button>
      </div>
    </Form>
  )
};

export default ContactForm;
