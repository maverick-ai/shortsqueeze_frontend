import "./Support.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useRef } from "react";
import { Host, SupportTicketURL } from "./constants";
import Submit from "./Components/Submit";
import EmailField from "./Components/Email";

function Support() {
  const EmailRef = useRef();
  const SubjectRef = useRef();
  const DescriptionRef = useRef();

  async function handleSubmit(event) {
    // event.preventDefault();
    const supportQuery = JSON.stringify({
      support_user: EmailRef.current.value,
      subject: SubjectRef.current.value,
      description: DescriptionRef.current.value,
    });

    await fetch(SupportTicketURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Content-Length": supportQuery.length,
        Host: Host,
      },
      body: supportQuery,
    });
  }

  return (
    <div>
      <div className="SupportPaddingTop">
        <div className="container-lg SupportHeadingContainer">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <h1 className="SupportHeading d-flex justify-content-center">
                Support
              </h1>
            </div>
            <div className="col-lg-6">
              <img
                className="SupportImage"
                alt="intersection of technology and liberal art"
                src={process.env.PUBLIC_URL + "/intersectionSign.png"}
              />
            </div>
          </div>
        </div>
        <div className="container-lg SupportSubPaddingTop">
          <h1 className="SupportSubHeading d-flex justify-content-center">
            How can we help you?
          </h1>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Please fill out your query. We will respond within 2-3 business
            days.
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="emailField">
              <EmailField EmailRef={EmailRef} />
            </div>
            <div className="subjectField d-flex justify-content-center">
              <input
                ref={SubjectRef}
                className="supportSubject"
                placeholder="Subject"
              />
            </div>
            <div className="queryField d-flex justify-content-center">
              <textarea
                ref={DescriptionRef}
                className="textAreaField"
                placeholder="Descriptio of your query ......."
              ></textarea>
            </div>
            <div className="submitField d-flex justify-content-center">
              <Submit SendSupportQuery={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
      <div className="SupportFooter">
        <div className="container-lg">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="ContactUsHeading text-center">Contact us</h1>
              <p className="ContactUsParagraph">Email: hi@shortsqueeze.space</p>
              <p className="ContactUsParagraph">Address: HIG-419, Arera Colony,</p>
              <p className="ContactUsParagraph">Bhopal, Madhya Pradesh, India-462016</p>
              <p className="ContactUsParagraph">Phone: +91 9009576111</p>
            </div>
            <div className="col-sm-6">
              <h1 className="ContactUsHeading text-center">Terms</h1>
              <p className="ContactUsParagraph"><u onClick={()=>{
                const newWindow = window.open('/terms', '_blank', 'noopener,noreferrer')
                if (newWindow) newWindow.opener = null
              }}>Terms and Conditions</u></p>
             <p className="ContactUsParagraph"><u onClick={()=>{
                const newWindow = window.open('/privacy', '_blank', 'noopener,noreferrer')
                if (newWindow) newWindow.opener = null
              }}>Privacy Policy</u></p>
              <p className="ContactUsParagraph"><u onClick={()=>{
                const newWindow = window.open('/refund', '_blank', 'noopener,noreferrer')
                if (newWindow) newWindow.opener = null
              }}>Refunds/Cancellations</u></p>
              <p className="ContactUsParagraph"><u onClick={()=>{
                const newWindow = window.open('/shippingPolicy', '_blank', 'noopener,noreferrer')
                if (newWindow) newWindow.opener = null
              }}>Shipping policy</u></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Support;
