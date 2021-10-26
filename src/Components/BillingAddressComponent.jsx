import "./ShippingAddressComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Checkbox from "./Checkbox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {BillingAddressSliceActions} from "../Store/BillingAddressSlice";


function BillingAddressComponent(props) {
  const [disable,setDisable]=useState(false);
  const ShippingAddress = useSelector((state) => state.shippingAddress);
  const dispatch = useDispatch();
  const history =useHistory();
  const countryInputRef=useRef();
  const stateInputRef=useRef();
  const cityInputRef=useRef();
  const streedAddressXInputRef=useRef();
  const streedAddressYInputRef=useRef();
  const phoneNumberInputRef=useRef();
  const pincodeInputRef=useRef();



  function handleShippingSubmit(event) {
    event.preventDefault();
    if(disable){
      dispatch(BillingAddressSliceActions.addBillingAddress({
        country:ShippingAddress.country,
        state:ShippingAddress.state,
        city:ShippingAddress.city,
        streetAddress:ShippingAddress.streetAddress,
        phoneNumber:ShippingAddress.phoneNumber,
        pincode:ShippingAddress.pincode,
      }));
    }else{
      const streetAddress=streedAddressXInputRef.current.value.trim()+streedAddressYInputRef.current.value.trim();

      dispatch(ShippingAddressSliceActions.addshippingAddress({
        country:countryInputRef.current.value,
        state:stateInputRef.current.value,
        city:cityInputRef.current.value,
        streetAddress:streetAddress,
        phoneNumber:phoneNumberInputRef.current.value,
        pincode:pincodeInputRef.current.value,
      }));

    }

    history();


  }

  function onTick(){
    setDisable(prev=>!prev);
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
              <h1 className="shippingHeading">Billing Address</h1>
            </div>
            <div className="d-flex justify-content-center">
            <p >Is the Billing addres same as shipping address ?</p>
            </div> 
            <div className="d-flex justify-content-center">
            <p style={{"padding":0,}}>(Tick the box below)</p>
            </div> 
            <div className="d-flex justify-content-center">
            <Checkbox OnTick={onTick}/>   
            </div> 
            <form onSubmit={handleShippingSubmit}>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input ref={countryInputRef} className="shippingAddressField" placeholder="country" disabled={disable}/>
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input ref={stateInputRef} className="shippingAddressField" placeholder="state" disabled={disable}/>
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input ref={cityInputRef} className="shippingAddressField" placeholder="city" disabled={disable}/>
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input ref={streedAddressXInputRef}
                  className="shippingAddressField"
                  placeholder="Street Address Line 1"
                  disabled={disable}
                />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input ref={streedAddressYInputRef}
                  className="shippingAddressField"
                  placeholder="Street Address Line 2"
                  disabled={disable}
                />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input ref={phoneNumberInputRef}
                  className="shippingAddressField"
                  placeholder="phone number"
                  disabled={disable}
                />
              </div>
              <div className="addressFieldMargin d-flex justify-content-center">
                <input ref={pincodeInputRef}
                  className="shippingAddressField"
                  placeholder="Pincode"
                  disabled={disable}
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
export default BillingAddressComponent;
