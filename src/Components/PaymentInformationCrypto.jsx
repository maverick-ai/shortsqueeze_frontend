import "./PaymentInformationCrypto.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import {ETHAccountActions} from "../Store/ETHAccountSlice";
import {shortsqueezeETHAccount} from "../constants";


function PaymentInfoCryptoComponent(props) {
  const dispatch = useDispatch();
  const history =useHistory();
  const accountInputRef=useRef()

  function AddAccountAndMoveToNextPage(event){
    dispatch(ETHAccountActions.AddAccount({ accountNo:accountInputRef.current.value}));
    history.push('/pay-in-crypto-review');
  }



  return (
    <div
      className="divOfPaymentInfoCrypto"
      style={{
        display: "block",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url('${process.env.PUBLIC_URL}/PaymentInformationCrypto.jpg')`,
      }}
    >
      <div className="container-lg cryptoPaymentPaddingContainer">
        <div className="d-flex justify-content-center">
          <h1 className="checkoutHeading">How to Pay?</h1>
        </div>
        <div className="d-flex justify-content-center">
          <p className="paragraphAccountNumber">
            1)We only accept ETH (Ether) among other cryptocurrencies as a form of
          payment.To pay for your puchase, Please tranfer the required amount in ETH
            (Mainnet) to shortsqueeze wallet account no:-
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="spanAccountNumber">
            {shortsqueezeETHAccount}
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="paragraphAccountNumber secondparagraphAccountNumber">
            2)After receiving the payment. Your order status will be changed from
            payment pending to payment confirmed
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="paragraphAccountNumber secondparagraphAccountNumber">
            3)To verify your transaction, Please provide your account number of
            your wallet used in the transaction to pay for your purchase.
          </p>
        </div>
        <div className="d-flex justify-content-center paddingBottomCryptoInput">
          <input ref={accountInputRef} className="cryptoAccountPayNumber" placeholder="Account Number"/>
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={AddAccountAndMoveToNextPage} className="nextButton">Next</button>
        </div>
      </div>
    </div>
  );
}
export default PaymentInfoCryptoComponent;
