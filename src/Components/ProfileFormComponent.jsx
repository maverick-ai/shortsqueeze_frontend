import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ProfileFormComponent.css";
import SubmitProfileButton from "./SubmitProfile";
import MyOrderButton from "./MyOrderButtonComponent.jsx";
import DateInput from "./DateInput";
import { useRef } from "react";

function ProfileComponent(props) {
  const firstNameInputRef=useRef();
  const lastNameInputRef=useRef();
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
                <input ref={phoneNumberInputRef} className="profileName" defaultValue={props.PhoneNumber} placeholder="phone number" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <DateInput Day={props.Day} Month={props.Month} Year={props.Year}/>
              </div>
              <div className="saveField d-flex justify-content-center">
                <SubmitProfileButton 
                FirstName={firstNameInputRef} 
                LastName={lastNameInputRef} 
                PhoneNumber={phoneNumberInputRef}
                />
              </div>
            </form>
            <hr style={{"background":"white","height":"2px","width":"250px"}} />
            <div className="d-flex justify-content-center MyOrderButtonMargin">
              <MyOrderButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileComponent;
