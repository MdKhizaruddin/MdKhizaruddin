import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { userData } from "../../config";
// import { Table } from "react-bootstrap";
import { ToggleComps } from "../../ToogleComps";

export const AboutUs = () => {
  const history = useHistory();
  useEffect(() => {
    if (!(userData.token == localStorage.getItem("token"))) {
      history.push("/");
    }
  }, []);
  return <div>{<ToggleComps />}</div>;
};
