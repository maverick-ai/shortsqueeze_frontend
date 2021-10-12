import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartRow from "./Components/MyCartComponent";
import DropDown from "./Components/DropDown";
import "./MyCart.css";

function MyCart(props) {
  const Cart = useSelector((state) => state.cart);
  const [CartItems, setCartItems] = useState([]);
  const [testCartItems, testsetCartItems] = useState([]);

  useEffect(() => {
    testsetCartItems([<tr>
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
    </tr>,
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
  </tr>,<tr>
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
          </tr>]);
  }, [Cart]);

  return (
    <div className="container-lg paddingMyCart">
      <h1 className="MyCartTitle">#MyCart</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price in Traditional Currency</th>
            <th scope="col">Price in Crypto Currency</th>
          </tr>
        </thead>
        <tbody>
          {testCartItems}
         
        </tbody>
      </table>
      <div>
        <hr className="hrCartRow" />
        <h2>Total Amount</h2>
      </div>
    </div>
  );
}

export default MyCart;
