import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "./AudioPlayer.css";
export const AudioPlayer = () => {
  const audio = new Audio("Mp3/faded.mp3");
  const handleAudioPlay = () => {
    audio.play();
  };
  const handleAudiostop = () => {
    audio.pause();
  };

  return (
    <Card className="player">
      <Row>
        <Col></Col>
        <Col>
          <Button onClick={handleAudioPlay}>Play</Button>
        </Col>
        <Col>
          <Button onClick={handleAudiostop}>Stop</Button>
        </Col>
        <Col>
          <Button onMouseOvere={handleAudiostop} onMouseDown={handleAudioPlay}>
            Piano
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Card>
  );
};
