import React from "react";
import "./LogInForm.css";

function LogInOrSignUpComponent(props) {
  return (
    <div className="containerForm">
      <form className="form" style={{ textAlign: "center" }}>
        <div style={{ paddingTop: "0px" }}>
          <button
            onClick={(event) => {
              event.preventDefault();
              props.performLogin();
            }}
            className="buttonForm"
          >
            Log In
          </button>
        </div>
        <div style={{ paddingTop: "25px" }}>
            <h2 style={{color:"white", fontSize:"18px"}}>- or -</h2>
        </div>
        <div style={{ paddingTop: "0px" }}>
          <button
            onClick={(event) => {
              event.preventDefault();
              props.performRegister();
            }}
            className="buttonForm"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogInOrSignUpComponent;
