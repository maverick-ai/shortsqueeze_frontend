import React, { useEffect, useState, useCallback } from "react";
import serverBaseURL from "./constants";

function ListProducts(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFinished, setIsLoadingFinished] = useState(false);

  const fetchListOfProduct = useCallback(async () => {
    setIsLoading(true);
    try {
        
        console.log(".......................................response ");
      const response = await fetch("http://127.0.0.1:8000/api/listproducts/", {
        headers: {
          "Authorization": "Token 623ab0169fccd7d3a17ff3f4affc7c001d8e17f5",
          "Accept": "*/*",
          "Connection": "keep-alive",
        },
      });
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      console.log(".......................................response ");
      const data = await response.json();
      console.log(data);
    } catch (error) {}
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fetchListOfProduct();
  }, [ fetchListOfProduct]);

  return <div></div>;
}

export default ListProducts;
