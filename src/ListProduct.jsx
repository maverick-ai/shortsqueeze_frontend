import React, { useEffect, useState, useCallback } from "react";
import ListProductComponent from "./Components/ListProductComponent";
import LoadingImage from "./Loading";
import {ListProductsURL,Host} from "./constants";
import "./ListProduct.css";

function ListProducts(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const fetchListOfProduct = useCallback(async () => {
    try {
      const response = await fetch(ListProductsURL, {
        headers: {
          'Content-Type': 'application/json',
          'Accept':'*/*',
          'Accept-Encoding':'gzip, deflate, br',
          'Connection': 'keep-alive',
          'Host':Host
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
            imagesOfProduct={item.productImages}
            currency={item.currency}
            crypto={item.crypto}
            priceInCrypto={item.priceInCrypto}
            ProductID={item.product_id}
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
