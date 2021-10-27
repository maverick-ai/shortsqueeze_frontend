import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ListProductComponent.css";
import AddToCart from "./AddToCart";
import "./HorizontalLine.scss";
import { cartActions } from "../Store/AddToCartSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function ListProductComponent(props) {
  const dispatch = useDispatch();
  const history =useHistory();

  function AddToCartSlice() {
    dispatch(cartActions.increaseItem({ id:props.key,title:props.title, TraditionalPrice: props.price,CryptoPrice:props.priceInCrypto }));
  }

  function MoreDetail(){
    history.push(`/product/${props.ProductID}`);
  }

  return (
    <div className="container-lg paddingTop">
      <img
        className="productImage"
        alt="Product"
        src={process.env.PUBLIC_URL + "/testProduct.jpg"}
      />
      <div>
        <h2 className="title">{props.title} (NFT + Real Art)</h2>
        <h4 className="price">
          <span className="priceText">Price:</span>{" "}
          <span className="insidePrice">
            {props.currency} {props.price}
          </span>{" "}
          <span className="currencyType">(traditional currency)</span>{" "}
          <span className="orInPrice">or</span>{" "}
          <span className="insidePrice">
            {props.crypto} {props.priceInCrypto}
          </span>{" "}
          <span className="currencyType">(Crypto currency)</span>
        </h4>
        <p className="info">{props.description}</p>
      </div>
      <div className="row">
        <div className="col-sm-6 text-center buttonPadding">
          <button onClick={MoreDetail} className="btn btn-md MoreDetailButton">
            More details ...
          </button>
        </div>
        <div className="col-sm-6 text-center buttonPadding">
          <AddToCart ClickAdd={AddToCartSlice} />
        </div>
      </div>
      <hr className="center-ball" />
    </div>
  );
}
export default ListProductComponent;
