import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { MyOrderURL, Host } from "./constants";
import LoadingImage from "./Loading";
import OrderListComponent from "./Components/OrderListComponent";
import "./Order.css";

function MyOrder() {
  const userToken = useSelector((state) => state.userToken);
  const [isLoading, setIsLoading] = useState(true);
  const [orderList, setOrderList] = useState([]);

  const fetchOrderList = useCallback(async () => {
    try {
      const response = await fetch(MyOrderURL, {
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          Host: Host,
          Authorization: `Token ${userToken.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();
      const responseOrderList = data.results.map((item) => {
        const MonthList = [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const dateSplit = item.created_at.split("-");
        const day = dateSplit[2].split("T");
        const Month = MonthList[+dateSplit[1] - 1];
        const date = `${day[0]} ${Month}, ${dateSplit[0]}`;
        console.log(date);

        return (
          <OrderListComponent
          key={item.order_no.toUpperCase()}
            OrderNo={item.order_no.toUpperCase()}
            Date={date}
            Amount={`${item.currency} ${item.amount}`}
            Status={item.OrderStatus}
          />
        );
      });
      setOrderList(responseOrderList);
      setIsLoading(false);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchOrderList();
  }, [fetchOrderList]);

  return (
    <div>
      {isLoading === true ? (
        <LoadingImage Show={!isLoading} />
      ) : (
        <div className="MyOrdersMainDiv">
          <div className="container-lg">
            <div className="d-flex justify-content-center">
              <h2 className="MyOrderHashtag">#MyOrders</h2>
            </div>
            <div className="row justify-content-center">{orderList}</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default MyOrder;
