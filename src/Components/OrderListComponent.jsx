import "./OrderListComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function OrderListComponent(props) {
  function HandleMoreDetail() {}

  return (
      <div className="col-lg-4 OrderListComponentDiv">
        <h2 className="OrderNoHeading">Order No.</h2>
        <h5 className="OrderNumber">{props.OrderNo}</h5>
        <table className="tableShippingAddress">
          <tbody>
            <tr className="trShipping">
              <th>Order Date</th>
              <td className="tdShiping">4 Feb,2021</td>
            </tr>
            <tr className="trShipping">
              <th>Ordered Amount</th>
              <td className="tdShiping">ETH 34</td>
            </tr>
            <tr className="trShipping">
              <th>Status</th>
              <td className="tdShiping">Preparing</td>
            </tr>
          </tbody>
        </table>
        <div className="OrderMoreDetail d-flex justify-content-center">
          <button
            onClick={HandleMoreDetail}
            className="btn btn-md MoreDetailOrder"
          >
            More details ...
          </button>
        </div>
      </div>
  );
}
export default OrderListComponent;
