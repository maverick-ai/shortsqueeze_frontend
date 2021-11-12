import React from "react";
import "./LogInForm.css";
import EmailField from "./Components/Email";
import PasswordField from "./Components/Password";

function LogInCartForm(props) {



  return (<div className="containerForm">
    <form className="form" style={{textAlign:"center"}}>
    <EmailField EmailRef={props.EmailRef}/>
    <div style={{paddingTop:"30px"}}>
    <PasswordField LogInCorrect={props.LogInCorrect} PasswordRef={props.PasswordRef}/>
    </div>
    <div style={{paddingTop:"10px"}}>
    <button onClick={(event)=>{
      event.preventDefault();
      props.performLogin();
    }} className="buttonForm">Next</button>
    </div>
    </form>
    </div>
  );
}

export default LogInCartForm;
