import React, { useState } from "react";
import { Row, Col, Form, Button, Card, Image } from "react-bootstrap";
import "./NewEmployee.css";

export const NewEmployee = () => {
  const [bulbState, setBulbState] = useState("off");
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col md={3}>
          <Row className={bulbState === "off" ? "forming" : "forming1"}>
            <Form>
              <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-2" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-2">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Maharashtra</option>
                    <option>Gujrat</option>
                    <option>Telangana</option>
                    <option>Rajasthan</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Col>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="logo192.png" />

            <Card.Body>
              {" "}
              <Card.Title>Card Title</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Image
            class="img"
            src={`${bulbState}.png`}
            height="200px"
            width="100px"
            onClick={() =>
              bulbState === "Off" ? setBulbState("On") : setBulbState("Off")
            }
          ></Image>
        </Col>
      </Row>
    </div>
  );
};
