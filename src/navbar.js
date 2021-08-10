import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./styles.css";

function Navbar(props) {
  return (
    <nav
      className="navbar navbar-light navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
          <img
          onClick={props.logo} 
            alt="Logo of shortsqueeze"
            className="logoImage navbar-brand"
            src={process.env.PUBLIC_URL + "/logo.png"}
            style={{ transform: "translateY(10%)", paddingRight:"3rem"}}
          />
        <a className="ml-auto" href="#">
          <i
            className="fa fa-shopping-cart moving-cart ml-auto"
            aria-hidden="true"  
            style={{ color: "rgb(1,1,1)"}}
          ></i>
        </a>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler navbar-toggler-right"
          data-bs-target="#navbarResponsive"
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          value="Menu"
          style={{  transform:"translateY(20%)"}}
        >
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav me-auto">
            <li className="nav-item nav-link">
              <button
                className="btn btn-sm navButtons"
                onClick={props.artisans}
              >
                artisans
              </button>
            </li>
            <li className="nav-item nav-link">
              <button
                className="btn btn-sm navButtons"
                onClick={props.products}
              >
                products
              </button>
            </li>
            <li className="nav-item nav-link">
              <button className="btn btn-sm navButtons" onClick={props.story}>
                story
              </button>
            </li>
            <li className="nav-item nav-link">
              <button className="btn btn-sm navButtons" onClick={props.support}>
                support
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
