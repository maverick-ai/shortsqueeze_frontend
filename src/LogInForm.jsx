import React from "react";
import "./LogInForm.css";
import EmailField from "./Components/Email";

function LogInForm() {
  return (
    <form className="form">
      <div className="form__container">
        <div class="fieldset">
          <EmailField />
          <div className="field">
            <input
              className="input"
              type="email"
              placeholder="E-mail address"
              required
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <button className="btn">Sign in</button>
        <div className="text">
          Can’t remember your password? <a href="/">Recover it</a>.
        </div>
      </div>
      <div className="form__footer">
        Don't Have an Account? <a href="index.html">Create it</a>.
      </div>
    </form>
  );
}

export default LogInForm;
