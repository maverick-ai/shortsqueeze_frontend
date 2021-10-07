import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ProductDetailComponent.css";
import AddToCart from "./AddToCart";
import serverBaseURL from "../constants";
import { cartActions } from "../Store/AddToCartSlice";
import { useDispatch } from "react-redux";

function ProductDetailComponent(props) {
  const dispatch = useDispatch();

  function AddToCartSlice() {
    dispatch(cartActions.increaseItem({ id: props.key, price: props.price }));
  }

  function createListForCarouslel(ItemNumber) {
    let arrayOfList = [];
    for (i = 0; i < ItemNumber; i++) {
      if (i === 0) {
        arrayOfList.push(
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
        );
      } else {
        arrayOfList.push(
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={`${i}`}
          ></li>
        );
      }
    }

    return arrayOfList;
  }

  function createImagesForCarouslel(ImagesItems) {
    let arrayOfImages = [];
    for (i = 0; i < ImagesItems; i++) {
      if (i === 0) {
        arrayOfImages.push(
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={`${serverBaseURL}${ImagesItems[i].file}`}
              alt={`${i} slide`}
            />
          </div>
        );
      } else {
        arrayOfImages.push(
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={`${serverBaseURL}${ImagesItems[i].file}`}
              alt={`${i} slide`}
            />
          </div>
        );
      }
    }

    return arrayOfImages;
  }

  return (
    <div className="container-lg paddingTop">
      <div className="row">
        <div className="col-sm-6">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            data-interval="5000"
          >
            <ol class="carousel-indicators">
              {createListForCarouslel(props.ItemNumber)}
            </ol>
            <div class="carousel-inner">
              {createImagesForCarouslel(props.ImagesItems)}
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-sm-6 ">
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
          </div>
          <AddToCart ClickAdd={AddToCartSlice} />
        </div>
      </div>
      <p className="info">{props.description}</p>
    </div>
  );
}
export default ProductDetailComponent;
