import OrderDetailComponent from "./Components/OrdeDetailComponent";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { OrderDetailBaseURL,Host } from "./constants";
import { useCallback } from "react";
import "./OrderDetail.css";
import LoadingImage from "./Loading";

function OrderDetail() {
  const params = useParams();
  const userToken = useSelector((state) => state.userToken);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState();

  const fetchOrder = useCallback(async () => {
    try {
      const response = await fetch(OrderDetailBaseURL + params.orderId + "/", {
        headers:{
            'Accept':'*/*',
            'Accept-Encoding':'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Host':Host,
            'Authorization': `Token ${userToken.token}`
          },
      });
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();

      setIsLoading(false);
      setOrder(
        <OrderDetailComponent
        OrderNo={data.order_no.toUpperCase()}
          shippingAddress={data.shippingAddress}
          billingAddress={data.billingAddress}
          products={data.products}
          IsOrderCrypto={data.IsOrderCrypto}
          ETHWaaletAccount={data.ETHWaaletAccount}
          NFTAccountNumber={data.NFTAccountNumber}
          shortsqueezeETHAccount={data.shortsqueezeETHAccount}
          currency={data.currency}
          amount={data.amount}
        />
      );
    } catch (error) {}
  }, [params.orderId]);

  useEffect(() => {fetchOrder()}, [fetchOrder]);

  return (
    <div>
      <div className={`MainDiv ${isLoading === false ? "PaddingTopDivOrder" : ""}`}>
        {isLoading === false ? order : <LoadingImage Show={!isLoading} />}
        {/* <LoadingImage Show={false} /> */}
      </div>
    </div>
  );
}
export default OrderDetail;
