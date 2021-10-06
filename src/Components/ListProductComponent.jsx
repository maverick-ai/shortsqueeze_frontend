import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ListProductComponent.css";
import AddToCart from "./AddToCart";
import "./HorizontalLine.scss";
import {cartActions} from "../Store/AddToCartSlice";
import { useDispatch } from "react-redux";

function ListProductComponent(props) {

  const dispatch=useDispatch();

  function AddToCartSlice(){
    dispatch(cartActions.increaseItem({id:1382,price:210}));
  }



  return (
    <div className="container-lg">
      <img
        className="productImage"
        alt="Product"
        src={process.env.PUBLIC_URL + "/testProduct.jpg"}
      />
      <div>
        <h2 className="title">{props.title}</h2>
        <p className="info">
          {props.description}
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 text-center buttonPadding">
          <button className="btn btn-md MoreDetailButton" >
            More details ...
          </button>
        </div>
        <div className="col-sm-6 text-center buttonPadding">
          <AddToCart ClickAdd={AddToCartSlice}/>
        </div>
      </div>
      <hr className="center-ball" />
    </div>
  );
}
export default ListProductComponent;