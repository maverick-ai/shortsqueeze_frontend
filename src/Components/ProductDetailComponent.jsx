import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ProductDetailComponent.css";
import AddToCart from "./AddToCart";
import serverBaseURL from "../constants";
import { cartActions } from "../Store/AddToCartSlice";
import { useDispatch } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";
import Rating from "./Rating";

function ProductDetailComponent(props) {
  const dispatch = useDispatch();
  // const [itemNumbers, setitemNumbers] = useState();

  function AddToCartSlice() {
    dispatch(cartActions.increaseItem({ id: props.key, price: props.price }));
  }

  function dropdownOnSelect(eventKey, event) {
    console.log("dropdown ...........");
    console.log(eventKey);
    console.log("dropdown ...........");
    console.log(event.target);
  }
  // useEffect(() => {
  //   console.log("inside list .................");
  //   console.log(props.ItemNumber);

  //   let arrayOfList = [];
  //   for (let i = 0; i < props.ItemNumber; i++) {
  //     if (i === 0) {
  //       arrayOfList.push(
  //         <li
  //           data-target="#carouselExampleIndicators"
  //           data-slide-to="0"
  //           className="active"
  //         ></li>
  //       );
  //     } else {
  //       arrayOfList.push(
  //         <li
  //           data-target="#carouselExampleIndicators"
  //           data-slide-to={`${i}`}
  //         ></li>
  //       );
  //     }
  //   }
  //   setitemNumbers(arrayOfList);
  //   let arrayOfImages = [];
  //   console.log("inside images items .................");
  //   console.log(props.ImagesItems);
  //   for (let i = 0; i < props.ImagesItems; i++) {
  //     if (i === 0) {
  //       arrayOfImages.push(
  //         <div className="carousel-item active">
  //           <img
  //             className="d-block w-100"
  //             src={process.env.PUBLIC_URL + "/testProduct.jpg"}
  //             alt={`${i} slide`}
  //           />
  //         </div>
  //       );
  //     } else {
  //       arrayOfImages.push(
  //         <div className="carousel-item">
  //           <img
  //             className="d-block w-100"
  //             src={process.env.PUBLIC_URL + "/testProduct.jpg"}
  //             alt={`${i} slide`}
  //           />
  //         </div>
  //       );
  //     }
  //   }
  // }, []);

  return (
    <div className="container-lg paddingTop">
      <div className="row">
        <div className="col-lg-6">
          <Carousel indicators={true} pause="hover">
            <Carousel.Item key={1}>
              <img
                className="d-block w-100 carouselImage"
                src={process.env.PUBLIC_URL + "/testProduct.jpg"}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item key={2}>
              <img
                className="d-block w-100 carouselImage"
                src={process.env.PUBLIC_URL + "/cover.jpg"}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item key={3}>
              <img
                className="d-block w-100 carouselImage"
                src={process.env.PUBLIC_URL + "/testProduct.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item key={4}>
              <img
                className="d-block w-100 carouselImage"
                src={process.env.PUBLIC_URL + "/cover.jpg"}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="paddingForTitle">
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
            <Dropdown onSelect={dropdownOnSelect} className="d-inline mx-2">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Default Dropdown
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="option-1">1</Dropdown.Item>
                <Dropdown.Item eventKey="option-2">2</Dropdown.Item>
                <Dropdown.Item eventKey="option-3">3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <AddToCart ClickAdd={AddToCartSlice} />
          </div>
        </div>
      </div>
      <p className="info">{props.description}</p>
      <div className=" d-flex justify-content-center">
        <h4 className="ratingHeading">Rate</h4>
      </div>
      <div className="ratingPadding d-flex justify-content-center">
        <Rating />
      </div>
    </div>
  );
}
export default ProductDetailComponent;
