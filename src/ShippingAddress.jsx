import ShippingAddressComponent from "./Components/ShippingAddressComponent";
import { useLocation } from "react-router-dom";



function ShippingAddress(props){
    const location = useLocation();


    return(<ShippingAddressComponent />);
}

export default ShippingAddress;