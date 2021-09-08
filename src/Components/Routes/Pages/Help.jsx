import React from "react";
// import { Login } from "../../Login";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { userData } from "../../config";
import { Login } from "../../Login";

export const Help = () => {
  const history = useHistory();
  useEffect(() => {
    if (!(userData.token == localStorage.getItem("token"))) {
      history.push("/");
    }
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
};
