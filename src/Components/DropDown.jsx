import { useState,useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./DropDown.css";


function DropDown(props) {
  const [dropdownItem,setDropdownItem]= useState(props.CurrentQuantity);
  const [dropdownItemList,setDropdownItemList]= useState([]);


  function dropdownOnSelect(eventKey, event) {
        props.onSelect(eventKey);
      setDropdownItem(eventKey);
  }

  useEffect(()=>{
    let itmemList=[];
    for(let i=props.MinQuantity-1;i<props.MaxQuantity;i++){
      itmemList.push(<Dropdown.Item key={i} eventKey={`${i+1}`} className="insideMenu">{`${i+1}`}</Dropdown.Item>);
      setDropdownItemList(itmemList);
    }
  },[props.MinQuantity,props.MaxQuantity]);

  return (
    <div>
    <Dropdown onSelect={dropdownOnSelect} className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true" childBsPrefix="dropdownConfigs" className="dropdownConfigs">
      Quantity {dropdownItem}
    </Dropdown.Toggle>
    <Dropdown.Menu className="menuItems">
      {dropdownItemList}
    </Dropdown.Menu>
  </Dropdown>
  </div>
  );
}

export default DropDown;
