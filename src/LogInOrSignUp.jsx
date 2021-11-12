import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./LogIn.css";
import LogInOrSignUpComponent from "./LogInOrSignUpComponent";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";


function LogInOrSignUp(prop) {
  const location = useLocation();
  const history =useHistory();
  console.log(location.state);

  async function performLogin(){
      
  }
  async function performRegister(){
}

  return (
    <div 
    className="divOfLogInPage" 
    style={{ display: "block" ,position:'relative'}}>
      <img
        className="LogInImageStyle"
        alt="Scenic Background"
        src={process.env.PUBLIC_URL + "/logIn.jpg"}
      />
       <LogInOrSignUpComponent performLogin={performLogin} performRegister={performRegister}/>
    </div>
  );
}

export default LogInOrSignUp;
