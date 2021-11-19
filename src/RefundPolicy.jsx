import "./Support.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function RefundPolicyPage() {
  return (
    <div>
      <div className="SupportPaddingTop">
        <div className="container-lg SupportHeadingContainer">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <h1 className="SupportHeading d-flex justify-content-center">
                Refund Policy
              </h1>
            </div>
            <div className="col-lg-6">
              <img
                className="SupportImage"
                alt="intersection of technology and liberal art"
                src={process.env.PUBLIC_URL + "/intersectionSign.png"}
              />
            </div>
          </div>
        </div>
        <div className="container-lg SupportSubPaddingTop">
          <h1 className="SupportSubHeading d-flex justify-content-center">
            Overview
          </h1>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Our policy lasts 15 days. If 15 days have gone by since delivery,
            unfortunately we can’t offer you a refund or exchange.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            To be eligible for a return, your item must be unused and in the
            same condition that you received it. It must also be in the original
            packaging. Several types of goods are exempt from being returned.
            Perishable goods such as food, flowers, newspapers or magazines
            cannot be returned. We also do not accept products that are intimate
            or sanitary goods, hazardous materials, or flammable liquids or
            gases.Additional non-returnable items:Gift cards, Downloadable
            software products, Some health and personal care items
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            To complete your return, we require a receipt or proof of purchase.
            Please do not send your purchase back to the manufacturer.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Refunds (if applicable)
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Once your return is received and inspected, we will send you an
            email to notify you that we have received your returned item. We
            will also notify you of the approval or rejection of your refund. If
            you are approved, then your refund will be processed, and a credit
            will automatically be applied to your credit card or original method
            of payment, within a certain amount of days.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Late or missing refunds (if applicable)
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            If you haven’t received a refund yet, first check your bank account
            again. Then contact your credit card company, it may take some time
            before your refund is officially posted. Next contact your bank.
            There is often some processing time before a refund is posted. If
            you’ve done all of this and you still have not received your refund
            yet, please contact us at hi@shortsqueeze.space. Sale items (if
            applicable) Only regular priced items may be refunded, unfortunately
            sale items cannot be refunded.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Exchanges (if applicable)
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            We only replace items if they are defective or damaged. If you need
            to exchange it for the same item, send us an email at
            hi@shortsqueeze.space and send your item to: HIG-419, E-7, Arera
            Colony, Bhopal, MP, 462016, India.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Gifts
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            If the item was marked as a gift when purchased and shipped directly
            to you, you’ll receive a gift credit for the value of your return.
            Once the returned item is received, a gift certificate will be
            mailed to you. If the item wasn’t marked as a gift when purchased,
            or the gift giver had the order shipped to themselves to give to you
            later, we will send a refund to the gift giver and he will find out
            about your return.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Shipping
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            To return your product, you should mail your product to: HIG-419,
            E-7, Arera Colony, Bhopal, MP, 462016, India. You will be
            responsible for paying for your own shipping costs for returning
            your item. Shipping costs are non-refundable. If you receive a
            refund, the cost of return shipping will be deducted from your
            refund.Depending on where you live, the time it may take for your
            exchanged product to reach you, may vary. If you are shipping an
            item over Rs.75 or 1 USD, you should consider using a trackable shipping
            service or purchasing shipping insurance. We don’t guarantee that we
            will receive your returned item.
          </h2>
        </div>
      </div>
      <div className="SupportFooter">
        <div className="container-lg">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="ContactUsHeading text-center">Contact us</h1>
              <p className="ContactUsParagraph">Email: hi@shortsqueeze.space</p>
              <p className="ContactUsParagraph">
                Address: HIG-419, Arera Colony,
              </p>
              <p className="ContactUsParagraph">
                Bhopal, Madhya Pradesh, India-462016
              </p>
              <p className="ContactUsParagraph">Phone: +91 9009576111</p>
            </div>
            <div className="col-sm-6">
              <h1 className="ContactUsHeading text-center">Terms</h1>
              <p className="ContactUsParagraph">
                <u
                  onClick={() => {
                    const newWindow = window.open(
                      "/terms",
                      "_blank",
                      "noopener,noreferrer"
                    );
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  Terms and Conditions
                </u>
              </p>
              <p className="ContactUsParagraph">
                <u onClick={() => {
                    const newWindow = window.open(
                      "/privacy",
                      "_blank",
                      "noopener,noreferrer"
                    );
                    if (newWindow) newWindow.opener = null;
                  }}>Privacy Policy</u>
              </p>
              <p className="ContactUsParagraph">
                <u
                  
                >
                  Refunds/Cancellations
                </u>
              </p>
              <p className="ContactUsParagraph">
                <u
                  onClick={() => {
                    const newWindow = window.open(
                      "/shippingPolicy",
                      "_blank",
                      "noopener,noreferrer"
                    );
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  Shipping policy
                </u>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RefundPolicyPage;
