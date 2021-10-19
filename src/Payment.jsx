import { useState } from "react";
import { useEffect } from "react";

function Payment(){
    const[rzrConfig,setrzrConfig]=useState({});

    async function fetchRZROrder(){

    }

    useEffect(()=>{
        fetchRZROrder()
    },[]);
}
export default Payment;