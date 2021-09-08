import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Counter2.css";

export const Counter2 = () => {
  const [cntr, setCntr] = useState(0);
  return (
    <div>
      <h1 className="counter">COUNTER</h1>

      <Row className="row">
        <Col md={2}></Col>
        <Col>
          <Button
            variant={cntr > 0 ? "primary" : "danger"}
            disabled={!(cntr > 0)}
            onClick={() => cntr > 0 && setCntr(cntr - 1)}
          >
            -
          </Button>
        </Col>
        <Col>
          <h1>{cntr}</h1>
        </Col>
        <Col>
          <Button
            variant={cntr < 10 ? "primary" : "danger"}
            disabled={!(cntr < 10)}
            onClick={() => cntr < 10 && setCntr(cntr + 1)}
          >
            +
          </Button>
        </Col>

        <Row>
          <Col md={5}></Col>
          <Col>
            <Button onClick={() => setCntr(0)}>Reset</Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
};
