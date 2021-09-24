import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./LogIn.css";
import LogInForm from "./LogInForm";

function LogIn(prop) {
  return (
    <div className="divOfLogInPage" style={{ display: "block" }}>
      <img
        className="LogInImageStyle"
        alt="Scenic Background"
        src={process.env.PUBLIC_URL + "/logIn.jpg"}
      />
      <LogInForm />
    </div>
  );
}

export default LogIn;
