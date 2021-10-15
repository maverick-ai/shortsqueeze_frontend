import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ProfileFormComponent.css";
import SubmitProfileButton from "./SubmitProfile";
import DateInput from "./DateInput";

function ProfileComponent(props) {
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
                <input className="profileName" placeholder="first name" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input className="profileName" placeholder="last name" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input className="profileName" placeholder="country" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input className="profileName" placeholder="state" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input className="profileName" placeholder="city" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input className="profileName" placeholder="Street Address Line 1" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input className="profileName" placeholder="Street Address Line 2" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <input className="profileName" placeholder="phone number" />
              </div>
              <div className="nameField d-flex justify-content-center">
                <DateInput />
              </div>

              <div className="saveField d-flex justify-content-center">
                <SubmitProfileButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileComponent;
