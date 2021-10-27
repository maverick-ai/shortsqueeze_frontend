import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import LoadingImage from "./Loading";
import {serverBaseURL} from "./constants";
import ProductDetailComponent from "./Components/ProductDetailComponent";


function ProductsDetail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const location = useLocation();

  const fetchListOfProduct = useCallback(async () => {
    try {
      // const producID=location.state.productID;
      const response = await fetch(serverBaseURL + "api/product/1e889563-0eb2-4dab-8c99-2ea697e9d8be/", {
        headers: {
          Accept: "*/*",
          Connection: "keep-alive",
        },
      });
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();
      console.log("Inside fetch .................");
      console.log(data["productImages"]);

      setProduct(<ProductDetailComponent
      key={data["product_id"]}
        ItemNumber={data["productImages"].length}
        ImagesItems={data["productImages"]}
        title={data["title"]}
        description={data.description}
        price={data.price}
        currency={data.currency}
        crypto={data.crypto}
        priceInCrypto={data.priceInCrypto}
        MinQuantity={data.minQunatity}
        MaxQuantity={data.maxQunatity}
        Hashtags={data.hashatgs}
        OutOfStock={data.outOfStock}
        Category={data.category_product}  
        SubCategory={data.subcategory_product}
        ArtistFirstName={data.artist_first_name}
        ArtistLastName={data.artist_last_name}
        ArtistStory={data.story}
        ProductID={data.product_id}
      />);

      setIsLoading(false);
    } catch (error) {}
    
  }, []);

  useEffect(() => {
    fetchListOfProduct();
  }, [fetchListOfProduct]);

  return (
    <div className={`MainDiv ${isLoading===false?"PaddingTopDiv":""}`}>
      {isLoading === false ? product : <LoadingImage Show={!isLoading} />}
    </div>
  );
}

export default ProductsDetail;
