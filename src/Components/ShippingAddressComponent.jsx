import "./ShippingAddressComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function ShippingAddressComponent(props) {
  const dispatch = useDispatch();



  function handleShippingSubmit(event) {
    event.preventDefault();
    
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
                <input className="shippingAddressField" placeholder="country" />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input className="shippingAddressField" placeholder="state" />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input className="shippingAddressField" placeholder="city" />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input
                  className="shippingAddressField"
                  placeholder="Street Address Line 1"
                />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input
                  className="shippingAddressField"
                  placeholder="Street Address Line 2"
                />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input
                  className="shippingAddressField"
                  placeholder="phone number"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="d-flex justify-content-center">
              <h1 className="shippingHeading">Order Summary</h1>
            </div>
            <table className="tableShippingAddress">
              <tr className="trShipping">
                <th>item Subtotal</th>
                <td className="tdShiping">Alfreds Futterkiste</td>
              </tr>
              <tr className="trShipping">
                <th>Shipping</th>
                <td className="tdShiping">14</td>
              </tr>
              <tr className="trShipping">
                <th>Duties and Taxes</th>
                <td className="tdShipingBeTC">Due at Customs</td>
              </tr>
              <tr className="trShipping">
                <th>Price in Traditional Currency</th>
                <td className="tdShipingTC">14</td>
              </tr>
              <tr className="trShipping">
                <th>Price in Crypto Currency</th>
                <td className="tdShipingCC">14</td>
              </tr>
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
