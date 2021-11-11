import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartRow from "./Components/MyCartComponent";
import PaymentButton from "./Components/PaymentButton";
import "./MyCart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function MyCart(props) {
  const Cart = useSelector((state) => state.cart);
  const [CartItems, setCartItems] = useState([]);
  const [tradCurrency, setTradCurrency] = useState("");
  const [cryptoCurrency, setCryptoCurrency] = useState("");

  useEffect(() => {
    let tempCartList = [];
    tempCartList = Cart.CartItems.map((item) => {
      return (
        <CartRow
          key={item.id}
          ProductID={item.id}
          title={item.title}
          quantity={item.quantity}
          price={item.TraditionalPrice}
          priceInCrypto={item.CryptoPrice}
          MinQuantity={1}
          MaxQuantity={5}
        />
      );
    });
    setCartItems(tempCartList);
    setTradCurrency(Cart.traditionalCurrency);
    setCryptoCurrency(Cart.cryptoCurrency);
  }, [Cart]);

  return (
    <div>
    <div className="container-lg paddingMyCart">
      <h1 className="MyCartTitle">#MyCart</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">{`Price in ${tradCurrency}`}</th>
            <th scope="col">{`Price in ${cryptoCurrency}`}</th>
          </tr>
        </thead>
        <tbody>{CartItems}</tbody>
      </table>
      <div>
        <hr className="hrCartRow" />
        <table>
          <tbody>
            <tr>
              <td></td>
              <td data-label="Total Quantity">{Cart.totalItem}</td>
              <td data-label={`Total Amount in ${tradCurrency}`}>
                <h2 className="traditionalCurrencyPrice">
                  {Cart.totalAmountTraditionalPrice.toFixed(3)}
                </h2>
              </td>
              <td data-label={`Total Amount in ${cryptoCurrency}`}>
                <h2 className="traditionalCurrencyPrice">
                  {Cart.totalAmountCryptoPrice.toFixed(3)}
                </h2>
              </td>
            </tr>
          </tbody>
        </table>
        <hr className="hrCartRow" />
        <div className="container-lg PaymentContainer">
          <div className="row">
            <div className="col-md-4 align-self-center">
              <div className="d-flex justify-content-center PaymentButtonPadding">
                <PaymentButton Currency={tradCurrency}/>
              </div>
            </div>
            <div className="col-md-4 align-self-center"> <div className="d-flex justify-content-center">
                -or-
              </div></div>
            <div className="col-md-4 align-self-center">
              <div className="d-flex justify-content-center PaymentButtonPadding">
                <PaymentButton Currency={cryptoCurrency}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="CartFooter"></div>
    </div>
  );
}

export default MyCart;

// <tr>
//           <td data-label="Product">
//             <h2 className="CartRowTitle">test</h2>
//           </td>
//           <td data-label="Quantity">
//             <DropDown
//               CurrentQuantity={item.quantity}
//               MinQuantity={props.MinQuantity}
//               MaxQuantity={props.MaxQuantity}
//             />
//           </td>
//           <td data-label="Price in Traditional Currency">
//             <h2 className="traditionalCurrencyPrice">{item.TraditionalPrice}</h2>
//           </td>
//           <td data-label="Price in Crypto Currency">{item.CryptoPrice}</td>
//         </tr>
