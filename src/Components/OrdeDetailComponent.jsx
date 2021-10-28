import "./OrderDetailComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function OrderDetailComponent() {
  return (
    <div
      className="divOfOrderDetailComponent"
      style={{
        display: "block",
        background: `url('${process.env.PUBLIC_URL}/OrderDetail.jpg')`,
      }}
    >
      <div className="container-lg  OrderDetailPaddingContainer">
        <div className="d-flex justify-content-center">
          <h1 className="checkoutHeading">Order No.</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h1 className="shippingHeading">Ethereum Wallet Account Info</h1>
        </div>
        <table className="tableCryptoAddress">
          <tr className="trCrypto">
            <th>Your ETH Wallet Account Number</th>
            <td className="tdCrypto">{ETHAccount.ETHWaaletAccount}</td>
          </tr>
          <tr className="trCrypto">
            <th>Your NFT Wallet Account Number</th>
            <td className="tdCrypto">{NFTAccount.NFTAccountNumber}</td>
          </tr>
          <tr className="trCrypto">
            <th>shortsqueeze ETH Wallet Account Number</th>
            <td className="tdCrypto">{shortsqueezeETHAccount}</td>
          </tr>
        </table>
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
                <th>Duties and Taxes for the physical product</th>
                <td className="tdShipingBeTC">Due at Customs</td>
              </tr>
              <tr className="trShipping">
                <th>Price in Crypto Currency</th>
                <td className="tdShipingCC">14</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="nextButton">Place Order</button>
        </div>
        <div className="d-flex justify-content-center">
          <button className="nextButton">Go Back</button>
        </div>
      </div>
    </div>
  );
}
export default OrderDetailComponent;
