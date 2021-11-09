import { useState } from "react";
import "./Submit.scss";



function SubmitButton(props) {
    const [SubmitButtonState, setSubmitButtonState]=useState(false);



    function ClickSubmitButton(event){
      event.preventDefault();
      props.SendSupportQuery();
      setSubmitButtonState(true);
    }



  return (
    <button className={`order ${SubmitButtonState?'animate':''}`} onClick={ClickSubmitButton}>
      <span className="default">Submit</span>
      <span className="success">
        Submitted
        <svg viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      <div className="box"></div>
      <div className="truck">
        <div className="back"></div>
        <div className="front">
          <div className="window"></div>
        </div>
        <div className="light top"></div>
        <div className="light bottom"></div>
      </div>
      <div className="lines"></div>
    </button>
  );
}


export default SubmitButton;