import "./CryptoInformation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function CryptoInformation(props) {
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
        <p className="cryptoFAQ">
          *We only accept ETH (Ether) among other cryptocurrencies as a form of
          payment. The NFT minted is based on the ERC721 standard.
        </p>
        </div>
        <div className=" d-flex justify-content-center">
          <p className="cryptoParagraph">
            Please provide the account number of your wallet. The NFT will be
            minted based on this account number.
          </p>
        </div>
        <div className=" d-flex justify-content-center">
        <input className="accountNumber" placeholder="Account number" />
        </div>
        
        <div className="d-flex justify-content-center">
          <button className="nextButton">Next</button>
        </div>
      </div>
    </div>
  );
}
export default CryptoInformation;
