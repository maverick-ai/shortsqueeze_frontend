import Navbar from "./navbar";
import Cover from "./cover";
import LoadingImage from "./Loading";
import LogIn from "./LogIn";
import { useState } from "react";
import "./page.css";
import { Route, Redirect, Switch } from "react-router-dom";
import ListProducts from "./ListProduct";
import ProductDetail from "./ProductDetail";

function App() {
  const [isShow, setIsShow] = useState(false);

  function LoadingScreenState() {
    setIsShow(true);
  }

  return (
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
        <Route path="/artisans" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/listproducts" exact>
          <ListProducts />
        </Route>
        <Route path="/product/:productId" exact>
          <ProductDetail />
        </Route>
        <Route path="/story" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/support" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/logIn" exact>
          <LogIn />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
