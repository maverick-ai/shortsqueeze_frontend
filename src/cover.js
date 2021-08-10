import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./styles.css";
 


function Cover(){
    return (<div class="divOfCoverPage"><img class="coverImageStyle" src={process.env.PUBLIC_URL + "/cover.jpg"} />
    <div class="coverTextDiv">
        <h1 class="coverHeading1">Artisan's</h1>
        <h1 class="coverHeading">Voice</h1>
    </div>
</div>);
}