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
          <Redirect to="/" />
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
        <Route path="/story" exact>
          <Story />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/logIn" exact>
          <LogIn />
        </Route>
        
      </Switch>
    </div>
    </Provider>
  );
}
export default App;
