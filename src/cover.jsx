import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./styles.css";

function Cover(prop) {
  return (
    <div className="divOfCoverPage" style={{display: prop.Show ? "block":"none"}}>
      <img
      onLoad={prop.LoadEvent}
        className="coverImageStyle"
        alt="Flower pot"
        src={process.env.PUBLIC_URL + "/cover.jpg"}
      />
      <div className="coverTextDiv">
        <h1 className="coverHeading1">Artisan's</h1>
        <h1 className="coverHeading">Voice</h1>
      </div>
    </div>
  );
}

export default Cover;