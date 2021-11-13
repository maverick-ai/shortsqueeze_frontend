import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./LogIn.css";
import {LogInURL,Host} from "./constants";
import LogInCartForm from "./LogInCartForm";
import { useRef,useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {UserTokenActions} from "./Store/UserTokenSlice"


function LogInCart(prop) {
  const dispatch = useDispatch();
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const history =useHistory();
  const [loginCorrectState,setloginCorrectState]=useState(true)

  async function performLogin(){
    const credentials=JSON.stringify({
      email: emailInputRef.current.value,
      password:passwordInputRef.current.value,
  });

    const response=await fetch(LogInURL,{method:'POST',headers:{
      'Content-Type': 'application/json',
      'Accept':'*/*',
      'Accept-Encoding':'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Content-Length':credentials.length,
      'Host':Host
    },body:credentials});



    if(response.ok){
      const data = await response.json();
      dispatch(UserTokenActions.setToken({token:data.key}));
      history.replace('/');

    }
    else{
      setloginCorrectState(false);
      setTimeout(()=>{
        setloginCorrectState(true)
      },3000);
    }
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
       <LogInCartForm LogInCorrect={loginCorrectState} performLogin={performLogin} EmailRef={emailInputRef} PasswordRef={passwordInputRef}/>
    </div>
  );
}

export default LogInCart;
