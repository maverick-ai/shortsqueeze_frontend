import "./OrdeDetailComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useEffect, useState } from "react";

function PaymentFailedComponent(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const prods = props.products.map((item) => (
      <tr className="trShipping" key={item.product_id}>
        <th>{`${item.product_name}`}</th>
        <td className="tdShiping">{`x${item.quantityOfItem}`}</td>
      </tr>
    ));

    setProductList(prods);
  }, [props.products]);

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
          <h1 className="orderNoHeading">{props.OrderNo}</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h1 className="shippingHeading" style={{"color":"red"}}>(Payment Pending)</h1>
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
                <td className="tdShiping">{props.shippingAddress.country}</td>
              </tr>
              <tr className="trShipping">
                <th>State</th>
                <td className="tdShiping">{props.shippingAddress.state}</td>
              </tr>
              <tr className="trShipping">
                <th>City</th>
                <td className="tdShiping">{props.shippingAddress.city}</td>
              </tr>
              <tr className="trShipping">
                <th>Street Address</th>
                <td className="tdShiping">{props.shippingAddress.streetAddress}</td>
              </tr>
              <tr className="trShipping">
                <th>Pincode</th>
                <td className="tdShiping">{props.shippingAddress.pincode}</td>
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
                <td className="tdShiping">{props.billingAddress.country}</td>
              </tr>
              <tr className="trShipping">
                <th>State</th>
                <td className="tdShiping">{props.billingAddress.state}</td>
              </tr>
              <tr className="trShipping">
                <th>City</th>
                <td className="tdShiping">{props.billingAddress.city}</td>
              </tr>
              <tr className="trShipping">
                <th>Street Address</th>
                <td className="tdShiping">{props.billingAddress.streetAddress}</td>
              </tr>
              <tr className="trShipping">
                <th>Pincode</th>
                <td className="tdShiping">{props.billingAddress.pincode}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="d-flex justify-content-center">
              <h1 className="shippingHeading">Products</h1>
            </div>
            <table className="tableShippingAddress">
              <tbody>
              {productList}
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
              <h1 className="shippingHeading">Final Amount</h1>
            </div>
            <table className="tableShippingAddress">
              <tbody>
              <tr className="trShipping">
                <th>Duties and Taxes for the physical product</th>
                <td className="tdShipingBeTC">Due at Customs</td>
              </tr>
              <tr className="trShipping">
                <th> Total Amount</th>
                <td className="tdShipingCC">{`${props.currency} ${props.amount}`}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PaymentFailedComponent;
