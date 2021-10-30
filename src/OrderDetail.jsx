import OrderDetailComponent from "./Components/OrdeDetailComponent";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { OrderDetailBaseURL,Host } from "./constants";
import { useCallback } from "react";
import "./OrderDetail.css";
import LoadingImage from "./Loading";

function OrderDetail() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState();
  const [order, setOrder] = useState();

  const fetchOrder = useCallback(async () => {
    try {
      const response = await fetch(OrderDetailBaseURL + params.orderId + "/", {
        headers:{
            'Accept':'*/*',
            'Accept-Encoding':'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Host':Host,
            "Authorization":"Token 2a0c7208ddf9c0dc14cebf2d42ea0af9a8162670"
          },
      });
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();

      setIsLoading(false);
      setOrder(
        <OrderDetailComponent
        OrderNo={data.order_no}
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
