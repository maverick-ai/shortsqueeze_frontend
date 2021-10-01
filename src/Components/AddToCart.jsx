import React, { useState } from "react";
import { useRef } from "react";
import "./AddToCart.scss";


function AddToCart(props) {
  const buttonRef = useRef();
  const [addedState, setAddedState]=useState(false);


  const ClickButton = (event) => {
    event.preventDefault();
    setAddedState(true);
    setTimeout(() => {
        setAddedState(false);
      }, 3500);

    props.ClickAdd();
  };


  return (
    <button ref={buttonRef} onClick={ClickButton} className={`add-to-cart ${addedState && 'added'}`}>
      <div className="default">Add to cart</div>
      <div className="success">Added</div>
      <div className="cart">
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="dots"></div>
    </button>
  );
}

export default AddToCart;
