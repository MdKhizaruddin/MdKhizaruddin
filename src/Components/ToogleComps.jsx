import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

export const ToggleComps = () => {
  const [colorName, setColorName] = useState("rgb");
  const [colorFame, setColorFame] = useState("Red");
  const [colorSame, setCOlorSame] = useState("Orange");
  const handleApi = () => {
    axios.get("http://localhost:5000/emp").then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <Card>
        {" "}
        <Button
          onClick={() =>
            colorFame === "Red" ? setColorFame("Yellow") : setColorFame("Red")
          }
        >
          Click Me
        </Button>
        <Button
          onClick={() =>
            colorSame === "Green"
              ? setCOlorSame("Yellow")
              : setCOlorSame("Green")
          }
        >
          Dont Touch It
        </Button>
        <Button
          onClick={() =>
            colorName === "Blue" ? setColorName("Orange") : setColorName("Blue")
          }
        >
          Change Me
        </Button>
        <span style={{ color: colorFame }}>
          <h1>Pickupbiz Here</h1>
        </span>
        <span style={{ color: colorSame }}>
          <p>This is my content</p>
        </span>
        <span style={{ color: colorName }}>
          <h1>PDAC Course</h1>
        </span>
        <Row>
          {" "}
          <Col md="3">
            <Button onClick={() => setColorName("Blue")}>Blue</Button>
          </Col>
          <Col md="3">
            <Button onClick={() => setColorName("Red")}>Red</Button>
          </Col>
          <Col md="3">
            <Button onClick={() => setColorName("Black")}>Black</Button>
          </Col>
          <Col md="3">
            <Button onClick={() => setColorName("Purple")}>Purple</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
