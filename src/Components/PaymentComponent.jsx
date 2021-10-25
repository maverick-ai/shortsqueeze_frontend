import "./PaymentComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function PaymentComponent(props) {
  return (
    <div
      className="divOfShippingAddressPage"
      style={{
        display: "block",
        background: `url('${process.env.PUBLIC_URL}/payment.jpg')`,
      }}
    >
      <div className="container-lg shippingPaddingContainer">
        <div className="d-flex justify-content-center">
          <h1 className="checkoutHeading">Order Review</h1>
        </div>
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="d-flex justify-content-center">
              <h1 className="shippingHeading">Shipping Address</h1>
            </div>
            <table className="tableShippingAddress">
              <tr className="trShipping">
                <th>Country</th>
                <td className="tdShiping">Alfreds Futterkiste</td>
              </tr>
              <tr className="trShipping">
                <th>State</th>
                <td className="tdShiping">14</td>
              </tr>
              <tr className="trShipping">
                <th>City</th>
                <td className="tdShiping">Due at Customs</td>
              </tr>
              <tr className="trShipping">
                <th>Street Address</th>
                <td className="tdShiping">14</td>
              </tr>
              <tr className="trShipping">
                <th>Pincode</th>
                <td className="tdShiping">14</td>
              </tr>
            </table>
            <div className="d-flex justify-content-center">
              <h1 className="shippingHeading">Billing Address</h1>
            </div>
            <table className="tableShippingAddress">
              <tr className="trShipping">
                <th>Country</th>
                <td className="tdShiping">Alfreds Futterkiste</td>
              </tr>
              <tr className="trShipping">
                <th>State</th>
                <td className="tdShiping">14</td>
              </tr>
              <tr className="trShipping">
                <th>City</th>
                <td className="tdShiping">ftghnustoms</td>
              </tr>
              <tr className="trShipping">
                <th>Street Address</th>
                <td className="tdShiping">th14</td>
              </tr>
              <tr className="trShipping">
                <th>Pincode</th>
                <td className="tdShiping">ftghn14</td>
              </tr>
            </table>
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
