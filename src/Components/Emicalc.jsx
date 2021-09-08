import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import "./Emicalc.css";

export const Emicalc = () => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  // const [emi, setEmi] = useState(0);
  const handleCalEMI = () => {
    const si = (p * n * r) / 100;
    // const ci = p * (1 + r / 100) ** n;
    const repayAmount = Number(p) + Number(si);
    const emiLocal = repayAmount / (n * 12);
    return emiLocal;
  };
  const emi = useMemo(() => handleCalEMI(), [p, n, r]);
  // useEffect(() => {
  //   handleCalEMI();
  // }, [p, n, r]);
  return (
    <div>
      <Card className="CaLc">
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Principle"
              onChange={(e) => setP(e.target.value)}
            ></Form.Control>
          </Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Number of Year"
              onChange={(e) => setN(e.target.value)}
            ></Form.Control>
          </Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Rate of Interest"
              onChange={(e) => setR(e.target.value)}
            ></Form.Control>
          </Col>
          {/* <Col md={2}>
            <Button Variant="primary" onClick={handleCalEMI}>
              Calculate EMI
            </Button>
          </Col> */}
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <h1>EMI : {emi}</h1>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
