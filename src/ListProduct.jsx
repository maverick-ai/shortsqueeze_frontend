import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import ListProductComponent from "./Components/ListProductComponent";
import { cartActions } from "./Store/AddToCartSlice";
import LoadingImage from "./Loading";
import {ListProductsURL,Host,IPInfoURL} from "./constants";
import "./ListProduct.css";

function ListProducts(props) {
  const dispatch = useDispatch();
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
      const IpInfo = await fetch(IPInfoURL);
      const IPdata = await IpInfo.json();
      const transformedProductrs = data.results.map((item) => {
        const CryptoPriceObject=(item.priceForProduct).filter((price)=>{
          return price.IsPriceCrpyto===true});
        const INRPriceObject=(item.priceForProduct).filter((price)=>{
          return price.priceCurrency==="INR"});
        const USDPriceObject=(item.priceForProduct).filter((price)=>price.priceCurrency==="USD");

        if(IPdata.currency==="INR"){
          dispatch(cartActions.setCurrency({ traditionalCurrency:INRPriceObject[0].priceCurrency,cryptoCurrency:CryptoPriceObject[0].priceCurrency,}));
          return (
            <ListProductComponent
              key={item.product_id}
              ProductID={item.product_id}
              title={item.title}
              description={item.description}
              price={INRPriceObject[0].price}
              imagesOfProduct={item.productImages}
              currency={INRPriceObject[0].priceCurrency}
              crypto={CryptoPriceObject[0].priceCurrency}
              priceInCrypto={CryptoPriceObject[0].price}
              ProductID={item.product_id}
              MaxQuantity={item.maxQunatity}
              MinQuantity={item.minQunatity}
            />
          );
        }
        else{
          dispatch(cartActions.setCurrency({ traditionalCurrency:USDPriceObject[0].priceCurrency,cryptoCurrency:CryptoPriceObject[0].priceCurrency,}));
          return (
            <ListProductComponent
              key={item.product_id}
              title={item.title}
              description={item.description}
              price={USDPriceObject[0].price}
              imagesOfProduct={item.productImages}
              currency={USDPriceObject[0].priceCurrency}
              crypto={CryptoPriceObject[0].priceCurrency}
              priceInCrypto={CryptoPriceObject[0].price}
              ProductID={item.product_id}
              MaxQuantity={item.maxQunatity}
              MinQuantity={item.minQunatity}
            />
          );
        }
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
