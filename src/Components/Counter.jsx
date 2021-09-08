import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import axios from "axios";

export const Counter = () => {
  const [cntr, setCntr] = useState(0);
  const handleApi = () => {
    axios.get("http://localhost:5000/emp").then((res) => {
      console.log(res.data);
    });
  };
  const handleeApi = () => {
    axios.get("http://localhost:5000/dept").then((res) => {
      console.log(res.data);
    });
  };
  const handleApii = () => {
    axios.get("http://localhost:5000/").then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <Row>
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
      </Row>
      <Row>
        <Button onClick={handleApi}>Call my API</Button>
      </Row>
      <Row>
        <Button onClick={handleeApi}>Call my API2</Button>
      </Row>
      <Row>
        <Button onClick={handleApii}>Call my API3</Button>
      </Row>
    </div>
  );
};
