import "./ShippingAddressComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useDispatch } from "react-redux";
import { useRef,useMemo } from "react";
import { useHistory } from "react-router-dom";
import { ShippingAddressSliceActions } from "../Store/ShippingAddressSlice";

function ShippingAddressComponent(props) {
  const PaymentCart = useMemo(
    () => JSON.parse(localStorage.getItem("Paymentcart")),
    [localStorage.getItem("Paymentcart")]
  );
  const PaymentMethod = useMemo(
    () => localStorage.getItem("Paymentmethod"),
    [localStorage.getItem("Paymentmethod")]
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const countryInputRef = useRef();
  const stateInputRef = useRef();
  const cityInputRef = useRef();
  const streedAddressXInputRef = useRef();
  const streedAddressYInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const pincodeInputRef = useRef();

  async function handleShippingSubmit(event) {
    const streetAddress =
      streedAddressXInputRef.current.value.trim() +
      streedAddressYInputRef.current.value.trim();
    event.preventDefault();
    if (
      countryInputRef.current.value.trim().length !== 0 &&
      stateInputRef.current.value.trim().length !== 0 &&
      streetAddress.length !== 0 &&
      cityInputRef.current.value.trim().length !== 0 &&
      phoneNumberInputRef.current.value.trim().length !== 0 &&
      pincodeInputRef.current.value.trim().length !== 0
    ) {
      dispatch(
        ShippingAddressSliceActions.addshippingAddress({
          country: countryInputRef.current.value,
          state: stateInputRef.current.value,
          city: cityInputRef.current.value,
          streetAddress: streetAddress,
          phoneNumber: phoneNumberInputRef.current.value,
          pincode: pincodeInputRef.current.value,
        })
      );

      history.push("/billingAddress");
    }
  }

  return (
    <div
      className="divOfShippingAddressPage"
      style={{
        display: "block",
        background: `url('${process.env.PUBLIC_URL}/shippingBackground.jpg')`,
      }}
    >
      <div className="container-lg shippingPaddingContainer">
        <div className="d-flex justify-content-center">
          <h1 className="checkoutHeading">Checkout</h1>
        </div>
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="d-flex justify-content-center">
              <h1 className="shippingHeading">Shipping Address</h1>
            </div>
            <form onSubmit={handleShippingSubmit}>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input
                  ref={countryInputRef}
                  className="shippingAddressField"
                  placeholder="country"
                />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input
                  ref={stateInputRef}
                  className="shippingAddressField"
                  placeholder="state"
                />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input
                  ref={cityInputRef}
                  className="shippingAddressField"
                  placeholder="city"
                />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input
                  ref={streedAddressXInputRef}
                  className="shippingAddressField"
                  placeholder="Street Address Line 1"
                />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input
                  ref={streedAddressYInputRef}
                  className="shippingAddressField"
                  placeholder="Street Address Line 2"
                />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input
                  ref={phoneNumberInputRef}
                  className="shippingAddressField"
                  placeholder="phone number"
                />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input
                  ref={pincodeInputRef}
                  className="shippingAddressField"
                  placeholder="Pincode"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="d-flex justify-content-center">
              <h1 className="shippingHeading">Order Summary</h1>
            </div>
            <table className="tableShippingAddress">
              <tbody>
                <tr className="trShipping">
                  <th>item Subtotal</th>
                  <td className="tdShiping">{PaymentMethod === "crypto" ?PaymentCart.totalAmountCryptoPrice:PaymentCart.totalAmountTraditionalPrice}</td>
                </tr>
                <tr className="trShipping">
                  <th>Shipping</th>
                  <td className="tdShiping">14</td>
                </tr>
                <tr className="trShipping">
                  <th>Duties and Taxes</th>
                  <td className="tdShipingBeTC">Due at Customs</td>
                </tr>
                {PaymentMethod === "crypto" ? (
                  <tr className="trShipping">
                    <th>Price in Crypto Currency</th>
                    <td className="tdShipingTC">14</td>
                  </tr>
                ) : (
                  <tr className="trShipping">
                    <th>Price in Traditional Currency</th>
                    <td className="tdShipingCC">14</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="nextButton">Next</button>
        </div>
      </div>
    </div>
  );
}
export default ShippingAddressComponent;
