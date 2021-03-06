import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props) {
  const history = useHistory();
  const userToken = useSelector((state) => state.userToken);

  function pushToNewPage(path) {
    history.push(path);
  }

  return (
    <nav
      className="navbar navbar-light navbar-expand-lg fixed-top"
      id="mainNav"
    >
      <div className="container">
        <img
          onClick={() => {
            pushToNewPage("/");
          }}
          alt="Logo of shortsqueeze"
          className="logoImage navbar-brand"
          src={process.env.PUBLIC_URL + "/logo.png"}
          style={{ transform: "translateY(10%)", paddingRight: "3rem" }}
        />
        <i
          className="fa fa-shopping-cart moving-cart"
          aria-hidden="true"
          style={{ color: "rgb(1,1,1)" }}
          onClick={() => {
            pushToNewPage("/mycart");
          }}
        ></i>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler navbar-toggler-right"
          data-bs-target="#navbarResponsive"
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          value="Menu"
          style={{ transform: "translateY(20%)" }}
        >
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav me-auto">
            <li className="nav-item nav-link">
              <button
                className="btn btn-sm navButtons"
                onClick={() => {
                  pushToNewPage("/artisans");
                }}
              >
                artisans
              </button>
            </li>
            <li className="nav-item nav-link">
              <button
                className="btn btn-sm navButtons"
                onClick={() => {
                  pushToNewPage("/listproducts");
                }}
              >
                products
              </button>
            </li>
            <li className="nav-item nav-link">
              <button
                className="btn btn-sm navButtons"
                onClick={() => {
                  pushToNewPage("/story");
                }}
              >
                story
              </button>
            </li>
            <li className="nav-item nav-link">
              <button
                className="btn btn-sm navButtons"
                onClick={() => {
                  pushToNewPage("/support");
                }}
              >
                support
              </button>
            </li>
            <li className="nav-item nav-link">
              <button
                className="btn btn-sm navButtons"
                onClick={() => {
                  if (userToken.token === "") {
                    pushToNewPage("/logIn");
                  } else {
                    pushToNewPage("/profile");
                  }
                }}
              >
                {`${userToken.token === "" ? "log in" : "profile"}`}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
