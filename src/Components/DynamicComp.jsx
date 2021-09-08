import { object } from "prop-types";
import React from "react";
import { compData } from "./reducers/compData";
import { Card, Form } from "react-bootstrap";
import "./Dynamiccomp.css";

export const DynamicComp = () => {
  return (
    <Card className="dyncomp">
      {Object.keys(compData).map((key) => (
        <p>
          <h1>{key}</h1>
          <Form.Control
            type={compData[key].type}
            value={compData[key].data}
            placeholder={compData[key].placeholder}
          ></Form.Control>
        </p>
      ))}
    </Card>
  );
};
