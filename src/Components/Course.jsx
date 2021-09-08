import React from "react";
import { Row,Col } from "react-bootstrap";
import { CourseInfo } from "./CourseInfo";
import { CourseReducer } from "./reducers/CourseReducer";
import "./Course.css"

export const Course = () => {
  console.log(CourseReducer);
  return (
    <div className="App">
      {/* <table>
        <tr>
          {CourseReducer.Data.map((item) => (
            <td>
              <CourseInfo
                coursename={item.courseName}
                institutename={item.instituteName}
                contact={item.contact}
                city={item.city}
              />
            </td>
          ))}
        </tr>
      </table> */}

      <Row className="row"><Col>{CourseReducer.Data.map((item) => (
            
              <CourseInfo
                coursename={item.courseName}
                institutename={item.instituteName}
                contact={item.contact}
                city={item.city}
              />
            
          ))}</Col></Row>
    </div>
  );
};
