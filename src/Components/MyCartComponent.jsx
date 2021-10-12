import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import DropDown from "./DropDown";
import "./MyCartComponent.css";

function CartRow(props) {
  return (
    <tr>
    <td data-label="Account">
      <h2 className="CartRowTitle">test</h2>
    </td>
    <td data-label="Quantity">
      <DropDown
        CurrentQuantity={props.quantity}
        MinQuantity={props.MinQuantity}
        MaxQuantity={props.MaxQuantity}
      />
    </td>
    <td data-label="Amount">
      <h2 className="traditionalCurrencyPrice">{props.price}</h2>
    </td>
    <td data-label="Period">03/01/2016 - 03/31/2016</td>
  </tr>
  );
}

export default CartRow;
