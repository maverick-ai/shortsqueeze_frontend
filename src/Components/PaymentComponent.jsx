import "./PaymentComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";

function PaymentComponent(props) {
  const ShippingAddress = useSelector((state) => state.shippingAddress);
  const BillingAddress = useSelector((state) => state.billingAddress);
  const [cartItems, setCartItems] = useState([]);
  const PaymentCart = useMemo(
    () => JSON.parse(localStorage.getItem("Paymentcart")),
    [localStorage.getItem("Paymentcart")]
  );

  useEffect(() => {
    const temp = PaymentCart.CartItems.map((item) => {
      console.log(item.title);

      return (
        <tr key={item.id} className="trShipping">
          <th>item</th>
          <td className="tdShiping">{item.title} <span className="qunatitySpan">x {item.quantity}</span></td>
        </tr>
      );
    });

    console.log(temp);
    setCartItems(temp);
  }, [PaymentCart]);

  return (
    <div
      className="divOfShippingAddressPage"
      style={{
        display: "block",
        background: `url('${process.env.PUBLIC_URL}/payment.jpg')`,
      }}
    >
      <div className="container-lg paymentComponentPaddingContainer">
        <div className="d-flex justify-content-center">
          <h1 className="checkoutHeading">Order Review</h1>
        </div>
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="d-flex justify-content-center">
              <h1 className="shippingHeading">Shipping Address</h1>
            </div>
            <table className="tableShippingAddress">
              <tbody>
                <tr className="trShipping">
                  <th>Country</th>
                  <td className="tdShiping">{ShippingAddress.country}</td>
                </tr>
                <tr className="trShipping">
                  <th>State</th>
                  <td className="tdShiping">{ShippingAddress.state}</td>
                </tr>
                <tr className="trShipping">
                  <th>City</th>
                  <td className="tdShiping">{ShippingAddress.city}</td>
                </tr>
                <tr className="trShipping">
                  <th>Street Address</th>
                  <td className="tdShiping">{ShippingAddress.streetAddress}</td>
                </tr>
                <tr className="trShipping">
                  <th>Pincode</th>
                  <td className="tdShiping">{ShippingAddress.pincode}</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
              <h1 className="shippingHeading">Billing Address</h1>
            </div>
            <table className="tableShippingAddress">
              <tbody>
                <tr className="trShipping">
                  <th>Country</th>
                  <td className="tdShiping">{BillingAddress.country}</td>
                </tr>
                <tr className="trShipping">
                  <th>State</th>
                  <td className="tdShiping">{BillingAddress.state}</td>
                </tr>
                <tr className="trShipping">
                  <th>City</th>
                  <td className="tdShiping">{BillingAddress.city}</td>
                </tr>
                <tr className="trShipping">
                  <th>Street Address</th>
                  <td className="tdShiping">{BillingAddress.streetAddress}</td>
                </tr>
                <tr className="trShipping">
                  <th>Pincode</th>
                  <td className="tdShiping">{BillingAddress.pincode}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="d-flex justify-content-center">
              <h1 className="shippingHeading">Order Summary</h1>
            </div>
            <table className="tableShippingAddress">
              <tbody>
                {cartItems}
                <tr className="trShipping">
                  <th>item Subtotal</th>
                  <td className="tdShiping">{PaymentCart.traditionalCurrency} {PaymentCart.totalAmountTraditionalPrice}</td>
                </tr>
                <tr className="trShipping">
                  <th>Shipping</th>
                  <td className="tdShiping">{`${
                    PaymentCart.traditionalCurrency === "INR"
                      ? "Free"
                      : " 15 USD"
                  }`}</td>
                </tr>
                {PaymentCart.traditionalCurrency !== "INR" &&
                <tr className="trShipping">
                  <th>Duties and Taxes</th>
                  <td className="tdShipingBeTC">Due at Customs</td>
                </tr>}
                <tr className="trShipping">
                  <th>Total Price</th>
                  <td className="tdShipingTC">{`${
                    PaymentCart.traditionalCurrency
                  } ${
                    PaymentCart.traditionalCurrency === "INR"
                      ? +PaymentCart.totalAmountTraditionalPrice
                      : +PaymentCart.totalAmountTraditionalPrice + 15
                  }`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="nextButton">Pay Now</button>
        </div>
      </div>
    </div>
  );
}
export default PaymentComponent;
