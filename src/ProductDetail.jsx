import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import LoadingImage from "./Loading";
import {ProductDetailBaseURL} from "./constants";
import ProductDetailComponent from "./Components/ProductDetailComponent";


function ProductsDetail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const params=useParams();

  const fetchListOfProduct = useCallback(async () => {
    try {
      const response = await fetch(ProductDetailBaseURL+params.productId+"/", {
        headers: {
          Accept: "*/*",
          Connection: "keep-alive",
        },
      });
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();

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
    
  }, [params.productId]);

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
