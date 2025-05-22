"use client"

import { useState } from "react";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormText, Row } from "react-bootstrap";


const ContactForm = () => {
    const [emailField, setEmailField] = useState("");

    return (
        <Form>
            <Row >
                <Col md>
                    <Row>
                        <Col>
                            <FormGroup controlId="firstNameInput">
                                <FormLabel>First Name</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup controlId="lastNameInput">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId="emailInput">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" placeholder="someone@example.com" onChange={
                            (event) => {
                                if (event.target.checkValidity()) {
                                    setEmailField(event.target.value);
                                } else {
                                    setEmailField("");
                                }
                            }
                        }/>
                    </FormGroup>
                    <FormGroup controlId="confirmEmailInput" className={(emailField === "") ? "invisible" : "visble"}>
                        <FormLabel>Confirm Email</FormLabel>
                        <FormControl type="email" />
                    </FormGroup>
                </Col>
                <Col md>
                        <FormGroup>
                            <FormLabel>Your idea</FormLabel>
                            <FormControl as="textarea" placeholder="Describe your project" />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Ideally done by</FormLabel>
                            <FormControl type="date" />
                        </FormGroup>
                </Col>
            </Row>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
};

export default ContactForm;
