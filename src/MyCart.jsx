import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartRow from "./Components/MyCartComponent";
import DropDown from "./Components/DropDown";
import "./MyCart.css";

function MyCart(props) {
  const Cart = useSelector((state) => state.cart);
  const [CartItems, setCartItems] = useState([]);

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

  }, [Cart]);

  return (
    <div className="container-lg paddingMyCart">
      <h1 className="MyCartTitle">#MyCart</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price in Traditional Currency</th>
            <th scope="col">Unit Price in Crypto Currency</th>
          </tr>
        </thead>
        <tbody>{CartItems}</tbody>
      </table>
      <div>
        <hr className="hrCartRow" />
        <h2>Total Amount</h2>
      </div>
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
