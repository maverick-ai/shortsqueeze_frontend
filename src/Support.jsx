import "./Support.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useRef } from "react";
import { Host,SupportTicketURL } from "./constants";
import Submit from "./Components/Submit";
import EmailField from "./Components/Email";

function Support() {
  const EmailRef = useRef();
  const SubjectRef = useRef();
  const DescriptionRef = useRef();


  async function handleSubmit(event)  {
    // event.preventDefault();
    const supportQuery=JSON.stringify({
      support_user: EmailRef.current.value,
      subject:SubjectRef.current.value,
      description:DescriptionRef.current.value
  });

    const response=await fetch(SupportTicketURL,{method:'POST',headers:{
      'Content-Type': 'application/json',
      'Accept':'*/*',
      'Accept-Encoding':'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Content-Length':supportQuery.length,
      'Host':Host
    },body:supportQuery});
  }

  return (
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
          Please fill out your query. We will respond within 2-3 business days.
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="emailField">
            <EmailField EmailRef={EmailRef}/>
          </div>
          <div className="subjectField d-flex justify-content-center">
            <input ref={SubjectRef} className="supportSubject" placeholder="Subject"/>
          </div>
          <div className="queryField d-flex justify-content-center">
              <textarea ref={DescriptionRef} className="textAreaField" placeholder="Descriptio of your query ......."></textarea>
          </div>
          <div className="submitField d-flex justify-content-center">
            <Submit SendSupportQuery={handleSubmit}/>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Support;
