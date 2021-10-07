import React, { useEffect, useState, useCallback } from "react";
import ListProductComponent from "./Components/ListProductComponent";
import LoadingImage from "./Loading";
import serverBaseURL from "./constants";
import "./ListProduct.css";

function ListProducts(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const fetchListOfProduct = useCallback(async () => {
    try {
      const response = await fetch(serverBaseURL + "api/listproducts/", {
        headers: {
          Authorization: "Token 623ab0169fccd7d3a17ff3f4affc7c001d8e17f5",
          Accept: "*/*",
          Connection: "keep-alive",
        },
      });
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();

      const transformedProductrs = data.results.map((item) => {
        return (
          <ListProductComponent
            key={item.product_id}
            title={item.title}
            description={item.description}
            price={item.price}
            currency={item.currency}
            crypto={item.crypto}
            priceInCrypto={item.priceInCrypto}
          />
        );
      });

      setProduct(transformedProductrs);
      setIsLoading(false);
    } catch (error) {}
    
  }, []);

  useEffect(() => {
    fetchListOfProduct();
  }, [fetchListOfProduct]);

  return (
    <div className={`MainDiv ${isLoading===false?"PaddingTopDiv":""}`}>
      {isLoading === false ? product : <LoadingImage Show={!isLoading} />}
      {/* <LoadingImage Show={false} /> */}
    </div>
  );
}

export default ListProducts;
