import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { OutOfStockURL, Host } from "./constants";
import { cartActions } from "./Store/AddToCartSlice";
import CartRow from "./Components/MyCartComponent";
import PaymentButton from "./Components/PaymentButton";
import LoadingImage from "./Loading";
import "./MyCart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

let initialLoad = true;

function MyCart(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const Cart = useSelector((state) => state.cart);
  const UserToken = useSelector((state) => state.userToken);
  const [CartItems, setCartItems] = useState([]);
  const [tradCurrency, setTradCurrency] = useState("");
  const [cryptoCurrency, setCryptoCurrency] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [anyOutofStock, setanyOutOfStock] = useState(false);

  const fetchOutOfStock = useCallback(async () => {
    try {
      console.log("above templ ....");
      console.log(Cart);
      if (Cart.CartItems.length === 0) {
        let tempCartList = [];
        console.log("above templ ....");
        console.log(Cart.CartItems);
        tempCartList = Cart.CartItems.map((item) => {
          return { product_id: item.id };
        });
        console.log(tempCartList);
        const OutOfStockQuery = JSON.stringify(tempCartList);
        const response = await fetch(OutOfStockURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
            "Content-Length": OutOfStockQuery.length,
            Host: Host,
          },
          body: OutOfStockQuery,
        });
        console.log(response);
        if (!response.ok) {
          throw new Error("Response is not ok");
        }
        const data = await response.json();
        console.log(data);
        dispatch(cartActions.OutOfStockHandle({ outOfStockItems: data }));
      }
      setIsLoading(false);
    } catch (error) {}
  }, []);

  async function HandlePayInCrypto() {
    if (UserToken.token === "") {
      history.push({
        pathname: "/logInOrSignUp",
        state: { payMethod: "crypto" },
      });
    } else {
      history.push("/");
    }
  }
  async function HandlePayInTrad() {
    if (UserToken.token === "") {
      history.push({
        pathname: "/logInOrSignUp",
        state: { payMethod: "trad" },
      });
    } else {
      history.push("/");
    }
  }

  useEffect(() => {
    if (initialLoad) {
      fetchOutOfStock();
      initialLoad = false;
    }

    let tempCartList = [];
    tempCartList = Cart.CartItems.map((item) => {
      if (item.OutOfStock === true) {
        setanyOutOfStock(true);
      }
      return (
        <CartRow
          OutOfStock={item.OutOfStock === true}
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
    <div className="MyCartPageParentDiv">
      {isLoading === false ? (
        <div className="container-lg paddingMyCart">
          <h1 className="MyCartTitle">#MyCart</h1>
          {anyOutofStock === true && (
            <div className="OutOfStockDiv">
              <p className="OutOfStockDivParagraph">
                items in red color are out of stock. Please remove these item.
              </p>
            </div>
          )}
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
                    <PaymentButton
                      HandleClick={HandlePayInTrad}
                      Currency={tradCurrency}
                    />
                  </div>
                </div>
                <div className="col-md-4 align-self-center">
                  {" "}
                  <div className="d-flex justify-content-center">-or-</div>
                </div>
                <div className="col-md-4 align-self-center">
                  <div className="d-flex justify-content-center PaymentButtonPadding">
                    <PaymentButton
                      HandleClick={HandlePayInCrypto}
                      Currency={cryptoCurrency}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingImage Show={!isLoading} />
      )}
      <div className="CartFooter">
        <h1 className="MyCartFooterHeading">You are a change-maker!</h1>
      </div>
    </div>
  );
}

export default MyCart;
