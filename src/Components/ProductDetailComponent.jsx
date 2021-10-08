import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ProductDetailComponent.css";
import AddToCart from "./AddToCart";
import serverBaseURL from "../constants";
import { cartActions } from "../Store/AddToCartSlice";
import { useDispatch } from "react-redux";
import Carousel from 'react-bootstrap/Carousel'

function ProductDetailComponent(props) {
  const dispatch = useDispatch();
  // const [itemNumbers, setitemNumbers] = useState();

  function AddToCartSlice() {
    dispatch(cartActions.increaseItem({ id: props.key, price: props.price }));
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
        <div className="col-sm-6">
          <Carousel indicators={true} pause='hover'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {process.env.PUBLIC_URL + "/testProduct.jpg"}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={
                  process.env.PUBLIC_URL + "/cover.jpg"
                }
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/testProduct.jpg"}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  process.env.PUBLIC_URL + "/cover.jpg"
                }
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>fourth slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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
