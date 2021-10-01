import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ListProductComponent.css";
import AddToCart from "./AddToCart";

function ListProductComponent() {
  return (
    <div className="container-lg">
      <img
        className="productImage"
        src={process.env.PUBLIC_URL + "/testProduct.jpg"}
      />
      <div>
        <h2 className="title">Lorem ipsum</h2>
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 text-center buttonPadding">
          <button className="btn btn-md MoreDetailButton" >
            More details ...
          </button>
        </div>
        <div className="col-sm-6 text-center buttonPadding">
          <AddToCart />
        </div>
      </div>
      <hr className="prodctEndLine" />
    </div>
  );
}
export default ListProductComponent;
