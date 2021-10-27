import { useState,useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./DropDown.css";


function DropDownCurrency(props) {
  const [dropdownItem,setDropdownItem]= useState(props.CurrentQuantity);
  const [dropdownItemList,setDropdownItemList]= useState([]);


  function dropdownOnSelect(eventKey, event) {
        props.onSelect(eventKey);
      setDropdownItem(eventKey);
  }

  useEffect(()=>{
    let itmemList=[];
    for(let i=0; i<props.currencyList.length;i++){
      itmemList.push(<Dropdown.Item key={i} eventKey={`${props.currencyList[i]}`} className="insideMenu">{`${props.currencyList[i]}`}</Dropdown.Item>);
    }
    setDropdownItemList(itmemList);
  },[]);

  return (
    <div>
    <Dropdown onSelect={dropdownOnSelect} className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true" childBsPrefix="dropdownConfigs" className="dropdownConfigs">
      Currency {dropdownItem}
    </Dropdown.Toggle>
    <Dropdown.Menu className="menuItems">
      {dropdownItemList}
    </Dropdown.Menu>
  </Dropdown>
  </div>
  );
}

export default DropDownCurrency;
