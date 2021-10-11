import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ProductDetailComponent.css";
import AddToCart from "./AddToCart";
import { cartActions } from "../Store/AddToCartSlice";
import { useDispatch } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import DropDown from "./DropDown";
import Rating from "./Rating";
import {serverBaseURLImage} from "../constants";

function ProductDetailComponent(props) {
  const dispatch = useDispatch();
  const [hashTags, setHashTags] = useState([]);
  const [images, setimages] = useState([]);

  function AddToCartSlice() {
    dispatch(cartActions.increaseItem({ id: props.key, price: props.price }));
  }

  function dropdownOnSelect(eventKey) {
    console.log("dropdown ...........");
    console.log(eventKey);
    console.log("dropdown ...........");
  }

  useEffect(() => {
    let hashtagsList = props.Hashtags.split(" ");
    let hashtagsElement = hashtagsList.map((item , i) => {
      return (
        <div key={i} className="d-flex justify-content-center">
          <h3 className="hashtags">{item}</h3>
        </div>
      );
    });
    setHashTags(hashtagsElement);

    let imagesList = props.ImagesItems;
    let imageElement = imagesList.map((item , i) => {
      return (
        <Carousel.Item key={i}>
              <img
                className="d-block w-100 carouselImage"
                src={`${serverBaseURLImage}${item.file}`}
                alt={`${i} slide`}
              />
            </Carousel.Item>
      );
    });
    setHashTags(hashtagsElement);
    setimages(imageElement);
  }, [props.ImagesItems,props.Hashtags, ]);

  return (
    <div className="container-lg paddingTop">
      <div className="row">
        <div className="col-lg-6">
          <Carousel indicators={true} pause="hover">
            {/* <Carousel.Item >
              <img
                className="d-block w-100 carouselImage"
                src={process.env.PUBLIC_URL + "/testProduct.jpg"}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100 carouselImage"
                src={process.env.PUBLIC_URL + "/cover.jpg"}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100 carouselImage"
                src={process.env.PUBLIC_URL + "/testProduct.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100 carouselImage"
                src={`${serverBaseURLImage}${props.ImagesItems[0].file}`}
                alt="Second slide"
              />
            </Carousel.Item> */}
            {images}
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
          </div>
          <div className="row paddingForRowQuantity">
            <div className="col-sm-6 d-flex justify-content-center">
              <DropDown
                onSelect={dropdownOnSelect}
                MaxQuantity={5}
                MinQuantity={1}
                CurrentQuantity={1}
              />
            </div>
            <div className="col-sm-6 d-flex justify-content-center">
              <AddToCart ClickAdd={AddToCartSlice} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg paddingForArtist">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h2 className="MadeByHashtag">#MadeBy</h2>
            <h2 className="ArtistTitle">I AM {props.ArtistFirstName} {props.ArtistLastName}</h2>
            <p className="ArtistDescription">
              {props.ArtistStory}
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="ArtistImage"
              src={process.env.PUBLIC_URL + "/alpacino.jpg"}
            />
          </div>
        </div>
      </div>
      <div
        className="container-lg paddingForDescription"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${process.env.PUBLIC_URL}/productDescription.jpg')`,
        }}
      >
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h2 className="DescriptionTitle">DESCRIPTION</h2>
            <p className="ProductDescription">
              {props.description}
            </p>
          </div>
          <div className="col-md-6 align-self-center ">
            {hashTags}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h4 className="ratingHeading">Rate</h4>
      </div>
      <div className="ratingPadding d-flex justify-content-center">
        <Rating />
      </div>
    </div>
  );
}
export default ProductDetailComponent;
