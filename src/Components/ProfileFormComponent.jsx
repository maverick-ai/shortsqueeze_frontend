import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ProfileFormComponent.css";
import SubmitProfileButton from "./SubmitProfile";
import DateInput from "./DateInput";
import { useRef } from "react";

function ProfileComponent(props) {
  const firstNameInputRef=useRef();
  const lastNameInputRef=useRef();
  const countryInputRef=useRef();
  const stateInputRef=useRef();
  const cityInputRef=useRef();
  const streetAddressXInputRef=useRef();
  const streetAddressYInputRef=useRef();
  const phoneNumberInputRef=useRef();



  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="profileFormPadding">
      <div className="container-lg contentDIV">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="ProfileImage"
              alt="the genius"
              src={process.env.PUBLIC_URL + "/ProfileImageTop.png"}
            />
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="d-flex justify-content-center">
              <h1 className="profileHeading">Profile</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="nameField d-flex justify-content-center">
                <input ref={firstNameInputRef} className="profileName" defaultValue={props.FirstName} placeholder="first name" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input ref={lastNameInputRef} className="profileName" defaultValue={props.LastName} placeholder="last name" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input ref={countryInputRef} className="profileName" defaultValue={props.Country} placeholder="country" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input ref={stateInputRef} className="profileName" defaultValue={props.State} placeholder="state" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input ref={cityInputRef} className="profileName" defaultValue={props.City} placeholder="city" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input ref={streetAddressXInputRef} className="profileName" defaultValue={props.StreetAddress} placeholder="Street Address Line 1" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input ref={streetAddressYInputRef} className="profileName"  placeholder="Street Address Line 2" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input ref={phoneNumberInputRef} className="profileName" defaultValue={props.PhoneNumber} placeholder="phone number" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <DateInput Day={props.Day} Month={props.Month} Year={props.Year}/>
              </div>

              <div className="saveField d-flex justify-content-center">
                <SubmitProfileButton 
                FirstName={firstNameInputRef} 
                LastName={lastNameInputRef} 
                Country={countryInputRef} 
                State={stateInputRef} 
                City={cityInputRef}
                StreetAddressX={streetAddressXInputRef}
                StreetAddressY={streetAddressYInputRef}
                PhoneNumber={phoneNumberInputRef}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileComponent;
