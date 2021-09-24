import React from "react";
import "./LogInForm.css";
import EmailField from "./Components/Email";
import PasswordField from "./Components/Password";

function LogInForm() {
  return (<div className="containerForm">
    <form className="form" style={{textAlign:"center"}}>
    <EmailField />
    <div style={{paddingTop:"30px"}}>
    <PasswordField />
    </div>
    <div style={{paddingTop:"10px"}}>
    <button className="buttonForm">LOGIN</button>
    </div>
    </form>
    </div>
  );
}

export default LogInForm;
