import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Piano.css";
export const ChildPiano2 = () => {
  const handlePiano = (bit) => {
    const audio = new Audio(`mp3/${bit}.mp3`);
    audio.play();
  };
  document.addEventListener("keydown", (event) => {
    if (event.key === "a" && handlePiano("A"));
    event.stopPropagation();
    if (event.key === "s" && handlePiano("B"));
    event.stopPropagation();
    if (event.key === "d" && handlePiano("C"));
    event.stopPropagation();
    if (event.key === "f" && handlePiano("D"));
    event.stopPropagation();
    if (event.key === "j" && handlePiano("E"));
    event.stopPropagation();
    if (event.key === "k" && handlePiano("F"));
    event.stopPropagation();
    if (event.key === "l" && handlePiano("G"));
    event.stopPropagation();
    if (event.key === "A" && handlePiano("Ab"));
    event.stopPropagation();
    if (event.key === "S" && handlePiano("Bb"));
    event.stopPropagation();
    if (event.key === "D" && handlePiano("Db"));
    event.stopPropagation();
    if (event.key === "F" && handlePiano("Eb"));
    event.stopPropagation();
    if (event.key === "J" && handlePiano("Gb"));
    event.stopPropagation();
    console.log(event);
  });
  return (
    <div>
      <Card>
        <Card.Body>
          <Button onMouseOver={() => handlePiano("A")}>Sa</Button>

          <Button onMouseOver={() => handlePiano("B")}>Re</Button>

          <Button onMouseOver={() => handlePiano("C")}>Ga</Button>

          <Button onMouseOver={() => handlePiano("D")}>Ma</Button>

          <Button onMouseOver={() => handlePiano("E")}>Pa</Button>

          <Button onMouseOver={() => handlePiano("F")}>Dha</Button>

          <Button onMouseOver={() => handlePiano("G")}>Ni</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
