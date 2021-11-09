import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import LoadingImage from "./Loading";
import { ProductDetailBaseURL,IPInfoURL } from "./constants";
import ProductDetailComponent from "./Components/ProductDetailComponent";

function ProductsDetail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const params = useParams();

  const fetchListOfProduct = useCallback(async () => {
    try {
      const response = await fetch(
        ProductDetailBaseURL + params.productId + "/",
        {
          headers: {
            Accept: "*/*",
            Connection: "keep-alive",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();
      const IpInfo = await fetch(IPInfoURL);
      const IPdata = await IpInfo.json();

      const CryptoPriceObject = data.priceForProduct.filter((price) => {
        return price.IsPriceCrpyto === true;
      });
      const INRPriceObject = data.priceForProduct.filter((price) => {
        return price.priceCurrency === "INR";
      });
      const USDPriceObject = data.priceForProduct.filter(
        (price) => price.priceCurrency === "USD"
      );

      if (IPdata.currency === "INR") {
        setProduct(
          <ProductDetailComponent
            key={data["product_id"]}
            ItemNumber={data["productImages"].length}
            ImagesItems={data["productImages"]}
            title={data["title"]}
            description={data.description}
            price={INRPriceObject[0].price}
            currency={INRPriceObject[0].priceCurrency}
            crypto={CryptoPriceObject[0].priceCurrency}
            priceInCrypto={CryptoPriceObject[0].price}
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
            ArtistImage={data.artistImage}
          />
        );
      } else {
        setProduct(
          <ProductDetailComponent
            key={data["product_id"]}
            ItemNumber={data["productImages"].length}
            ImagesItems={data["productImages"]}
            title={data["title"]}
            description={data.description}
            price={USDPriceObject[0].price}
            currency={USDPriceObject[0].priceCurrency}
            crypto={CryptoPriceObject[0].priceCurrency}
            priceInCrypto={CryptoPriceObject[0].price}
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
          />
        );
      }

      setIsLoading(false);
    } catch (error) {}
  }, [params.productId]);

  useEffect(() => {
    fetchListOfProduct();
  }, [fetchListOfProduct]);

  return (
    <div className={`MainDiv ${isLoading === false ? "PaddingTopDiv" : ""}`}>
      {isLoading === false ? product : <LoadingImage Show={!isLoading} />}
    </div>
  );
}

export default ProductsDetail;
