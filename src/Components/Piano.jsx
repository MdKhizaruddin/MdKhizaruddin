import React from "react";
import { ChildPiano2 } from "./ChildPiano2";
import { Row, Col } from "react-bootstrap";
import "./Piano.css";
// import { AudioPlayer } from "./AudioPlayer";

export const Piano = () => {
  return (
    <div>
      <Row>
        <Col className="row">
          <h1>LOW</h1> <ChildPiano2 />
        </Col>
        <Col className="row">
          <h1>MEDIUM</h1> <ChildPiano2 />
        </Col>
        <Col className="row">
          <h1>HIGH</h1> <ChildPiano2 />
        </Col>
      </Row>
      <Row> {/* <AudioPlayer /> */}</Row>
    </div>
  );
};
