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
import { serverBaseURLImage } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faTrophy,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";

function ProductDetailComponent(props) {
  console.log(props.ArtistImage);
  const dispatch = useDispatch();
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [hashTags, setHashTags] = useState([]);
  const [images, setimages] = useState([]);

  function AddToCartSlice() {
    dispatch(
      cartActions.changeItemQuantity({
        id: props.key,
        title: props.title,
        quantity: currentQuantity,
        TraditionalPrice: props.price,
        CryptoPrice: props.priceInCrypto,
      })
    );
  }

  function dropdownOnSelect(eventKey) {
    setCurrentQuantity(+eventKey);
  }

  useEffect(() => {
    let hashtagsList = props.Hashtags.split(" ");
    let hashtagsElement = hashtagsList.map((item, i) => {
      return (
        <div key={i} className="d-flex justify-content-center">
          <h3 className="hashtags">{item}</h3>
        </div>
      );
    });
    setHashTags(hashtagsElement);

    let imagesList = props.ImagesItems;
    let imageElement = imagesList.map((item, i) => {
      return (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100 carouselImage"
            src={`${item.file}`}
            alt={`${i} slide`}
          />
        </Carousel.Item>
      );
    });
    setHashTags(hashtagsElement);
    setimages(imageElement);
  }, [props.ImagesItems, props.Hashtags]);

  return (
    <div className="container-lg paddingTop">
      <div className="row">
        <div className="col-lg-6">
          <Carousel indicators={true} pause="hover">
            {images}
          </Carousel>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="paddingForTitle d-flex justify-content-center">
            <h2 className="title">{props.title} (NFT + Real Art)</h2>
          </div>
          <div className="row paddingForPrice">
          <div className="col-sm-6 paddingBTWButtons d-flex justify-content-center align-self-center">
            <h4 className="priceText">Price:</h4>
            </div>
            <div className="col-sm-6 paddingBTWButtons">
            <div className="d-flex justify-content-center">
              <h4 className="price">
                <span className="insidePrice">
                  {props.currency} {props.price}
                </span>
              </h4>
            </div>
            <div className="d-flex justify-content-center">
              <h3>
                <span>or</span>
              </h3>
            </div>
            <div className="d-flex justify-content-center">
              <h4 className="price">
                <span className="insidePrice">
                  {props.crypto} {props.priceInCrypto}
                </span>
              </h4>
            </div>
            </div>
            
          </div>
          <div className="row paddingForRowQuantity">
            <div className="col-sm-6 paddingBTWButtons d-flex justify-content-center">
              <DropDown
                onSelect={dropdownOnSelect}
                MaxQuantity={5}
                MinQuantity={1}
                CurrentQuantity={1}
              />
            </div>
            <div className="col-sm-6 paddingBTWButtons d-flex justify-content-center">
              <AddToCart ClickAdd={AddToCartSlice} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg paddingForArtist">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h2 className="MadeByHashtag">#MadeBy</h2>
            <h2 className="ArtistTitle">
              I AM {props.ArtistFirstName} {props.ArtistLastName}
            </h2>
            <p className="ArtistDescription">{props.ArtistStory}</p>
          </div>
          <div className="col-md-6">
            <img
              className="ArtistImage"
              src={props.ArtistImage}
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
            <p className="ProductDescription">{props.description}</p>
          </div>
          <div className="col-md-6 align-self-center ">{hashTags}</div>
        </div>
      </div>
      <div
        className="container-lg paddingForBox"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('${process.env.PUBLIC_URL}/box.jpg')`,
        }}
      >
        <h2 className="DescriptionTitle">what's in the box</h2>
        <div className="row rowBox">
          <div className="col-md-4 align-self-center">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon
                icon={faQrcode}
                size="4x"
                style={{ color: "white" }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <h3 className="textinBox">qrcode of NFT</h3>
            </div>
          </div>
          <div className="col-md-4 align-self-center ">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon
                icon={faTrophy}
                size="4x"
                style={{ color: "white" }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <h3 className="textinBox">{props.title}</h3>
            </div>
          </div>
          <div className="col-md-4 ratecolPadding align-self-center ">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon
                icon={faFileInvoice}
                size="4x"
                style={{ color: "white" }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <h3 className="textinBox">Invoice</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center rateTextPadding">
        <h4 className="ratingHeading">Rate</h4>
      </div>
      <div className="ratingPadding d-flex justify-content-center">
        <Rating />
      </div>
    </div>
  );
}
export default ProductDetailComponent;
