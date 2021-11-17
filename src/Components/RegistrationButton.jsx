import { useState } from "react";
import "./SubmitProfile.scss";
import { useDispatch } from "react-redux";
import { UserTokenActions } from "../Store/UserTokenSlice";
import { useSelector } from "react-redux";
import { RegistrationURL, Host } from "../constants";

function RegistrationButton(props) {
  const [loadingState, setLoadingState] = useState(false);
  const [completeState, setCompleteState] = useState(false);
  const dispatch = useDispatch();
  const date = useSelector((state) => state.date);

  async function ClickSaveButton() {
    setLoadingState(true);
    const credentials = JSON.stringify({
      email: props.Email.current.value,
      gender:props.Gender,
      password1: props.Password.current.value,
      password2: props.Password.current.value,
      first_name: props.FirstName.current.value,
      last_name: props.LastName.current.value,
      date_of_birth: `${date.year}-${date.month}-${date.day}`,
      phoneNumber: props.PhoneNumber.current.value,
    });
    const response = await fetch(RegistrationURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Content-Length": credentials.length,
        Host: Host,
      },
      body: credentials,
    });


    if (response.ok) {
      const data = await response.json();
      dispatch(UserTokenActions.setToken({ token: data.key }));
      setCompleteState(true);
      props.NextPage();
    }
  }

  return (
    <div>
      <button
        onClick={ClickSaveButton}
        className={`activate ${loadingState ? "loading" : ""}  ${
          completeState ? "done" : ""
        }`}
      >
        <span>
          <svg>
            <use xlinkHref="#circle" />
          </svg>
          <svg>
            <use xlinkHref="#arrow" />
          </svg>
          <svg>
            <use xlinkHref="#check" />
          </svg>
        </span>
        <ul>
          <li>Submit</li>
          <li>Waiting</li>
          <li>Submitted</li>
        </ul>
      </button>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          id="circle"
        >
          <circle cx="8" cy="8" r="7.5"></circle>
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          id="arrow"
        >
          <path d="M2.7008908,5.37931459 L2.7008908,5.37931459 C2.9224607,5.60207651 3.2826628,5.60304283 3.50542472,5.38147293 C3.52232305,5.36466502 3.53814843,5.34681177 3.55280728,5.32801875 L5.34805194,3.02646954 L5.34805194,10.3480519 C5.34805194,10.7081129 5.63993903,11 6,11 L6,11 C6.36006097,11 6.65194806,10.7081129 6.65194806,10.3480519 L6.65194806,3.02646954 L8.44719272,5.32801875 C8.6404327,5.57575732 8.99791646,5.61993715 9.24565503,5.42669716 C9.26444805,5.41203831 9.28230129,5.39621293 9.2991092,5.37931459 L9.2991092,5.37931459 C9.55605877,5.12098268 9.57132199,4.70855346 9.33416991,4.43193577 L6.75918715,1.42843795 C6.39972025,1.00915046 5.76841509,0.960656296 5.34912761,1.32012319 C5.31030645,1.35340566 5.27409532,1.38961679 5.24081285,1.42843795 L2.66583009,4.43193577 C2.42867801,4.70855346 2.44394123,5.12098268 2.7008908,5.37931459 Z"></path>
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          id="check"
        >
          <path
            id="test"
            d="M4.76499011,6.7673683 L8.2641848,3.26100386 C8.61147835,2.91299871 9.15190114,2.91299871 9.49919469,3.26100386 C9.51164115,3.27347582 9.52370806,3.28637357 9.53537662,3.29967699 C9.83511755,3.64141434 9.81891834,4.17816549 9.49919469,4.49854425 L5.18121271,8.82537365 C4.94885368,9.05820878 4.58112654,9.05820878 4.34876751,8.82537365 L2.50080531,6.97362503 C2.48835885,6.96115307 2.47629194,6.94825532 2.46462338,6.93495189 C2.16488245,6.59321455 2.18108166,6.0564634 2.50080531,5.73608464 C2.84809886,5.3880795 3.38852165,5.3880795 3.7358152,5.73608464 L4.76499011,6.7673683 Z"
          ></path>
        </symbol>
      </svg>
    </div>
  );
}

export default RegistrationButton;
