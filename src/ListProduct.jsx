import React, { useEffect, useState, useCallback } from "react";
import ListProductComponent from "./Components/ListProductComponent";
import serverBaseURL from "./constants";
import "./ListProduct.css";

function ListProducts(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const fetchListOfProduct = useCallback(async () => {
    try {
      const response = await fetch(serverBaseURL+"api/listproducts/", {
        headers: {
          "Authorization": "Token 623ab0169fccd7d3a17ff3f4affc7c001d8e17f5",
          "Accept": "*/*",
          "Connection": "keep-alive",
        },
      });
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();
      console.log(data.results);
      const loadedProducts = [];

      const transformedProductrs=data.results.map((item)=>{
       return <ListProductComponent key={item.product_id} title={item.title} description={item.description}  />
      });

      setProduct(transformedProductrs);
    } catch (error) {}
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fetchListOfProduct();
  }, [ fetchListOfProduct]);

  return <div className="MainDiv">{product}</div>;
}

export default ListProducts;
