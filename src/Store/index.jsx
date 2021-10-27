import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./AddToCartSlice";
import { ShippingAddressSlice } from "./ShippingAddressSlice";
import { BillingAddressSlice } from "./BillingAddressSlice";
import {ETHAccountSlice} from "./ETHAccountSlice";
import {NFTAccountNumberSlice} from "./NFTAccountSlice";
import {UserTokenSlice} from "./UserTokenSlice";
import {PaymentOptionSlice} from "./PaymentOptionSlice";
import {DateChangeSlice} from "./DateChangeSlice";


const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    shippingAddress: ShippingAddressSlice.reducer,
    billingAddress: BillingAddressSlice.reducer,
    ETHAccount:ETHAccountSlice.reducer,
    NFTAccount:NFTAccountNumberSlice.reducer,
    userToken:UserTokenSlice.reducer,
    paymentOption:PaymentOptionSlice.reducer,
    date:DateChangeSlice.reducer,
  },
});
export default store;
