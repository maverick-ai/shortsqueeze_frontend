import { useEffect } from "react";
import OrderListComponent from "./Components/OrderListComponent";
import "./Order.css";

function MyOrder() {
  useEffect(() => {}, []);

  return (
    <div className="MyOrdersMainDiv">
      <div className="container-lg">
        <div className="d-flex justify-content-center">
          <h2 className="MyOrderHashtag">#MyOrders</h2>
        </div>

        <div className="row justify-content-center">
          <OrderListComponent
            OrderNo="354566"
            Date="4Fev,2021"
            Amount="ETH 2534"
          />
          <OrderListComponent
            OrderNo="354566"
            Date="4Fev,2021"
            Amount="ETH 2534"
          />
          <OrderListComponent
            OrderNo="354566"
            Date="4Fev,2021"
            Amount="ETH 2534"
          />
          <OrderListComponent
            OrderNo="354566"
            Date="4Fev,2021"
            Amount="ETH 2534"
          />
          <OrderListComponent
            OrderNo="354566"
            Date="4Fev,2021"
            Amount="ETH 2534"
          />
          <OrderListComponent
            OrderNo="354566"
            Date="4Fev,2021"
            Amount="ETH 2534"
          />
          <OrderListComponent
            OrderNo="354566"
            Date="4Fev,2021"
            Amount="ETH 2534"
          />
        </div>
      </div>
    </div>
  );
}
export default MyOrder;
