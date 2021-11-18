import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import DropDownCart from "./DropDownCart";
import "./MyCartComponent.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/AddToCartSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

function CartRow(props) {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart);
  const [TradPrice,setTradPrice]=useState(props.quantity*props.price)

  function changeQuantity(changedQuantity) {
    setTradPrice(changedQuantity*props.price)
    dispatch(
      cartActions.changeItemQuantity({
        id: props.ProductID,
        quantity: changedQuantity,
        TraditionalPrice: props.price,
      })
    );
  }

  return (
    <tr>
      <td data-label="Product">
        <h2 className="CartRowTitle" style={{color:`${props.OutOfStock===true?"red":"black"}`}}>{props.title}</h2>
      </td>
      <td data-label="Quantity">
        <DropDownCart
        OutOfStock={props.OutOfStock}
          CurrentQuantity={props.quantity}
          MinQuantity={props.MinQuantity}
          MaxQuantity={props.MaxQuantity}
          onSelect={changeQuantity}
        />
      </td>
      <td data-label={`Price in ${Cart.traditionalCurrency}`}>
        <h2 style={{color:`${props.OutOfStock===true?"red":"black"}`}} className="traditionalCurrencyPrice">{TradPrice}</h2>
      </td>
    </tr>
  );
}

export default CartRow;
