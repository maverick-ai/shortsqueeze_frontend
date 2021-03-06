import Navbar from "./navbar";
import Cover from "./cover";
import LoadingImage from "./Loading";
import LogIn from "./LogIn";
import { useState } from "react";
import "./page.css";
import { Route, Redirect, Switch } from "react-router-dom";
import ListProducts from "./ListProduct";
import ProductDetail from "./ProductDetail";
import { Provider } from 'react-redux';
import store from './Store/index';
import TestCarousel from "./test";
import MyCart from "./MyCart";
import Story from "./Story";
import Support from "./Support";
import Profile from "./Profile";
import ShippingAddress from "./ShippingAddress";
import BillingAddress from "./BillingAddress";
import Payment from "./Payment";
import PayInCryptoComponent from "./Components/PayInCryptoComponent";
import CryptoInformation from "./Components/CryptoInformation";
import PaymentInfoCryptoComponent from "./Components/PaymentInformationCrypto";
import ArtisitList from "./ArtistList";
import MyOrder from "./Order";
import OrderDetail from "./OrderDetail";
import LogInOrSignUp from "./LogInOrSignUp";
import LogInCart from "./LogInCart";
import RegistrationCart from "./RegistrationCart";
import Registration from "./Registration";


function App() {
  const [isShow, setIsShow] = useState(false);

  function LoadingScreenState() {
    setIsShow(true);
  }

  return (
    <Provider store={store}>
    <div className="selection">     
      <Navbar />
      <Switch>
        <Route path="/" exact>
        <LoadingImage Show={isShow} />
          <Cover LoadEvent={LoadingScreenState} Show={isShow} />
        </Route>
        <Route path="/home" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/test123" exact>
          <TestCarousel />
        </Route>
        <Route path="/artisans" exact>
          <ArtisitList />
        </Route>
        <Route path="/listproducts" exact>
          <ListProducts />
        </Route>
        <Route path="/product/:productId" exact>
          <ProductDetail />
        </Route>
        <Route path="/mycart" exact>
          <MyCart />
        </Route>
        <Route path="/shippingAddress" exact>
          <ShippingAddress />
        </Route>
        <Route path="/billingAddress" exact>
          <BillingAddress />
        </Route>
        <Route path="/story" exact>
          <Story />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/logIn" exact>
          <LogIn />
        </Route>
        <Route path="/logInCart" exact>
          <LogInCart />
        </Route>
        <Route path="/RegistrationCart" exact>
          <RegistrationCart />
        </Route>
        <Route path="/Registration" exact>
          <Registration />
        </Route>
        <Route path="/logInOrSignUp" exact>
          <LogInOrSignUp />
        </Route>
        <Route path="/review-payment" exact>
          <Payment />
        </Route>
        <Route path="/pay-in-crypto-review" exact>
          <PayInCryptoComponent />
        </Route>
        <Route path="/crypto-information" exact>
          <CryptoInformation />
        </Route>
        <Route path="/payment-info-crypto" exact>
          <PaymentInfoCryptoComponent />
        </Route>
        <Route path="/my-orders" exact>
          <MyOrder />
        </Route>
        <Route path="/order/:orderId" exact>
          <OrderDetail />
        </Route>
      </Switch>
    </div>
    </Provider>
  );
}
export default App;
