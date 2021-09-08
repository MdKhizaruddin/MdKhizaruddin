import { Row,Col } from "react-bootstrap";
export const CourseInfo = ({ coursename, institutename, contact, city }) => {
  return (
    <Row border="4px">
      <Col>
        <td style={{ color: "blue" }}>Coursename</td>
        <td>:</td>
        <td style={{ color: "red" }}>{coursename}</td>
      </Col>
      
      <Col>
        <td style={{ color: "blue" }}>Institute</td>
        <td>:</td>
        <td style={{ color: "chocolate" }}>{institutename}</td>
      </Col>
      <Col>
        <td style={{ color: "blue" }}>Contact</td>
        <td>:</td>
        <td style={{ color: "darkgreen" }}>{contact}</td>
      </Col>
      <Col>
        <td style={{ color: "blue" }}>City</td>
        <td>:</td>
        <td style={{ color: "brown" }}>{city}</td>
      </Col>
    </Row>
  );
};
