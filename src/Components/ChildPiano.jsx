import React from "react";
import { Button } from "react-bootstrap";
// import "./Piano.css";

export const ChildPiano = () => {
  const handlePlay = (bit) => {
    const audio = new Audio(`Mp3/${bit} .mp3`);

    audio.play();
  };
  // document.addEventListener("keydown", (e) => {
  //   if (e.key === "a" && handlePlay("A"));
  //   if (e.key === "s" && handlePlay("B"));
  //   if (e.key === "d" && handlePlay("C"));
  //   if (e.key === "f" && handlePlay("D"));
  //   if (e.key === "j" && handlePlay("E"));
  //   if (e.key === "k" && handlePlay("F"));
  //   if (e.key === "l" && handlePlay("G"));
  //   if (e.key === "A" && handlePlay("A"));
  // });
  return (
    <div>
      <Button
        variant="light"
        className="khi"
        onMouseDown={() => handlePlay("A")}
      >
        SA
      </Button>
      <Button
        variant="light"
        className="khi"
        onMouseDown={() => handlePlay("B")}
      >
        RE
      </Button>
      <Button
        variant="light"
        className="khi"
        onMouseDown={() => handlePlay("C")}
      >
        GA
      </Button>
      <Button
        variant="light"
        className="khi"
        onMouseDown={() => handlePlay("D")}
      >
        MA
      </Button>
      <Button
        variant="light"
        className="khi"
        onMouseDown={() => handlePlay("E")}
      >
        PA
      </Button>
      <Button
        variant="light"
        className="khi"
        onMouseDown={() => handlePlay("F")}
      >
        DHA
      </Button>
      <Button
        variant="light"
        className="khi"
        onMouseDown={() => handlePlay("G")}
      >
        NEE
      </Button>
    </div>
  );
};
