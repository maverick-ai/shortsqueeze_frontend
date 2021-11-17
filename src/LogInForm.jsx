import React from "react";
import "./LogInForm.css";
import EmailField from "./Components/Email";
import PasswordField from "./Components/Password";

function LogInForm(props) {
  return (
    <div className="containerForm">
      <form className="form" style={{ textAlign: "center" }}>
        <EmailField EmailRef={props.EmailRef} />
        <div style={{ paddingTop: "30px" }}>
          <PasswordField
            LogInCorrect={props.LogInCorrect}
            PasswordRef={props.PasswordRef}
          />
        </div>
        <div style={{ paddingTop: "10px" }}>
          <button
            onClick={(event) => {
              event.preventDefault();
              props.performLogin();
            }}
            className="buttonForm"
          >
            LOGIN
          </button>
          </div>
          <div style={{ paddingTop: "10px" }}>
          <h4 onClick={(event)=>{
            props.ClickOnRegisterLink();
          }} className="RegisterLink"><u>Not Registered? Sign up</u></h4>
        </div>
      </form>
    </div>
  );
}

export default LogInForm;
