import React from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
export const Table = () => {
  return (
    <div>
      <Row>
        <Col xs={2}></Col>
        <Col xs={4}>
          <Row>Name</Row>
          <Row>
            <input type="text" />
          </Row>
          <Row>Last Name</Row>
          <Row>
            <input type="text" />
          </Row>
          <Row>Address</Row>
          <Col>
            <Row>
              H.No: <input type="text" />
            </Row>
            <Row>
              Street: <input type="text" />
            </Row>
            <Row>
              City: <input type="text" />
            </Row>
            <Row>
              Country: <input type="text" />
            </Row>
          </Col>
        </Col>
      </Row>
      <Col xs={4}>
        <br />
        <br />
        <Button>Submit</Button>
      </Col>
    </div>
  );
};
