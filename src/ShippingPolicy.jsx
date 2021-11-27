import "./Support.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useHistory } from "react-router";


function ShippingPolicyPage() {
  const history=useHistory();


  return (
    <div>
      <div className="SupportPaddingTop">
        <div className="container-lg SupportHeadingContainer">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <h1 className="SupportHeading d-flex justify-content-center">
                Shipping Policy
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
            shortsqueeze PVT. LTD. ("we" and "us") is the operator of
            (https://shortsqueeze.space) ("Website"). By placing an order
            through this Website you will be agreeing to the terms below. These
            are provided to ensure both parties are aware of and agree upon this
            arrangement to mutually protect and set expectations on our service.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            1. General
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Subject to stock availability. We try to maintain accurate stock
            counts on our website but from time-to-time there may be a stock
            discrepancy and we will not be able to fulfill all your items at
            time of purchase. In this instance, we will fulfill the available
            products to you, and contact you about whether you would prefer to
            await restocking of the backordered item or if you would prefer for
            us to process a refund.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            2. Shipping Costs
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Shipping costs are calculated during checkout based on weight,
            dimensions and destination of the items in the order. Payment for
            shipping will be collected with the purchase. This price will be the
            final price for shipping cost to the customer.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            3. Returns
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            3.1 Return Due To Change Of Mind
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            shortsqueeze PVT. LTD. will happily accept returns due to change of
            mind as long as a request to return is received by us within 15 days
            of receipt of item and are returned to us in original packaging,
            unused and in resellable condition. Return shipping will be paid at
            the customers expense and will be required to arrange their own
            shipping. Once returns are received and accepted, refunds will be
            processed to store credit for a future purchase. We will notify you
            once this has been completed through email. (shortsqueeze PVT. LTD.)
            will refund the value of the goods returned but will NOT refund the
            value of any shipping paid.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            3.2 Warranty Returns
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            shortsqueeze PVT. LTD. will happily honor any valid warranty claims,
            provided a claim is submitted within 90 days of receipt of items.
            Customers will be required to pre-pay the return shipping, however
            we will reimburse you upon successful warranty claim. Upon return
            receipt of items for warranty claim, you can expect shortsqueeze
            PVT. LTD. to process your warranty claim within 7 days. Once
            warranty claim is confirmed, you will receive the choice of: (a)
            refund to your payment method (b) a refund in store credit (c) a
            replacement item sent to you (if stock is available)
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            4. Delivery Terms
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            4.1 Transit Time Domestically
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            In general, domestic shipments are in transit for 2 - 7 days
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            4.2 Transit time Internationally
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Generally, orders shipped internationally are in transit for 4 - 22
            days. This varies greatly depending on the courier you have
            selected. We are able to offer a more specific estimate when you are
            choosing your courier at checkout.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            4.3 Dispatch Time
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Orders are usually dispatched within 2 business days of payment of
            order Our warehouse operates on Monday - Friday during standard
            business hours, except on national holidays at which time the
            warehouse will be closed. In these instances, we take steps to
            ensure shipment delays will be kept to a minimum.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            4.4 Change Of Delivery Address
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            For change of delivery address requests, we are able to change the
            address at any time before the order has been dispatched.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            4.5 P.O. Box Shipping
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            shortsqueeze PVT. LTD. will ship to P.O. box addresses using postal
            services only. We are unable to offer couriers services to these
            locations.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            4.6 Military Address Shipping
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            We are able to ship to military addresses using USPS in USA , Indian
            Postal Service in Inida and for other countries their respective
            national courier service. We are unable to offer this service using
            courier services.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            4.7 Items Out Of Stock
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            If an item is out of stock, we will dispatch the in-stock items
            immediately and send the remaining items once they return to stock.
            Or, we will cancel and refund the out-of-stock items and dispatch
            the rest of the order.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            4.8 Delivery Time Exceeded
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            If delivery time has exceeded the forecasted time, please contact us
            so that we can conduct an investigation.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            5. Tracking Notifications
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Upon dispatch, customers will receive a tracking link from which
            they will be able to follow the progress of their shipment based on
            the latest updates made available by the shipping provider.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            6. Parcels Damaged In Transit
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            If you find a parcel is damaged in-transit, if possible, please
            reject the parcel from the courier and get in touch with our
            customer service. If the parcel has been delivered without you being
            present, please contact customer service with next steps.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            7. Duties and Taxes
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            7.1 Sales Tax
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Sales tax has already been applied to the price of the goods as
            displayed on the website
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            7.2 Import Duties and Taxes
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Import duties and taxes for international shipments may be liable to
            be paid upon arrival in destination country. This varies by country,
            and shortsqueeze PVT. LTD. encourage you to be aware of these
            potential costs before placing an order with us. If you refuse to to
            pay duties and taxes upon arrival at your destination country, the
            goods will be returned to shortsqueeze PVT. LTD. at the customers
            expense, and the customer will receive a refund for the value of
            goods paid, minus the cost of the return shipping. The cost of the
            initial shipping will not be refunded.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            8. Cancellations
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            If you change your mind before you have received your order, we are
            able to accept cancellations at any time before the order has been
            dispatched. If an order has already been dispatched, please refer to
            our refund policy.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            9. Insurance
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            Parcels are insured for loss and damage up to the value as stated by
            the courier.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            9.1 Process for parcel damaged in-transit
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            We will process a refund or replacement as soon as the courier has
            completed their investigation into the claim.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            9.2 Process for parcel lost in-transit
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            We will process a refund or replacement as soon as the courier has
            conducted an investigation and deemed the parcel lost.
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            10. Customer service
          </h2>
          <h2 className="SupportSubSubHeading d-flex justify-content-center">
            For all customer service enquiries, please email us at
            hi@shortsqueeze.space
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
                    history.push("/terms");
                  }}
                >
                  Terms and Conditions
                </u>
              </p>
              <p className="ContactUsParagraph">
                <u
                  onClick={() => {
                    history.push( "/privacy");
                  }}
                >
                  Privacy Policy
                </u>
              </p>
              <p className="ContactUsParagraph">
                <u
                  onClick={() => {
                    history.push("/refund");
                  }}
                >
                  Refunds/Cancellations
                </u>
              </p>
              <p className="ContactUsParagraph">
                <u>Shipping policy</u>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShippingPolicyPage;
