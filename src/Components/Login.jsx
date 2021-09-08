import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { userData } from "./config";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isvalid, setIsvalid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const eleUserName = useRef();
  const elePassword = useRef();

  useEffect(() => {
    if (username.length >= 5 && password.length >= 6) {
      setIsvalid(false);
      if (
        userData.UserName === username.trim() &&
        userData.password === password.trim()
      ) {
        setIsSuccess(true);
        localStorage.setItem("token", userData.token);
      }
    } else setIsvalid(true);
  }, [username, password]);
  useEffect(() => {
    if (localStorage.getItem("username")) {
      eleUserName.current.value = localStorage.getItem("username");
      elePassword.current.focus();
    } else {
      eleUserName.current.focus();
    }
  }, []);
  return (
    <React.Fragment>
      {isSuccess ? (
        <p>You are successfully logged in !!</p>
      ) : (
        <div>
          <Card className="Login">
            {" "}
            <Row>
              <Col md={12}>
                <Form.Control
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="User Name"
                  ref={eleUserName}
                ></Form.Control>
              </Col>
              <Col md={12}>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  ref={elePassword}
                ></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col Lg={6}>
                <Button variant="outline-dark" disabled={isvalid}>
                  {" "}
                  Submit
                </Button>
              </Col>
              <Col Lg={6}>
                <Button variant="outline-dark">Cancel</Button>
              </Col>
            </Row>
            {!isSuccess && !isvalid && (
              <p>Please enter correct username or password</p>
            )}
          </Card>
        </div>
      )}
      ;
    </React.Fragment>
  );
};
