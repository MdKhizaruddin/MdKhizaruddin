import React, { useState } from "react";
import { Row, Col, Button, Card, Form, Image } from "react-bootstrap";
// import { EmployeeReducer } from "./reducers/EmployeeReducer";

export const Employeeinfo = () => {
  // const {firstname, lastname , lineno1, lineno2, cityname}

  const [fname, setFname] = useState("firstname");
  const [lname, setLname] = useState("lastname");
  const [line1, setLine1] = useState("lineno1");
  const [line2, setLine2] = useState("lineno2");
  const [city, setCity] = useState("cityname");
  // const [bulbstate, setBulbState] = usestate("on");
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col md={4}>
          <Card>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="FirsT Name"
                          onchange={(e) => setFname(e.target.value)}
                          value={fname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          onchange={(e) => setLname(e.target.value)}
                          value={lname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Address:</Form.Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Line 1"
                          onchange={(e) => setLine1(e.target.value)}
                          value={line1}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Line 2"
                          onchange={(e) => setLine2(e.target.value)}
                          value={line2}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="city"
                          onchange={(e) => setCity(e.target.value)}
                          value={city}
                        ></Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Row>
            <Col>
              <Button>Submit</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Row>
                  <Col>
                    <h4>{`${fname} ${lname},`}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>{`${line1},`}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>{`${line2},`}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>{city}</h4>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
        {/* <Image
          src={`bulb${bulbstate}`}
          width="100px"
          onclick={() =>
            // bulbstate === "off" ? setBulbState(on) : setBulState("off")
          // }
        ></Image> */}
      </Row>
    </div>
  );
};
