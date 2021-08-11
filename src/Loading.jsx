import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./styles.css";



function LoadingImage(props){
    return (
        <div className="divOfCoverPage" style={{display: props.Show ? "none":"block"}}>
          <img
            className="coverImageStyle"
            alt="Loading screen"
            src={process.env.PUBLIC_URL + "/loading.gif"}
          />
        </div>
      );

}


export default LoadingImage;