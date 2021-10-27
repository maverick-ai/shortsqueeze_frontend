import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import DropDownCart from "./DropDownCart";
import "./MyCartComponent.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/AddToCartSlice";

function CartRow(props) {
  const dispatch = useDispatch();

  function changeQuantity(changedQuantity) {
    dispatch(
      cartActions.changeItemQuantity({
        id: props.key,
        quantity: changedQuantity,
        TraditionalPrice: props.price,
        CryptoPrice: props.CryptoPrice,
      })
    );
  }

  return (
    <tr>
      <td data-label="Product">
        <h2 className="CartRowTitle">{props.title}</h2>
      </td>
      <td data-label="Quantity">
        <DropDownCart
          CurrentQuantity={props.quantity}
          MinQuantity={props.MinQuantity}
          MaxQuantity={props.MaxQuantity}
          onSelect={changeQuantity}
        />
      </td>
      <td data-label="Price in Traditional Currency">
        <h2 className="traditionalCurrencyPrice">{props.price}</h2>
      </td>
      <td data-label="Price in Crypto Currency"><h2 className="traditionalCurrencyPrice">{props.priceInCrypto}</h2></td>
    </tr>
  );
}

export default CartRow;
