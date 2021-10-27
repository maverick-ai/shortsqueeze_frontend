import "./CryptoInformation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {NFTAccountNumberActions} from "../Store/NFTAccountSlice";



function CryptoInformation(props) {
  const paymentOption = useSelector((state) => state.paymentOption);
  const dispatch = useDispatch();
  const history =useHistory();
  const NFTaccountInputRef=useRef()

  function AddNFTAccountAndMoveToNextPage(event){
    dispatch(NFTAccountNumberActions.AddAccountNFT({ NFTaccountNo:NFTaccountInputRef.current.value}));
    if (paymentOption.paymentCrypto) {
      history.push('/payment-info-crypto');
    } else {
      history("/review-payment");
    }
  }


  return (
    <div
      className="divOfShippingAddressPage"
      style={{
        display: "block",
        background: `url('${process.env.PUBLIC_URL}/EthereumImage.jpg')`,
      }}
    >
      <div className="container-lg cryptoPaddingContainer">
        <div className="d-flex justify-content-center">
          <h1 className="checkoutHeading">NFT ownership</h1>
        </div>
        <div className=" d-flex justify-content-center">
          <p className="cryptoParagraph">
            Please provide the account number of your wallet. The NFT will be
            minted based on this account number.
          </p>
        </div>
        <div className=" d-flex justify-content-center">
        <input ref={NFTaccountInputRef} className="accountNumber" placeholder="Account number" />
        </div> 
        <div className="d-flex justify-content-center">
          <button onClick={AddNFTAccountAndMoveToNextPage} className="nextButton">Next</button>
        </div>
      </div>
    </div>
  );
}
export default CryptoInformation;
