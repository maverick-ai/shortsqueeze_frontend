import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./AddToCartSlice";
import { ShippingAddressSlice } from "./ShippingAddressSlice";
import { BillingAddressSlice } from "./BillingAddressSlice";
import {ETHAccountSlice} from "./ETHAccountSlice";
import {NFTAccountNumberSlice} from "./NFTAccountSlice";
import {UserTokenSlice} from "./UserTokenSlice";
import {PaymentOptionSlice} from "./PaymentOptionSlice";


const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    shippingAddress: ShippingAddressSlice.reducer,
    billingAddress: BillingAddressSlice.reducer,
    ETHAccount:ETHAccountSlice.reducer,
    NFTAccount:NFTAccountNumberSlice.reducer,
    userToken:UserTokenSlice.reducer,
    paymentOption:PaymentOptionSlice.reducer,
  },
});
export default store;
