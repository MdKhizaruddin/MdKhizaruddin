import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "./ScientificalCal.css";

export const ScientificCal = () => {
  return (
    <div>
      <Row>
        <Card>
          <Row>
            <Col>
              <h1>CASIO</h1>
              <input type="text" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>MC</Button>
              <Button>MR</Button>
              <Button>M-</Button>
              <Button>M+</Button>
              <Button>/</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>A</Button>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>*</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>+/-</Button>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>-</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>C</Button>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>A</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>AC</Button>
              <Button>0</Button>
              <Button>.</Button>
              <Button>=</Button>
              <Button className="size">+</Button>
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
};
