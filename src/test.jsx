import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Dropdown from "react-bootstrap/Dropdown";
import "./test.css";


function TestCarousel() {
  const [dropdownItem,setDropdownItem]= useState("1");
  const [dropdownItemList,setDropdownItemList]= useState("1");


  function dropdownOnSelect(eventKey, event) {
      setDropdownItem(eventKey);
  }

  useEffect(()=>{
    let itmemList=[];
    for(let i=0;i<5;i++){
      itmemList.push(<Dropdown.Item key={i} eventKey={`${i+1}`} className="insideMenu">{`${i+1}`}</Dropdown.Item>);
      setDropdownItemList(itmemList);
    }
  },[]);

  return (
    <div style={{"paddingTop":"100px"}}>

      <div className="row">
      <div className="col-lg-6">
      <Dropdown onSelect={dropdownOnSelect} className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true" childBsPrefix="dropdownConfigs" className="dropdownConfigs">
      {dropdownItem}
    </Dropdown.Toggle>
    <Dropdown.Menu className="menuItems">
      {dropdownItemList}
    </Dropdown.Menu>
  </Dropdown>
      </div>
      <div className="col-lg-6">
      <Dropdown onSelect={dropdownOnSelect} className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true" childBsPrefix="dropdownConfigs" className="dropdownConfigs">
      {dropdownItem}
    </Dropdown.Toggle>
    <Dropdown.Menu className="menuItems">
      {dropdownItemList}
    </Dropdown.Menu>
  </Dropdown>
  <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <span className="spanQuanityText">Quantity:</span>
            <Dropdown onSelect={dropdownOnSelect} className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true" childBsPrefix="dropdownConfigs" className="dropdownConfigs">
      {dropdownItem}
    </Dropdown.Toggle>
    <Dropdown.Menu className="menuItems">
      {dropdownItemList}
    </Dropdown.Menu>
  </Dropdown>
          </div>
            <div className="col-md-6 d-flex justify-content-center">
            <Dropdown onSelect={dropdownOnSelect} className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true" childBsPrefix="dropdownConfigs" className="dropdownConfigs">
      {dropdownItem}
    </Dropdown.Toggle>
    <Dropdown.Menu className="menuItems">
      {dropdownItemList}
    </Dropdown.Menu>
  </Dropdown>
            </div>
          </div>
      </div>
      </div>
    
  </div>
  );
}

export default TestCarousel;
