import "./PaymentComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import {PaymentServerURL,Host,PaymentVerifyURL} from "../constants";



function PaymentComponent(props) {
  const history = useHistory();
  const ShippingAddress = useSelector((state) => state.shippingAddress);
  const BillingAddress = useSelector((state) => state.billingAddress);
  const userToken = useSelector((state) => state.userToken);
  const [cartItems, setCartItems] = useState([]);
  const PaymentCart = useMemo(
    () => JSON.parse(localStorage.getItem("Paymentcart")),
    [localStorage.getItem("Paymentcart")]
  );

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
     document.body.appendChild(script);
   });
};

  async function VerifyPayment(razorpay_payment_id,razorpay_order_id,razorpay_signature,razorpayOrderId,orderNo){
    const paymentVerificationQuery = JSON.stringify({
      razorpayOrderId:razorpayOrderId,
      RPI:razorpay_payment_id,
      ROI:razorpay_order_id,
      RS:razorpay_signature,
      Valkyrie:orderNo
  });

    
    const response =await fetch(PaymentVerifyURL,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Content-Length": paymentVerificationQuery.length,
        Host: Host,
        "Authorization":`Token ${userToken.token}`,
      },
      body: paymentVerificationQuery,
    });

    const jsonResponse =await response.json();


    if(jsonResponse.order_status==="Order Placed"){
      history.replace(`/orderconfirm/${orderNo}`);

    }
    else{
      history.replace(`/paymentfailed/${orderNo}`);
    }


  }



  async function PayNow(){
    let productsList=PaymentCart.CartItems.map((item)=>{

      return {
        product_id:item['id'],
        quantity:item['quantity']
      }

    });

    const paymentQuery = JSON.stringify({
      products:productsList,
      currency:PaymentCart.traditionalCurrency,
      shippingAddress:{
          country:ShippingAddress.country,
          state:ShippingAddress.state,
          city:ShippingAddress.city,
          streetAddress:ShippingAddress.streetAddress,
          phoneNumber:ShippingAddress.phoneNumber,
          pincode:ShippingAddress.pincode
      },
      billingAddress:{
          country:BillingAddress.country,
          state:BillingAddress.state,
          city:BillingAddress.city,
          streetAddress:BillingAddress.streetAddress,
          phoneNumber:BillingAddress.phoneNumber,
          pincode:BillingAddress.pincode
      }
  });
    const response =await fetch(PaymentServerURL,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Content-Length": paymentQuery.length,
        Host: Host,
        "Authorization":`Token ${userToken.token}`
      },
      body: paymentQuery,
    });

    if(response.ok){
    const jsonResponse =await response.json();
    
    if(jsonResponse['order_status']=="Success"){

      const options = {
        key: "rzp_live_BnFipKxhOlsrQx",
        currency: PaymentCart.traditionalCurrency,
        amount: parseFloat(PaymentCart.totalAmountTraditionalPrice)*100,
        name: "SHORTSQUEEZE PRIVATE LIMITED",
        description: "Payment for Order",
        image:"https://shortsqueeze.sgp1.cdn.digitaloceanspaces.com/shortsqueeze/S.png",
        order_id: jsonResponse['order_id_server'],
        handler: function (response) {
          VerifyPayment(response.razorpay_payment_id,response.razorpay_order_id,response.razorpay_signature,jsonResponse['order_id_server'],jsonResponse['order_no']);
        },
        prefill: {
          name: `${jsonResponse.first_name} ${jsonResponse.last_name}`,
          email: jsonResponse.email,
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  }
  }

  useEffect(()=>{
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  },[]);

  useEffect(() => {
    const temp = PaymentCart.CartItems.map((item) => {

      return (
        <tr key={item.id} className="trShipping">
          <th>item</th>
          <td className="tdShiping">{item.title} <span className="qunatitySpan">x {item.quantity}</span></td>
        </tr>
      );
    });

    setCartItems(temp);
  }, [PaymentCart]);

  return (
    <div
      className="divOfShippingAddressPage"
      style={{
        display: "block",
        background: `url('${process.env.PUBLIC_URL}/payment.jpg')`,
      }}
    >
      <div className="container-lg paymentComponentPaddingContainer">
        <div className="d-flex justify-content-center">
          <h1 className="checkoutHeading">Order Review</h1>
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
                  <td className="tdShiping">{ShippingAddress.country}</td>
                </tr>
                <tr className="trShipping">
                  <th>State</th>
                  <td className="tdShiping">{ShippingAddress.state}</td>
                </tr>
                <tr className="trShipping">
                  <th>City</th>
                  <td className="tdShiping">{ShippingAddress.city}</td>
                </tr>
                <tr className="trShipping">
                  <th>Street Address</th>
                  <td className="tdShiping">{ShippingAddress.streetAddress}</td>
                </tr>
                <tr className="trShipping">
                  <th>Pincode</th>
                  <td className="tdShiping">{ShippingAddress.pincode}</td>
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
                  <td className="tdShiping">{BillingAddress.country}</td>
                </tr>
                <tr className="trShipping">
                  <th>State</th>
                  <td className="tdShiping">{BillingAddress.state}</td>
                </tr>
                <tr className="trShipping">
                  <th>City</th>
                  <td className="tdShiping">{BillingAddress.city}</td>
                </tr>
                <tr className="trShipping">
                  <th>Street Address</th>
                  <td className="tdShiping">{BillingAddress.streetAddress}</td>
                </tr>
                <tr className="trShipping">
                  <th>Pincode</th>
                  <td className="tdShiping">{BillingAddress.pincode}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="d-flex justify-content-center">
              <h1 className="shippingHeading">Order Summary</h1>
            </div>
            <table className="tableShippingAddress">
              <tbody>
                {cartItems}
                <tr className="trShipping">
                  <th>item Subtotal</th>
                  <td className="tdShiping">{PaymentCart.traditionalCurrency} {PaymentCart.totalAmountTraditionalPrice}</td>
                </tr>
                <tr className="trShipping">
                  <th>Shipping</th>
                  <td className="tdShiping">{`${
                    PaymentCart.traditionalCurrency === "INR"
                      ? "Free"
                      : " 15 USD"
                  }`}</td>
                </tr>
                {PaymentCart.traditionalCurrency !== "INR" &&
                <tr className="trShipping">
                  <th>Duties and Taxes</th>
                  <td className="tdShipingBeTC">Due at Customs</td>
                </tr>}
                <tr className="trShipping">
                  <th>Total Price</th>
                  <td className="tdShipingTC">{`${
                    PaymentCart.traditionalCurrency
                  } ${
                    PaymentCart.traditionalCurrency === "INR"
                      ? +PaymentCart.totalAmountTraditionalPrice
                      : +PaymentCart.totalAmountTraditionalPrice + 15
                  }`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="nextButton" onClick={PayNow}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}
export default PaymentComponent;
