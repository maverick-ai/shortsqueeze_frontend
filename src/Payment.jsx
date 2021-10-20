import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Payment(){
    const Cart = useSelector((state) => state.cart);
    const ShippingAddress = useSelector((state) => state.shippingAddress);
    const BillingAddress = useSelector((state) => state.billingAddress);
    const[rzrConfig,setrzrConfig]=useState({});

    async function fetchRZROrder(){

    }

    useEffect(()=>{
        fetchRZROrder()
    },[]);

    return(<div></div>);
}
export default Payment;