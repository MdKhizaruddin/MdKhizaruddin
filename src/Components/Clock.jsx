import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import "./Clock.css";

export const Clock = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(59);
  const [hour, setHour] = useState(0);
  setTimeout(() => {
    setSec(sec + 1);
    if (sec === 59) {
      setMin(min + 1);
      setSec(0);
      if (min === 59) {
        setHour(hour + 1);
        setMin(0);
        setSec(0);
      }
    }
  }, 1000);

  return (
    <Card className="clock">
      <span>
        {hour}:{min}:{sec}
      </span>
    </Card>
  );
};
