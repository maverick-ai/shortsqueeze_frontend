import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ProfileFormComponent.css";
import RegistrationButton from "./RegistrationButton.jsx";
import EmailField from "./Email";
import PasswordField from "./Password";
import DateInput from "./DateInput";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./RadioButton.scss";

function RegistrationComponent(props) {
  const EmailInputRef = useRef();
  const PasswordInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const [gender,setGender] = useState();
  const phoneNumberInputRef = useRef();
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
  }

  function MoveToNextPage() {
    history.push("/");
  }

  function GetGender(value){
    setGender(value)
  }


  return (
    <div className="profileFormPadding">
      <div className="container-lg contentDIV">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="ProfileImage"
              alt="the genius"
              src={process.env.PUBLIC_URL + "/Registration.jpg"}
            />
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="d-flex justify-content-center">
              <h1 className="profileHeading">Register</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="RegistrationCartEmail">
                <EmailField EmailRef={EmailInputRef} />
              </div>

              <div className="RegistrationCartPassword">
                <PasswordField
                  LogInCorrect={true}
                  PasswordRef={PasswordInputRef}
                />
              </div>

              <div className="nameField d-flex justify-content-center">
                <input
                  ref={firstNameInputRef}
                  className="profileName"
                  placeholder="first name"
                />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input
                  ref={lastNameInputRef}
                  className="profileName"
                  placeholder="last name"
                />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input
                    type="tel"
                  ref={phoneNumberInputRef}
                  className="profileName"
                  defaultValue={props.PhoneNumber}
                  placeholder="phone number"
                />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input
                  id="r1"
                  type="radio"
                  name="radio"
                  value="M"
                  onChange={()=>{
                    GetGender("M")
                  }}
                />
                <label className="RadioLabel" htmlFor="r1">
                  Male
                </label>
                <input
                  id="r2"
                  type="radio"
                  name="radio"
                  value="F"
                  onChange={()=>{
                    GetGender("F")
                  }}
                />
                <label className="RadioLabel" htmlFor="r2">
                  Female
                </label>
                <input
                  id="r3"
                  type="radio"
                  name="radio"
                  value="NB"
                  onChange={()=>{
                    GetGender("NB")
                  }}
                />
                <label className="RadioLabel" htmlFor="r3">
                  Non-binary
                </label>
              </div>
              
              <div className="nameField d-flex justify-content-center">
                <DateInput Day={8} Month={11} Year={1997} />
              </div>

              <div className="saveField d-flex justify-content-center">
                <RegistrationButton
                  Gender={gender}
                  Email={EmailInputRef}
                  Password={PasswordInputRef}
                  FirstName={firstNameInputRef}
                  LastName={lastNameInputRef}
                  PhoneNumber={phoneNumberInputRef}
                  NextPage={MoveToNextPage}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegistrationComponent;
