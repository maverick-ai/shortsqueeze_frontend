import React, { useState } from "react";
import "./Password.scss";

function PasswordField() {
  const [addPasswordState, setAddPasswordState] = useState();
  const [passwordValue, setPasswordValue] = useState('');

  const HandleLockOnClick = (event) => {
    console.log("pressed");
    setAddPasswordState(true);
    setTimeout(() => {
      setAddPasswordState(false);
      }, 2500);
  };


  const HandleOnChange = (event) => {
      setPasswordValue(event.target.value);
      console.log(passwordValue);
    };

  return (
    
    <div className={`password ${addPasswordState===true?'false':''}`}>
    <div className="field">
        <input onChange={HandleOnChange} id="password1" type="password" required />
        <label htmlFor="password1">Password</label>
    </div>
    <div className="fold">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <svg className="unlock" onClick={HandleLockOnClick} viewBox="0 0 12 16">
        <path d="M6,2 C6.6,2 7.1,2.2 7.5,2.7 L8.2,3.4 L9.7,2.1 L9,1.3 C8.2,0.5 7.1,0 6,0 C3.8,0 2,1.8 2,4 L2,5.5 C0.8,6.6 0,8.2 0,10 C0,13.3 2.7,16 6,16 C9.3,16 12,13.3 12,10 C12,6.7 9.3,4 6,4 C5.3,4 4.6,4.1 4,4.4 L4,4 C4,2.9 4.9,2 6,2 Z M6,7 C7.1,7 8,7.9 8,9 C8,9.7 7.6,10.4 7,10.7 L7,13 L5,13 L5,10.7 C4.4,10.4 4,9.7 4,9 C4,7.9 4.9,7 6,7 Z"></path>
    </svg>
    <svg className="error" viewBox="0 0 16 14">
        <path d="M15.216,12.529 L8.882,0.654 C8.506,-0.052 7.494,-0.052 7.117,0.654 L0.784,12.529 C0.429,13.195 0.912,14 1.667,14 L14.334,14 C15.088,14 15.571,13.195 15.216,12.529 Z M8,12 C7.448,12 7,11.552 7,11 C7,10.448 7.448,10 8,10 C8.552,10 9,10.448 9,11 C9,11.552 8.552,12 8,12 Z M9,9 L7,9 L7,5 L9,5 L9,9 Z"></path>
    </svg>
</div>

  );
}

export default PasswordField;
